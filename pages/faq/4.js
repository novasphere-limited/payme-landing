import Faq from "@/components/faq/Faq";
import FaqOptionFour from "@/components/faq/FaqOptionFour";
import Footer from "@/components/Footer";
import NavTab from "@/components/NavTab";

export default function FaqIndividual() {
  return (
    <div className="bg-[#FAF8FE]">
      <Faq />
      <NavTab />
      <FaqOptionFour />
      <Footer />
    </div>
  );
}
