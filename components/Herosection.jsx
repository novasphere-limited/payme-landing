import Image from "next/image";
import Link from "next/link";

export default function Herosection() {
  return (
    <div className="main-container md:flex">
      <div className="w-full">
        <h6 className="label-2_bold text-grnSec mb-4">PayyME</h6>
        <h2 className="header-2_black mb-3">
          Elevating Possibilities Through Technology{" "}
          <span className="text-grnSec">Excellence</span>
        </h2>
        <h3 className="header-3_regular mb-4">
          Transforming Ideas into Digital Realities, Where Vision Meets
          Innovation. Your Partner in Technology Evolution
        </h3>
        <Link href="/">
          <button className="label-2_medium btn-primary_bg my-5">
            Get Started
          </button>
        </Link>
      </div>
      <div className="w-full">  
        <Image
          src="/asset/hero-img.png"
          alt="Farmer image"
          width={644}
          height={644}
          className="rounded-lg w-full"
        />
      </div>
    </div>
  );
}
