import Image from "next/image";
import Link from "next/link";
import LinkBtn from "./LinkBtn";

export default function Contact() {
  return (
    <div className="main-container md:flex items-center xl:px-[152px] px-3 sm:px-6 md:px-9 lg:px-[80px] md:py-[48px] py-6">
      <div className="w-full">
        <h1 className="md:text-5xl text-3xl lg:mb-4 mb-2 pt-0">
          Our Team Is Always Here To Help
        </h1>
        <h6 className="label-2_regular lg:mb-8 mb-1">
          Your journey to inclusion starts today. If you have any questions,
          contact our support team for any enquiries.
        </h6>
        <LinkBtn text="Contact Us" href="/contact" />
      </div>
      <div className="w-full flex justify-center h-[324px] overflow-hidden">
        <Image
          src="/asset/contact-img.png"
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
