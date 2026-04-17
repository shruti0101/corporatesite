"use client";

import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  const menuData = [
    {
      title: "About Us",
      items: [
        { name: "Company Overview", href: "/about/company" },
        { name: "Leadership", href: "/about/leadership" },
        { name: "Career", href: "/career" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Life At InquiryBazaar",
      items: [
        { name: "Career", href: "/career" },
        { name: "Employee Speaks", href: "/employee-speaks" },
        { name: "Learning & Development", href: "/learning-development" },
        { name: "Submit Resume", href: "/submit-resume" },
      ],
    },
    {
      title: "Solutions",
      items: [
        { name: "Seller Solutions", href: "/solutions/seller" },
        { name: "Buyer Solutions", href: "/solutions/buyer" },
        { name: "Enterprise Tools", href: "/solutions/enterprise" },
        { name: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Media",
      items: [
        { name: "Press Releases", href: "/media/press" },
        { name: "News", href: "/media/news" },
        { name: "Events", href: "/media/events" },
        { name: "Gallery", href: "/media/gallery" },
      ],
    },
    {
      title: "Blog",
      items: [
        { name: "Latest Posts", href: "/blog" },
        { name: "Industry Insights", href: "/blog/insights" },
        { name: "Success Stories", href: "/blog/success" },
      ],
    },
  ];

  const quickLinks = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Help Center", href: "/help" },
    { name: "Support", href: "/support" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white">
      <div className="max-w-[1280px] mx-auto flex">

        {/* LOGO */}
        <Link href="/" className="w-[180px] flex items-center py-4">
          <Image
            src="/logoo.png"
            alt="logo"
            width={140}
            height={50}
            priority
          />
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex-1">

          {/* TOP BAR */}
          <div className="flex items-center justify-end gap-6 py-3">

            {/* SEARCH */}
            <div className="flex items-center w-[480px] h-[40px] bg-[#f1f1f1] rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 h-full px-5 bg-transparent text-[14px] outline-none"
              />
              <div className="w-[55px] h-full bg-[#e5e5e5] flex items-center justify-center">
                <Search className="w-[16px] h-[16px] text-gray-600" />
              </div>
            </div>

            {/* QUICK LINKS DROPDOWN */}
            <div className="relative group">
              <div className="flex items-center gap-1 text-[14px] text-gray-800 cursor-pointer">
                Quick Links
                <ChevronDown className="w-[14px] h-[14px]" />
              </div>

              <div className="absolute right-0 mt-2 w-[200px] bg-white border border-gray-200 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {quickLinks.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-200"></div>

          {/* MENU */}
          <div className="flex items-center justify-center gap-12 py-3 text-[17px] text-black">
            {menuData.map((menu, i) => (
              <div key={i} className="relative group">

                {/* TITLE */}
                <div className="flex items-center gap-1 cursor-pointer">
                  <span>{menu.title}</span>
                  <ChevronDown className="w-[14px] h-[14px]" />
                </div>

                {/* RED UNDERLINE */}
                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>

                {/* DROPDOWN */}
                <div className="absolute left-0 top-[132%] w-[220px] bg-white border border-gray-200 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

                  {menu.items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ))}

                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </header>
  );
}