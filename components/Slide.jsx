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
      imgSrc: "/asset/hauwa-image.png",
      title: "Revolutionize payments all with a single SMS",
      text: "Empowering Your Ideas Digitally: Where Vision and Innovation Thrive. Let's Evolve Technology Together.",
      name: "Hauwa",
      profession: "Trader",
    },
    {
      id: 2,
      imgSrc: "/asset/hauwa-image.png",
      title: "Simplify payments with just one SMS",
      text: "Digitize your vision: Where Innovation Meets Reality, Partner With us For technological Evolution",
      name: "Tauwa",
      profession: "Trader",
    },
    {
      id: 3,
      imgSrc: "/asset/hauwa-image.png",
      title: "Innovation, inclusion and Freedom",
      text: "Turning ideas into digital solution: Where Vision Meets Reality, Partner with us For Technological Evolution",
      name: "Fauwa",
      profession: "Trader",
    },
  ];
  return (
    <div className="margin-gen">
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
              <div className="w-full h-[331px] overflow-hidden flex justify-center">
                <Image
                  src={slide.imgSrc}
                  alt="customer testimony imge"
                  width={520}
                  height={331}
                  className="rounded-lg"
                  loading="lazy"
                />
              </div>

              <div className="w-full">
                <h1 className="font-medium text-5xl mb-4 leading-[48px]">
                  {slide.title}
                </h1>
                <p className="text-base font-normal mb-4">{slide.text}</p>
                <p className="text-base text-warning800 font-semibold mb-2">
                  {slide.name}
                </p>
                <p className="text-sm font-normal">{slide.profession}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
