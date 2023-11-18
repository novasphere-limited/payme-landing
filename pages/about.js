import AboutHerosection from "@/components/AboutHerosection";
import Ceo from "@/components/Ceo";
import ClientTestimony from "@/components/ClientTestimony";
import ContactSection from "@/components/ContactSection";
import Layout from "@/components/Layout";
import Mission from "@/components/Mission";
import StartProject from "@/components/StartProject";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";

export default function About() {
  return (
    <div>
      <Layout>
        <AboutHerosection />
        <Mission />
        <Ceo />
        <Team />
        <ClientTestimony />
        <ContactSection />
        <StartProject />
        <Subscribe />
      </Layout>
    </div>
  );
}
