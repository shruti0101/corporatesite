"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import  { useState } from "react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Briefcase, FileText, Gift, Handshake } from "lucide-react";
import Clientele from "@/components/landingpage/Clientele";
import { motion } from "framer-motion";
import { ShoppingCart, Users, Package } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {

const tabs = [
  {
    id: "openings",
    title: "CURRENT OPENINGS",
    icon: <Briefcase />,
    heading: "CURRENT OPENINGS",
    desc: "Explore exciting career opportunities across multiple domains including sales, technology, marketing, and operations. Join a fast-growing team where your skills are valued, your ideas matter, and your career growth is a priority.",
    btn: "View Open Positions",
    link: "/career",
  },
  {
    id: "resume",
    title: "SUBMIT YOUR RESUME",
    icon: <FileText />,
    heading: "SUBMIT YOUR RESUME",
    desc: "Didn’t find a suitable role? No worries. Share your profile with us and our hiring team will review it for current and future opportunities. We’re always looking for passionate and talented individuals to join us.",
    btn: "Submit Resume",
    link: "/submit-resume",
  },
  {
    id: "employee",
    title: "EMPLOYEE SPEAKS",
    icon: <Gift />,
    heading: "EMPLOYEE SPEAKS",
    desc: "Discover what it’s like to work with us through real stories from our employees. Experience a culture built on collaboration, flexibility, recognition, and continuous growth that empowers you to do your best work.",
    btn: "Explore Benefits",
    link: "/employee-speaks",
  },
  {
    id: "learning",
    title: "LEARNING & DEVELOPMENT",
    icon: <Handshake />,
    heading: "LEARNING & DEVELOPMENT",
    desc: "We invest in your growth with continuous learning programs, mentorship, and hands-on experience. Enhance your skills, stay ahead in your field, and build a rewarding career with our supportive environment.",
    btn: "Become Partner",
    link: "/learning-development",
  },
];

  const slides = [
    {
      id: 1,
      title: "Kaam Yahin Banta Hai",
      image: "/hero1.jpg",
    },
    {
      id: 2,
      title: "Grow Your Business Faster",
      image: "/hero2.jpg",
    },
  ];

  const data = {
    buyer: [
      {
        name: "Amit Sharma",
        text: "Amazing platform! Found reliable suppliers quickly and easily.Amazing platform! Found reliable suppliers quickly and easily.Amazing platform! ",
      },
      {
        name: "Neha Verma",
        text: "Great experience. The process is smooth and efficient.Amazing platform! Found reliable suppliers quickly and easily.Amazing platform! ",
      },
      {
        name: "Rahul Mehta",
        text: "Highly recommended for businesses looking for quality vendors.Amazing platform! Found reliable suppliers quickly and easily.",
      },

        {
        name: "Rohit Jain",
        text: "Excellent exposure and genuine leads every day.Amazing platform! Found reliable suppliers quickly and easily,The process is smooth and efficient.",
      },
            {
        name: "Neha Verma",
        text: "Great experience. The process is smooth and efficient.The process is smooth and efficient.The process is smooth and efficient.",
      },
    ],
    seller: [
      {
        name: "Priya Singh",
        text: "Helped me grow my business and reach more customers.The process is smooth and efficient.The process is smooth and efficient The process is smooth and efficient..",
      },
      {
        name: "Rohit Jain",
        text: "Excellent exposure and genuine leads every day.The process is smooth and efficient.The process is smooth and efficient.The process is smooth and efficient.",
      },
      {
        name: "Anjali Gupta",
        text: "A perfect platform to scale your business online.The process is smooth and efficient.The process is smooth and efficient The process is smooth and efficient..",
      },
        {
        name: "Rohit Jain",
        text: "Excellent exposure and genuine leads every day The process is smooth and efficient.The process is smooth and efficient.The process is smooth and efficient..",
      },

        {
        name: "Rohit Jain",
        text: "Excellent exposure and genuine leads every day.The process is smooth and efficient.The process is smooth and efficient.The process is smooth ",
      },
    ],
  };   

 const [active, setActive] = useState(tabs[0]);
 const [activeTab, setActiveTab] = useState("buyer");
  return (

    <>
    
    <div className="relative w-full">

      {/* HERO SLIDER */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
        className="h-[50vh] md:h-[70vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">

              {/* BACKGROUND IMAGE */}
              <Image
                src={slide.image}
                alt="hero"
                fill
                className="object-cover"
                priority
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-6xl font-bold mb-6"
                >
                  {slide.title}
                </motion.h1>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-[#F1791C] hover:bg-[#e06b11] px-6 py-3 rounded-lg text-lg font-medium flex items-center gap-2"
                >
                  Watch Now →
                </motion.button>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* STATS CARDS */}
      <div className="hidden md:block absolute bottom-20 w-full px-4 md:px-20 z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-5 hover:shadow-2xl transition">
            <ShoppingCart size={40} className="text-gray-600" />
            <div>
              <h2 className="text-2xl font-bold">21.9 Cr</h2>
              <p className="text-gray-500">Buyers</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-5 hover:shadow-2xl transition">
            <Users size={40} className="text-gray-600" />
            <div>
              <h2 className="text-2xl font-bold">86 Lakh</h2>
              <p className="text-gray-500">Suppliers</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-5 hover:shadow-2xl transition">
            <Package size={40} className="text-gray-600" />
            <div>
              <h2 className="text-2xl font-bold">12.4 Cr</h2>
              <p className="text-gray-500">Products & Services</p>
            </div>
          </div>

        </div>
      </div>

      {/* EXTRA SPACE BELOW (for overlap) */}
      <div className="h-15 md:h-32"></div>
    </div>


     <section className="w-full pb-4 bg-white">
      <div className="w-full mx-auto px-4 md:px-25 grid md:grid-cols-2 gap-12 items-center">

    

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#F1791C] font-semibold mb-2 uppercase tracking-wide">
            About Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-snug">
            We Help Businesses Grow Faster & Smarter
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            At Inquiry Bazaar, we are committed to delivering high-quality products
            and seamless experiences to our customers. Our platform connects
            buyers with trusted suppliers, ensuring reliability, affordability,
            and efficiency in every transaction.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            With a focus on innovation and customer satisfaction, we aim to
            simplify the buying process and empower businesses to scale with
            confidence.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#F1791C] rounded-full"></div>
              <p className="text-gray-700 text-sm">Trusted Suppliers</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#F1791C] rounded-full"></div>
              <p className="text-gray-700 text-sm">Best Pricing</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#F1791C] rounded-full"></div>
              <p className="text-gray-700 text-sm">Fast Delivery</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#F1791C] rounded-full"></div>
              <p className="text-gray-700 text-sm">Secure Payments</p>
            </div>
          </div>

          {/* CTA */}
          <button className="bg-[#F1791C] hover:bg-[#F1791C] text-white px-6 py-3 rounded-lg font-medium transition">
            Learn More →
          </button>
        </motion.div>

            {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/test.png" // 👉 replace with your image
              alt="About Us"
              fill
              className="object-cover"
            />
          </div>

          {/* subtle overlay card */}
          <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-xl px-6 py-4 hidden md:block">
            <p className="text-sm text-gray-500">Trusted by</p>
            <h3 className="text-xl font-bold">10,000+ Customers</h3>
          </div>
        </motion.div>

      </div>
    </section>

     <section className="relative w-full py-16 md:py-24 mt-8 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#0B2E62]"></div>

      {/* GLOW EFFECT */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-teal-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#F1791C] font-semibold uppercase tracking-wide mb-3">
            Grow With Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            Start Your <span className="text-[#F1791C]">Business Online</span>
          </h2>

          <div className="w-20 h-[3px] bg-[#F1791C] mb-6"></div>

          <p className="text-gray-300 text-lg mb-8 max-w-lg">
            Join India’s largest B2B marketplace and connect with millions of
            buyers to grow your business faster than ever before.
          </p>

          {/* CTA BUTTON */}
          <button className="group bg-[#F1791C] hover:bg-[#f2710e] text-white px-7 py-3 rounded-xl font-medium text-lg flex items-center gap-2 shadow-lg shadow-teal-500/30 transition">
            Read More
            <span className="group-hover:translate-x-1 transition">→</span>
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* LAPTOP */}
          <div className="relative w-[280px] md:w-[420px] z-10">
            <Image
              src="/mob1.jpeg" // 👉 replace
              alt="platform"
              width={500}
              height={300}
              className="rounded-xl shadow-2xl"
            />
          </div>

          {/* MOBILE (FLOATING) */}
          <div className="absolute bottom-0 left-0 w-[120px] md:w-[560px] z-20 translate-y-10">
            <Image
              src="/test.png" // 👉 replace
              alt="mobile"
              width={400}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </div>

          {/* FLOATING BADGE */}
          <div className="absolute top-10 right-0 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg text-sm">
            10M+ Users 🚀
          </div>
        </motion.div>

      </div>
    </section>
<Clientele></Clientele>

     <section className="relative w-full py-20 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[url('/about.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3a]/90 to-[#0b1b3a]/70"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[#F1791C] font-semibold mb-2 uppercase">
            Life At InquiryBazaar
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {active.heading}
          </h2>

          <p className="text-gray-300 mb-6 max-w-lg">
            {active.desc}
          </p>

       <Link
  href={active.link}
  className="bg-[#F1791C] hover:bg-[#d96a14] text-white px-6 py-3 rounded-lg font-medium transition inline-block"
>
  {active.btn} →
</Link>
        </motion.div>

        {/* RIGHT MENU */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-4">

          {tabs.map((tab) => (
            <div
              key={tab.id}
              onMouseEnter={() => setActive(tab)}
              className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition ${
                active.id === tab.id
                  ? "bg-[#F1791C]/20 border border-[#F1791C]"
                  : "hover:bg-white/10"
              }`}
            >
              <div className="text-white">{tab.icon}</div>

              <div>
                <p className="text-white font-semibold text-sm">
                  {tab.title}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Testimonials
        </h2>

        {/* TOGGLE */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-white rounded-lg overflow-hidden shadow">
            <button
              onClick={() => setActiveTab("buyer")}
              className={`px-6 py-2 text-sm font-medium ${
                activeTab === "buyer"
                  ? "bg-gray-200 text-black"
                  : "text-gray-500"
              }`}
            >
              Buyer
            </button>
            <button
              onClick={() => setActiveTab("seller")}
              className={`px-6 py-2 text-sm font-medium ${
                activeTab === "seller"
                  ? "bg-indigo-700 text-white"
                  : "text-gray-500"
              }`}
            >
              Seller
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data[activeTab].map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-xl shadow-lg p-6 h-full hover:shadow-xl transition">

                {/* REVIEW TEXT */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  “{item.text}”
                </p>

                {/* USER */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activeTab === "buyer" ? "Buyer" : "Seller"}
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
    </>
  );
}