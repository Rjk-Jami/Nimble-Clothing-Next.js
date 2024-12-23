"use client"
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor_layout from "@/utils/CursorLayout/CursorLayout";
import Providers from "@/components/Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Nimble-Clothing",
//   description: "Nimble(Effortless Style, Unmatched Comfort):Nimble is a contemporary clothing brand designed for those who value both style and functionality. Our collections blend modern aesthetics with premium-quality fabrics, offering versatile pieces that move with you—whether you’re navigating a bustling city or embracing moments of quiet leisure. At Nimble, we believe in creating fashion that feels as good as it looks, empowering you to stay agile, confident, and effortlessly chic. From timeless wardrobe staples to trend-inspired designs, Nimble redefines everyday wear with a commitment to sustainability, comfort, and individuality",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  text-black  dark:text-white dark:bg-black`}
      >
      <Providers>
          {/* cursor layout */}
        <Cursor_layout></Cursor_layout>
        {/* navbar */}
        <Navbar/>
    
        {children}
        {/* footer */}
        <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
