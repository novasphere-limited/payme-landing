import Faq from "@/components/faq/Faq";
import FaqOptionOne from "@/components/faq/FaqOptionOne";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import NavTab from "@/components/NavTab";

export default function FaqIndividual() {
  return (
    <Layout>
      <div className="bg-[#FAF8FE] navbar-margin">
        <Faq />
        <NavTab />
        <FaqOptionOne />
        <Footer />
      </div>
    </Layout>
  );
}
