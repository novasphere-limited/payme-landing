import AboutHerosection from "@/components/AboutHerosection";
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import Ceo from "@/components/Ceo";
import Trust from "@/components/Trust";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <AboutHerosection />
      <Mission />
      <Team />
      <Ceo />
      <Trust />
    </Layout>
  );
}
