import Image from "next/image";
import Link from "next/link";
import LinkBtn from "./LinkBtn";

export default function Herosection() {
  return (
    <div className="xl:ms-[103px] mx-3 md:ms-[43px] sm:ms-[30px] ms-3 lg:ms-[73px] md:flex items-center pt-4 xl:gap-4 gap-3">
      <div className="w-full">
        <h6 className="label-2_bold text-grnSec mb-3">PayyME</h6>
        <h2 className="xl:text-[40px] md:text-3xl text-2xl font-medium mb-3">
          Transform Payments with Inclusion and Innovation -
          <span className="text-grnSec"> One </span>SMS at a Time
        </h2>
        <h3
          className="text-base font-normal xl:mb-[42px] mb-3"
          style={{ maxWidth: "615px" }}
        >
          Without worrying about connectivity, PayyME helps small businesses
          and  individuals pay and get paid
        </h3>

        <LinkBtn href="#" text="Get Started" />
      </div>
      <div className="w-full xl:h-[484px] h-[384px] overflow-hidden rounded-lg">
        <Image
          src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1713356965/PayyMe/Frame_1321315220_bxbqby.png"
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
