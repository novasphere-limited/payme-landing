import Image from "next/image";

export default function HowSub() {
  return (
    <div
      style={{
        backgroundImage: 'url("/asset/full-circ.png")',
        backgroundSize: "620px 620px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top 480px left 56px",
      }}
      className="hide-bgimg"
    >
      <div
        style={{
          backgroundImage: 'url("/asset/circ.png")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top -150px right -60px",
        }}
        className="hide-bgimg xl:pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-14 pt-11 sub-hero-pad sm:flex xl:gap-[68px] md:gap-[48px] gap-[16px] items-center"
      >
        <div className="w-full">
          <Image
            src="/asset/product-3.png"
            alt="customer testimony imge"
            width={464}
            height={455}
            className="rounded-lg w-full"
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full">
          <h1 className="font-medium xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-2 md:mb-4 leading-[48px] text-[#1F1F1F]">
            Instant Airtime & Data for Less
          </h1>
          <h6 className="md:text-base text-sm font-normal mb-4">
            Get Airtime & Data every time. Instantly top up data and airtime
            from your PayyMe wallet even if you are low on data. It is faster
            and easier.
          </h6>
        </div>
      </div>
      <div className="xl:pt-[100px] lg:pt-[75px] md:pt-[60px] sm:pt-9 pt-6 sub-hero-pad sm:flex xl:gap-[68px] md:gap-[48px] gap-[16px] items-center xl:mb-[100px] lg:mb-[75px] md:mb-[60px] sm:mb-9 mb-6 ">
        <div className="w-full">
          <h1 className="font-medium xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-2 md:mb-4  leading-[48px] text-[#1F1F1F]">
            Pay Bills
          </h1>
          <h6 className="md:text-base text-sm font-normal mb-4">
            Use PayyMe to make instant bill payments. Paying bills is easy,
            secure, and can all be done from one place. Plus, you’ll never pay
            additional fees.
          </h6>
        </div>
        <div className="w-full">
          <Image
            src="/asset/product-2.png"
            alt="customer testimony imge"
            width={520}
            height={433}
            className="rounded-lg w-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="xl:mb-[100px] lg:mb-[80px] md:mb-[60px] sm:mb-14 mb-11 sub-hero-pad sm:flex xl:gap-[68px] md:gap-[48px] gap-[16px] items-center">
        <div className="w-full">
          <h1 className="font-medium xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-2 md:mb-4  leading-[48px] text-[#1F1F1F]">
            Create Account
          </h1>
          <h6 className="md:text-base text-sm font-normal mb-4">
            Everyone on PayyMe creates account & verifies their identity for
            increased trust. With unique Tags on PayyMe, make is easy to always
            be sure you are sending money to the right person.
          </h6>
        </div>
        <div className="w-full relative">
          <Image
            src="/asset/product-1.png"
            alt="customer testimony imge"
            width={579}
            height={433}
            className="rounded-lg w-full"
            style={{ objectFit: "cover" }}
          />
          <div className="hidden lg:block w-[15px] h-[15px] rounded-full bg-[#5EC09A] absolute left-[140px] top-[136px]"></div>
          <div className="w-[15px] h-[15px] hidden lg:block rounded-full bg-[#5EC09A] absolute right-[-34px] bottom-[100px]"></div>
          <div className="w-[15px] h-[15px] hidden lg:block rounded-full bg-[#5EC09A] absolute right-[50%] bottom-[-35.5px]"></div>
        </div>
      </div>
    </div>
  );
}
