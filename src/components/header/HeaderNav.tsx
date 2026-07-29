"use client";

import { usePathname } from "next/navigation";
import MainNav from "./MainNav";
import OnepageNav from "./OnepageNav";

export type HeaderNavVariant = "main" | "onepage";

type HeaderNavProps = {
  homeActive?: boolean;
  variant?: HeaderNavVariant;
};

export default function HeaderNav({ homeActive = false, variant }: HeaderNavProps) {
  const pathname = usePathname();
  const inferredVariant =
    pathname === "/onepage" || pathname?.startsWith("/onepage-") ? "onepage" : "main";
  const resolvedVariant = variant ?? inferredVariant;

  return resolvedVariant === "onepage" ? <OnepageNav /> : <MainNav homeActive={homeActive} />;
}
