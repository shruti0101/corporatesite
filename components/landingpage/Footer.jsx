"use client";

import {
  FaApple,
  FaAndroid,
  FaMobileAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const sisterSites = [
    {
      name: "Promozione Branding",
      href: "https://www.promozionebranding.com/",
    },
    { name: "Promotion Branding", href: "https://www.promotionbranding.com/" },
    { name: "Promote Bharat", href: "https://promotebharat.com/" },
    {
      name: "Top 10 Digital Marketing Agency",
      href: "https://promozionebranding.com/",
    },
  ];

  const about = [
    
    { name: "Who we are ", href: "/about/whoweare" },
    { name: "Who we do ", href: "/about/whowedo" },
    { name: "Career ", href: "/career" },
    { name: "Contact us", href: "/" },
    { name: "Blog", href: "/blogs" },
  ];
  const helpLinks = [
    
    { name: "FAQs", href: "https://www.inquirybazaar.com/faqs" },
    {
      name: "Privacy Policy",
      href: "https://www.inquirybazaar.com/privacy-policy",
    },
    {
      name: "Terms & Conditions",
      href: "https://www.inquirybazaar.com/terms-conditions",
    },
    { name: "Write to Management", href: "mailto:care@inquirybazaar.com" },
  ];

  const life = [
    
    { name: "Career", href: "/career" },
    { name: "Employee Speaks", href: "/employee-speaks" },
    { name: "Learning & Development", href: "/learning-development" },
    { name: "Submit Resume", href: "submit-resume" },
  ];

  return (
    <footer className="bg-[#f3f3f3] text-gray-700 text-[15px]">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-4 border-b border-gray-300">
        {/* Right - Social Icons */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span className="font-medium text-gray-600">Follow Us On:</span>
          <div className="flex gap-3">
            {[
              FaFacebookF,
              FaInstagram,
              FaXTwitter,
              FaLinkedinIn,
              FaYoutube,
            ].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-white text-lg"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 px-6 md:px-16 py-8">
        {/* Column 1 */}
        
        <div className="space-y-3">
          <p className="capitalize font-medium">About</p>
          {about?.map((site, i) => (
            <a key={i} href={site.href} className="block hover:text-blue-500">
              {site.name}
            </a>
          ))}
        </div>

        {/* Column 2 */}
        <div className="space-y-3">
          <p className="capitalize font-medium">Help</p>
          {helpLinks?.map((site, i) => (
            <a key={i} href={site.href} className="block hover:text-blue-500">
              {site.name}
            </a>
          ))}
        </div>

        {/* Column 3 */}
        {/* <div className="space-y-3">
          <p>Supplier Tool Kit</p>
          <p>Seller Tools</p>
          <p>Latest BuyLead</p>
          <p>Learning Centre</p>
          <p>Bug Bounty</p>
        </div> */}

        
        <div className="space-y-3">
          <p className="capitalize font-medium">Life At InquiryBazaar</p>
          {life?.map((site, i) => (
            <a key={i} href={site.href} className="block hover:text-blue-500">
              {site.name}
            </a>
          ))}
        </div>

        {/* Column 4 */}
        <div className="space-y-3">
          <p>Buyer Tool Kit</p>
          <p>Post Your Requirement</p>
          <p>Products You Buy</p>
          <p>Search Products & Suppliers</p>
        </div>

        {/* Column 5 */}
        <div className="space-y-3">
          <p className="capitalize font-medium">Sister Sites</p>
          {sisterSites?.map((site, i) => (
            <a key={i} href={site.href} className="block hover:text-blue-500">
              {site.name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center">
        {/* Bottom */}
        <div className="border-t border-gray-300 px-6 md:px-16 py-4 text-sm text-gray-600">
          Copyright © 2026 Inquiry Bazaar Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
