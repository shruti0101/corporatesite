"use client";
import { Brain, AlertTriangle, Rocket, RefreshCcw } from "lucide-react";
import {
  TrendingUp,
  Factory,
  Target,
  Users,
  ShieldCheck,
  BarChart3,
} from "lucide-react"
export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative mt-10 w-full h-[80vh] bg-[#1A4D6E] flex items-center overflow-hidden">
        <div className="absolute right-[-100px] top-[-80px] w-[400px] h-[400px] bg-white/5 rounded-full"></div>
        <div className="absolute right-[140px] bottom-[10px] w-[300px] h-[300px] bg-white/5 rounded-full"></div>

        <div className="px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              We didn’t build a marketplace.
              <br />
              <span className="text-[#E67C29]">
                We built a growth engine.
              </span>
            </h1>

            <p className="text-xl text-white/80 leading-relaxed">
              Most platforms give you a listing. We give you a rank that works.
              Inquiry Bazaar ensures the right buyer finds the right supplier —
              every single time.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-sm text-[#E67C29] font-semibold tracking-wide mb-3">
            WHO WE ARE
          </h2>
          <h3 className="text-4xl font-bold mb-6">
            A growth engine for Indian suppliers
          </h3>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
            <p className="text-black text-lg leading-relaxed">
              Inquiry Bazaar was founded with one obsession — making sure the right
              buyer finds the right supplier. Not just visibility, but meaningful
              discovery that leads to real business.
            </p>
          </div>
        </div>
      </section>

      {/* ORIGIN */}
 

{/* ORIGIN — PREMIUM TIMELINE */}
<section className="bg-[#DFE8E6] py-24 px-6 md:px-16">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="mb-16 max-w-2xl">
      <h2 className="text-3xl font-bold mb-4">OUR ORIGIN</h2>
      <p className="text-black text-lg leading-relaxed">
        Born from the factory floor, not a boardroom. Our founder spent
        years working closely with MSMEs and manufacturers across India,
        understanding what truly drives inquiries.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative border-l border-gray-300 pl-8 space-y-10">

      {[
        {
          icon: Brain,
          text: "Deep understanding of buyer behaviour",
        },
        {
          icon: AlertTriangle,
          text: "Suppliers losing due to poor ranking",
        },
        {
          icon: Rocket,
          text: "Founded July 16, 2024",
        },
        {
          icon: RefreshCcw,
          text: "Rebranded to Inquiry Bazaar with purpose",
        },
      ].map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="relative group">

            {/* Dot */}
            <div className="absolute -left-[38px] top-2 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-sm">
              <Icon className="w-4 h-4 text-[#E67C29]" />
            </div>

            {/* Card */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 
              shadow-sm hover:shadow-lg transition-all duration-300 
              group-hover:-translate-y-1">

              <p className="text-black text-lg">{item.text}</p>

            </div>
          </div>
        );
      })}

    </div>

  </div>
</section>

      {/* PASSION */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold">
            We fight for the supplier who deserved the order
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Underdog Focus",
              desc: "We help small manufacturers compete with big-budget listings.",
            },
            {
              title: "Real Inquiries",
              desc: "We care about buyers sending actual messages.",
            },
            {
              title: "MSME First",
              desc: "India’s manufacturers deserve global reach.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-2xl border border-gray-100 
              shadow-[0_10px_30px_rgba(0,0,0,0.06)] 
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] 
              hover:-translate-y-2 transition"
            >
              <h3 className="font-semibold text-xl mb-4 text-[#0B1F3A]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-[#0B1F3A] text-white py-20 px-6 md:px-16 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl font-semibold leading-relaxed mb-4">
            “Every MSME deserves a fair shot at the right buyer.”
          </p>
          <p className="text-white/70">
            — Sourabh Sachin, Founder & Director
          </p>
        </div>
      </section>

  {/* DIFFERENT */}
<section className="py-15 px-6 md:px-16 ">
  <div className="max-w-6xl mx-auto text-center">

    {/* HEADING */}
    <h2 className="text-4xl font-bold mb-4">
      <span className="text-[#0D2865]">What makes us different</span>
    </h2>

    <p className="text-gray-700 text-lg mb-14">
      We don’t just list suppliers — we build visibility systems that bring real buyers.
    </p>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "High-ranking listings",
          icon: TrendingUp,
        },
        {
          title: "Built for manufacturers",
          icon: Factory,
        },
        {
          title: "Intent-driven buyers",
          icon: Target,
        },
        {
          title: "Supplier-first philosophy",
          icon: Users,
        },
        {
          title: "Verified inquiry system",
          icon: ShieldCheck,
        },
        {
          title: "Performance-driven visibility",
          icon: BarChart3,
        },
      ].map((item, i) => {
        const Icon = item.icon;

        return (
          <div
            key={i}
            className="bg-[#dfe8e6] backdrop-blur-md rounded-2xl px-5 py-8 
            shadow-md hover:shadow-xl transition-all duration-300 
            flex flex-col items-center text-center group"
          >
            {/* ICON */}
            <div className="w-14 h-14 rounded-full bg-white shadow flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Icon className="w-6 h-6 text-[#2f5bd3]" />
            </div>

            {/* TEXT */}
            <p className="text-xl font-medium text-black  leading-snug">
              {item.title}
            </p>
          </div>
        );
      })}

    </div>

    {/* CTA */}
    <div className="mt-16">
      <button className="px-8 py-3 rounded-full text-white font-semibold 
     bg-[#0D2865]  shadow-md hover:shadow-lg transition">
  
        Talk To Our Experts
      </button>
    </div>

  </div>
</section>

      {/* CTA */}
      <section className="bg-[#F7F6F2] py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100">
            
            <h2 className="text-3xl font-bold mb-4">
              Ready to stop being invisible?
            </h2>

            <p className="text-gray-600 mb-8">
              List your business on Inquiry Bazaar and start ranking today.
            </p>

            <button className="bg-[#0D2865] hover:bg-[#0B1F3A] text-white px-8 py-3 rounded-full transition shadow-md hover:shadow-lg">
              Get Started
            </button>

          </div>
        </div>
      </section>

    </div>
  );
}