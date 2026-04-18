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

import { useState } from "react";

export default function AboutPage() {

    const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative sb w-full h-[80vh] bg-[#1A4D6E] flex items-center overflow-hidden">
        <div className="absolute right-[-100px] top-[-80px] w-[400px] h-[400px] bg-white/5 rounded-full"></div>
        <div className="absolute right-[140px] bottom-[10px] w-[300px] h-[300px] bg-white/5 rounded-full"></div>

        <div className="px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
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
      <section className="py-15 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
         {/* Badge */}
          <span className="inline-block px-5 py-2 rounded-full bg-yellow-400/20 text-black text-sm font-semibold tracking-wide uppercase mb-6">
     WHO WE ARE
          </span>
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
<section className="bg-[#DFE8E6] py-18 px-6 md:px-16">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="mb-7 max-w-3xl">
   {/* Badge */}
          <span className="inline-block px-5 py-2 rounded-full bg-yellow-400/20 text-black text-sm font-semibold tracking-wide uppercase mb-4">
       OUR ORIGIN
          </span>
          <h2 className="text-black text-3xl font-bold mb-2"> Born from the factory floor, not a boardroom.</h2>
    </div>
      <p className="text-black mb-8 text-lg leading-relaxed text-3xl">
    Our founder spent years inside India’s largest B2B platform, working closely with MSMEs,
factory owners, and manufacturers across the country. What he saw wasn’t a technology
problem — it was a visibility problem. Thousands of genuinely capable suppliers were
invisible to buyers simply because they didn’t know how to rank. That insight didn’t stay in a
notebook. It became Inquiry Bazaar.
      </p>

    {/* Timeline */}
   <div className="relative border-l border-gray-300 pl-8 space-y-6">

  {[
    {
      icon: Brain,
      title: "The learning years",
      content:
        "Deep inside India’s B2B ecosystem — studying buyer behaviour, understanding supplier pain, and mapping what actually drives inquiries.",
    },
    {
      icon: AlertTriangle,
      title: "The problem was clear",
      content:
        "Good suppliers were losing to average ones — not because of quality, but because of poor listing rankings and zero digital strategy.",
    },
    {
      icon: Rocket,
      title: "July 16, 2024 — Inquiry Bazaar is founded",
      content:
        "Promozione Branding Private Limited was incorporated with a single mission: make great suppliers findable, and help serious buyers reach them faster.",
    },
    {
      icon: RefreshCcw,
      title: "The name change that said everything",
      content:
        "When we renamed to Inquiry Bazaar, it wasn’t a rebrand. It was a declaration — every inquiry on this platform has a purpose.",
    },
  ].map((item, i) => {
    const Icon = item.icon;
    const isOpen = activeIndex === i;

    return (
      <div key={i} className="relative">

        {/* Dot */}
        <div className="absolute -left-[38px] top-3 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-sm">
          <Icon className="w-4 h-4 text-[#E67C29]" />
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300">

          {/* Header */}
          <button
            onClick={() => setActiveIndex(isOpen ? null : i)}
            className="w-full text-left p-6 flex justify-between items-center"
          >
            <p className="text-black text-xl font-bold">
              {item.title}
            </p>

            <span className="text-[#E67C29] text-xl">
              {isOpen ? "−" : "+"}
            </span>
          </button>

          {/* Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-40 px-6 pb-6" : "max-h-0 px-6"
            }`}
          >
            <p className="text-black text-lg leading-relaxed">
              {item.content}
            </p>
          </div>

        </div>
      </div>
    );
  })}

</div>

  </div>
</section>

      {/* PASSION */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-16">

   {/* Badge */}
          <span className="inline-block px-5 py-2 rounded-full bg-yellow-400/20 text-black text-sm font-semibold tracking-wide uppercase mb-6">
         OUR PASSION
          </span>

          <h2 className="text-3xl font-bold leading-relaxed">
         We lose sleep over one thing — <br /> the supplier who deserved the
order but never got it.
          </h2>

          <p className="text-gray-800 text-md mt-2">
            We are not just building a platform. We are fighting for every MSME that ever lost a deal to a
            competitor with a better listing, not a better product. Our passion is simple and unshakeable:
            India’s manufacturers and factory owners are world-class. They just need the world to find
            them. Every feature we build, every tool we create, every ranking we improve — it all comes
            from that one fire inside us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Underdog FocusWe fight for the underdog supplier",
              desc: "The small manufacturer with a great product who keeps getting buried under big-budget listings. We level that playing field.",
            },
            {
              title: "We obsess over real inquiries",
              desc: "Not impressions. Not views. Actual buyers sending actual messages. That’s the only metric that matters to us.",
            },
            {
              title: "We believe in India’s makers",
              desc: "India’s MSMEs are the backbone of the economy. Our passion is making sure their products reach buyers across every city, state, and border.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-2xl border border-[#1C3B6D] 
              shadow-[0_10px_30px_rgba(0,0,0,0.06)] 
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] 
              hover:-translate-y-2 transition"
            >
              <h3 className="font-semibold text-xl mb-4 text-[#0B1F3A]">
                {item.title}
              </h3>
              <p className="text-black text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-[#0B1F3A] text-white py-20 px-6 md:px-16 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl font-semibold leading-relaxed mb-4">
          “Every MSME in India deserves a fair shot at the right buyer. We’re here to
make sure ranking — not luck — decides who gets found.”
          </p>
          <p className="text-white/70">
          Sourabh Sachin — Founder & Director Inquiry Bazaar
          </p>
        </div>
      </section>

  {/* DIFFERENT */}
<section className="py-15 px-6 md:px-16 ">
  <div className="max-w-7xl mx-auto text-center">

   {/* Badge */}
          <span className="inline-block px-5 py-2 rounded-full bg-yellow-400/20 text-black text-sm font-semibold tracking-wide uppercase mb-6">
       WHAT MAKES US DIFFERENT
          </span>

    {/* HEADING */}
    <h2 className="text-4xl font-bold mb-4">
      <span className="text-[#0D2865]">Other platforms list you. We give you verified inquires.</span>
    </h2>

    <p className="text-gray-800 text-lg mb-14">
   At Inquiry Bazaar, your listing isn’t just a profile on a page. It’s a strategically optimised
presence built to attract genuine buyers — not just clicks.
We combine marketplace infrastructure with deep MSME expertise so your products get
seen by people who are ready to buy.
    </p>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "High-ranking listings",
          icon: TrendingUp,
          desc:"We optimise every supplier profile for maximum discoverability — because being listed isn’t enough, being found is everything."
        },
        {
          title: "Built for manufacturers",
          icon: Factory,
          desc:"Designed specifically for Indian MSMEs, factory owners, and wholesalers — not generic global sellers."
        },
        {
          title: "Intent-driven buyers",
          icon: Target,
          desc:"We attract buyers who are serious — not browsers. Every inquiry on our platform comes with purchase intent."
        },
        {
          title: "Supplier-first philosophy",
          icon: Users,
          desc:"We sit on the supplier’s side of the table. Your growth is our metric, not just your registration."
        },
        {
          title: "Verified inquiry system",
          icon: ShieldCheck,
          desc:"We verify every inquiry to ensure quality and reduce noise, so you can focus on real business opportunities, not spam."
        },
        {
          title: "Performance-driven visibility",
          icon: BarChart3,
          desc:"Our algorithm ensures your products are seen by the right audience at the right time."

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
            <p className="text-xl font-bold text-black  leading-snug">
              {item.title}
            </p>

            <p className="text-gray-800 mt-3">
              {item.desc}
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




{/* OUR MISSION */}
<section className="py-24 px-6 md:px-16 bg-[#0B1F3A]">
  <div className="max-w-5xl mx-auto text-center">

    {/* Badge */}
    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase mb-6">
      OUR MISSION
    </span>

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
      Turning India’s hidden suppliers into India’s preferred suppliers.
    </h2>

    {/* Divider */}
    <div className="w-16 h-[2px] bg-[#E67C29] mx-auto mb-8"></div>

    {/* Content */}
    <p className="text-white/80 text-lg leading-relaxed max-w-6xl mx-auto">
      We believe the next wave of Indian B2B growth will come from empowered MSMEs —
      manufacturers and suppliers who have the right tools, the right visibility, and the right buyers
      knocking on their door. Inquiry Bazaar is that door.
    </p>

  </div>
</section>



{/* WHERE WE ARE GOING */}
<section className="py-15 px-6 md:px-16 bg-white">
  <div className="max-w-7xl mx-auto">

    {/* TOP TEXT */}
    <div className="max-w-5xl mx-auto text-center mb-20">

      {/* Badge */}
      <span className="inline-block px-4 py-1.5 rounded-full bg-[#E67C29]/10 text-[#E67C29] text-xs font-semibold tracking-wider uppercase mb-5">
       OUR VISION
      </span>

      <h2 className="text-3xl font-semibold text-[#0B1F3A] leading-tight mb-6">
        To become India’s most trusted B2B discovery platform —
        where every serious buyer finds the right supplier in minutes,
        not months.
      </h2>

      <p className="text-black max-w-full text-[17px] leading-relaxed w-full ">
        We envision a future where no Indian manufacturer is invisible. Where a factory in Ludhiana
        reaches a buyer in Surat instantly. Where a fabricator in Rajkot competes on quality — not
        just on who spends more on ads. We are building the infrastructure that connects ambition
        with opportunity, across every industry, every city, and every product category in India.
        Inquiry Bazaar will be the platform where India’s supply chain comes alive.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <div className="group relative p-8 rounded-2xl bg-white border border-gray-300 
        shadow-[0_10px_40px_rgba(0,0,0,0.05)] 
        hover:shadow-[0_25px_80px_rgba(0,0,0,0.1)] 
        transition-all duration-500 hover:-translate-y-2">

        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-[#E67C29] rounded-t-2xl opacity-0 group-hover:opacity-100 transition"></div>

        <p className="text-md font-semibold text-[#E67C29] mb-4 tracking-wide">
          → Pan-India reach
        </p>

        <p className="text-black text-[15px] leading-relaxed">
          Connecting suppliers from every state to buyers across the country — and eventually, beyond
          borders.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="group relative p-8 rounded-2xl bg-white border border-gray-300 
        shadow-[0_10px_40px_rgba(0,0,0,0.05)] 
        hover:shadow-[0_25px_80px_rgba(0,0,0,0.1)] 
        transition-all duration-500 hover:-translate-y-2">

        <div className="absolute top-0 left-0 w-full h-[3px] bg-[#E67C29] rounded-t-2xl opacity-0 group-hover:opacity-100 transition"></div>

        <p className="text-md font-semibold text-[#E67C29] mb-4 tracking-wide">
          → Smarter discovery
        </p>

        <p className="text-black text-[15px] leading-relaxed">
          Building ranking technology that rewards quality, not just budget — so the best supplier wins, not the
          biggest spender.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="group relative p-8 rounded-2xl bg-white border border-gray-300 
        shadow-[0_10px_40px_rgba(0,0,0,0.05)] 
        hover:shadow-[0_25px_80px_rgba(0,0,0,0.1)] 
        transition-all duration-500 hover:-translate-y-2">

        <div className="absolute top-0 left-0 w-full h-[3px] bg-[#E67C29] rounded-t-4xl opacity-0 group-hover:opacity-100 transition"></div>

        <p className="text-md font-semibold text-[#E67C29] mb-4 tracking-wide">
          → MSME empowerment
        </p>

        <p className="text-black text-[15px] leading-relaxed">
          Equipping every small business with the digital tools, visibility, and confidence to grow without
          depending on middlemen.
        </p>
      </div>

    </div>

  </div>
</section>





      {/* CTA */}
      <section className="bg-[#F7F6F2]   py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white flex flex-col rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100">
            
            <h2 className="text-3xl font-bold mb-4">
              Ready to stop being invisible?
            </h2>

            <p className="text-black text-lg mb-5">
              List your business on Inquiry Bazaar and start ranking today.
            </p>
<a className="underline text-black text-xl" href="    www.inquirybazaar.com">www.inquirybazaar.com</a>
          

          </div>
        </div>
      </section>

    </div>
  );
}