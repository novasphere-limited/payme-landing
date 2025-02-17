import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";

export default function Slider() {
  const sliderArray = [
    {
      id: 1,
      imgSrc: "/asset/slide-1.png",
      title: "Revolutionize payments all with a single SMS",
      text: "Empowering Your Ideas Digitally: Where Vision and Innovation Thrive. Let's Evolve Technology Together.",
      name: "Hauwa",
      profession: "Trader",
    },
    {
      id: 2,
      imgSrc: "/asset/slide-2.png",
      title: "Simplify payments with just one SMS",
      text: "Digitize your vision: Where Innovation Meets Reality, Partner With us For technological Evolution",
      name: "Tauwa",
      profession: "Trader",
    },
    {
      id: 3,
      imgSrc: "/asset/slide-3.png",
      title: "Innovation, inclusion and Freedom",
      text: "Turning ideas into digital solution: Where Vision Meets Reality, Partner with us For Technological Evolution",
      name: "Fauwa",
      profession: "Trader",
    },
  ];
  return (
    <div className="xl:px-[187px] px-4 sm:px-9 md:px-[80px] lg:px-[120px]">
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {sliderArray.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="sm:flex xl:gap-[68px] lg:gap-[54px] md:gap-[42px] sm:gap-[30px] gap-[16px] items-center">
              <div className="w-full flex justify-center rounded-lg">
                <Image
                  src={slide.imgSrc}
                  alt="customer testimony imge"
                  width={520}
                  height={331}
                  className="rounded-lg slide-img"
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="w-full">
                <h1
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                  className="font-medium xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl md:mb-4 mb-1 text-[#1F1F1F]"
                >
                  {slide.title}
                </h1>
                <p className="text-base font-normal md:mb-4 mb-2">
                  {slide.text}
                </p>
                <p className="md:text-base text-warning800 font-semibold mb-2 text-sm">
                  {slide.name}
                </p>
                <p className="sm:text-base text-sm font-normal md:text-xl">
                  {slide.profession}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
