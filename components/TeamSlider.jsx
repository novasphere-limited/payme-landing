import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from "next/image"

export default function TeamSlider() {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="flex justify-center my-4">
          <Image
            src="/asset/team-img1.png"
            alt="Teams image"
            width={424}
            height={413}
          />
        </div>
        <h5 className="label-1_black mb-3">
          Williamd Andrew
        </h5>
        <h5 className="label-2_regular">
          Account
        </h5>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center my-4">
          <Image
            src="/asset/team-img1.png"
            alt="Teams image"
            width={424}
            height={413}
          />
        </div>
        <h5 className="label-1_black mb-3">
          Williamd Andrew
        </h5>
        <h5 className="label-2_regular">
          Account
        </h5>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center my-4">
          <Image
            src="/asset/team-img1.png"
            alt="Teams image"
            width={424}
            height={413}
          />
        </div>
        <h5 className="label-1_black mb-3">
          Williamd Andrew
        </h5>
        <h5 className="label-2_regular">
          Account
        </h5>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center my-4">
          <Image
            src="/asset/team-img1.png"
            alt="Teams image"
            width={424}
            height={413}
          />
        </div>
        <h5 className="label-1_black mb-3">
          Williamd Andrew
        </h5>
        <h5 className="label-2_regular">
          Account
        </h5>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center my-4">
          <Image
            src="/asset/team-img1.png"
            alt="Teams image"
            width={424}
            height={413}
          />
        </div>
        <h5 className="label-1_black mb-3">
          Williamd Andrew
        </h5>
        <h5 className="label-2_regular">
          Account
        </h5>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center my-4">
          <Image
            src="/asset/team-img1.png"
            alt="Teams image"
            width={424}
            height={413}
          />
        </div>
        <h5 className="label-1_black mb-3">
          Williamd Andrew
        </h5>
        <h5 className="label-2_regular">
          Account
        </h5>
      </SwiperSlide>
    </Swiper>
  );
}
