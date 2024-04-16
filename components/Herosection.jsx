import Image from "next/image";
import Link from "next/link";
import LinkBtn from "./LinkBtn";

export default function Herosection() {
  return (
    <div className="main-container md:flex items-center pt-4 xl:gap-4 gap-3">
      <div className="w-full">
        <h6 className="label-2_bold text-grnSec mb-3">PayyME</h6>
        <h2 className="xl:text-[40px] text-3xl font-medium">
          Transform Payments with Inclusion and Innovation -
          <span className="text-grnSec"> One </span>SMS at a Time
        </h2>
        <h3
          className="text-base font-normal md:mb-[42px] mb-4"
          style={{ maxWidth: "615px" }}
        >
          Without worrying about connectivity, PayyME helps small businesses
          and  individuals pay and get paid
        </h3>

        <LinkBtn href="/contact" text="Get Started" />
      </div>
      <div className="w-full h-[484px] overflow-hidden rounded-lg">
        <Image
          src="/asset/hero-img.png"
          alt="Farmer image"
          width={632}
          height={480}
          className="rounded-lg w-full"
          objectFit="cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}
