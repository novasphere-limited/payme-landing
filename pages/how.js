import HowSection from "@/components/HowSection";
import HowSub from "@/components/HowSubSection";
import Layout from "@/components/Layout";
import VideoComponent from "@/components/PayymeVideo";

export default function How() {
  return (
    <div className="bg-[#FAF8FE]">
      <Layout>
        <div className="mb-[80px]">
          <HowSection />
          <HowSub />
          <VideoComponent />
        </div>
      </Layout>
    </div>
  );
}
