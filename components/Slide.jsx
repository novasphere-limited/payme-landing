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
      imgSrc:
        "https://res.cloudinary.com/dstqfrcxx/image/upload/t_Banner 16:9/v1713356955/PayyMe/Medium_shot_farmers_with_smartphone_hbxzou.png",
      title: "Revolutionize payments all with a single SMS",
      text: "Empowering Your Ideas Digitally: Where Vision and Innovation Thrive. Let's Evolve Technology Together.",
      name: "Hauwa",
      profession: "Trader",
    },
    {
      id: 2,
      imgSrc:
        "https://res.cloudinary.com/dstqfrcxx/image/upload/t_Banner 16:9/v1713356954/PayyMe/Shallow_focus_of_an_african_female_seller_showing_content_in_a_phone_to_a_customer_at_a_market_ea4aer.png",
      title: "Simplify payments with just one SMS",
      text: "Digitize your vision: Where Innovation Meets Reality, Partner With us For technological Evolution",
      name: "Tauwa",
      profession: "Trader",
    },
    {
      id: 3,
      imgSrc:
        "https://res.cloudinary.com/dstqfrcxx/image/upload/t_Banner 16:9/v1713356954/PayyMe/image_20_yfhukb.png",
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
              <div className="w-full sm:h-[331px] h-[213px] overflow-hidden flex justify-center rounded-lg">
                <Image
                  src={slide.imgSrc}
                  alt="customer testimony imge"
                  width={520}
                  height={331}
                  className="rounded-lg sm:w-[520px] slide-img"
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="w-full">
                <h1 className="font-medium xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl md:mb-4 mb-1 text-[#1F1F1F]">
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
