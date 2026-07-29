"use client";

import { useEffect, useRef, type RefObject } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STICKY_HEADER_OFFSET = 100;
const SCROLL_LOCK_BODY_CLASSES = [
  "tmp-header-panel-open",
  "react-video-popup-open",
  "next-light-gallery-open",
] as const;

const SCROLL_LOCK_SELECTORS = {
  "tmp-header-panel-open": [
    ".tmp-search-input-area.show",
    ".inverweb-side-bar-close.show",
    ".popup-mobile-menu.active",
  ],
  "react-video-popup-open": [".react-video-popup"],
  "next-light-gallery-open": [".next-light-gallery"],
} satisfies Record<(typeof SCROLL_LOCK_BODY_CLASSES)[number], string[]>;

function isHoverTarget(target: EventTarget | null) {
  return target instanceof Element
    ? target.closest("a, button, .cursor-pointer")
    : null;
}

function hasActiveScrollLockTarget(className: (typeof SCROLL_LOCK_BODY_CLASSES)[number]) {
  return SCROLL_LOCK_SELECTORS[className].some((selector) => document.querySelector(selector));
}

const NATIVE_SCROLL_AREAS = [
  ".mainmenu-nav",
  ".popup-mobile-menu",
  ".tmp-search-input-area",
  ".inverweb-side-bar-close",
  ".react-video-popup",
  ".next-light-gallery",
].join(", ");

function useAosController(pathname: string) {
  const initialized = useRef(false);

  useEffect(() => {
    const refreshAos = () => {
      AOS.refreshHard();
      ScrollTrigger.refresh();
    };

    if (!initialized.current) {
      AOS.init({
        duration: 800,
        offset: 80,
        once: true,
      });
      initialized.current = true;
    }

    const refreshFrame = requestAnimationFrame(() => {
      refreshAos();
    });
    const delayedRefreshes = [120, 450, 900].map((delay) => window.setTimeout(refreshAos, delay));
    const pendingImages = Array.from(document.images).filter((image) => !image.complete);
    const handleAssetReady = () => refreshAos();

    pendingImages.forEach((image) => {
      image.addEventListener("load", handleAssetReady, { once: true });
      image.addEventListener("error", handleAssetReady, { once: true });
    });

    if (document.readyState !== "complete") {
      window.addEventListener("load", handleAssetReady, { once: true });
    }

    return () => {
      cancelAnimationFrame(refreshFrame);
      delayedRefreshes.forEach((timeoutId) => window.clearTimeout(timeoutId));
      pendingImages.forEach((image) => {
        image.removeEventListener("load", handleAssetReady);
        image.removeEventListener("error", handleAssetReady);
      });
      window.removeEventListener("load", handleAssetReady);
    };
  }, [pathname]);
}

