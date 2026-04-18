"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Landingpage/Navbar";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const hideLayout =
    pathname.startsWith("/studio") || pathname.startsWith("/login");

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
    </>
  );
}