import Image from "next/image";
import Link from "next/link";

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
        <h1 className="header-1_black lg:mb-4 mb-2 pt-0">
          Our contact team is always here for you.
        </h1>
        <h6 className="label-2_regular lg:mb-5 mb-1">
          Transforming Ideas into Digital Realities, Where Vision Meets
          Innovation. Your Partner in Technology Evolution Transforming Ideas
          into Digital Realities, Where Vision Meets Innovation. Your Partner in
          Technology Evolution Transforming Ideas into Digital Realities, Where
          Vision Meets Innovation. Your Partner in Technology Evolution
          Transforming Ideas into.
        </h6>
        <Link href="/contact">
          <button className="btn-primary_bg label-2_medium">Contact Us</button>
        </Link>
      </div>
    </div>
  );
}
