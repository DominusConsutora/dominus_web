import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DOMINUS",
    short_name: "DOMINUS",
    description:
      "Consultoría especializada en desarrollo portuario, gobernanza, transformación digital y sostenibilidad.",
    start_url: "/es",
    display: "standalone",
    background_color: "#071B2F",
    theme_color: "#0F2F4D",
    icons: [
      {
        src: "/assets/images/favicon.png",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}
