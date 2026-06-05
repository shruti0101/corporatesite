"use client";

import { ChevronDown, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
export default function Navbar() {


  const searchPages = [
  { name: "Who We Are", href: "/about/whoweare" },
  { name: "What We Do", href: "/about/whatwedo" },
  { name: "Contact Us", href: "https://www.inquirybazaar.com/contact-us" },

  { name: "Career", href: "/career" },
  { name: "Employee Speaks", href: "/employee-speaks" },
  { name: "Learning & Development", href: "/learning-development" },
  { name: "Submit Resume", href: "/submit-resume" },

  { name: "Seller Solutions", href: "https://seller.inquirybazaar.com/" },
  { name: "Buyer Solutions", href: "https://buyer.inquirybazaar.com/" },
  { name: "Pricing", href: "/pricing" },

  { name: "Articles", href: "/blogs" },
  { name: "News", href: "/media/news" },
  { name: "Events", href: "/media/events" },
  { name: "Gallery", href: "/media/gallery" },

  { name: "Login", href: "https://dir.inquirybazaar.com/login" },
  { name: "Help Center", href: "https://www.inquirybazaar.com/faqs" },
  { name: "Support", href: "https://www.inquirybazaar.com/contact-us" },
];


const router = useRouter();

const [search, setSearch] = useState("");
const [results, setResults] = useState([]);










  const menuRef = useRef();
  const [quickOpen, setQuickOpen] = useState(false);






const handleSearch = (value) => {
  setSearch(value);

  if (!value.trim()) {
    setResults([]);
    return;
  }

  const filtered = searchPages.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  setResults(filtered);
};




  const menuData = [
    {
      title: "About Us",
      items: [
        { name: "Who We Are", href: "/about/whoweare" },
        { name: "What We Do", href: "/about/whatwedo" },
      
        { name: "Contact Us", href: "https://www.inquirybazaar.com/contact-us" },
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
        { name: "Seller Solutions", href: "https://seller.inquirybazaar.com/" },
        { name: "Buyer Solutions", href: "https://buyer.inquirybazaar.com/" },
   
        { name: "Pricing", href: "/pricing" },
      ],
    },
    { 
      title: "Media",
      items: [
            { name: "Articles", href: "/blogs" },
   
        { name: "News", href: "/media/news" },
        { name: "Events", href: "/media/events" },
        { name: "Gallery", href: "/media/gallery" },
      ],
    },
   
  
  ];

  const quickLinks = [
    { name: "Login", href: "https://dir.inquirybazaar.com/login" },
  
    { name: "Help Center", href: "https://www.inquirybazaar.com/faqs" },
    { name: "Support", href: "https://www.inquirybazaar.com/contact-us" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  // ✅ OUTSIDE CLICK CLOSE
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileOpen(false);
        setActiveMenu(null);
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [mobileOpen]);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* TOP BAR */}
        <div className="flex items-center justify-between py-3">
          <Link href="/">
            <Image src="/logoo.png" alt="logo" width={120} height={40} />
          </Link>

          {/* DESKTOP RIGHT */}
          <div className="hidden md:flex items-center gap-6">
           <div className="relative">
  <div className="flex items-center w-[300px] lg:w-[420px] h-[40px] bg-gray-100 rounded-full overflow-hidden">
    <input
      type="text"
      placeholder="Search pages..."
      value={search}
      onChange={(e) => handleSearch(e.target.value)}
      className="flex-1 px-4 bg-transparent text-sm outline-none"
    />

    <div className="w-[50px] flex justify-center">
      <Search className="w-4 h-4 text-gray-600" />
    </div>
  </div>

  {results.length > 0 && (
    <div className="absolute top-full mt-2 w-full bg-white border rounded-xl shadow-lg overflow-hidden z-50">
      {results.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="block px-4 py-3 text-sm hover:bg-gray-100"
          onClick={() => {
            setSearch("");
            setResults([]);
          }}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )}
</div>

            {/* ✅ QUICK LINKS (HOVER + CLICK) */}
            <div
              className="relative desktop-menu"
              onMouseEnter={() => setQuickOpen(true)}
              onMouseLeave={() => setQuickOpen(false)}
            >
              {/* BUTTON */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setQuickOpen(!quickOpen);
                  setActiveMenu(null); // optional
                }}
                className="flex items-center gap-1 text-sm cursor-pointer"
              >
                Quick Links
                <ChevronDown
                  className={`w-4 h-4 transition ${
                    quickOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* DROPDOWN */}
              <div
                className={`absolute right-0 mt-2 w-[200px] bg-white border shadow rounded-md transition-all duration-200 z-50 ${
                  quickOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                {quickLinks.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setQuickOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* ✅ DESKTOP MENU */}
        <div className="hidden md:flex justify-center gap-10 py-3 border-t desktop-menu">
          {menuData.map((menu, i) => (
            <div
              key={i}
              className="relative"
              onMouseEnter={() => setActiveMenu(i)} // ✅ hover open
              onMouseLeave={() => setActiveMenu(null)} // ✅ hover close
            >
              {/* TITLE */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMenu(activeMenu === i ? null : i); // ✅ click toggle
                }}
                className="flex items-center gap-1 cursor-pointer"
              >
                {menu.title}
                <ChevronDown
                  className={`w-4 h-4 transition ${
                    activeMenu === i ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-2 h-[2px] bg-red-500 transition-all ${
                  activeMenu === i ? "w-full" : "w-0"
                }`}
              ></span>

              {/* DROPDOWN */}
              <div
                className={`absolute left-0 top-[130%] w-[220px] bg-white border shadow rounded-md transition-all duration-200 z-50 ${
                  activeMenu === i
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                {menu.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setActiveMenu(null)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ✅ MOBILE MENU */}
        {mobileOpen && (
          <div ref={menuRef} className="md:hidden border-t py-4 space-y-4">
            {/* SEARCH */}
           <div className="relative">
  <div className="flex items-center w-[300px] lg:w-[420px] h-[40px] bg-gray-100 rounded-full overflow-hidden">
    <input
      type="text"
      placeholder="Search pages..."
      value={search}
      onChange={(e) => handleSearch(e.target.value)}
      className="flex-1 px-4 bg-transparent text-sm outline-none"
    />

    <div className="w-[50px] flex justify-center">
      <Search className="w-4 h-4 text-gray-600" />
    </div>
  </div>

  {results.length > 0 && (
    <div className="absolute top-full mt-2 w-full bg-white border rounded-xl shadow-lg overflow-hidden z-50">
      {results.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="block px-4 py-3 text-sm hover:bg-gray-100"
          onClick={() => {
            setSearch("");
            setResults([]);
          }}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )}
</div>

            {/* MOBILE DROPDOWN */}
            {menuData.map((menu, i) => (
              <div key={i} className="border-b pb-2">
                <button
                  onClick={() => setActiveMenu(activeMenu === i ? null : i)}
                  className="w-full flex justify-between items-center py-2 font-medium"
                >
                  {menu.title}
                  <ChevronDown
                    className={`transition ${
                      activeMenu === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeMenu === i
                      ? "max-h-60 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4">
                    {menu.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="block py-2 text-sm text-gray-600 hover:text-black"
                        onClick={() => {
                          setMobileOpen(false);
                          setActiveMenu(null);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
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
                  onClick={() => {
                    setMobileOpen(false);
                    setActiveMenu(null);
                  }}
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
