import Image from "next/image";
import CarouselSlide from "./FeaturesSlider";

export default function Features() {
  return (
    <div className="main-container xl:pt-[115px] pt-[44px] sm:pt-[64px] md:pt-[84px] lg:pt-[104px]">
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
