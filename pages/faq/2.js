import Faq from "@/components/faq/Faq";
import FaqOptionTwo from "@/components/faq/FaqOptionTwo";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import NavTab from "@/components/NavTab";

export default function FaqIndividual() {
  return (
    <div className="bg-[#FAF8FE]">
      <Layout>
        <Faq />
        <NavTab />
        <FaqOptionTwo />
        <Footer />
      </Layout>
    </div>
  );
}
