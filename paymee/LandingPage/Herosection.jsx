import Image from "next/image";
import LinkBtn from "../../components/LinkButton";
import { ROUTES } from "@/contants/ROUTES";

export default function Herosection() {
  return (
    <div className="main-container md:flex lg:gap-10 md:gap-5">
      <div className="w-full sm:mt-10 mt-5">
        <h6 className="label-2_bold text-grnSec my-5">PayyME</h6>
        <h2 className="header-2_medium md:mb-5 mb-3">
          Revolutionising payment through inclusion and innovation - one
          <span className="text-grnSec"> SMS </span> at a time.
        </h2>
        <h3 className="label-2_regular mb-3">
          Without worrying about connectivity, PayyME helps small businesses
          and  individuals pay and get paid
        </h3>

        <LinkBtn href={ROUTES.LOGIN} text="Get Started" />
      </div>
      <div className="w-full md: mt-3">
        <Image
          src="/asset/hero-img1.png"
          alt="Farmer image"
          width={648}
          height={712}
          className="rounded-lg w-full"
        />
      </div>
    </div>
  );
}
