"use client";

import Link from 'next/link';
import React from 'react'


import { useState } from "react";

const page = () => {


const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Technology", "Sales", "Operations", "Marketing"];

  const jobs = [
    {
      title: "Senior Product Manager",
      dept: "Product",
      category: "Marketing",
      location: "Delhi (Hybrid)",
      exp: "5+ Years",
      salary: "₹20–30 LPA",
      desc: "Lead product strategy and roadmap for our B2B marketplace platform.",
    },
    {
      title: "Full Stack Developer (React + Node)",
      dept: "Technology",
      category: "Technology",
      location: "Remote",
      exp: "2–5 Years",
      salary: "₹12–22 LPA",
      desc: "Build and maintain scalable web applications for our inquiry management system.",
    },
    {
      title: "Business Development Executive",
      dept: "Sales",
      category: "Sales",
      location: "Mumbai / Delhi",
      exp: "1–3 Years",
      salary: "₹6–10 LPA + Incentives",
      desc: "Drive client acquisition and revenue growth across assigned territories.",
    },
  ];

  const stats = [
    { value: "94%", label: "Employee Satisfaction" },
    { value: "91%", label: "Would Recommend" },
    { value: "1.8 yrs", label: "Avg. Tenure" },
    { value: "88%", label: "Internal Promotions" },
  ];

  const filteredJobs =
    activeTab === "All"
      ? jobs
      : jobs.filter((job) => job.category === activeTab);

  return (
    <div>

<section
  style={{ backgroundImage: "url(/us.png)" }}
  className="relative overflow-hidden bg-contain bg-center bg-no-repeat py-12 md:py-20 lg:py-24"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/55 via-[#0d1b2a]/40 to-[#07111f]/50 backdrop-blur-[0.7px]"></div>

  {/* Background Circles */}
  <div className="absolute right-[-100px] top-[-80px] h-[400px] w-[400px] rounded-full bg-yellow-400/10 blur-3xl"></div>
  <div className="absolute right-[140px] bottom-[10px] h-[300px] w-[300px] rounded-full bg-white/10 blur-3xl"></div>

  {/* Content */}
  <div className="relative z-10 px-6 md:px-12">
    <div className="max-w-2xl">
      {/* Badge */}
      <span className="mb-3 inline-block rounded-full bg-yellow-400/20 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-yellow-300">
        Open Positions
      </span>

      {/* Heading */}
      <h2 className="sc mb-3 text-3xl font-extrabold leading-tight text-white md:text-[50px]">
        Find the Role That Fits You Best
      </h2>

      {/* Description */}
      <p className="max-w-2xl text-lg leading-relaxed text-white/85 md:text-2xl">
        We're growing fast and looking for passionate people across all
        departments. Explore openings and take the next step in your career.
      </p>
    </div>
  </div>
</section>



   <section className="bg-[#F7F6F2] py-4 md:py-5 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6  ">
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


      <section className="bg-[#F7F6F2] py-2 md:py-6 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition 
                ${
                  activeTab === tab
                    ? "bg-[#1F4E6D] text-white border-[#1F4E6D]"
                    : "text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {tab === "All" ? "All Departments" : tab}
            </button>
          ))}
        </div>

        {/* Jobs */}
        <div className=" space-y-3 md:space-y-4">
          {filteredJobs.map((job, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-3 flex flex-col md:flex-row md:items-center md:justify-between"
            >
              
              {/* Left Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {job.title}
                </h3>
                <p className="text-gray-500 mt-1 text-sm">
                  {job.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-3 mt-4 text-sm text-gray-600">
                  
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                    {job.dept}
                  </span>

                  <span>📍 {job.location}</span>
                  <span>💼 {job.exp}</span>
                  <span>💰 {job.salary}</span>
                </div>
              </div>

              {/* Button */}
              <div className="mt-3 md:mt-0">
                <Link href="/submit-resume" className="bg-[#1F4E6D] text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90">
                  Apply Now
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>

    </div>
  )
}

export default page