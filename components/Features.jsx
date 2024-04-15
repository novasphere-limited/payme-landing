import Image from "next/image";
import FeaturesSlider from "./FeaturesSlider";

export default function Features() {
  return (
    <div className="main-container">
      <h1 className="font-medium text-5xl text-warning600 text-center leading-[48px] mb-2">
        Our Features
      </h1>
      <p
        className="text-base font-normal mb-4 text-center mx-auto"
        style={{ maxWidth: "602px" }}
      >
        By banking the unbanked/unbankable, we are taking bold strides towards
        financial inclusion and bridging the gaps through innovation(one text at
        a time).
      </p>
      <FeaturesSlider />
    </div>
  );
}
