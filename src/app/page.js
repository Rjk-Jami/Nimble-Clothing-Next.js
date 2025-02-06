
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer";
import CategoryShowcase from "@/components/Home/CategoryShowcase/CategoryShowcase";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
    <Banner></Banner>
    <CategoryShowcase></CategoryShowcase>
    <Footer></Footer>
    </div>
  );
}
