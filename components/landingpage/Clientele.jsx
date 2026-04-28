"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

export default function BrandSection() {
  const logos = [
    "/brands/delta.png",
    "/brands/caterpillar.png",
    "/brands/danfoss.png",
    "/brands/mahindra.png",
    "/brands/tata.png",
    "/brands/jsw.png",
    "/brands/godrej.png",
    "/brands/konica.png",
    "/brands/weber.png",
    "/brands/panther.png",
      "/brands/tata.png",
    "/brands/jsw.png",
    "/brands/godrej.png",
    "/brands/konica.png",
    "/brands/weber.png",
    "/brands/panther.png",
  ];

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-700">
          Trusted By Global Brands
        </h2>

        <div className="w-28 h-[3px] bg-red-500 mx-auto mt-3 mb-12"></div>

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
              <div className="flex items-center justify-center h-[80px]">
                <img
                  src={logo}
                  alt="brand"
                  className="h-[40px] object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}