import Image from "next/image";

export default function AboutHerosection() {
  return (
    <div className="main-container">
      <h1 className="header-1_bold mb-3 text-center">
        Experience the power to enjoy seemless
        <span className="text-warning500 ps-1">Digital</span> solutions
      </h1>
      <h6 className="header-4_regular mb-3 text-center">
        Transforming Your Online Presence for Success Transforming Your Online
        Presence
      </h6>
      <div className="flex justify-center my-4">
        <Image
          src="/asset/nova-about-hero.png"
          alt="Novasphere hero picture"
          width={704}
          height={630}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
