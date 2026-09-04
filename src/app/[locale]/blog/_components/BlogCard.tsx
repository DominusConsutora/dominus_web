"use client";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import type { BlogPost, Locale } from "../../../../data/blogPosts";

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    const t = useTranslations("blogPage");
    const locale = useLocale() as Locale;
    const href = `/blog/${post.slug}`;

    const formattedDate = new Intl.DateTimeFormat(
        locale === "en" ? "en-US" : "es-AR",
        { day: "2-digit", month: "short", year: "numeric" },
    ).format(new Date(post.date));

    return (
        <article className="dominus-blog-card">
            <Link className="dominus-blog-card__thumb" href={href} aria-label={post.title[locale]}>
                <img loading="lazy" src={post.heroImage} alt={post.title[locale]} />
                <span className="dominus-blog-card__cat">{post.category[locale]}</span>
            </Link>
            <div className="dominus-blog-card__body">
                <ul className="dominus-blog-card__meta">
                    <li>
                        <i className="feather-user" aria-hidden="true" />
                        {post.author}
                    </li>
                    <li>{formattedDate}</li>
                    <li>
                        <i className="feather-clock" aria-hidden="true" />
                        {t("meta.readingTime", { minutes: post.readingMinutes })}
                    </li>
                </ul>
                <h3 className="dominus-blog-card__title">
                    <Link href={href}>{post.title[locale]}</Link>
                </h3>
                <p className="dominus-blog-card__excerpt">{post.excerpt[locale]}</p>
                <Link className="dominus-blog-card__link" href={href}>
                    {t("list.readMore")}
                    <i className="feather-arrow-right" aria-hidden="true" />
                </Link>
            </div>
        </article>
    );
}
