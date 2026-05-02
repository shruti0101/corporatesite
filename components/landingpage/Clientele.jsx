"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

export default function BrandSection() {
  const logos = [
    "/clientimages/1.webp",
    "/clientimages/2.webp",
    "/clientimages/3.png",
    "/clientimages/4.webp",
    "/clientimages/5.png",
    "/clientimages/6.webp",
    "/clientimages/7.png",
    "/clientimages/8.png",
    "/clientimages/9.png",
    "/clientimages/10.webp",
      "/clientimages/11.webp",
    "/clientimages/12.webp",
    "/clientimages/13.webp",
     "/clientimages/14.webp",
      "/clientimages/15.webp",
          "/clientimages/16.png",
              "/clientimages/17.png",
               "/clientimages/18.webp",
  ];

  return (
    <section className="py-4 md:py-8 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-4xl md:text-4xl font-semibold text-center text-gray-700">
          Trusted By Global Brands
        </h2>

        <div className="w-28 h-[3px] bg-red-500 mx-auto mt-2 md:mt-3  md:mb-12"></div>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation, Grid, Autoplay]}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={40}
          grid={{
            rows: 2,
            fill: "row",
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              grid: { rows: 2 },
              spaceBetween:20 ,
            },
            640: {
              slidesPerView: 3,
              grid: { rows: 2 },
            },
            768: {
              slidesPerView: 4,
              grid: { rows: 2 },
            },
            1024: {
              slidesPerView: 5,
              grid: { rows: 2 }, // 👉 5 x 2 = EXACT layout
            },
          }}
        >
          {logos.map((logo, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center h-[130px]">
                <img
                  src={logo}
                  alt="brand"
                  className="h-[60px] object-contain   transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}