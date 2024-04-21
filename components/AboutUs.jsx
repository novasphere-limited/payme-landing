import Image from "next/image";
import LinkBtn from "./LinkBtn";

export default function AboutUs() {
  return (
    <div className="xl:px-[152px] px-3 sm:px-[32px] md:px-[52px] lg:px-[92px] xl:mt-[87px] mt-5 md:mt-9">
      <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-warning600 xl:mb-[64px] sm:mb-4 mb-2 md:mb-9 text-center font-medium">
        About Us
      </h1>
      <div className="md:flex xl:gap-[68px] md:gap-[48px] gap-[16px] items-center">
        <div className="w-full">
          <h1 className="font-medium xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl sm:mb-4 mb-2  text-[#1F1F1F]">
            Our Company
          </h1>
          <h6 className="md:text-base text-sm font-normal mb-4">
            Innovation meets inclusion to redefine financial freedom. At PayyMe,
            we plan to make financial services accessible to everyone,
            especially those with little knowledge about how technology works.
          </h6>
          <LinkBtn href="#" text="Get Started" />
        </div>

        <div className="w-full h-[331px] overflow-hidden rounded-lg">
          <Image
            src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1713356928/PayyMe/People_at_work_e8ekra.png"
            alt="customer testimony imge"
            width={520}
            height={331}
            className="rounded-lg"
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
