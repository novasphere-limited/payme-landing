import Subscribe from "@/components/Subscribe";
import Contact from "@/components/Contact";
import HelpPayment from "@/components/HelpPayment";
import Choose from "@/components/Choose";
import Features from "@/components/Features";
import Herosection from "@/components/Herosection";
import Layout from "@/components/Layout";
import Slider from "@/components/Slide";
import VideoComponent from "@/components/PayymeVideo";

export default function Home() {
  return (
    <Layout>
      <div className="index-bg pt-[96px]">
        <Herosection />
        <Features />
      </div>
      <div className="bg-[#FAF8FE]">
        <Slider />
        <VideoComponent />
        <Choose />
        <HelpPayment />
        <Contact />
        <Subscribe />
      </div>
    </Layout>
  );
}
