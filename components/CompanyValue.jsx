import Image from "next/image";
import LinkBtn from "./LinkBtn";

export default function Value() {
  return (
    <div className="xl:px-[130px] px-3 sm:px-6 md:px-9 lg:px-[72px] xl:mt-[87px] mt-5 md:mt-9">
      <h1 className="text-5xl text-[#043623] xl:mb-[64px] mb-3 sm:mb-6 md:mb-9 text-center font-medium">
        Company Core Value
      </h1>
      <div className="sm:flex xl:gap-[68px] lg:gap-[54px] md:gap-[42px] sm:gap-[30px] gap-[16px] items-center xl:mb-[64px] mb-3 sm:mb-6 md:mb-9">
        <div className="w-full h-[331px] overflow-hidden">
          <Image
            src="/asset/hauwa-image.png"
            alt="customer testimony imge"
            width={520}
            height={331}
            className="testimony-img rounded-lg w-full"
            objectFit="cover"
          />
        </div>
        <div className="w-full">
          <h1 className="font-medium text-5xl md:mb-4 mb-2 leading-[48px] text-[#043623]">
            Our Mission
          </h1>
          <p className="text-base font-normal mb-4">
            To revolutionize payments through inclusion and innovation. We
            believe that everyone deserves to be included in the fintech
            ecosystem, regardless of location or access to technology. To do
            this, we’re committed to breaking down payment barriers and creating
            possibilities for total financial inclusivity using a text-based
            approach.
          </p>
        </div>
      </div>
      <div className="hidden sm:flex xl:gap-[68px] lg:gap-[54px] md:gap-[42px] sm:gap-[30px] gap-[16px] items-center">
        <div className="w-full">
          <h1 className="font-medium text-5xl mb-4 leading-[48px] text-[#043623]">
            Our Goal
          </h1>
          <p className="text-base font-normal mb-4">
            We’re a team of passionate individuals dedicated to making a
            positive impact. The diverse team brings together experience in
            finance, digital technology, people management, research and
            artificial intelligence. Regardless, we share a common goal, to make
            safe and secure financial solutions available to all.
          </p>
        </div>
        <div className="w-full h-[331px] overflow-hidden">
          <Image
            src="/asset/hauwa-image.png"
            alt="customer testimony imge"
            width={520}
            height={331}
            className="testimony-img rounded-lg"
            loading="lazy"
            objectFit="cover"
          />
        </div>
      </div>
      <div className=" block sm:hidden ">
        <div className="w-full h-[331px] overflow-hidden">
          <Image
            src="/asset/hauwa-image.png"
            alt="customer testimony imge"
            width={520}
            height={331}
            className="testimony-img rounded-lg"
            loading="lazy"
            objectFit="cover"
          />
        </div>
        <div className="w-full">
          <h1 className="font-medium text-5xl mb-4 leading-[48px] text-[#043623]">
            Our Goal
          </h1>
          <p className="text-base font-normal mb-4">
            We’re a team of passionate individuals dedicated to making a
            positive impact. The diverse team brings together experience in
            finance, digital technology, people management, research and
            artificial intelligence. Regardless, we share a common goal, to make
            safe and secure financial solutions available to all.
          </p>
        </div>
      </div>
    </div>
  );
}