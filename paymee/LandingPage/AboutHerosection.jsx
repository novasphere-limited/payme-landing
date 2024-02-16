import { ROUTES } from "@/contants/ROUTES";
import Image from "next/image";
import Link from "next/link";
import LinkBtn from "../../components/LinkButton";

export default function AboutHerosection() {
  return (
    <div className="main-container">
      <h2 className="header-3_medium text-center mb-5">
        Revolutionising payment through inclusion<br></br> and innovation - one
        <span className="text-grnSec"> SMS </span>at a time.
      </h2>
      <div className="md:flex mt-5 gap-5 items-center">
        <div className="w-full">
          <h2 className="header-3_bold md:mb-4 sm:mb-2">Our Company</h2>
          <p className="label-4_regular md:mb-4 sm:mb-2">
            Innovation meets inclusion to redefine financial freedom. At PayyME,
            we plan to make financial services accessible to everyone,
            especially those with little knowledge about how technology works.
          </p>
          <LinkBtn href={ROUTES.HOME} text="Get Started" />
        </div>
        <div className="w-full">
          <Image
            src="/asset/about-hero_img.png"
            alt="Info picture"
            width={688}
            height={688}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
