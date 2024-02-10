import Image from "next/image";
import Link from "next/link";
import SocialPage from "./SocialPage";
import { ROUTES } from "@/contants/ROUTES";

export default function Footer() {
  return (
    <div className="footer-container text-whiteSec">
      <div className="md:flex pb-8 footer-container_inner gap-10">
        <div className="w-full footer-flex_1">
          <div>
            <Image
              src="/asset/Paymee.png"
              width={160}
              height={63}
              alt="paymee logo"
            />
          </div>
          <p className="label-4_regular">(+234)80945678</p>
          <h6 className="label-4_regular">
            4a Gbade Adeleke Street , Unity Estate , Lagos State
          </h6>
          <p className="label-4_regular">support@payyME.com</p>
        </div>
        <div className="w-full footer-flex_2">
          <div>
            <h1 className="label-1_medium mb-4">Company</h1>

            <Link href={ROUTES.ABOUT}>
              <p className="label-3_regular mb-2">About us</p>
            </Link>
            <Link href="/faq">
              <p className="label-3_regular mb-2">FAQ</p>
            </Link>
            <Link href={ROUTES.BLOG}>
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
            <Link href="#">
              <p className="label-3_regular mb-2">Terms of services</p>
            </Link>
            <Link href="#">
              <p className="label-3_regular mb-2">Policy</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-container_inner">
        <SocialPage color="#ffffff" />
      </div>
      <p className="text-2_regular border-outline text-center">
        2023 PayME-All Right Reserved
      </p>
    </div>
  );
}
