"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function OnepageBodyClass() {
  const pathname = usePathname();

  useEffect(() => {
    const isOnepage = pathname === "/onepage" || pathname?.startsWith("/onepage-");

    document.body.classList.toggle("onepage", Boolean(isOnepage));

    return () => {
      document.body.classList.remove("onepage");
    };
  }, [pathname]);

  return null;
}
