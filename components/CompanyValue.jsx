import Image from "next/image";
import LinkBtn from "./LinkBtn";

export default function Value() {
  return (
    <div className="px-[130px] mt-[87px]">
      <h1 className="text-5xl text-[#043623] mb-[64px] text-center font-medium">
        Company Core Value
      </h1>
      <div className="flex gap-[68px] items-center mb-[64px]">
        <div className="w-full">
          <Image
            src="/asset/hauwa-image.png"
            alt="customer testimony imge"
            width={520}
            height={331}
            className="testimony-img rounded-lg"
          />
        </div>
        <div className="w-full">
          <h1 className="font-medium text-5xl mb-4 leading-[48px] text-[#043623]">
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
      <div className="flex gap-[68px] items-center">
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
