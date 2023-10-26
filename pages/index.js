import Choose from "@/components/Choose";
import ClientTestimony from "@/components/ClientTestimony";
import OurWork from "@/components/OurWork";
import Subscribe from "@/components/Subscribe";
import Todo from "@/components/Todo";
import HeroSection from "@/components/Herosection";

export default function NovasphereHome() {
  return (
    <div>
      <HeroSection />
      <Todo />
      <OurWork />
      <Choose />
      <ClientTestimony />
      <Subscribe />
    </div>
  );
}
