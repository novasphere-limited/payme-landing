import AboutHerosection from "@/paymee/LandingPage/AboutHerosection";
import Mission from "@/paymee/LandingPage/Mission";
import Team from "@/paymee/LandingPage/Team";
import Ceo from "@/paymee/LandingPage/Ceo";
import Trust from "@/paymee/LandingPage/Trust";
import Layout from "@/components/Layout";
import OurGoal from "@/paymee/LandingPage/OurGoal";
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
