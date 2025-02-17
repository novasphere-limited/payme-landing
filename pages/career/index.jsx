import CareerRole from "@/components/career/Role";
import CareerHerosection from "@/components/career/CareerHerosection";
import CareerMission from "@/components/career/CareerMission";
import CareerLife from "@/components/career/CareerLife";
import Layout from "@/layout";
import CareerBenefits from "@/components/career/career-benefits";
import Perks from "@/components/career/perks";

export default function Career() {
  return (
    <div className="bg-[#FAF8FE] navbar-margin">
      <Layout>
        <div>
          <CareerHerosection />
          <CareerMission />
          <CareerLife />
          <CareerBenefits />
          <Perks />
          <CareerRole />
        </div>
      </Layout>
    </div>
  );
}
