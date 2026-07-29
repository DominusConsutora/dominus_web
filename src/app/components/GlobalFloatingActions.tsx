"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const SCROLL_TRIGGER = 100;
const MAX_PROGRESS_HEIGHT = 100;

export default function GlobalFloatingActions() {
  const pathname = usePathname();
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const floatTextRef = useRef<HTMLDivElement>(null);
  const isShownRef = useRef(false);

  useEffect(() => {
    let frameId = 0;

    const updateFloatingActions = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = pageHeight > 0 ? scrollTop / pageHeight : 0;
      const isShown = scrollTop > SCROLL_TRIGGER;
      const progressScale = Math.min(Math.max(progress, 0), 1);

      if (isShownRef.current !== isShown) {
        isShownRef.current = isShown;

        scrollbarRef.current?.classList.toggle("show", isShown);
        scrollbarRef.current?.classList.toggle("hide", !isShown);
        floatTextRef.current?.classList.toggle("show", isShown);
        floatTextRef.current?.classList.toggle("hide", !isShown);
      }

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleY(${progressScale})`;
      }
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateFloatingActions);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [pathname]);

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      <div
        className="scrollbar-v show-on-scroll hide"
        ref={scrollbarRef}
        role="button"
        tabIndex={0}
        aria-label="Scroll to top"
        onClick={scrollToTop}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            scrollToTop();
          }
        }}
      >
        <div className="scrollbar-v-progress" ref={progressRef} />
      </div>

      <div className="float-text show-on-scroll hide" ref={floatTextRef}>
        <span>
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              scrollToTop();
            }}
          >
            Scroll to top
          </a>
        </span>
      </div>
    </>
  );
}
