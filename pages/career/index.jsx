import CareerRole from "@/components/career/Role";
import CareerHerosection from "@/components/career/CareerHerosection";
import CareerMission from "@/components/career/CareerMission";
import CareerLife from "@/components/career/CareerLife";
import Layout from "@/layout";

export default function Career() {
  return (
    <div className="bg-[#FAF8FE] navbar-margin">
      <Layout>
        <div>
          <CareerHerosection />
          <CareerMission />
          <CareerLife />
          <CareerRole />
        </div>
      </Layout>
    </div>
  );
}
