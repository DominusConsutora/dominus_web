'use client'

import { useEffect, useMemo, useState } from 'react'

type PopupVideo = {
  src: string
  title: string
}

function getVideoTitle(trigger: HTMLElement) {
  return (
    trigger.getAttribute('aria-label') ||
    trigger.getAttribute('title') ||
    trigger.textContent?.trim() ||
    'Video'
  )
}

function isFileVideo(src: string) {
  const cleanSrc = src.split('?')[0].split('#')[0].toLowerCase()
  return /\.(mp4|webm|ogg|ogv|mov)$/.test(cleanSrc)
}

function toEmbedUrl(src: string) {
  try {
    const url = new URL(src, window.location.origin)
    const host = url.hostname.replace(/^www\./, '')

    if (host === 'youtu.be') {
      const id = url.pathname.split('/').filter(Boolean)[0]
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : src
    }

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      const watchId = url.searchParams.get('v')
      if (watchId) {
        return `https://www.youtube.com/embed/${watchId}?autoplay=1&rel=0`
      }

      const parts = url.pathname.split('/').filter(Boolean)
      const embedIndex = parts.findIndex((part) => part === 'embed')
      const shortsIndex = parts.findIndex((part) => part === 'shorts')
      const id = parts[embedIndex + 1] || parts[shortsIndex + 1]

      return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : src
    }

    if (host === 'vimeo.com' || host === 'player.vimeo.com') {
      const id = url.pathname.split('/').filter(Boolean).pop()
      return id ? `https://player.vimeo.com/video/${id}?autoplay=1` : src
    }

    return url.href
  } catch {
    return src
  }
}

export default function ReactVideoPopup() {
  const [video, setVideo] = useState<PopupVideo | null>(null)
  const embedUrl = useMemo(() => (video ? toEmbedUrl(video.src) : ''), [video])

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target

      if (!(target instanceof Element)) return

      const trigger = target.closest<HTMLAnchorElement>('a.popup-video')
      const href = trigger?.getAttribute('href')

      if (!trigger || !href) return

      event.preventDefault()
      event.stopPropagation()

      setVideo({
        src: href,
        title: getVideoTitle(trigger),
      })
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [])

  useEffect(() => {
    if (!video) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setVideo(null)
      }
    }

    document.body.classList.add('react-video-popup-open')
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('react-video-popup-open')
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [video])

  if (!video) return null

  const fileVideo = isFileVideo(video.src)

  return (
    <div
      className="react-video-popup"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      onClick={() => setVideo(null)}
    >
      <div className="react-video-popup__panel" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="react-video-popup__close"
          aria-label="Close video"
          onClick={() => setVideo(null)}
        >
          &times;
        </button>
        <div className="react-video-popup__frame">
          {fileVideo ? (
            <video src={video.src} controls autoPlay playsInline />
          ) : (
            <iframe
              src={embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  )
}
