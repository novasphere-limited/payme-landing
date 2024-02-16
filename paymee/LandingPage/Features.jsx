import { FeaturesSliderData } from "@/contants";
import FeaturesSlider from "../../components/FeaturesSlider";

export default function Features() {
  return (
    <div className="main-container pt-10">
      <h1 className="header-2_bold mb-2 text-center margin-extra">
        Our Features
      </h1>
      <div className="flex justify-center">
        <p className="label-4_regular mb-4 text-contain">
          By banking the unbanked/unbankable, we are taking bold strides towards
          financial inclusion and bridging the gaps through innovation(, one
          text at a time).
        </p>
      </div>
      <FeaturesSlider ArrayList={FeaturesSliderData} width={931} height={517} />
    </div>
  );
}
