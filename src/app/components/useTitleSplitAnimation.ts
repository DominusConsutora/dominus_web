"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useTitleSplitAnimation(selector: string = ".tmp-title-split") {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(
      (element) => element.dataset.titleSplitReady !== "true",
    );
    if (elements.length === 0) return;

    const splits: SplitType[] = [];
    const tweens: gsap.core.Tween[] = [];
    let refreshFrame = 0;

    elements.forEach((element) => {
      try {
        const splitText = new SplitType(element, { types: "chars,words" });
        const chars = splitText.chars || [];
        splits.push(splitText);
        element.dataset.titleSplitReady = "true";

        if (chars.length === 0) return;

        const tween = gsap.from(chars, {
          duration: 1,
          delay: 0.1,
          x: 20,
          autoAlpha: 0,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 85%" },
        });

        tweens.push(tween);
      } catch (error) {
        console.error("SplitText animation error:", error);
      }
    });

    refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(refreshFrame);
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
      splits.forEach((split) => split.revert());
      elements.forEach((element) => {
        delete element.dataset.titleSplitReady;
      });
    };
  }, [selector]);
}
