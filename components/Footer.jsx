import Image from "next/image";
import Link from "next/link";
import SocialPage from "./SocialPage";

export default function Footer() {
  return (
    <div className="footer-container text-whiteSec xl:px-[120px] lg:px-[70px] md:px-[35px] sm:px-[20px] px-3">
      <div className="sm:flex md:pb-8 pb-2 justify-between">
        <div className="w-full footer-flex_1">
          <div>
            <Image
              src="/asset/Paymee.png"
              width={160}
              height={63}
              alt="paymee logo"
              loading="lazy"
            />
          </div>
          <div className="flex gap-4 items-center mb-9">
            <Link href="#">
              <p className="label-2_regular">Products</p>
            </Link>
            <Link href="#">
              <p className="label-2_regular">Support</p>
            </Link>
            <Link href="#">
              <p className="label-2_regular">Careers</p>
            </Link>
            <Link href="#">
              <p className="label-2_regular">Terms</p>
            </Link>
          </div>
          <p className="text-2_regular">2023 PayME-All Right Reserved</p>
        </div>

        <div className="w-full flex sm:justify-end">
          <div>
            <h1 className="label-1_medium mb-4 sm:text-end">
              How can we help?
            </h1>

            <div className="flex items-center gap-3 mb-[44px]">
              <p
                className="text-sm text-[#86D0B3]p pe-2"
                style={{ borderRight: "2px solid #C1C4E5" }}
              >
                Help Docs & FAQs
              </p>
              <p className="text-sm text-[#C1C4E5]">Support via live Chat</p>
            </div>

            <div className="flex items-center sm:justify-end gap-3">
              <p className="text-sm">Follow us:</p>
              <SocialPage color="#ffffff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
