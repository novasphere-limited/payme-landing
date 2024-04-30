import AboutHerosection from "@/components/AboutHerosection";
import Team from "@/components/Team";
import Trust from "@/components/Trust";
import Layout from "@/components/Layout";
import AboutUs from "@/components/AboutUs";
import Value from "@/components/CompanyValue";
import Subscribe from "@/components/Subscribe";

export default function About() {
  return (
    <Layout>
      <div className="bg-[#FAF8FE] navbar-margin">
        <AboutHerosection />
        <AboutUs />
        <Value />
        <Team />
        <Trust />
        <Subscribe />
      </div>
    </Layout>
  );
}
