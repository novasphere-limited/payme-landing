import AboutHerosection from "@/components/AboutHerosection";
import Ceo from "@/components/Ceo";
import ClientTestimony from "@/components/ClientTestimony";
import Mission from "@/components/Mission";
import StartProject from "@/components/StartProject";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";

export default function About() {
  return (
    <div>
      <AboutHerosection />
      <Mission />
      <Ceo />
      <Team />
      <ClientTestimony />
      <StartProject />
      <Subscribe />
    </div>
  );
}
