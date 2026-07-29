'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function VideoTwo() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let overlayTween: gsap.core.Tween | undefined;

    if (overlayRef.current) {
      overlayTween = gsap.to(overlayRef.current, {
        duration: 1,
        scaleX: 0,
        transformOrigin: 'center center',
        ease: 'power1.out',
        scrollTrigger: {
          trigger: overlayRef.current,
          scrub: 1,
          start: 'top 65%',
          end: '+=300',
        },
      });
    }

    return () => {
      overlayTween?.scrollTrigger?.kill();
      overlayTween?.kill();
    };
  }, []);

  return (
    <>
      {/* tmp video section start */}
      <div className="tmp-video-section-start-one tmp-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="large-video-playing grow-thumbnail-1">
                <video autoPlay muted loop playsInline preload="metadata">
                  <source src="/assets/images/video/02.mp4" type="video/mp4" />
                </video>
                <div
                  className="grow-thumbnail-1-overlay"
                  ref={overlayRef}
                  style={{ transformOrigin: 'center center' }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* tmp video section end */}
    </>
  );
}

export default VideoTwo;
