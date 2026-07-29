"use client";

import { type ReactNode, useEffect, useRef } from "react";

type OdometerInstance = {
  update: (value: number) => void;
};

type OdometerConstructor = new (options: {
  el: HTMLElement;
  value: number;
  format: string;
  duration: number;
}) => OdometerInstance;

interface OdometerElement extends HTMLElement {
  od?: OdometerInstance;
}

function OdometerCounter({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    let cancelled = false;

    import("odometer").then((module) => {
      if (cancelled || !rootRef.current) return;

      const Odometer = module.default as OdometerConstructor;
      const elements = Array.from(
        rootRef.current.querySelectorAll<OdometerElement>(".odometer[data-count]")
      );

      if (!elements.length) return;

      const runCounter = (element: OdometerElement) => {
        if (element.classList.contains("odometer-triggered")) return;

        const value = Number(element.dataset.count);
        if (!Number.isFinite(value)) return;

        element.od?.update(value);
        element.classList.add("odometer-triggered");
      };

      elements.forEach((element) => {
        if (!element.od) {
          element.od = new Odometer({
            el: element,
            value: 0,
            format: "(,ddd)",
            duration: 2000,
          });
        }
      });

      if (!("IntersectionObserver" in window)) {
        elements.forEach(runCounter);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runCounter(entry.target as OdometerElement);
            }
          });
        },
        { threshold: 0.45 }
      );

      elements.forEach((element) => observer?.observe(element));
    });

    return () => {
      cancelled = true;
      observer?.disconnect();
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}

export default OdometerCounter;
