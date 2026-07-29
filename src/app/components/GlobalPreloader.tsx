"use client";

import { useEffect, useState, type CSSProperties } from "react";

const HIDE_DELAY_MS = 350;

export default function GlobalPreloader() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    let removeTimer: number | undefined;

    const hidePreloader = () => {
      setHiding(true);
      removeTimer = window.setTimeout(() => {
        setVisible(false);
      }, HIDE_DELAY_MS);
    };

    if (document.readyState === "complete") {
      hidePreloader();
    } else {
      window.addEventListener("load", hidePreloader, { once: true });
    }

    return () => {
      window.removeEventListener("load", hidePreloader);
      if (removeTimer) {
        window.clearTimeout(removeTimer);
      }
    };
  }, []);

  if (!visible) return null;

  const style: CSSProperties | undefined = hiding
    ? {
        opacity: 0,
        visibility: "hidden",
        transition: `opacity ${HIDE_DELAY_MS}ms ease, visibility ${HIDE_DELAY_MS}ms ease`,
      }
    : undefined;

  return (
    <div id="inverweb-load" style={style}>
      <span className="loader"></span>
    </div>
  );
}
