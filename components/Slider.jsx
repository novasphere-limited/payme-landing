import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "next/image";

export default function Slider({ ArrayList, width, height }) {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {ArrayList.map((feature) => (
          <SwiperSlide key={feature.id}>
            {feature.top && (
              <h1 className="header-1_black mb-4 text-center">
                It only takes an <span style={{ color: "#096B45" }}>SMS</span>
              </h1>
            )}
            <div className="flex justify-center m-4">
              <Image
                src={feature.imgSrc}
                alt={feature.alt}
                width={width}
                height={height}
              />
            </div>
            <h5 className="label-1_medium text-grnSec mb-3 text-center">
              {feature.title}
            </h5>
            <h5 className="label-1_regular text-center">{feature.text}</h5>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
