"use client";

import { FaApple, FaAndroid, FaMobileAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#f3f3f3] text-gray-700 text-[15px]">
      
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-4 border-b border-gray-300">
        
    

        {/* Right - Social Icons */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span className="font-medium text-gray-600">Follow Us On:</span>
          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube].map((Icon, i) => (
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
          <p>About Us</p>
          <p>Investors Section</p>
          <p>Partner With Us</p>
          <p>Success Stories</p>
          <p>Press Releases</p>
          <p>Advertise With InquiryBazaar</p>
        </div>

        {/* Column 2 */}
        <div className="space-y-3">
          <p>Help</p>
          <p>Feedback</p>
          <p>Complaint</p>
          <p>Customer Care</p>
          <p>Contact Us</p>
          <p>Enterprise Solution</p>
          <p>Jobs & Careers</p>
        </div>

        {/* Column 3 */}
        <div className="space-y-3">
          <p>Supplier Tool Kit</p>
          <p>Seller Tools</p>
          <p>Latest BuyLead</p>
          <p>Learning Centre</p>
          <p>Bug Bounty</p>
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
          <p className="font-semibold text-gray-800">Accounting Solutions</p>
          <p>Accounting Software</p>
          <p>Tally On Mobile</p>
          <p>GST E-Invoice</p>
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