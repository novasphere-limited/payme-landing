import Image from "next/image";
import LinkBtn from "./LinkBtn";

export default function Value() {
  return (
    <div className="xl:px-[152px] px-3 sm:px-[32px] md:px-[52px] lg:px-[92px] xl:mt-[87px] mt-5 md:mt-9">
      <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-[#043623] xl:mb-[64px] mb-3 sm:mb-6 md:mb-9 text-center font-medium flex justify-center items-center gap-1">
        <div
          style={{ height: "3.5px", width: "29px", background: "#0DA168" }}
        ></div>
        Company Core Value
      </h1>
      <div className="md:flex xl:gap-[68px] lg:gap-[54px] md:gap-[42px] sm:gap-[30px] gap-[16px] items-center xl:mb-[64px] mb-3 sm:mb-6 md:mb-9">
        <div className="w-full xl:h-[331px] h-auto overflow-hidden rounded-lg mb-4 md:mb-0">
          <Image
            src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1713356919/PayyMe/Light_bulb_with_drawing_graph_ipmzfw.png"
            alt="customer testimony imge"
            width={520}
            height={331}
            className="rounded-lg w-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full justify-center">
          <h1 className="font-medium xl:text-5xl sm:text-xl md:text-2xl lg:text-3xl text-base md:mb-4 mb-2 text-[#043623] text-center">
            <span style={{ width: "29px", borderTop: "3.5px solid #0DA168" }}>
              Our
            </span>{" "}
            Mission
          </h1>

          <h6 className="sm:text-base text-sm font-normal md:mb-4 mb-2">
            To revolutionize payments through inclusion and innovation. We
            believe that everyone deserves to be included in the fintech
            ecosystem, regardless of location or access to technology. To do
            this, we’re committed to breaking down payment barriers and creating
            possibilities for total financial inclusivity using a text-based
            approach.
          </h6>
        </div>
      </div>
      <div className="hidden md:flex xl:gap-[68px] lg:gap-[54px] md:gap-[42px] sm:gap-[30px] gap-[16px] items-center">
        <div className="w-full">
          <h1 className="font-medium xl:text-5xl sm:text-xl md:text-2xl lg:text-3xl text-base md:mb-4 mb-2 text-center text-[#043623]">
            <span style={{ width: "29px", borderTop: "3.5px solid #0DA168" }}>
              Our
            </span>{" "}
            Goal
          </h1>

          <h6 className="sm:text-base text-sm font-normal md:mb-4 mb-2">
            We’re a team of passionate individuals dedicated to making a
            positive impact. The diverse team brings together experience in
            finance, digital technology, people management, research and
            artificial intelligence. Regardless, we share a common goal, to make
            safe and secure financial solutions available to all.
          </h6>
        </div>
        <div className="w-full xl:h-[331px] h-auto overflow-hidden rounded-lg">
          <Image
            src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1713356919/PayyMe/Assortment_of_luxurious_chess_pieces_aqcwox.png"
            alt="customer testimony imge"
            width={520}
            height={331}
            className=" rounded-lg w-full"
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className=" block md:hidden ">
        <div className="w-full xl:h-[331px] h-auto mb-4 md:mb-0 overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1713356919/PayyMe/Assortment_of_luxurious_chess_pieces_aqcwox.png"
            alt="customer testimony imge"
            width={520}
            height={331}
            className="testimony-img rounded-lg w-full"
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full">
          <h1 className="font-medium xl:text-5xl sm:text-xl md:text-2xl lg:text-3xl text-base md:mb-4 mb-2 text-center text-[#043623]">
            <span style={{ width: "29px", borderTop: "3.5px solid #0DA168" }}>
              Our
            </span>{" "}
            Goal
          </h1>

          <h6 className="sm:text-base text-sm font-normal mb-4">
            We’re a team of passionate individuals dedicated to making a
            positive impact. The diverse team brings together experience in
            finance, digital technology, people management, research and
            artificial intelligence. Regardless, we share a common goal, to make
            safe and secure financial solutions available to all.
          </h6>
        </div>
      </div>
    </div>
  );
}
