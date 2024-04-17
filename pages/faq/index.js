import Faq from "@/components/faq/Faq";
import FaqOptions from "@/components/faq/FaqOptions";
import Layout from "@/components/Layout";

export default function Blog() {
  return (
    <div className="bg-[#FAF8FE]">
      <Layout>
        <Faq />
        <FaqOptions />
      </Layout>
    </div>
  );
}
