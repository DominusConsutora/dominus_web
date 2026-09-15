"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useTitleSplitAnimation } from "../../../components/useTitleSplitAnimation";
import { blogAxes, getSortedPosts, type BlogAxis } from "../../../../data/blogPosts";
import BlogCard from "./BlogCard";

/**
 * Blog · Listado completo de notas en `/blog`.
 * Ordena por fecha (más reciente primero) y reusa `BlogCard`.
 * Textos del encabezado desde `blogPage.intro`.
 */
export default function BlogIndexGrid() {
    const t = useTranslations("blogPage.intro");
    const tFilters = useTranslations("blogPage.filters");
    const posts = getSortedPosts();
    const [activeAxis, setActiveAxis] = useState<BlogAxis | null>(null);
    const visiblePosts = activeAxis
        ? posts.filter((post) => post.axis === activeAxis)
        : posts;
    useTitleSplitAnimation();

    return (
        <div className="blog-area tmp-section-gap dominus-blog">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 text-center">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10 justify-content-center">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="subtitle-text">{t("eyebrow")}</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">{t("title")}</h2>
                            <p className="description b1 tmp-title-split-p">{t("description")}</p>
                        </div>
                    </div>
                </div>
                <div className="dominus-blog__filters" aria-label={tFilters("label")}>
                    <span className="dominus-blog__filters-label">{tFilters("label")}</span>
                    <div className="dominus-blog__filter-list" role="group" aria-label={tFilters("label")}>
                        <button
                            className={`dominus-blog__filter${activeAxis === null ? " is-active" : ""}`}
                            type="button"
                            aria-pressed={activeAxis === null}
                            onClick={() => setActiveAxis(null)}
                        >
                            {tFilters("all")}
                        </button>
                        {blogAxes.map((axis) => (
                            <button
                                className={`dominus-blog__filter${activeAxis === axis ? " is-active" : ""}`}
                                type="button"
                                key={axis}
                                aria-pressed={activeAxis === axis}
                                onClick={() => setActiveAxis(axis)}
                            >
                                {tFilters(`axes.${axis}`)}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="row g-4 mt--30">
                    {visiblePosts.map((post) => (
                        <div className="col-lg-4 col-md-6 col-12" key={post.slug}>
                            <BlogCard post={post} />
                        </div>
                    ))}
                </div>
                {visiblePosts.length === 0 && (
                    <p className="dominus-blog__empty" role="status">
                        {tFilters("empty")}
                    </p>
                )}
            </div>
        </div>
    );
}
