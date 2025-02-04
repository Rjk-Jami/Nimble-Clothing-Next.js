import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const geistSans = localFont({
  src: "/fonts/GeistVF.woff", 
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff", 
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Nimble-Wear",
  description: "Nimble-Wear is a clothing brand that offers a wide range of clothing items.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased text-black dark:text-white dark:bg-black`}
      >
        <Providers>
          <Navbar />
          {children}
          {/* <Footer />  */}
        </Providers>
      </body>
    </html>
  );
}