function useLenisController(pathname: string) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      lerp: 0.08,
      duration: 1.15,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      prevent: (node) => node.closest(NATIVE_SCROLL_AREAS) !== null,
      anchors: {
        offset: -STICKY_HEADER_OFFSET,
      },
    });

    let lockSyncFrame = 0;
    let refreshFrame = 0;

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    const syncLenisSize = () => {
      lenis.resize();
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refreshInit", syncLenisSize);

    let jarallaxModule: typeof import("jarallax") | null = null;
    import("jarallax").then((module) => {
      jarallaxModule = module;
    });

    const syncJarallax = (method: "onScroll" | "onResize") => {
      if (!jarallaxModule) return;
      const nodes = document.querySelectorAll(".jarallax");
      if (nodes.length) jarallaxModule.jarallax(nodes, method);
    };

    lenis.on("scroll", () => syncJarallax("onScroll"));

    const syncScrollLockNow = () => {
      const shouldLockScroll = SCROLL_LOCK_BODY_CLASSES.some((className) => {
        const hasActiveTarget = hasActiveScrollLockTarget(className);

        if (!hasActiveTarget && document.body.classList.contains(className)) {
          document.body.classList.remove(className);
        }

        return hasActiveTarget;
      });

      document.documentElement.classList.toggle("scroll-locked", shouldLockScroll);

      if (shouldLockScroll) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    const scheduleScrollLockSync = () => {
      if (lockSyncFrame) return;

      lockSyncFrame = requestAnimationFrame(() => {
        lockSyncFrame = 0;
        syncScrollLockNow();
      });
    };

    const bodyClassObserver = new MutationObserver(scheduleScrollLockSync);
    bodyClassObserver.observe(document.body, {
      attributeFilter: ["class"],
      attributes: true,
      childList: true,
      subtree: true,
    });
    syncScrollLockNow();

    refreshFrame = requestAnimationFrame(() => {
      lenis.resize();
      ScrollTrigger.refresh();
      syncJarallax("onResize");
    });

    if (window.location.hash) {
      requestAnimationFrame(() => {
        lenis.scrollTo(window.location.hash, { offset: -STICKY_HEADER_OFFSET, immediate: true });
      });
    }

    return () => {
      cancelAnimationFrame(lockSyncFrame);
      cancelAnimationFrame(refreshFrame);
      bodyClassObserver.disconnect();
      ScrollTrigger.removeEventListener("refreshInit", syncLenisSize);
      gsap.ticker.remove(raf);
      lenis.destroy();
      document.documentElement.classList.remove("scroll-locked");
    };
  }, [pathname]);
}

function useTmpHoverController() {
  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const element = target?.closest<HTMLElement>(".tmponhover");

      if (!element) return;

      const rect = element.getBoundingClientRect();
      element.style.setProperty("--x", `${event.clientX - rect.left}px`);
      element.style.setProperty("--y", `${event.clientY - rect.top}px`);
    };

    document.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);
}

function useFloatingImagesController(pathname: string) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".images-left-right-float"));

    if (!elements.length) {
      return;
    }

    const tweens = elements.map((element) => {
      gsap.killTweensOf(element);

      return gsap.fromTo(
        element,
        { x: 0 },
        {
          x: -150,
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 4,
          },
          ease: "none",
        },
      );
    });

    ScrollTrigger.refresh();

    return () => {
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
    };
  }, [pathname]);
}

function useCursorController(
  innerRef: RefObject<HTMLDivElement | null>,
  outerRef: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const inner = innerRef.current;
    const outer = outerRef.current;

    if (!inner || !outer) return;

    const moveCursor = (event: MouseEvent) => {
      const transform = `translate(${event.clientX}px, ${event.clientY}px)`;

      inner.style.transform = transform;
      outer.style.transform = transform;
    };

    const addHover = (event: MouseEvent) => {
      if (!isHoverTarget(event.target)) return;

      inner.classList.add("cursor-hover");
      outer.classList.add("cursor-hover");
    };

    const removeHover = (event: MouseEvent) => {
      const leavingTarget = isHoverTarget(event.target);
      const enteringTarget = isHoverTarget(event.relatedTarget);

      if (!leavingTarget || enteringTarget) return;

      inner.classList.remove("cursor-hover");
      outer.classList.remove("cursor-hover");
    };

    inner.style.visibility = "visible";
    outer.style.visibility = "visible";

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseover", addHover);
    document.body.addEventListener("mouseout", removeHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseover", addHover);
      document.body.removeEventListener("mouseout", removeHover);
    };
  }, [innerRef, outerRef]);
}

export default function AnimationController() {
  const pathname = usePathname();
  const innerRef = useRef<HTMLDivElement | null>(null);
  const outerRef = useRef<HTMLDivElement | null>(null);

  useAosController(pathname);
  useLenisController(pathname);
  useTmpHoverController();
  useFloatingImagesController(pathname);
  useCursorController(innerRef, outerRef);

  return (
    <>
      <div ref={innerRef} className="mouse-cursor cursor-inner" />
      <div ref={outerRef} className="mouse-cursor cursor-outer" />
    </>
  );
}
