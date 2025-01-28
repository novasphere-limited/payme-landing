import React, { useState } from "react";
import Image from "next/image";

export default function CarouselSlide({ imgArray }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      id: 1,
      img: "/asset/payyme-feature-1.png",
      title: "Bank with the Unbanked",
      text: "Need to pay or receive payment from someone without a bank account? Use PayyMe.",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dstqfrcxx/image/upload/t_Banner 16:9/v1713356964/PayyMe/Two_teenage_girls_texting_together_at_home_on_smartphones_hc2j7w.png",
      title: "Pay Bills",
      text: "Pay your everyday bills without a glitch, one SMS at a time.",
    },
    {
      id: 3,
      img: "/asset/payyme-feature-3.png",
      title: "Connectivity not a Barrier",
      text: "No internet connection? Worry less. Use PayyME.",
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
  const handleSlideShow = (e) => {
    setCurrentImageIndex(e);
  };

  return (
    <div className="relative ">
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full ${
              index === currentImageIndex ? "" : "hidden"
            }`}
          >
            <div className="flex justify-center sm:mx-[30px]">
              <div className="flex justify-center md:h-auto h-[342px] relative rounded-lg">
                <Image
                  src={image.img}
                  alt={`Slider image ${index}`}
                  height={529}
                  width={935}
                  priority={true}
                  className="rounded-md xl:w-[932px] w-full z-10"
                  style={{ objectFit: "cover" }}
                />

                <div className="absolute top-[-48px] right-[-44px] z-0 h-[180px] sm:block hidden">
                  <Image
                    alt="Random snaps"
                    height={220}
                    width={150}
                    src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1714562817/Ornament_13_yqaoug.png"
                    className="h-full"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="absolute bottom-[-48px] left-[-44px] z-0 h-[180px] sm:block hidden">
                  <Image
                    alt="Random snaps"
                    height={200}
                    width={150}
                    src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1714562817/Ornament_13_yqaoug.png"
                    className="h-full"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  className="absolute bottom-0 left-0 md:px-6 px-3 md:py-4 py-2 z-10"
                  style={{
                    background: "linear-gradient(to right, #FFFFFF, #FFFFFF00)",
                  }}
                >
                  <h6 className="md:text-2xl text-[#096B45] mb-2 text-sm sm:text-xl">
                    {image.title}
                  </h6>
                  <h6
                    className="md:text-[18px] text-sm sm:text-base"
                    style={{ maxWidth: "503px" }}
                  >
                    {image.text}
                  </h6>
                </div>
                <div className="absolute inset-0 flex items-center justify-between p-4 z-10">
                  <button onClick={handlePrev}>
                    <Image
                      height={28}
                      width={28}
                      alt="Arrow icon"
                      src="/asset/pay-left-arr.png"
                    />
                  </button>
                  <button onClick={handleNext}>
                    <Image
                      height={28}
                      width={28}
                      alt="Arrow icon"
                      src="/asset/pay-right-arr.png"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-1 mt-4">
        {images.map((e, index) => (
          <div
            className={`h-[10px] w-[10px] rounded-full ${
              currentImageIndex === index ? "bg-[#096B45]" : "bg-[#D9D9D9]"
            }`}
            key={index}
            onClick={() => handleSlideShow(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
