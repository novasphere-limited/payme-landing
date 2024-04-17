import Image from "next/image";
import Link from "next/link";
import SocialPage from "./SocialPage";

export default function Footer() {
  return (
    <div className="footer-container text-[#C1C4E5] xl:px-[120px] lg:px-[70px] md:px-[35px] sm:px-[20px] px-3">
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
            <Link href="/how">
              <p className="text-sm">Products</p>
            </Link>
            <Link href="#">
              <p className="text-sm">Support</p>
            </Link>
            <Link href="#">
              <p className="text-sm">Careers</p>
            </Link>
            <Link href="#">
              <p className="text-sm">Terms</p>
            </Link>
          </div>
          <p className="text-sm">2023 PayyMe-All Right Reserved</p>
        </div>
        <div className="w-full flex sm:justify-end">
          <div>
            <h1 className="text-sm mb-4 sm:text-end">How can we help?</h1>
            <div className="flex items-center gap-3 mb-[44px]">
              <p
                className="text-sm text-[#86D0B3] pe-2"
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
