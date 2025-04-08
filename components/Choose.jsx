import { ChooseList } from "@/contants";
import Image from "next/image";

export default function Choose() {
  return (
    <div className="xl:px-[130px] px-3 sm:px-[32px] md:px-[52px] lg:px-[92px] text-center md:my-[92px] my-6">
      <h1 className="xl:text-5xl sm:text-2xl md:text-3xl lg:text-4xl text-warning600 sm:mb-[14px] mb-2 font-medium text-xl">
        Why choose us
      </h1>
      <p
        className="sm:text-base text-sm mb-3 mx-auto"
        style={{ maxWidth: "652px" }}
      >
        We’re making payments accessible, even to the most remote people and
        places without worrying about connectivity.
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-[42px]">
        {ChooseList.map((choose, index) => (
          <div
            className="rounded-lg shadow-md md:px-[34px] px-5 py-[28px]"
            key={index}
          >
            <div className="mb-2 flex justify-center">
              <div className="relative w-full h-[334px]">
                <Image
                  src={choose.imgSrc}
                  width={500}
                  height={334}
                  alt="Why choose us"
                  className="rounded-lg w-full h-full object-cover"
                  loading="lazy"
                />
                {index === 2 && (
                  <div className="absolute inset-0 bg-black/80 rounded-lg" />
                )}
              </div>
            </div>
            <div>
              <h4 className="lg:text-[22px] text-sm sm:text-base md:text-xl text-warning600 font-medium mb-2">
                {choose.title}
              </h4>
              <h6 className="sm:text-base text-center text-xs font-normal">
                {choose.text}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
