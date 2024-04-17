import Image from "next/image";
import LinkBtn from "./LinkBtn";

export default function AboutUs() {
  return (
    <div className="xl:px-[130px] lg:px-[90px] md:px-[60px] sm:px-[30px] px-3 xl:mt-[87px] mt-5 md:mt-9">
      <h1 className="text-5xl text-warning600 xl:mb-[64px] mb-4 md:mb-9 text-center font-medium">
        About Us
      </h1>
      <div className="md:flex xl:gap-[68px] md:gap-[48px] gap-[16px] items-center">
        <div className="w-full">
          <h1 className="font-medium text-5xl mb-4 leading-[48px] text-[#043623]">
            Our Company
          </h1>
          <p className="text-base font-normal mb-4">
            Innovation meets inclusion to redefine financial freedom. At PayyMe,
            we plan to make financial services accessible to everyone,
            especially those with little knowledge about how technology works.
          </p>
          <LinkBtn href="/contact" text="Get Started" />
        </div>

        <div className="w-full h-[331px] overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1713356928/PayyMe/People_at_work_e8ekra.png"
            alt="customer testimony imge"
            width={520}
            height={331}
            className="rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
