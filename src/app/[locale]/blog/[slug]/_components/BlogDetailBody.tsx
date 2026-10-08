"use client";
import { Link } from "../../../../../i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { getBlogPost, type Locale } from "../../../../../data/blogPosts";

interface BlogDetailBodyProps {
    slug: string;
}

/**
 * Blog · Cuerpo de la nota `/blog/[slug]`.
 * Renderiza los párrafos del post en el idioma activo, sus tags y el enlace
 * de regreso al listado. El schema BlogPosting se inyecta desde el server (page.tsx).
 */
export default function BlogDetailBody({ slug }: BlogDetailBodyProps) {
    const t = useTranslations("blogPage");
    const locale = useLocale() as Locale;

    const post = getBlogPost(slug);
    if (!post) return null;

    const sections = post.sections;

    return (
        <div className="tmp-service-details-area dominus-blog-detail-body tmp-section-gap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <article className="dominus-blog-article">
                            <p className="dominus-blog-article__lead">{post.excerpt[locale]}</p>
                            {sections
                                ? sections.map((section) => (
                                    <section className="dominus-blog-article__section" key={section.heading[locale]}>
                                        <h2>{section.heading[locale]}</h2>
                                        {section.paragraphs[locale].map((text, index) => (
                                            <p key={index} className="description b1 mb--30">
                                                {text}
                                            </p>
                                        ))}
                                    </section>
                                ))
                                : post.body[locale].map((text, index) => (
                                    <p key={index} className="description b1 mb--30">
                                        {text}
                                    </p>
                                ))}

                            <div className="dominus-blog-article__tags mt--20">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="dominus-blog-article__tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="dominus-blog-article__footer mt--40">
                                <Link className="tmp-btn btn-border round" href="/blog">
                                    <span>{t("detail.backToBlog")}</span>
                                </Link>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}
