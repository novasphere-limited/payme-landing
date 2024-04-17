import Image from "next/image";

export default function HowSection() {
  return (
    <div className="xl:px-[100px] lg:px-[70px] md:px-[35px] sm:px-[20px] px-3 bg-[#075134] xl:pt-[113px] pt-6 sm:pt-9 md:pt-[50px] lg:pt-[75px] pb-[49px]">
      <div className="md:flex xl:gap-[68px] md:gap-[48px] gap-[16px] items-center">
        <div className="w-full">
          <h1 className="font-medium text-5xl mb-4 leading-[48px] text-[#FEFCFC]">
            Send & Receive Cash
          </h1>
          <p className="text-base font-normal text-[#D3D0D0] mb-4">
            WIth a few keystrokes of sms text you can send and receive money in
            an instant across Nigeria without the complexity of a smart phone or
            internet access and the fun part is all of this can be done in your
            preferred local dialect. It is safe , easy and secure!! Get started
            with PayyMe today!!.
          </p>
        </div>
        <div className="w-full flex justify-center h-[342px] overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1713356882/PayyMe/Group_1000003866_zhfjha.png"
            alt="customer testimony imge"
            width={607}
            height={342}
            className="rounded-lg"
            loading="lazy"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
