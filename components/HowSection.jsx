import Image from "next/image";

export default function HowSection() {
  return (
    <div className="xl:px-[100px] lg:px-[70px] md:px-[35px] sm:px-[20px] px-3 bg-[#075134] xl:pt-[113px] pt-[46px] lg:pt-[90px] md:pt-[50px] lg:pt-[75px] pb-[49px]">
      <div className="md:flex xl:gap-[68px] md:gap-[48px] gap-[16px] items-center">
        <div className="w-full">
          <h1 className="font-medium md:text-5xl mb-3 text-4xl text-[#FEFCFC]">
            Send & Receive Cash
          </h1>
          <p className="md:text-base text-sm font-normal text-[#D3D0D0] mb-6">
            WIth a few keystrokes of sms text you can send and receive money in
            an instant across Nigeria without the complexity of a smart phone or
            internet access and the fun part is all of this can be done in your
            preferred local dialect. It is safe , easy and secure!! Get started
            with PayyMe today!!.
          </p>
        </div>
        <div className="w-full flex justify-center md:h-[342px] h-[208px] overflow-hidden">
          <Image
            src="/asset/double-phone.png"
            alt="customer testimony imge"
            width={543}
            height={343}
            className="rounded-lg w-full"
            loading="lazy"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
