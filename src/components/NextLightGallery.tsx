"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
};

const gallerySelector = "#animated-lightbox, #animated-lightbox2, #animated-lightbox3";

function isImageUrl(url: string) {
  return /\.(avif|gif|jpe?g|png|svg|webp)(\?.*)?$/i.test(url);
}

function getImageSrc(image: HTMLImageElement) {
  const anchor = image.closest("a[href]");
  const linkSrc = anchor?.getAttribute("href") || "";
  const dataSrc = image.closest<HTMLElement>("[data-src]")?.dataset.src || "";

  if (dataSrc) {
    return dataSrc;
  }

  if (linkSrc && (linkSrc.startsWith("/") || isImageUrl(linkSrc))) {
    return linkSrc;
  }

  return image.currentSrc || image.src;
}

function collectGalleryItems(gallery: Element) {
  const images = Array.from(gallery.querySelectorAll<HTMLImageElement>("img"));

  return images
    .map((image) => ({
      src: getImageSrc(image),
      alt: image.alt || "Gallery image",
    }))
    .filter((item, index, items) => item.src && items.findIndex((entry) => entry.src === item.src) === index);
}

function NextLightGallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showThumbs, setShowThumbs] = useState(false);

  const isOpen = items.length > 0;
  const activeItem = items[activeIndex];

  const close = useCallback(() => {
    setItems([]);
    setActiveIndex(0);
    setShowThumbs(false);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  }, [items.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === items.length - 1 ? 0 : current + 1));
  }, [items.length]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const gallery = target?.closest(gallerySelector);

      if (!gallery) {
        return;
      }

      const clickedImage = target?.closest("a, .tmp-gallery, figure, .thumbnail")?.querySelector("img") || target?.closest("img");

      if (!(clickedImage instanceof HTMLImageElement)) {
        return;
      }

      const galleryItems = collectGalleryItems(gallery);
      const clickedSrc = getImageSrc(clickedImage);
      const clickedIndex = galleryItems.findIndex((item) => item.src === clickedSrc);

      if (!galleryItems.length || clickedIndex < 0) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      setItems(galleryItems);
      setActiveIndex(clickedIndex);
      setShowThumbs(false);
    };

    document.addEventListener("click", onClick, true);

    return () => {
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.body.classList.add("next-light-gallery-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("next-light-gallery-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [close, isOpen, showNext, showPrevious]);

  const counter = useMemo(() => {
    if (!items.length) {
      return "";
    }

    return `${activeIndex + 1} / ${items.length}`;
  }, [activeIndex, items.length]);

  if (!isOpen || !activeItem) {
    return null;
  }

  return (
    <div className="next-light-gallery" role="dialog" aria-modal="true" aria-label="Image gallery" onClick={close}>
      <button className="next-light-gallery__close" type="button" aria-label="Close gallery" onClick={close}>
        <i className="feather-x" aria-hidden="true" />
      </button>

      <button
        className="next-light-gallery__nav next-light-gallery__nav--prev"
        type="button"
        aria-label="Previous image"
        onClick={(event) => {
          event.stopPropagation();
          showPrevious();
        }}
      >
        <i className="feather-chevron-left" aria-hidden="true" />
      </button>

      <div
        className="next-light-gallery__stage"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <img src={activeItem.src} alt={activeItem.alt} />
      </div>

      <button
        className="next-light-gallery__nav next-light-gallery__nav--next"
        type="button"
        aria-label="Next image"
        onClick={(event) => {
          event.stopPropagation();
          showNext();
        }}
      >
        <i className="feather-chevron-right" aria-hidden="true" />
      </button>

      <div
        className="next-light-gallery__toolbar"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <span>{counter}</span>
        <button type="button" aria-label="Toggle thumbnails" onClick={() => setShowThumbs((current) => !current)}>
          <i className="feather-grid" aria-hidden="true" />
        </button>
      </div>

      {showThumbs && (
        <div
          className="next-light-gallery__thumbs"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {items.map((item, index) => (
            <button
              className={index === activeIndex ? "is-active" : ""}
              type="button"
              aria-label={`Open image ${index + 1}`}
              key={item.src}
              onClick={() => setActiveIndex(index)}
            >
              <img src={item.src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default NextLightGallery;
