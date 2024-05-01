import Image from "next/image";
import CarouselSlide from "./FeaturesSlider";

export default function Features() {
  return (
    <div className="xl:px-8 lg:px-6 md:px-5 sm:px-4 px-3 xl:py-[115px] py-[44px] sm:py-[64px] md:py-[84px] lg:py-[104px]">
      <h1 className="font-medium xl:text-5xl md:text-3xl text-warning600 text-center leading-[48px] mb-2 text-xl">
        Our Features
      </h1>
      <p
        className="md:text-base font-normal md:mb-[44px] mb-6 text-center mx-auto text-sm"
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
