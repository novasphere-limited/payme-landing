import Faq from "@/components/faq/Faq";
import FaqOptionFour from "@/components/faq/FaqOptionFour";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import NavTab from "@/components/NavTab";

export default function FaqIndividual() {
  return (
    <div className="bg-[#FAF8FE]">
      <Layout>
        <Faq />
        <NavTab />
        <FaqOptionFour />
        <Footer />
      </Layout>
    </div>
  );
}
