import Faq from "@/components/faq/Faq";
import FaqOptionFour from "@/components/faq/FaqOptionFour";
import NavTab from "@/components/NavTab";
import Layout from "@/layout";

export default function FaqIndividual() {
  return (
    <Layout>
      <div className="bg-[#FAF8FE] navbar-margin">
        <Faq />
        <NavTab />
        <FaqOptionFour />
      </div>
    </Layout>
  );
}
