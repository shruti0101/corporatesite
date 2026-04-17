import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landingpage/Navbar";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        <Navbar/>
        {children}</body>
    </html>
  );
}