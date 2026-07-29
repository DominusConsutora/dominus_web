"use client";

import { useEffect } from "react";

/** Bootstrap 5 JS (accordions, tabs, modals, dropdowns). */
export default function BootstrapClient() {
  useEffect(() => {
    void import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    const handleHeaderTopClose = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      if (!target.closest(".bgsection-activation")) {
        return;
      }

      document.querySelectorAll(".header-top-news, .header-top-news-2").forEach((topbar) => {
        topbar.classList.add("deactive");
      });
    };

    document.addEventListener("click", handleHeaderTopClose);
    return () => document.removeEventListener("click", handleHeaderTopClose);
  }, []);

  return null;
}
