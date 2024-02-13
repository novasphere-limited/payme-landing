import Image from "next/image";
import LinkBtn from "../../components/LinkButton";
import { ROUTES } from "@/contants/ROUTES";

export default function Contact() {
  return (
    <div className="main-container contact-container">
      <div className="w-full pt-4">
        <Image
          src="/asset/contact-img.png"
          alt="customer-img"
          width={646}
          height={622}
          className="w-full h-1/2"
        />
      </div>
      <div className="w-full">
        <h1 className="header-3_medium lg:mb-4 mb-2 pt-0">
          Our Team Is Always Here To Help{" "}
        </h1>
        <h6 className="text-2_regular lg:mb-5 mb-1">
          Your journey to inclusion starts today.  If you have any more
          questions, contact our support team for any enquiries.
        </h6>
        <LinkBtn href={ROUTES.CONTACT} text="Contact Us" />
      </div>
    </div>
  );
}
