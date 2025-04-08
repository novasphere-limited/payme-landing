import AboutHerosection from "@/components/AboutHerosection";
import Team from "@/components/Team";
import Trust from "@/components/Trust";
import Layout from "@/layout";
import AboutUs from "@/components/AboutUs";
import Value from "@/components/CompanyValue";
import Subscribe from "@/components/Subscribe";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  const { tab } = router.query;

  useEffect(() => {
    if (tab) {
      const section = document.getElementById(tab.toString());
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [tab]);
  return (
    <Layout>
      <div className="bg-[#FAF8FE] navbar-margin " id="about-us">
        <AboutHerosection />
        <div className="about-bg-circ">
          <AboutUs />
          <div id="core-values">
            <Value />
          </div>
          <div id="leadership-team">
            <Team />
          </div>
          <Trust />
          <Subscribe />
        </div>
      </div>
    </Layout>
  );
}
