import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import HeaderTwo from "../../_components/HeaderTwo";
import FooterTwo from "../../_components/FooterTwo";
import CtaOne from "../../_components/CtaOne";
import HeroBlogDetail from "./_components/HeroBlogDetail";
import BlogDetailBody from "./_components/BlogDetailBody";
import { routing } from "../../../../i18n/routing";
import { getBlogPost, getBlogSlugs } from "../../../../data/blogPosts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dominuslogistica.com";

export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        getBlogSlugs().map((slug) => ({ locale, slug })),
    );
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
    const { locale, slug } = await params;
    const post = getBlogPost(slug);
    if (!post) return {};
    const lang = locale === "en" ? "en" : "es";

    return {
        title: post.title[lang],
        description: post.excerpt[lang],
        alternates: {
            canonical: `/${lang}/blog/${slug}`,
        },
        openGraph: {
            type: "article",
            title: post.title[lang],
            description: post.excerpt[lang],
            url: `${siteUrl}/${lang}/blog/${slug}`,
            images: [{ url: post.heroImage }],
        },
    };
}

/**
 * Página dinámica `/blog/[slug]` — Detalle de nota.
 * Inyecta el schema BlogPosting en el HTML inicial (server) para SEO/GEO.
 */
export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    const post = getBlogPost(slug);
    if (!post) {
        notFound();
    }
    setRequestLocale(locale);
    const lang = locale === "en" ? "en" : "es";

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title[lang],
        description: post.excerpt[lang],
        image: `${siteUrl}${post.heroImage}`,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: lang,
        keywords: post.tags.join(", "),
        articleSection: post.category[lang],
        author: {
            "@type": "Person",
            name: post.author,
            url: `${siteUrl}/${lang}/nosotros/diego-salom`,
        },
        publisher: {
            "@type": "Organization",
            name: "DOMINUS",
            logo: {
                "@type": "ImageObject",
                url: `${siteUrl}/logo_dark.png`,
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${siteUrl}/${lang}/blog/${slug}`,
        },
    };

    return (
        <main className="page-wrapper">
            <HeaderTwo activeNav="blog" />
            <HeroBlogDetail slug={slug} />
            <BlogDetailBody slug={slug} />
            <CtaOne
                namespace="blogPage.finalCta"
                primaryHref="/contacto"
                secondaryHref="/blog"
            />
            <FooterTwo />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
        </main>
    );
}
