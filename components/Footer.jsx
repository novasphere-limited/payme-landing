import Image from "next/image";
import Link from "next/link";
import SocialPage from "./SocialPage"

export default function Footer() {
  return (
    <div className="footer-container text-whiteSec">
      <div className="flex pb-8 footer-container_inner">
        <div className="w-full footer-flex_1">
          <div>
            <Image
              src="/asset/Paymee.png"
              width={160}
              height={63}
              alt="paymee logo"
            />
          </div>
          <p className="label-2_regular">(+234)8112345678</p>
          <p className="label-2_regular">support@payyME.com</p>
        </div>
        <div className="w-full flex justify-between footer-flex_2">
          <div>
            <h1 className="label-1_medium mb-4">Company</h1>
            <Link href="/about">
              <p className="label-3_regular mb-2">About us</p>
            </Link>
            <Link href="/faq">
              <p className="label-3_regular mb-2">FAQ</p>
            </Link>
            <Link href="/blog">
              <p className="label-3_regular mb-2">Blog</p>
            </Link>
          </div>
          <div>
            <h1 className="label-1_medium mb-4">Product</h1>
            <Link href="#">
              <p className="label-3_regular mb-2">Paybills</p>
            </Link>
            <Link href="#">
              <p className="label-3_regular mb-2">Send Money</p>
            </Link>
            <Link href="#">
              <p className="label-3_regular mb-2">Buy Airtime</p>
            </Link>
          </div>
          <div>
            <h1 className="label-1_medium mb-4">Legal</h1>
            <Link href="/about">
              <p className="label-3_regular mb-2">Terms of services</p>
            </Link>
            <Link href="#">
              <p className="label-3_regular mb-2">Policy</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-container_inner">
      <SocialPage color="#ffffff"/>
      </div>
      <p className="text-2_regular border-outline">
        2023 PayME-All Right Reserved
      </p>
    </div>
  );
}
