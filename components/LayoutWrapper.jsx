"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/landingpage/Navbar";
import Footer from "@/components/landingpage/Footer";
  
export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const hideLayout =
    pathname.startsWith("/studio") || pathname.startsWith("/login");

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer/>}
    </>
  );
}