"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const page = () => {
  const testimonials = [
    {
      text: `Working at Inquiry Bazaar has helped me grow both technically and professionally. The company encourages innovation in SEO strategies, and I've had the opportunity to work on challenging projects that deliver measurable results for clients."`
,
      name: "Jyoti Gupta",
      role: "Senior SEO Executive · 1.6 years at IB",
      initials: "JG",
      color: "bg-blue-100 text-blue-600",
    },
    {
      text: `The collaborative environment and continuous learning culture make Inquiry Bazaar a great place to work. I appreciate the freedom to experiment with new optimization techniques and contribute to client success.`,
      name: "Uma Rathi",
      role: "SEO  · 2 months at IB",
      initials: "UR",
      color: "bg-green-100 text-green-600",
    },


    {
      text: `At Inquiry Bazaar, I have the opportunity to manage diverse advertising campaigns across multiple industries. The company encourages creativity, data-driven decisions, and continuous improvement.`,
      name: "Ankit Prasad",
      role: "PPC Campaign Manager · 9 months at IB",
      initials: "AP",
      color: "bg-yellow-100 text-yellow-600",
    },


    {
      text: `The organization provides the right tools, support, and learning opportunities to stay updated with the latest advertising trends. It's a great place to build expertise in paid marketing.`,
      name: "Sneha Arora",
      role: "Digital Advertising Specialist · 1.1 years at IB",
      initials: "SA",
      color: "bg-yellow-100 text-yellow-600",
    },


    {
      text: `Inquiry Bazaar provides excellent opportunities for career growth. The supportive leadership and customer-focused approach have helped me build strong client relationships and achieve my professional goals.`,
      name: "Janvi Tyagi",
      role: "Business Development Manager · 7 months at IB",
      initials: "JT",
      color: "bg-yellow-100 text-yellow-600",
    },






 {
      text: `Inquiry Bazaar provides excellent opportunities for career growth. The supportive leadership and customer-focused approach have helped me build strong client relationships and achieve my professional goals.`,
      name: "Neha Kapoor",
      role: "Business Development Manager · 4 months at IB",
      initials: "NK",
      color: "bg-yellow-100 text-yellow-600",
    },



     {
      text: `Inquiry Bazaar fosters a culture of innovation and teamwork. Working on modern web technologies and client-focused solutions has significantly enhanced my technical skills`,
      name: "Shruti Gupta",
      role: " Web Developer · 1.2 years at IB",
      initials: "SG",
      color: "bg-yellow-100 text-yellow-600",
    },


        {
      text: `Inquiry Bazaar fosters a culture of innovation and teamwork. Working on modern web technologies and client-focused solutions has significantly enhanced my technical skills`,
      name: "Anshuman Tyagi",
      role: " Web Developer · 7 months at IB",
      initials: "AT",
      color: "bg-yellow-100 text-yellow-600",
    },


  
        {
      text: `Working at Inquiry Bazaar has allowed me to create impactful social media campaigns that help businesses connect with the right audience. The company encourages creativity, innovation, and continuous learning, making every day exciting and rewarding`,
      name: "Tisha Nagarwal",
      role: " Social Media Manager · 1.5 years at IB",
      initials: "TN",
      color: "bg-yellow-100 text-yellow-600",
    },

 {
      text: `The supportive team culture and freedom to explore new content ideas have helped me grow professionally. Inquiry Bazaar provides excellent opportunities to work on diverse campaigns and stay updated with the latest social media trends.`,
      name: "Bhumika Papola",
      role: " Social Media · 1.5 years at IB",
      initials: "BP",
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
        <section className="relative sb w-full h-[45vh] sm:h-[45vh] md:h-[60vh] lg:h-[70vh] bg-[#1A4D6E] flex items-center overflow-hidden">
          {/* Background Circles */}
          <div className="absolute right-[-100px] top-[-80px] w-[400px] h-[400px] bg-white/5 rounded-full"></div>
          <div className="absolute right-[140px] bottom-[10px] w-[300px] h-[300px] bg-white/5 rounded-full"></div>

          {/* Content */}
          <div className=" px-6 md:px-12">
            <div className="max-w-2xl">
              {/* Badge */}
              <span className="inline-block px-5 py-2 rounded-full bg-yellow-400/20 text-yellow-400 text-sm font-semibold tracking-wide uppercase mb-3 ">
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

        <section className="bg-[#F7F6F2] py-4 md:py-5 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mb-7 md:mb-8">
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

        <section className="bg-[#F7F6F2] py-2  md:py-6 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className=" mb-3 md:mb-6">
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
