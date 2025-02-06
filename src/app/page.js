
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer";
import CategoryShowcase from "@/components/Home/CategoryShowcase/CategoryShowcase";
import ProductsShowcase from "@/components/Home/ProductsShowcase/ProductsShowcase";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="">
    <Banner></Banner>
    <div className="">
      <Marquee  loop={0} gradient={true} pauseOnHover={true} speed={40}>
      <p className="font-bold my-5">🚀 "Nimble Ware Bangladesh is Now Open! Shop Trendy & Comfortable Apparel Today!"🛍️ </p>
      </Marquee>
    </div>
    <div className="mb-20">
    <CategoryShowcase></CategoryShowcase>
    </div>
    <div className="mb-20">
      <ProductsShowcase></ProductsShowcase>
    </div>
    <Footer></Footer>
    </div>
  );
}
