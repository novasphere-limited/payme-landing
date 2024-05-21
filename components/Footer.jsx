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
              <h6 className="text-sm">Products</h6>
            </Link>
            <Link href="/contact">
              <h6 className="text-sm">Support</h6>
            </Link>
            <Link href="/career">
              <h6 className="text-sm">Careers</h6>
            </Link>
            <Link href="#">
              <h6 className="text-sm">Terms</h6>
            </Link>
          </div>
          <h6 className="text-sm hidden sm:flex items-center gap-1">
            <span
              style={{
                border: "1px solid #C1C4E5",
                width: "10px",
                height: "12px",
              }}
              className=" rounded-full flex items-center justify-center text-sm me-1"
            >
              c
            </span>
            2023 PayyMe-All Right Reserved
          </h6>
        </div>
        <div className="w-full flex sm:justify-end items-center">
          <div className="w-full">
            <h1
              className="md:text-sm text-xl mb-4 sm:text-end text-white"
              style={{ color: "#fff !important" }}
            >
              How can we help?
            </h1>
            <div className="sm:flex justify-end gap-3 md:mb-[44px] mb-[24px]">
              <Link
                href="/faq"
                className="text-sm hidden  text-[#86D0B3] pe-2 sm:flex items-center gap-1"
                style={{ borderRight: "2px solid #C1C4E5" }}
              >
                <div
                  style={{
                    height: "3.5px",
                    width: "29px",
                    background: "#0DA168",
                  }}
                ></div>
                Help Docs & FAQs
              </Link>

              <Link
                className="text-sm text-[#86D0B3] pe-2 flex sm:hidden items-center gap-1 mb-[24px]"
                href="/faq"
              >
                <div
                  style={{
                    height: "3.5px",
                    width: "29px",
                    background: "#0DA168",
                  }}
                ></div>
                Help Docs & FAQs
              </Link>
              <Link href="/contact">
                <h6 className="text-sm text-[#C1C4E5] mb-[24px] sm:mb-0">
                  Support via live Chat
                </h6>
              </Link>
              <h6
                className="text-sm  sm:hidden flex items-center pt-[24px]"
                style={{ borderTop: "1px solid #C1C4E5" }}
              >
                <span
                  style={{
                    border: "1px solid #C1C4E5",
                    width: "10px",
                    height: "12px",
                  }}
                  className=" rounded-full flex items-center justify-center text-sm me-1"
                >
                  c
                </span>
                2023 PayyMe-All Right Reserved
              </h6>
            </div>

            <div className="flex items-center sm:justify-end gap-3">
              <h6 className="text-sm">Follow us:</h6>
              <SocialPage color="#ffffff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
