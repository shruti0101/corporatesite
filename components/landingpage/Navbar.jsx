"use client";

import { ChevronDown, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const menuData = [
    {
      title: "About Us",
      items: [
        { name: "Who We Are", href: "/about/whoweare" },
        { name: "What We Do", href: "/about/whatwedo" },
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
        { name: "Latest Posts", href: "/blogs" },
    
      ],
    },
  ];

  const quickLinks = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Help Center", href: "/help" },
    { name: "Support", href: "/support" },
  ];

   const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    
     <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

        {/* TOP ROW */}
        <div className="flex items-center justify-between py-3">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image src="/logoo.png" alt="logo" width={120} height={40} />
          </Link>

          {/* DESKTOP RIGHT */}
          <div className="hidden md:flex items-center gap-6">

            {/* SEARCH */}
            <div className="flex items-center w-[300px] lg:w-[420px] h-[40px] bg-[#f1f1f1] rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 h-full px-4 bg-transparent text-sm outline-none"
              />
              <div className="w-[50px] h-full bg-[#e5e5e5] flex items-center justify-center">
                <Search className="w-4 h-4 text-gray-600" />
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="relative group">
              <div className="flex items-center gap-1 text-sm cursor-pointer">
                Quick Links
                <ChevronDown className="w-4 h-4" />
              </div>

              <div className="absolute right-0 mt-2 w-[200px] bg-white border shadow rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
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

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex justify-center gap-10 py-3 border-t">
          {menuData.map((menu, i) => (
            <div key={i} className="relative group">

              <div className="flex items-center gap-1 cursor-pointer">
                {menu.title}
                <ChevronDown className="w-4 h-4" />
              </div>

              {/* UNDERLINE */}
              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-500 transition-all group-hover:w-full"></span>

              {/* DROPDOWN */}
              <div className="absolute left-0 top-[130%] w-[220px] bg-white border shadow rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                {menu.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden border-t py-4 space-y-4">

            {/* SEARCH */}
            <div className="flex items-center w-full h-[40px] bg-[#f1f1f1] rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 h-full px-4 bg-transparent text-sm outline-none"
              />
              <div className="w-[50px] h-full bg-[#e5e5e5] flex items-center justify-center">
                <Search className="w-4 h-4 text-gray-600" />
              </div>
            </div>

            {/* MENU ITEMS */}
            {menuData.map((menu, i) => (
              <div key={i}>
                <button
                  onClick={() =>
                    setActiveMenu(activeMenu === i ? null : i)
                  }
                  className="w-full flex justify-between items-center py-2 font-medium"
                >
                  {menu.title}
                  <ChevronDown
                    className={`w-4 h-4 transition ${
                      activeMenu === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* SUBMENU */}
                {activeMenu === i && (
                  <div className="pl-4">
                    {menu.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="block py-2 text-sm text-gray-600"
                        onClick={() => setMobileOpen(!mobileOpen)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* QUICK LINKS MOBILE */}
            <div>
              <p className="font-semibold mb-2">Quick Links</p>
              {quickLinks.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="block py-2 text-sm text-gray-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>

          </div>
        )}
      </div>
    </header>
  );
}