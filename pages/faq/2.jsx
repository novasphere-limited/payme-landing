import Faq from "@/components/faq/Faq";
import FaqOptionTwo from "@/components/faq/FaqOptionTwo";
import Footer from "@/parts/footer";
import Layout from "@/layout";
import NavTab from "@/components/NavTab";

export default function FaqIndividual() {
  return (
    <Layout>
      <div className="bg-[#FAF8FE] navbar-margin">
        <Faq />
        <NavTab />
        <FaqOptionTwo />
        <Footer />
      </div>
    </Layout>
  );
}
