import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from "next/image"

export default function SliderRegistration() {
  return (
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
      <SwiperSlide><div className="flex justify-center">
        <div>
          <h1 className="header-1_black mb-4">
            It only takes an <span style={{ color: "#096B45" }}>SMS</span>
          </h1>
          <div className="flex justify-center">
            <Image
              src="/asset/iphone-img.png"
              alt="Image of an iPhone"
              width={250}
              height={221}
            />
          </div>
        </div>
      </div></SwiperSlide>
      <SwiperSlide><div className="flex justify-center">
        <div>
          <h1 className="header-1_black mb-4">
            It only takes an <span style={{ color: "#096B45" }}>SMS</span>
          </h1>
          <div className="flex justify-center">
            <Image
              src="/asset/iphone-img.png"
              alt="Image of an iPhone"
              width={250}
              height={221}
            />
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide><div className="flex justify-center">
        <div>
          <h1 className="header-1_black mb-4">
            It only takes an <span style={{ color: "#096B45" }}>SMS</span>
          </h1>
          <div className="flex justify-center">
            <Image
              src="/asset/iphone-img.png"
              alt="Image of an iPhone"
              width={250}
              height={221}
            />
          </div>
        </div>
      </div>
      </SwiperSlide>
    </Swiper>
  );
}
