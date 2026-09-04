"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getSortedPosts } from "../../../data/blogPosts";
import BlogCard from "../blog/_components/BlogCard";

/**
 * Home · "Últimas notas" — muestra los 3 posts más recientes del blog.
 * Data-driven desde src/data/blogPosts.ts, estética DOMINUS (BlogCard).
 * Textos del encabezado desde `blogPage.home`.
 */
function BlogOne() {
    const t = useTranslations("blogPage");
    const posts = getSortedPosts().slice(0, 3);

    return (
        <div className="blog-area tmp-section-gapBottom dominus-blog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="subtitle-text">{t("home.eyebrow")}</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700">{t("home.title")}</h2>
                            <p className="description b1">{t("home.description")}</p>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt--10">
                    {posts.map((post) => (
                        <div className="col-lg-4 col-md-6 col-12" key={post.slug}>
                            <BlogCard post={post} />
                        </div>
                    ))}
                </div>
                <div className="row mt--40">
                    <div className="col-lg-12 text-center">
                        <Link className="tmp-btn btn-large round" href="/blog">
                            <span>{t("home.cta")}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogOne;
