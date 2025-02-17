import Image from "next/image";
import LinkBtn from "./LinkBtn";

export default function Contact() {
  return (
    <div className="main-container md:flex xl:gap-[4.25rem] lg:gap-[3.75rem] md:gap-[3.0rem] items-center xl:px-[152px] px-3 sm:px-6 md:px-9 lg:px-[80px] md:py-[48px] py-6">
      <div className="w-full">
        <h1
          className="xl:text-[2rem] lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:mb-4 mb-2 pt-0 font-normal"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          <span className="border-t-[3.5px] border-[#0DA168]">O</span>ur Team Is
          Always Here To Help
        </h1>
        <h6 className="text-base lg:mb-8 mb-1">
          Your journey to inclusion starts today. If you have any questions,
          contact our support team for any enquiries.
        </h6>
        <LinkBtn text="Contact us" href="/contact" />
      </div>
      <div className="w-full flex justify-center md:h-[324px] h-auto overflow-hidden">
        <Image
          src="/asset/work.jpg"
          alt="customer-img"
          width={486}
          height={324}
          loading="lazy"
          className="w-full"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
