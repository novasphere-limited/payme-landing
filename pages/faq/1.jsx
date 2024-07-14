import Faq from "@/components/faq/Faq";
import FaqOptionOne from "@/components/faq/FaqOptionOne";
import Layout from "@/layout";
import NavTab from "@/components/NavTab";
import Footer from "@/parts/footer";

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
