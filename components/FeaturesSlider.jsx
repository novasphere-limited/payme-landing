import Image from "next/image";
import { useState } from "react";

export default function FeaturesSlider({ ArrayList, width, height }) {
  const [currentSlide, SetCurrentSlide] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newSlide = isFirstSlide ? ArrayList.length - 1 : currentSlide - 1;
    SetCurrentSlide(newSlide);
  };
  const nextSlide = () => {
    const isLastSlide = currentSlide === ArrayList.length - 1;
    const newSlide = isLastSlide ? 0 : currentSlide + 1;
    SetCurrentSlide(newSlide);
  };

  const instantSlide = (i) => {
    SetCurrentSlide(i);
  };
  return (
    <>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex"
            style={{ transform: `translate(-${currentSlide * 100}%)` }}
          >
            {ArrayList.map((feature) => (
              <div
                className="w-full flex gap-5 items-center justify-center"
                style={{ flex: "0 0 auto" }}
              >
                <div>
                  {feature.top && (
                    <h1 className="header-1_black mb-4 text-center">
                      It only takes an{" "}
                      <span style={{ color: "#096B45" }}>SMS</span>
                    </h1>
                  )}
                  <div className="flex justify-center m-4 relative">
                    <Image
                      src={feature.imgSrc}
                      alt={feature.alt}
                      width={width}
                      height={height}
                    />
                    <button
                      className="cursor-pointer absolute top-[50%] left-[36px] translate-y-[-50%]"
                      onClick={prevSlide}
                    >
                      <Image
                        alt="Left icon"
                        width={32}
                        height={32}
                        src="/asset/left-slider_icon.png"
                      />
                    </button>
                    <button
                      className="cursor-pointer absolute top-[50%] right-[36px] translate-y-[-50%]"
                      onClick={nextSlide}
                    >
                      <Image
                        alt="Right icon"
                        width={32}
                        height={32}
                        src="/asset/right-slider_icon.png"
                      />
                    </button>
                  </div>
                  <h5 className="label-1_medium text-grnSec mb-3 text-center">
                    {feature.title}
                  </h5>
                  <h5 className="label-1_regular text-center">
                    {feature.text}
                  </h5>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 justify-center items-center mt-3 cursor-pointer">
            {ArrayList.map((ray, index) => (
              <div
                className="bg-[#D9D9D9] rounded-full"
                style={{
                  height: "20px",
                  width: "20px",
                  background: `${index === currentSlide ? "#096B45" : ""}`,
                }}
                onClick={() => instantSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
