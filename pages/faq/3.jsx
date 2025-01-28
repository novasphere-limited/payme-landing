import Faq from "@/components/faq/Faq";
import FaqOptionThree from "@/components/faq/FaqOptionThree";
import Layout from "@/layout";
import NavTab from "@/components/NavTab";

export default function FaqIndividual() {
  return (
    <Layout>
      <div className="bg-[#FAF8FE] navbar-margin">
        <Faq />
        <NavTab />
        <FaqOptionThree />
      </div>
    </Layout>
  );
}
