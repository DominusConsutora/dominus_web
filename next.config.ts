import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Static export is intentionally disabled for now because the app uses
  // locale middleware and dynamic route generation, which are not compatible
  // with a pure static export in its current architecture.
};

export default withNextIntl(nextConfig);
