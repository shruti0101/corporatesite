"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const page = () => {
  const testimonials = [
    {
      text: `Inquiry Bazaar gave me the freedom to experiment and fail safely. I joined as a junior developer and within 18 months I was leading a feature team. The mentorship here is genuinely second to none.`,
      name: "Rahul Khanna",
      role: "Engineering Lead · 3 years at IB",
      initials: "RK",
      color: "bg-blue-100 text-blue-600",
    },
    {
      text: `The culture here is warm and collaborative. I’ve never felt like just a resource — every opinion is valued, every suggestion is heard. Work-life balance is real, not just a talking point.`,
      name: "Priya Sehgal",
      role: "Marketing Manager · 2 years at IB",
      initials: "PS",
      color: "bg-green-100 text-green-600",
    },
    {
      text: `I was changing careers from finance to sales, and IB took a chance on me. The onboarding programme was structured brilliantly and my manager helped me ramp up faster than I expected.`,
      name: "Ankit Mehta",
      role: "Senior BDE · 1.5 years at IB",
      initials: "AM",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      text: `I was changing careers from finance to sales, and IB took a chance on me. The onboarding programme was structured brilliantly and my manager helped me ramp up faster than I expected.`,
      name: "Ankit Mehta",
      role: "Senior BDE · 1.5 years at IB",
      initials: "AM",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      text: `I was changing careers from finance to sales, and IB took a chance on me. The onboarding programme was structured brilliantly and my manager helped me ramp up faster than I expected.`,
      name: "Ankit Mehta",
      role: "Senior BDE · 1.5 years at IB",
      initials: "AM",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  const stats = [
    { value: "94%", label: "Employee Satisfaction" },
    { value: "91%", label: "Would Recommend" },
    { value: "1.8 yrs", label: "Avg. Tenure" },
    { value: "88%", label: "Internal Promotions" },
  ];

  const growth = [
    {
      icon: "🌱",
      title: "Growth Mindset",
      desc: "Regular 1-on-1s, skip-level meetings, and transparent career progression paths keep everyone moving forward.",
    },
    {
      icon: "🎉",
      title: "Culture & Celebrations",
      desc: "Monthly town halls, team offsites, festive celebrations, and a recognition wall that makes every win feel special.",
    },
    {
      icon: "🧘",
      title: "Wellness First",
      desc: "Comprehensive health insurance, mental wellness sessions, and paid leaves that encourage real rest.",
    },
    {
      icon: "🤝",
      title: "Inclusive Community",
      desc: "DEI initiatives, employee resource groups, and a zero-tolerance policy for discrimination of any kind.",
    },
  ];

  return (
    <div>
      <>
        <section className="relative sb w-full h-[45vh] sm:h-[45vh] md:h-[80vh] bg-[#1A4D6E] flex items-center overflow-hidden">
          {/* Background Circles */}
          <div className="absolute right-[-100px] top-[-80px] w-[400px] h-[400px] bg-white/5 rounded-full"></div>
          <div className="absolute right-[140px] bottom-[10px] w-[300px] h-[300px] bg-white/5 rounded-full"></div>

          {/* Content */}
          <div className=" px-6 md:px-12">
            <div className="max-w-2xl">
              {/* Badge */}
              <span className="inline-block px-5 py-2 rounded-full bg-yellow-400/20 text-yellow-400 text-sm font-semibold tracking-wide uppercase mb-3 md:mb-6">
                Our people
              </span>

              {/* Heading */}
              <h1 className="text-white text-4xl sc md:text-[50px] font-extrabold leading-tight mb-4 md:mb-6">
                Straight From the Hearts of Our Team
              </h1>

              {/* Description */}
              <p className="text-white/80 text-lg md:text-2xl leading-relaxed max-w-2xl">
                Don't take our word for it — hear from the people who make
                Inquiry Bazaar the place it is every single day.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F6F2] py-4 md:py-10 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mb-7 md:mb-14">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6 text-center"
                >
                  <h2 className="text-3xl font-semibold text-gray-800">
                    {item.value}
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mb-6 md:mb-10">
              <h1 className="text-2xl  md:text-4xl font-semibold text-gray-900">
                What Our Employees Say
              </h1>
              <p className="text-gray-500 mt-1">
                Real voices, real experiences — no filters.
              </p>
            </div>

            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              // pagination={{ clickable: true }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {testimonials.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-6 h-full flex flex-col">
                    {/* Quote */}
                    <div className="text-4xl text-gray-200 mb-2 md:mb-4">“</div>

                    {/* Text */}
                    <p className="text-gray-600 leading-relaxed text-sm mb-4 md:mb-6">
                      {item.text}
                    </p>

                    {/* User */}
                    <div className="flex items-center gap-3 mt-auto">
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold ${item.color}`}
                      >
                        {item.initials}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-800">
                          {item.name}
                        </h4>
                        <span className="text-xs text-gray-500">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="bg-[#F7F6F2] py-2  md:py-16 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className=" mb-3 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Life at Inquiry Bazaar
              </h2>
              <p className="text-gray-500 mt-1 md:mt-2">
                More than work — it's a community.
              </p>
            </div>

            {/* Cards */}
            <div className="grid py-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {growth.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-6"
                >
                  {/* Icon Box */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 mb-2 md:mb-4 text-xl">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-900 font-semibold text-lg mb-1 md:mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-5 md:leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default page;
