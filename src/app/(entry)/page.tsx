import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DOMINUS | Consultora de desarrollo portuario",
  description:
    "Consultoría especializada en desarrollo portuario, gobernanza, planificación estratégica, sostenibilidad y transformación digital.",
  alternates: {
    canonical: "/es",
    languages: {
      es: "/es",
      en: "/en",
      "x-default": "/es",
    },
  },
};

export default function RootPage() {
  return (
    <main>
      <meta httpEquiv="refresh" content="0;url=/es/" />
      <h1>DOMINUS | Consultora de desarrollo portuario</h1>
      <p>
        Consultoría especializada en desarrollo portuario para autoridades y operadores.
      </p>
      <p>
        <Link href="/es/">Ir al sitio en español</Link> · <Link href="/en/">View the English site</Link>
      </p>
    </main>
  );
}
