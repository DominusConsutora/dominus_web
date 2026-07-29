"use client";
import Link from 'next/link'


import React from "react";
import { useTitleSplitAnimation } from "../../components/useTitleSplitAnimation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const testimonialData = [
  {
    country: "USA",
    description:
      "When taking on new projects, I primarily look for a strong visual and aesthetic alignment, as well as a meaningful personal connection.",
    name: "Darun Due",
    position: "Business Developer",
    image: "/assets/images/testimonial/testimonial-dark-01.jpg",
  },
  {
    country: "INDIA",
    description:
      "When taking on new projects, I primarily look for a strong visual and aesthetic alignment, as well as a meaningful personal connection.",
    name: "Mohima Ale",
    position: "Business Developer",
    image: "/assets/images/testimonial/testimonial-dark-02.jpg",
  },
  {
    country: "Bangladesh",
    description:
      "When taking on new projects, I primarily look for a strong visual and aesthetic alignment, as well as a meaningful personal connection.",
    name: "John Roni",
    position: "Marketing Expart",
    image: "/assets/images/testimonial/testimonial-dark-03.jpg",
  },
];

const TestimonialOne = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  
  useTitleSplitAnimation();

  return (
    <div className="tmp-testimonial-area tmp-section-gapBottom">
      <div className="container pb--70">
        {/* Section Title */}
        <div className="row mb--30">
          <div className="col-lg-12">
            <div className="tmp-section-title-border text-center">
              <div className="pres-line-separator-wrapper text-center mb--10">
                <div className="line-separator line-left" />
                <span className="subtitle">
                  <span className="number">+3</span>
                  <span className="subtitle-text">Client Feedback</span>
                </span>
                <div className="line-separator line-right" />
              </div>
              <h2 className="title w-700 tmp-title-split">Client Feedback.</h2>
            </div>
          </div>
        </div>

        {/* Slick Slider */}
        <Slider {...settings} className="tmp-slick-dot tmp-slick-arrow testimonial-activation">
          {testimonialData.map((item, index) => (
            <div key={index} className="testimonial-style-two">
              <div className="row align-items-center row--30">
                <div className="col-lg-5 col-md-4">
                  <div className="thumbnail">
                    <img className="w-100" src={item.image} alt={item.name} />
                  </div>
                </div>
                <div className="col-lg-7 col-md-8">
                  <div className="content mt_sm--40">
                    <span className="form">{item.country}</span>
                    <p className="description">{item.description}</p>
                    <div className="rating mb--15">
                      {[...Array(5)].map((_, i) => (
                        <Link key={i} href="#" tabIndex={0}>
                          <img src="/assets/images/icons/stars.svg" alt="" />
                        </Link>
                      ))}
                    </div>
                    <div className="client-info">
                      <h4 className="title">{item.name}</h4>
                      <h6 className="subtitle">{item.position}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialOne;