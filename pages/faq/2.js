import Faq from "@/components/faq/Faq";
import FaqOptionTwo from "@/components/faq/FaqOptionTwo";
import Footer from "@/components/Footer";
import NavTab from "@/components/NavTab";

export default function FaqIndividual() {
  return (
    <div className="bg-[#FAF8FE]">
      <Faq />
      <NavTab />
      <FaqOptionTwo />
      <Footer />
    </div>
  );
}
