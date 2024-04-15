import Image from "next/image";
import LinkBtn from "./LinkBtn";

export default function AboutUs() {
  return (
    <div className="px-[130px] mt-[87px]">
      <h1 className="text-5xl text-warning600 mb-[64px] text-center font-medium">
        About Us
      </h1>
      <div className="flex gap-[68px] items-center">
        <div className="w-full">
          <h1 className="font-medium text-5xl mb-4 leading-[48px] text-[#043623]">
            Our Company
          </h1>
          <p className="text-base font-normal mb-4">
            Innovation meets inclusion to redefine financial freedom. At PayyMe,
            we plan to make financial services accessible to everyone,
            especially those with little knowledge about how technology works.
          </p>
          <LinkBtn href="#" text="Get Started" />
        </div>

        <div className="w-full">
          <Image
            src="/asset/hauwa-image.png"
            alt="customer testimony imge"
            width={520}
            height={331}
            className="testimony-img rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
