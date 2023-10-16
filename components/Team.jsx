import Image from "next/image";
import TeamSlider from "./TeamSlider";

export default function Team() {
  return (
    <div className="main-container">
      <h1 className="header-1_bold mb-4 text-center">The team</h1>
      <h3 className="header-3_regular mb-3 text-center">
        Meet the Board and Management team
      </h3>
      <TeamSlider />
    </div>
  );
}
