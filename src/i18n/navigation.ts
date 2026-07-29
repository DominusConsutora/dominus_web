import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Wrappers de next-intl que respetan `localePrefix: "as-needed"` y
// actualizan la cookie NEXT_LOCALE al cambiar de idioma.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
