"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoPurple6 from "@/app/assets/logoPurple6.png";
import logoPurple5 from "@/app/assets/logoPurple5.png";
import logoPurple4 from "@/app/assets/logoPurple4.png";
import logoPurple3 from "@/app/assets/logoPurple3.png";
import logoPurple2 from "@/app/assets/logoPurple2.jpg";
import logoPurple1 from "@/app/assets/logoPurple1.png";
import "../globals.css";

const imageData = [
  { id: 1, defaultSrc: logoPurple1.src, alt: "Logo 1" },
  { id: 2, defaultSrc: logoPurple2.src, alt: "Logo 2" },
  { id: 3, defaultSrc: logoPurple3.src, alt: "Logo 3" },
  { id: 4, defaultSrc: logoPurple4.src, alt: "Logo 4" },
  { id: 5, defaultSrc: logoPurple5.src, alt: "Logo 5" },
  { id: 6, defaultSrc: logoPurple6.src, alt: "Logo 6" },
];

const SectionsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
        rtl: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <div className="slider-wrapper">
          <Slider {...settings}>
            {imageData.map((image) => (
              <div
                className="clients-logo d-flex align-content-center"
                key={image.id}
              >
                <img
                  src={image.defaultSrc}
                  alt={image.alt}
                  className="logo default-logo"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SectionsSlider;
export const ReverseSectionsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <div style={{ paddingTop: "50px",}}>
        <div className="slider-wrapper">
          <Slider {...settings}>
            {imageData.map((image) => (
              <div
                className="clients-logo d-flex align-content-center"
                key={image.id}
              >
                <img
                  src={image.defaultSrc}
                  alt={image.alt}
                  className="logo default-logo"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};


