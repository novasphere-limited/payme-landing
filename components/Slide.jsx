import Image from "next/image";
import { useState } from "react";

export default function SlideManual({ arrayList }) {
  const [currentSlide, SetCurrentSlide] = useState(0);

  const rays = [
    {
      id: 1,
      imgSrc: "/asset/choose-img-1.png",
    },
    {
      id: 2,
      imgSrc: "/asset/choose-img-2.png",
    },
    {
      id: 1,
      imgSrc: "/asset/choose-img-3.png",
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newSlide = isFirstSlide ? rays.length - 1 : currentSlide - 1;
    SetCurrentSlide(newSlide);
  };
  const nextSlide = () => {
    const isLastSlide = currentSlide === rays.length - 1;
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
            {rays.map((ray) => (
              <div
                className="w-full flex justify-center"
                style={{ flex: "0 0 auto" }}
                key={ray.id}
              >
                <div className="relative">
                  <Image
                    src={ray.imgSrc}
                    height={500}
                    width={500}
                    alt="Slider images"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
