"use client";

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
    { value: "3.2 yrs", label: "Avg. Tenure" },
    { value: "88%", label: "Internal Promotions" },
  ];

  const filteredJobs =
    activeTab === "All"
      ? jobs
      : jobs.filter((job) => job.category === activeTab);

  return (
    <div>

  <section className="relative mt-10  w-full h-[80vh] bg-[#1A4D6E] flex items-center overflow-hidden">
      
      {/* Background Circles */}
      <div className="absolute right-[-100px] top-[-80px] w-[400px] h-[400px] bg-white/5 rounded-full"></div>
      <div className="absolute right-[140px] bottom-[10px] w-[300px] h-[300px] bg-white/5 rounded-full"></div>

      {/* Content */}
      <div className=" px-6 md:px-12">
        <div className="max-w-2xl">
          
          {/* Badge */}
          <span className="inline-block px-5 py-2 rounded-full bg-yellow-400/20 text-yellow-400 text-sm font-semibold tracking-wide uppercase mb-6">
         Open Positions
          </span>

          {/* Heading */}
          <h2 className="text-white text-4xl font-serif md:text-[50px] font-extrabold leading-tight mb-6">
       Find the Role That Fits You Best
          </h2>

          {/* Description */}
          <p className="text-white/80 text-2xl leading-relaxed max-w-2xl">
         We're growing fast and looking for passionate people across all departments. Explore openings and take the next step in your career.
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


      <section className="bg-[#F7F6F2] py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
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
        <div className="space-y-6">
          {filteredJobs.map((job, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between"
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
              <div className="mt-4 md:mt-0">
                <button className="bg-[#1F4E6D] text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90">
                  Apply Now
                </button>
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