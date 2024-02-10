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

  return (
    <>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex"
            style={{ transform: `translate(-${currentSlide * 100}%)` }}
          >
            {ArrayList.map((testimony) => (
              <div
                className="w-full flex gap-5 items-center"
                style={{ flex: "0 0 auto" }}
              >
                <div className="relative w-3/4">
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
                    className="rounded-md shadow-lg p-2 testimony-abs"
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
                <div className="w-1/4 md:block hidden">
                  <h1 className="header-3_medium text-center">
                    Innovation, Inclusion and Freedom
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        {currentSlide !== 0 && (
          <button
            className="cursor-pointer absolute bottom-[4px] right-[72px]"
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
          className="cursor-pointer absolute bottom-[4px] right-[24px]"
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
    </>
  );
}
