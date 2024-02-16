import Image from "next/image";
import { useState } from "react";

export default function TestimonySlider({ ArrayList }) {
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
      <div className="relative pt-10">
        <div className="overflow-hidden">
          <div
            className="flex"
            style={{ transform: `translate(-${currentSlide * 100}%)` }}
          >
            {ArrayList.map((testimony) => (
              <div
                className="w-full flex gap-5"
                style={{ flex: "0 0 auto" }}
                key={testimony.id}
              >
                <div className="relative">
                  <div>
                    <Image
                      src={testimony.imgSrc}
                      alt="customer testimony image"
                      width={736}
                      height={691}
                      className="testimony-img w-full"
                    />
                  </div>
                  <div
                    className="rounded-md shadow-lg sm:px-4 sm:py-8 p-2 testimony-abs"
                    style={{ background: "#fff" }}
                  >
                    <p className="text-1_regular mb-3">
                      Transforming Ideas into Digital Realities, Where Vision
                      Meets Innovation. Your Partner in Technology Evolution
                      Transforming Ideas into Digital Realities, Where Vision
                      Meets Innovation. Your Partner in Technology Evolution
                      Transforming Ideas into Digital Realities, Where Vision
                      Meets Innovation.
                    </p>
                    <h6 className="label-3_bold text-grnSec mb-2">Hauwa</h6>
                    <h6 className="label-4_regular">Trader</h6>
                  </div>
                </div>
                <div className="" style={{ maxWidth: "500px" }}>
                  <h1 className="header-3_medium text-center mt-10">
                    Innovation, Inclusion and Freedom
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:block hidden">
          {currentSlide !== 0 && (
            <button
              className="cursor-pointer absolute bottom-[4px] right-[56px]"
              onClick={prevSlide}
            >
              <Image
                alt="Left icon"
                width={32}
                height={32}
                src="/asset/left-slider__icon.png"
              />
            </button>
          )}
          <button
            className="cursor-pointer absolute bottom-[4px] right-[12px]"
            onClick={nextSlide}
          >
            <Image
              alt="Right icon"
              width={32}
              height={32}
              src="/asset/right-slider__icon.png"
            />
          </button>
        </div>
        <div className="flex gap-3 justify-center items-center mt-5 cursor-pointer lg:hidden">
          {ArrayList.map((ray, index) => (
            <div
              className="bg-[#D9D9D9] rounded-full"
              style={{
                height: "20px",
                width: "20px",
                background: `${index === currentSlide ? "#096B45" : ""}`,
              }}
              key={index}
              onClick={() => instantSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
