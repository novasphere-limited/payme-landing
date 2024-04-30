import Faq from "@/components/faq/Faq";
import FaqOptions from "@/components/faq/FaqOptions";
import Layout from "@/components/Layout";

export default function Blog() {
  return (
    <Layout>
      <div className="bg-[#FAF8FE] navbar-margin">
        <Faq />
        <FaqOptions />
      </div>
    </Layout>
  );
}
