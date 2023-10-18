import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="main-container text-center">
      <h1 className="header-1_bold mb-3">
        Experience the power to enjoy seemless
        <span className="text-warning500">Digital</span> solutions
      </h1>
      <h6 className="header-4_regular mb-3">
        Transforming Your Online Presence for Success Transforming Your Online
        Presence{" "}
      </h6>
      <Link href="/">
        <button className="btn-nova_bg">Get started</button>
      </Link>
      <div className="flex justify-center my-4">
        <Image
          src="/asset/nova_bg.png"
          alt="Novasphere hero picture"
          width={871}
          height={611}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
