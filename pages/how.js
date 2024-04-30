import HowSection from "@/components/HowSection";
import HowSub from "@/components/HowSubSection";
import Layout from "@/components/Layout";
import VideoComponent from "@/components/PayymeVideo";

export default function How() {
  return (
    <Layout>
      <div className="bg-[#FAF8FE] navbar-margin">
        <div className="mb-[80px]">
          <HowSection />
          <HowSub />
          <VideoComponent />
        </div>
      </div>
    </Layout>
  );
}
