import Image from "next/image";

export default function HowSub() {
  return (
    <div className="sub-hero-pad my-10">
      <div className="sm:flex xl:gap-[68px] md:gap-[48px] gap-[16px] items-center xl:mb-[100px] lg:mb-[75px] md:mb-[60px] sm:mb-9 mb-6">
        <div className="w-full flex justify-center md:h-[464px] h-[364px] overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1713356881/PayyMe/airtime_image_atnxnz.png"
            alt="customer testimony imge"
            width={455}
            height={464}
            className="rounded-lg w-full"
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full">
          <h1 className="font-medium xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-4 leading-[48px] text-[#1F1F1F]">
            Instant Airtime & Data for Less
          </h1>
          <h6 className="md:text-base text-sm font-normal mb-4">
            Get Airtime & Data every time. Instantly top up data and airtime
            from your PayyMe wallet even if you are low on data. It is faster
            and easier.
          </h6>
        </div>
      </div>
      <div className="sm:flex xl:gap-[68px] md:gap-[48px] gap-[16px] items-center xl:mb-[100px] lg:mb-[75px] md:mb-[60px] sm:mb-9 mb-6 ">
        <div className="w-full">
          <h1 className="font-medium xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-4 leading-[48px] text-[#1F1F1F]">
            Pay Bills
          </h1>
          <h6 className="md:text-base text-sm font-normal mb-4">
            Use PayyMe to make instant bill payments. Paying bills is easy,
            secure, and can all be done from one place. Plus, you’ll never pay
            additional fees.
          </h6>
        </div>
        <div className="w-full flex justify-center md:h-[433px] h-[331px] overflow-hidden">
          <Image
            src="/asset/payyme-bill-img.png"
            alt="customer testimony imge"
            width={520}
            height={433}
            className="rounded-lg w-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="sm:flex xl:gap-[68px] md:gap-[48px] gap-[16px] items-center">
        <div className="w-full">
          <h1 className="font-medium xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-4 leading-[48px] text-[#1F1F1F]">
            Create Account
          </h1>
          <h6 className="md:text-base text-sm font-normal mb-4">
            Everyone on PayyMe creates account & verifies their identity for
            increased trust. With unique Tags on PayyMe, make is easy to always
            be sure you are sending money to the right person.
          </h6>
        </div>
        <div className="w-full flex justify-center md:h-[433px] h-[333px] overflow-hidden">
          <Image
            src="/asset/how-3.png"
            alt="customer testimony imge"
            width={579}
            height={433}
            className="rounded-lg w-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
