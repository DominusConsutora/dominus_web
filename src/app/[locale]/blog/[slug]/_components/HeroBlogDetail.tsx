"use client";
import { useLocale, useTranslations } from "next-intl";
import { useTitleSplitAnimation } from "../../../../components/useTitleSplitAnimation";
import { getBlogPost, type Locale } from "../../../../../data/blogPosts";

interface HeroBlogDetailProps {
    slug: string;
}

/**
 * Blog · Hero de la nota `/blog/[slug]`.
 * Fondo con la imagen del post + overlay navy, categoría, título y meta.
 */
export default function HeroBlogDetail({ slug }: HeroBlogDetailProps) {
    const t = useTranslations("blogPage");
    const locale = useLocale() as Locale;
    useTitleSplitAnimation();

    const post = getBlogPost(slug);
    if (!post) return null;

    const formattedDate = new Intl.DateTimeFormat(
        locale === "en" ? "en-US" : "es-AR",
        { day: "2-digit", month: "long", year: "numeric" },
    ).format(new Date(post.date));

    return (
        <div
            className="dominus-hero-bg position-relative"
            style={{
                backgroundImage: `url('${post.heroImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "480px",
                display: "flex",
                alignItems: "center",
                zIndex: 1,
            }}
        >
            <div className="dominus-hero-overlay" aria-hidden="true" />
            <div className="container" style={{ paddingTop: "140px", paddingBottom: "80px" }}>
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-9">
                        <div className="breadcrumb-inner text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10 justify-content-center">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="subtitle-text">{post.category[locale]}</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h1 className="title w-700 tmp-title-split">{post.title[locale]}</h1>
                            <ul
                                className="page-list mt--20"
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    display: "inline-flex",
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                    gap: "18px",
                                }}
                            >
                                <li>
                                    <i className="feather-user" aria-hidden="true" /> {post.author}
                                </li>
                                <li>{formattedDate}</li>
                                <li>
                                    <i className="feather-clock" aria-hidden="true" />{" "}
                                    {t("meta.readingTime", { minutes: post.readingMinutes })}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
