import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Best B2B Marketplace in India | B2B Portal & Industrial Marketplace",
  description:
    "Inquiry Bazaar is a top B2B marketplace in India connecting verified buyers, suppliers, and manufacturers. Grow your business through the best B2B platform and industrial marketplace for genuine leads and business opportunities.",
  icons: {
    icon: "/logoo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
     <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}