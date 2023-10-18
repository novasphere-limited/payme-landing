import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from "next/image"

export default function FeaturesSlider() {
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
      <SwiperSlide>
        <div className="flex justify-center m-4">
          <Image
            src="/asset/feature-img.png"
            alt="features images"
            width={931}
            height={517}
          />
        </div>
        <h5 className="label-1_medium text-grnSec mb-3 text-center">
          Pay Bills
        </h5>
        <h5 className="label-1_regular">
          Transforming Ideas into Digital Realities, Where Vision Meets
          Innovation. Your Partner in Technology Evolution Transforming Ideas
          into Digital Realities, Where Vision Meets Innovation. Your Partner in{" "}
        </h5>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center m-4">
          <Image
            src="/asset/feature-img.png"
            alt="features images"
            width={931}
            height={517}
          />
        </div>
        <h5 className="label-1_medium text-grnSec mb-3 text-center">
          Pay Bills
        </h5>
        <h5 className="label-1_regular">
          Transforming Ideas into Digital Realities, Where Vision Meets
          Innovation. Your Partner in Technology Evolution Transforming Ideas
          into Digital Realities, Where Vision Meets Innovation. Your Partner in{" "}
        </h5>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center m-4">
          <Image
            src="/asset/feature-img.png"
            alt="features images"
            width={931}
            height={517}
          />
        </div>
        <h5 className="label-1_medium text-grnSec mb-3 text-center">
          Pay Bills
        </h5>
        <h5 className="label-1_regular">
          Transforming Ideas into Digital Realities, Where Vision Meets
          Innovation. Your Partner in Technology Evolution Transforming Ideas
          into Digital Realities, Where Vision Meets Innovation. Your Partner in{" "}
        </h5>
      </SwiperSlide>
    </Swiper>
  );
}
