import Image from "next/image";
import FeaturesSlider from "./FeaturesSlider"

export default function Features() {
  return (
    <div className="main-container">
      <h1 className="header-1_black mb-4 text-center">Our Features</h1>
      <p className="label-4_regular mb-4 text-center">
        Transforming Ideas into Digital Realities, Where Vision Meets
        Innovation. Your Partner in Technology Evolution
      </p>
      <FeaturesSlider />
      {/* <div>
        <div className="flex justify-center m-4">
          <Image
            src="/asset/feature-img.png"
            alt="features images"
            width={931}
            height={517}
          />
        </div>
        <h5 className="label-1_medium text-grnSec mb-3 text-center">
          Pay Bills
        </h5>
        <h5 className="label-1_regular">
          Transforming Ideas into Digital Realities, Where Vision Meets
          Innovation. Your Partner in Technology Evolution Transforming Ideas
          into Digital Realities, Where Vision Meets Innovation. Your Partner in{" "}
        </h5>
      </div> */}
    </div>
  );
}
