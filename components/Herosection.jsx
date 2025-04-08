import Image from "next/image";
import Typer from "./typed";
import OpenSms from "./opensms";

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
          Without worrying about connectivity, PayyMe helps small businesses
          and  individuals pay and get paid
        </h3>
        <OpenSms text="Get Started" />
      </div>
      <div className="w-full h-auto overflow-hidden rounded-lg">
        <Image
          src="/asset/hero-herosect.png"
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
