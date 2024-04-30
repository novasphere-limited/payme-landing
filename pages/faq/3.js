import Faq from "@/components/faq/Faq";
import FaqOptionThree from "@/components/faq/FaqOptionThree";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import NavTab from "@/components/NavTab";

export default function FaqIndividual() {
  return (
    <Layout>
      <div className="bg-[#FAF8FE] navbar-margin">
        <Faq />
        <NavTab />
        <FaqOptionThree />
        <Footer />
      </div>
    </Layout>
  );
}
