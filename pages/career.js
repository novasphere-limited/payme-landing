import Layout from "@/components/Layout";
import CareerRole from "@/components/career/Role";
import CareerHerosection from "@/components/career/CareerHerosection";
import CareerMission from "@/components/career/CareerMission";
import CareerLife from "@/components/career/CareerLife";

export default function Career() {
  return (
    <div className="bg-[#FAF8FE]">
      <Layout>
        <div className="spec-pt">
          <CareerHerosection />
          <CareerMission />
          <CareerLife />
          <CareerRole />
        </div>
      </Layout>
    </div>
  );
}
