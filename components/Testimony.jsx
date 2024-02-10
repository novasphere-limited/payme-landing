import Image from "next/image";
import TestimonySlider from "./TestimonySlider";
import { TestimonySliderData } from "@/contants";

export default function Testimony() {
  return (
    <div className="main-container">
      
      <TestimonySlider ArrayList={TestimonySliderData} />
    </div>
  );
}
