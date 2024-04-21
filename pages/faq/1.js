import Faq from "@/components/faq/Faq";
import FaqOptionOne from "@/components/faq/FaqOptionOne";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import NavTab from "@/components/NavTab";

export default function FaqIndividual() {
  return (
    <div className="bg-[#FAF8FE]">
      <Layout>
        <Faq />
        <NavTab />
        <FaqOptionOne />
        <Footer />
      </Layout>
    </div>
  );
}
