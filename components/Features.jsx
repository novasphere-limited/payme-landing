import Image from "next/image";
import CarouselSlide from "./FeaturesSlider";

export default function Features() {
  return (
    <div className="main-container md:pt-8 pt-4">
      <h1 className="font-medium xl:text-5xl md:text-3xl text-warning600 text-center leading-[48px] mb-2 text-xl">
        Our Features
      </h1>
      <p
        className="md:text-base font-normal mb-4 text-center mx-auto text-sm"
        style={{ maxWidth: "602px" }}
      >
        By banking the unbanked/unbankable, we are taking bold strides towards
        financial inclusion and bridging the gaps through innovation(one text at
        a time).
      </p>
      <CarouselSlide />
    </div>
  );
}
