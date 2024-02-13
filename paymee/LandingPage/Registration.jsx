import Slider from "../../components/Slider";
import { RegistrationSliderData } from "@/contants";

export default function Registration() {
  return (
    <div className="main-container">
      <Slider ArrayList={RegistrationSliderData} width={250} height={221} />
    </div>
  );
}
