import HowSection from "@/components/HowSection";
import HowSub from "@/components/HowSubSection";
import Layout from "@/components/Layout";

export default function How() {
  return (
    <div className="bg-[#FAF8FE]">
      <Layout>
        <HowSection />
        <HowSub />
      </Layout>
    </div>
  );
}
