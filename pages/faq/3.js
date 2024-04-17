import Faq from "@/components/faq/Faq";
import FaqOptionThree from "@/components/faq/FaqOptionThree";
import Footer from "@/components/Footer";
import NavTab from "@/components/NavTab";

export default function FaqIndividual() {
  return (
    <div className="bg-[#FAF8FE]">
      <Faq />
      <NavTab />
      <FaqOptionThree />
      <Footer />
    </div>
  );
}
