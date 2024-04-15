import Image from "next/image";
import Link from "next/link";
import LinkBtn from "./LinkBtn";

export default function Herosection() {
  return (
    <div className="main-container md:flex items-center ps-10">
      <div className="w-full">
        <h6 className="label-2_bold text-grnSec mb-3">PayyME</h6>
        <h2 className="text-[40px] font-medium">
          Transform Payments with Inclusion and Innovation -
          <span className="text-grnSec"> One </span>SMS at a Time
        </h2>
        <h3
          className="text-base font-normal mb-[42px]"
          style={{ maxWidth: "615px" }}
        >
          Without worrying about connectivity, PayyME helps small businesses
          and  individuals pay and get paid
        </h3>

        <LinkBtn href="#" text="Get Started" />
      </div>
      <div className="w-full">
        <Image
          src="/asset/hero-img.png"
          alt="Farmer image"
          width={583}
          height={480}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
