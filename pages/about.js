import AboutHerosection from "@/components/AboutHerosection";
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import Ceo from "@/components/Ceo";
import Trust from "@/components/Trust";
import Layout from "@/components/Layout";
import OurGoal from "@/components/OurGoal";
import Subscribe from "@/components/Subscribe";

export default function About() {
  return (
    <Layout>
      <AboutHerosection />
      <Mission />
      <OurGoal />
      <Ceo />
      <Team />
      <Trust />
      <Subscribe />
    </Layout>
  );
}
