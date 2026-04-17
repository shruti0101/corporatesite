"use client";

import React from 'react'
import { ChevronDown } from "lucide-react";
import { useState } from "react";
const page = () => {

 const stats = [
    { value: "94%", label: "Employee Satisfaction" },
    { value: "91%", label: "Would Recommend" },
    { value: "3.2 yrs", label: "Avg. Tenure" },
    { value: "88%", label: "Internal Promotions" },
  ];

const tracks = [
  {
    title: "Onboarding & Foundation",
    desc: "First 90 days — understand IB culture, tools & processes",
    tag: "Mandatory",
    icon: "🚀",
    color: "blue",
    content: "Learn company culture, onboarding sessions, tools training, and internal workflows.",
  },
  {
    title: "Functional Skills Development",
    desc: "Deep-dive training in your domain — sales, tech, marketing & more",
    tag: "Role-based",
    icon: "📊",
    color: "green",
    content: "Get specialized training in your department with hands-on sessions and real projects.",
  },
  {
    title: "Leadership Accelerator Programme",
    desc: "For high-potential employees — preparing future leaders",
    tag: "Selective",
    icon: "💡",
    color: "yellow",
    content: "Leadership mentoring, decision-making frameworks, and strategic thinking workshops.",
  },
  {
    title: "External Certifications & Courses",
    desc: "Sponsored learning from Coursera, LinkedIn Learning & more",
    tag: "Sponsored",
    icon: "🎓",
    color: "red",
    content: "Access premium courses, certifications, and sponsored external learning programs.",
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

       <section className="relative w-full mt-10 h-[80vh] bg-[#1A4D6E] flex items-center overflow-hidden">
      
      {/* Background Circles */}
      <div className="absolute right-[-100px] top-[-80px] w-[400px] h-[400px] bg-white/5 rounded-full"></div>
      <div className="absolute right-[140px] bottom-[10px] w-[300px] h-[300px] bg-white/5 rounded-full"></div>

      {/* Content */}
      <div className=" px-6 md:px-12">
        <div className="max-w-2xl">
          
          {/* Badge */}
          <span className="inline-block px-5 py-2 rounded-full bg-yellow-400/20 text-yellow-400 text-sm font-semibold tracking-wide uppercase mb-6">
         Grow With Us
          </span>

          {/* Heading */}
          <h1 className="text-white text-4xl sc md:text-[50px] font-extrabold leading-tight mb-6">
    Your Growth Is Our Investment
          </h1>

          {/* Description */}
          <p className="text-white/80 text-2xl leading-relaxed max-w-2xl">
    At Inquiry Bazaar, learning never stops. From onboarding to leadership — we have a structured programme for every stage of your career.
          </p>

        </div>
      </div>
    </section>


     <section className="bg-[#F7F6F2] py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center"
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





       <div className="bg-[#F7F6F2] py-10 pb-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl sc font-bold text-gray-900">
          Learning Tracks
        </h1>
        <p className="text-gray-600 mt-3 mb-8">
          Click on any track to explore what's inside.
        </p>

        {/* Accordion */}
        <div className="space-y-4">
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
                  className="p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-4">
                    
                    {/* Icon */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg ${color.bg}`}
                    >
                      {item.icon}
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${color.bg} ${color.text}`}
                    >
                      {item.tag}
                    </span>

                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`px-5 transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 py-4" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>

    </div>
  )
}

export default page