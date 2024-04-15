import React, { useState } from "react";
import Image from "next/image";

export default function CarouselSlide({ imgArray }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      id: 1,
      img: "/images/Login-hero.webp",
    },
    {
      id: 2,
      img: "/images/Signup-hero.webp",
    },
  ];

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="overflow-hidden relative">
        <div
          className="flex w-full"
          style={{ transform: `translate(-${currentImageIndex * 100}%)` }}
        >
          {images.map((e, index) => (
            <div
              style={{ flex: "0 0 auto" }}
              className=" flex justify-center"
              key={index}
            >
              <div className="">
                <Image
                  src={e?.fileUrl}
                  alt="Slider image"
                  height={529}
                  width={935}
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={handlePrev}
            className="p-1 rounded-full bg-white/80 hover:bg-white"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="p-1 rounded-full bg-white/80 hover:bg-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
