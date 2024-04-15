import Image from "next/image";

export default function AboutHerosection() {
  return (
    <div className="about-container-bg">
      <div className="h-[456px] flex justify-center items-center backdrop-blur-sm bg-[#000000BF]">
        <div className="flex">
          <p
            className="text-[40px] text-[#FDFBFB] mx-auto text-center"
            style={{ maxWidth: "818px" }}
          >
            Revolutionising payment through inclusion and innovation - one{" "}
            <span>
              <Image
                src="/favicon_io/paymee-star.svg"
                alt="Star icon"
                height={24}
                width={21}
                className="inline-block me-2"
              />
            </span>
            <span className="text-[#5EC09A]">SMS</span>
            <span>
              <Image
                src="/favicon_io/paymee-star.svg"
                alt="Star icon"
                height={24}
                width={21}
                className="inline-block me-2"
              />
            </span>
            at a time.
          </p>
        </div>
      </div>
    </div>
  );
}
