"use client";



import React, { useState } from "react";
const Page = () => {

const [loading, setLoading] = useState(false);
const [submitted, setSubmitted] = useState(false);


const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading || submitted) return; // prevent double click

  setLoading(true);

  const formData = new FormData(e.target);

  try {
    const res = await fetch("/api/career", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      alert("Application submitted successfully!");
      setSubmitted(true); 
    } else {
      alert("Something went wrong");
    }
  } catch (err) {
    alert("Error submitting form");
  }

  setLoading(false);
};



  return (


    <>
    
    <section className="relative w-full mt-10 h-[100vh] bg-[#1A4D6E] flex items-center overflow-hidden">
      
      {/* Background Circles */}
      <div className="absolute right-[-100px] top-[-80px] w-[400px] h-[400px] bg-white/5 rounded-full"></div>
      <div className="absolute right-[140px] bottom-[10px] w-[300px] h-[300px] bg-white/5 rounded-full"></div>

      {/* Content */}
      <div className=" px-6 md:px-12">
        <div className="max-w-4xl">
          
          {/* Badge */}
          <span className="inline-block px-5 py-2 rounded-full bg-yellow-400/20 text-yellow-400 text-sm font-semibold tracking-wide uppercase mb-6">
            Join Our Team
          </span>

          {/* Heading */}
          <h1 className="text-white text-4xl font-serif md:text-[70px] font-extrabold leading-tight mb-6">
            Start Your Journey With <br />
            Inquiry Bazaar
          </h1>

          {/* Description */}
          <p className="text-white/80 text-2xl leading-relaxed max-w-2xl">
            Share your resume and our talent team will match you with the right
            opportunity. We believe every great career begins with a conversation.
          </p>

        </div>
      </div>
    </section>








<section className="bg-[#f3f1ec] py-20 px-4 md:px-10">
  <div className="max-w-7xl  mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

    {/* LEFT SIDE */}
    <div className="lg:col-span-2 ">

      {/* Heading */}
      <h2 className="text-[38px] md:text-[44px] font-serif text-[#1a1a1a] mb-2">
        Tell Us About Yourself
      </h2>
      <p className="text-[#6b7280] text-[15px] mb-10">
        Fill in your details below — takes less than 5 minutes.
      </p>

      {/* FORM BOX */}
      <div className="bg-white border border-[#e5e2dc] rounded-2xl p-8">

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* ROW 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-[14px] text-[#1f2937]">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                name="firstName"
                placeholder="Aryan"
                className="mt-2 w-full h-[46px] px-4 bg-white border border-[#e3e0da] rounded-lg focus:outline-none"
              />
            </div>

            <div>
              <label className="text-[14px] text-[#1f2937]">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                name="lastName"
                placeholder="Sharma"
                className="mt-2 w-full h-[46px] px-4 bg-white border border-[#e3e0da] rounded-lg"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-[14px] text-[#1f2937]">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                placeholder="aryan@email.com"
                className="mt-2 w-full h-[46px] px-4 bg-white border border-[#e3e0da] rounded-lg"
              />
            </div>

            <div>
              <label className="text-[14px] text-[#1f2937]">
                Phone Number
              </label>
              <input
                name="phone"
                placeholder="+91 98765 43210"
                className="mt-2 w-full h-[46px] px-4 bg-white border border-[#e3e0da] rounded-lg"
              />
            </div>
          </div>

          {/* ROW 3 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-[14px] text-[#1f2937]">
                Current Location <span className="text-red-500">*</span>
              </label>
              <input
                name="location"
                placeholder="Delhi, India"
                className="mt-2 w-full h-[46px] px-4 bg-white border border-[#e3e0da] rounded-lg"
              />
            </div>

            <div>
              <label className="text-[14px] text-[#1f2937]">
                Years of Experience
              </label>

              <select
               name="experience"  className="mt-2 w-full h-[46px] px-4 bg-white border border-[#e3e0da] rounded-lg">
                <option>Select range</option>
                <option>0 - 1</option>
                <option>1 - 3</option>
                <option>3 - 5</option>
                <option>5+</option>
              </select>
            </div>
          </div>

          {/* AREA */}
          <div>
            <label className="text-[14px] text-[#1f2937]">
              Area of Interest <span className="text-red-500">*</span>
            </label>

            <select name="feild" className="mt-2 w-full h-[46px] px-4 bg-white border border-[#e3e0da] rounded-lg">
              
              <option>Select department</option>
              <option>Marketing</option>
               <option>Engineering</option>
              <option>Sales</option>
              <option>Product</option>
              <option>Engineering</option>
            </select>
          </div>

          {/* LINKEDIN */}
          <div>
            <label className="text-[14px] text-[#1f2937]">
              LinkedIn Profile or Portfolio URL
            </label>
            <input

            name="linkedin"
              placeholder="https://linkedin.com/in/yourname"
              className="mt-2 w-full h-[46px] px-4 bg-white border border-[#e3e0da] rounded-lg"
            />
          </div>

          {/* UPLOAD */}
          <div>
            <label className="text-[14px] text-[#1f2937]">
              Upload Your Resume <span className="text-red-500">*</span>
            </label>

            <div className="mt-3 border border-dashed border-[#d6d3cd] rounded-xl p-10 text-center bg-white">
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="hidden"
                id="resume"
              />
              <label htmlFor="resume" className="cursor-pointer">
                <div className="text-gray-400 text-2xl mb-2">📄</div>
                <p className="text-[14px] text-blue-600 font-medium">
                  Click to upload
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  PDF, DOC, DOCX — Max 5 MB
                </p>
              </label>
            </div>
          </div>

          {/* TEXTAREA */}
          <div>
            <label className="text-[14px] text-[#1f2937]">
              Anything you'd like us to know?
            </label>
            <textarea
            name="message"
              rows={4}
              className="mt-2 w-full px-4 py-3 bg-white border border-[#e3e0da] rounded-lg"
              placeholder="Tell us about your career goals..."
            />
          </div>

          {/* BUTTON */}
       <button
  type="submit"
  disabled={loading || submitted}
  className={`mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition
    ${
      loading || submitted
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-[#1f4f6b] hover:opacity-90 text-white"
    }
  `}
>
  {loading ? (
    <>
      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      Sending...
    </>
  ) : submitted ? (
    "Submitted ✅"
  ) : (
    "Submit Application"
  )}
</button>

        </form>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="space-y-6">

      {/* CARD 1 */}
      <div className="bg-white border border-[#e5e2dc] rounded-2xl p-6">
        <div className="w-10 h-10 bg-[#e7eef5] rounded-lg flex items-center justify-center mb-4">
          ⚡
        </div>
        <h4 className="text-[16px] font-semibold text-[#1a1a1a]">
          Quick & Easy
        </h4>
        <p className="text-[14px] text-gray-500 mt-2">
          Our streamlined process ensures your profile reaches the right hiring manager within 48 hours.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white border border-[#e5e2dc] rounded-2xl p-6">
        <div className="w-10 h-10 bg-[#f4efe6] rounded-lg flex items-center justify-center mb-4">
          🔒
        </div>
        <h4 className="text-[16px] font-semibold text-[#1a1a1a]">
          100% Confidential
        </h4>
        <p className="text-[14px] text-gray-500 mt-2">
          Your information is handled with strict privacy. We never share your data without your consent.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white border border-[#e5e2dc] rounded-2xl p-6">
        <div className="w-10 h-10 bg-[#e9f0ee] rounded-lg flex items-center justify-center mb-4">
          💬
        </div>
        <h4 className="text-[16px] font-semibold text-[#1a1a1a]">
          Personalized Response
        </h4>
        <p className="text-[14px] text-gray-500 mt-2">
          Every submission gets reviewed by a real person — no bots, no automated rejections.
        </p>
      </div>

      {/* CONTACT */}
      <div className="bg-[#1f4f6b] text-white p-6 rounded-2xl">
        <p className="text-sm opacity-80">Need help?</p>
        <h4 className="text-lg font-semibold mt-1 mb-3">
          Talk to our HR team
        </h4>
        <p className="text-sm">📧 careers@inquirybazaar.com</p>
        <p className="text-sm mt-1">📞 +91 1145678900</p>
      </div>

    </div>
  </div>
</section>
    </>
  );
};

export default Page;