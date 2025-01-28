import NavTab from "@/components/NavTab";
import Faq from "@/components/faq/Faq";
import Layout from "@/layout";
import Footer from "@/parts/footer";

export default function FaqIndividualPage() {
  return (
    <Layout>
      <div className="bg-[#FAF8FE] navbar-margin">
        <Faq />
        <NavTab />
        <Footer />
      </div>
    </Layout>
  );
}
