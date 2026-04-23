"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
const page = () => {
  const stats = [
    { value: "94%", label: "Employee Satisfaction" },
    { value: "91%", label: "Would Recommend" },
    { value: "1.8 yrs", label: "Avg. Tenure" },
    { value: "88%", label: "Internal Promotions" },
  ];

  const tracks = [
    {
      title: "Onboarding & Foundation",
      desc: "First 90 days — understand IB culture, tools & processes",
      tag: "Mandatory",
      icon: "🚀",
      color: "blue",
      content:
        "A structured 90-day journey that helps new joiners hit the ground running. You'll meet leaders, shadow teams, and complete essential certifications.",
      points: [
        "IB Culture & Values Orientation (Week 1)",
        "Role-specific Tool Training (Week 2–3)",
        "Cross-functional Team Shadowing (Month 1–2)",
        "90-Day Check-in & Goal Setting (Month 3)",
      ],
    },
    {
      title: "Functional Skills Development",
      desc: "Deep-dive training in your domain — sales, tech, marketing & more",
      tag: "Role-based",
      icon: "📊",
      color: "green",
      content:
        "Domain-specific learning paths designed with input from industry experts and senior leaders. Includes both live workshops and self-paced modules.",
      points: [
        "Advanced Excel & Data Analytics for Non-Tech Roles",
        "Solution Selling & Consultative Sales Techniques",
        "Agile & Scrum Fundamentals for Engineers",
        "Digital Marketing Certification (Google, Meta)",
        "Financial Acumen for Business Professionals",
      ],
    },
    {
      title: "Leadership Accelerator Programme",
      desc: "For high-potential employees — preparing future leaders",
      tag: "Selective",
      icon: "💡",
      color: "yellow",
      content:
        "An intensive 6-month programme for top performers. Combines executive coaching, cross-functional projects, and leadership simulations with senior mentors.",
      points: [
        "Strategic Thinking & Business Acumen Workshop",
        "People Management & Conflict Resolution",
        "Executive Presence & Communication Masterclass",
        "Capstone Project: Present to the Leadership Team",
      ],
    },
    {
      title: "External Certifications & Courses",
      desc: "Sponsored learning from Coursera, LinkedIn Learning & more",
      tag: "Sponsored",
      icon: "🎓",
      color: "red",
      content:
        "We sponsor up to ₹40,000 per employee per year for external learning. Employees simply apply, get approved, and learn — with no strings attached.",
      points: [
        "PMP / PRINCE2 Project Management Certification",
        "AWS / GCP / Azure Cloud Certifications",
        "MBA / PGDM Tuition Assistance (Partial)",
        "Language & Communication Courses",
      ],
    },
    {
      title: "Wellbeing & Soft Skills",
      desc: "Because a healthy mind drives peak performance",
      tag: "Sponsored",
      icon: "🎓",
      color: "red",
      content:
        "We believe great professionals are well-rounded humans. Our soft skills and wellbeing track helps every employee show up as their best self.",
      points: [
        "Mindfulness & Stress Management Sessions",
        "Effective Communication & Presentation Skills",
        "Time Management & Personal Productivity",
        "Unconscious Bias & Inclusive Workplace Training",
      ],
    },
  ];

  const colorStyles = {
    blue: { bg: "bg-blue-50", text: "text-blue-600" },
    green: { bg: "bg-emerald-50", text: "text-emerald-600" },
    yellow: { bg: "bg-yellow-50", text: "text-yellow-600" },
    red: { bg: "bg-red-50", text: "text-red-500" },
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className="relative w-full sb h-[50vh] sm:h-[30vh] md:h-[80vh] bg-[#1A4D6E] flex items-center overflow-hidden">
        {/* Background Circles */}
        <div className="absolute right-[-100px] top-[-80px] w-[400px] h-[400px] bg-white/5 rounded-full"></div>
        <div className="absolute right-[140px] bottom-[10px] w-[300px] h-[300px] bg-white/5 rounded-full"></div>

        {/* Content */}
        <div className=" px-6 md:px-12">
          <div className="max-w-2xl">
            {/* Badge */}
            <span className="inline-block px-5 py-2 rounded-full bg-yellow-400/20 text-yellow-400 text-sm font-semibold tracking-wide uppercase mb-3 md:mb-6">
              Grow With Us
            </span>

            {/* Heading */}
            <h1 className="text-white text-4xl sc md:text-[50px] font-extrabold leading-tight mb-3 md:mb-6">
              Your Growth Is Our Investment
            </h1>

            {/* Description */}
            <p className="text-white/80 text-lg md:text-2xl leading-relaxed max-w-2xl">
              At Inquiry Bazaar, learning never stops. From onboarding to
              leadership — we have a structured programme for every stage of
              your career.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F6F2] pt-4 pb-1 md:py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mb-2w md:mb-14">
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
        </div>
      </section>

      <div className="bg-[#F7F6F2] py-4 md:py-10 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl sc font-bold text-gray-900">
            Learning Tracks
          </h1>
          <p className="text-gray-6 mt-2 md:mt-3 mb-4 md:mb-8">
            Click on any track to explore what's inside.
          </p>

          {/* Accordion */}
          <div className="space-y-2 md:space-y-4">
            {tracks.map((item, index) => {
              const color = colorStyles[item.color] || colorStyles.blue;
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                >
                  {/* Header */}
                  <div
                    onClick={() => toggle(index)}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 cursor-pointer hover:bg-gray-50 transition"
                  >
                    {/* LEFT SIDE */}
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                      {/* Icon */}
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-base sm:text-lg ${color.bg}`}
                      >
                        {item.icon}
                      </div>

                      {/* Text */}
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                      <span
                        className={`text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-full ${color.bg} ${color.text}`}
                      >
                        {item.tag}
                      </span>

                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`px-4 sm:px-5 transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-[300px] py-3 sm:py-4"
                        : "max-h-0 overflow-hidden"
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-2">
                      {item.content}
                    </p>

                    <ul className="space-y-1">
                      {item.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm text-gray-700"
                        >
                          <span className="font-bold text-lg">•</span> {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <section className="py-6 md:py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CARD 1 */}
          <div className="bg-[#1A4D6E]  text-white rounded-2xl p-6 sm:p-8">
            <h3 className="font-serif font-bold text-xl sm:text-2xl mb-3">
              Ready to apply?
            </h3>

            <p className="text-white text-sm sm:text-base mb-5">
              Explore our open roles and take the first step toward a rewarding
              career at Inquiry Bazaar.
            </p>

            <Link
             href={"/career"}
              className="border border-white/50 text-white px-4 py-2 rounded-md text-sm hover:bg-white/10 transition"
            >
              View Open Roles →
            </Link>
          </div>

          {/* CARD 2 */}
          <div className="bg-teal-100/50 rounded-2xl p-6 sm:p-8">
            <h3 className="font-bold font-serif text-xl sm:text-2xl mb-3">
              Have questions?
            </h3>

            <p className="text-black text-sm sm:text-base mb-5">
              Our People &amp; Culture team is happy to answer any questions
              about learning programmes or career growth.
            </p>

            <a
              href="mailto:learning@inquirybazaar.com"
              className="text-[var(--teal)] font-semibold text-sm sm:text-base hover:underline"
            >
              learning@inquirybazaar.com →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
