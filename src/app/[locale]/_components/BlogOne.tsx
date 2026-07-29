'use client'
import Link from 'next/link'

import { useTitleSplitAnimation } from "../../components/useTitleSplitAnimation";

function BlogOne() {
    useTitleSplitAnimation();
    
  return (
    <>
      {/* Start Blog Area  */}
      <div className="blog-area tmp-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tmp-section-title-border text-center">
                <div className="pres-line-separator-wrapper text-center mb--10">
                  <div className="line-separator line-left" />
                  <span className="subtitle">
                    <span className="number">03</span>
                    <span className="subtitle-text">Latests News</span>
                  </span>
                  <div className="line-separator line-right" />
                </div>
                <h2
                  className="title w-700 tmp-title-split"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  Our Latests News
                </h2>
                <p
                  className="description b1"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="100"
                >
                  There are many variations of passages of Lorem Ipsum available,
                  <br />
                  but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-5 mt--10">
            <div
              className="col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <div className="tmp-card box-card-style-default tmponhover">
                <div className="inner">
                  <div className="thumbnail invers-anime">
                    <Link className="image" href="/blog/best-corporate-tips">
                      <img
                        loading="lazy"
                        className="w-100"
                        src="/assets/images/blog-grid/blog-01.jpg"
                        alt="Blog Image"
                      />
                    </Link>
                    <span className="tag-news">Business</span>
                  </div>
                  <div className="content">
                    <ul className="inversweb-meta-list">
                      <li>
                        <span>
                          <i className="feather-user" />
                        </span>
                        <Link href="#">John Deon</Link>
                      </li>
                      <li className="separator">-</li>
                      <li>15 Dec 2025</li>
                      <li className="comment-area">
                        <i className="feather-message-circle" />
                        <span>05</span>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="/blog/corporate-success-strategy">
                        How to Analyze Your Best Pages for SEO Performance
                      </Link>
                    </h4>
                    <p className="descriptiion">
                      It is an established fact that corporate success is not achieved overnight.
                    </p>
                    <div className="read-more-btn">
                      <Link className="tmp-btn btn-border" href="/blog/leadership-confidence">
                        <span>Read More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="100"
            >
              <div className="tmp-card box-card-style-default tmponhover">
                <div className="inner">
                  <div className="content">
                    <ul className="inversweb-meta-list">
                      <li>
                        <span>
                          <i className="feather-user" />
                        </span>
                        <Link href="#">Kalvin Klin</Link>
                      </li>
                      <li className="separator">-</li>
                      <li>28 Dec 2025</li>
                      <li className="comment-area">
                        <i className="feather-message-circle" />
                        <span>03</span>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="/blog/best-corporate-tips">
                        Corporate Success How to Achieve Your Goals
                      </Link>
                    </h4>
                    <p className="descriptiion">
                      Corporate success is an established fact that comes from strategic.
                    </p>
                    <div className="read-more-btn">
                      <Link className="tmp-btn btn-border" href="/blog/corporate-success-strategy">
                        <span>Read More</span>
                      </Link>
                    </div>
                  </div>
                  <div className="thumbnail invers-anime">
                    <Link className="image" href="/blog/leadership-confidence">
                      <img
                        loading="lazy"
                        className="w-100"
                        src="/assets/images/blog-grid/blog-02.jpg"
                        alt="Blog Image"
                      />
                    </Link>
                    <span className="tag-news">Development</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
            >
              <div className="tmp-card box-card-style-default tmponhover">
                <div className="inner">
                  <div className="thumbnail invers-anime">
                    <Link className="image" href="/blog/best-corporate-tips">
                      <img
                        loading="lazy"
                        className="w-100"
                        src="/assets/images/blog-grid/blog-03.jpg"
                        alt="Blog Image"
                      />
                    </Link>
                    <span className="tag-news">Technology</span>
                    <div className="video-icon">
                      <Link
                        className="tmp-btn btn-small rounded-player popup-video"
                        href="https://www.youtube.com/watch?v=4jnzf1yj48M"
                      >
                        <span>
                          <i className="feather-play" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="content">
                    <ul className="inversweb-meta-list">
                      <li>
                        <span>
                          <i className="feather-user" />
                        </span>
                        <Link href="#">Kalvin Klin</Link>
                      </li>
                      <li className="separator">-</li>
                      <li>12 Dec 2025</li>
                      <li className="comment-area">
                        <i className="feather-message-circle" />
                        <span>01</span>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="/blog/corporate-success-strategy">
                        Corporate Leadership How to Lead with Confidence
                      </Link>
                    </h4>
                    <p className="descriptiion">
                      Corporate success is widely recognized as the outcome of innovation.
                    </p>
                    <div className="read-more-btn">
                      <Link className="tmp-btn btn-border" href="/blog/leadership-confidence">
                        <span>Read More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* End Blog Area  */}
    </>
  );
}

export default BlogOne;
