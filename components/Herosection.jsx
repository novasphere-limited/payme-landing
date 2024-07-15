import Image from "next/image";
import Link from "next/link";
import LinkBtn from "./LinkBtn";
import Typer from "./typed";

export default function Herosection() {
  return (
    <div className="xl:ms-[103px] mx-3 md:ms-[43px] sm:ms-[30px] ms-3 lg:ms-[73px] md:flex items-center pt-7 xl:gap-4 gap-3">
      <div className="w-full">
        <Typer />
        <h2 className="xl:text-[40px] md:text-3xl text-4xl font-medium mb-3 mt-[42px]">
          Transform Payments with Inclusion and Innovation - One
          <span className="text-[#057310]"> SMS </span> at a Time
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
      <div className="w-full h-auto overflow-hidden rounded-lg">
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
