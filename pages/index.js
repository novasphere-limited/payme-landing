import Subscribe from "@/components/Subscribe";
import Contact from "@/components/Contact";
import HelpPayment from "@/components/HelpPayment";
import Choose from "@/components/Choose";
import Features from "@/components/Features";
import Herosection from "@/components/Herosection";
import Slider from "@/components/Slide";
import VideoComponent from "@/components/PayymeVideo";
import Layout from "@/layout";

export default function Home() {
  return (
    <div className="bg-[#FAF8FE]">
      <Layout>
        <div className="index-bg spec-pt">
          <Herosection />
          <Features />
        </div>
        <Slider />
        <VideoComponent />
        <Choose />
        <HelpPayment />
        <Contact />
        <Subscribe />
      </Layout>
    </div>
  );
}
