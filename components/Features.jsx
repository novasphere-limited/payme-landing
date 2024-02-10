import { FeaturesSliderData } from "@/contants";
import FeaturesSlider from "./FeaturesSlider";

export default function Features() {
  return (
    <div className="main-container">
      <h1 className="header-2_bold mb-2 text-center">Our Features</h1>
      <p className="label-4_regular mb-4 text-center">
        By banking the unbanked/unbankable, we are taking bold strides towards
        financial inclusion and bridging the gaps through innovation(, one text
        at a time).
      </p>
      <FeaturesSlider ArrayList={FeaturesSliderData} width={931} height={517} />
    </div>
  );
}
