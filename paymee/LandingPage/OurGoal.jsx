import Image from "next/image";

export default function OurGoal() {
  return (
    <div className="main-container">
      <div className="md:flex mt-5 gap-5 items-center">
        <div className="w-full lg:ps-[96px] md:ps-[48px] margin-extra">
          <Image
            src="/asset/goalImg.png"
            alt="Company goal picture description"
            width={554}
            height={550}
            className="w-full"
          />
        </div>
        <div className="w-full text-center mt-5 md:mt-0">
          <h2 className="header-2_bold mb-4">Our Goal</h2>
          <p className="label-4_regular mb-1">
            We’re a team of passionate individuals dedicated to making a
            positive impact. The diverse team brings together experience in
            finance, digital technology, people management, research and
            artificial intelligence. Regardless, we share a common goal, to make
            safe and secure financial solutions available to all.
          </p>
        </div>
      </div>
    </div>
  );
}
