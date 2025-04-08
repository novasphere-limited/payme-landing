import Image from "next/image";

export default function CareerLife() {
  return (
    <div className="xl:py-[100px] py-8 md:py-[75px] lg:py-[80px] text-[#444444] xl:mx-[100px] lg:mx-[65px] md:mx-[48px] sm:mx-8 mx-6">
      <h2 className="relative font-medium lg:text-[34px] text-2xl lg:mb-10 sm:md-7 mb-5 inline-flex">
        Life at PayyMe{" "}
        <span className="absolute top-0 right-[-14px]">
          <Image
            src="/asset/stripe.png"
            alt="Stripe icon"
            height={27}
            width={26}
          />
        </span>
      </h2>
      <div className="flex gap-10 lg:flex-row flex-col">
        <div className="w-full">
          <h6 className="sm:text-base text-sm w-full text-[#444444]">
            We’re a growing African fintech company focused on solving the
            problem of access to digital banking services for more than 30
            million unbanked individuals in Nigeria and across Africa. Our
            mission is to make the digital payment system an inclusive one—fast,
            trusted, and easily accessible, regardless of location or social
            status. We believe that everyone should have access to secure and
            efficient financial services, no matter their background.
            <br />
            <br />
            To achieve this, we are always on the lookout for exceptional talent
            who are performance- and result-driven, capable of adapting to a
            fast-paced environment, and passionate about solving real customer
            problems. By building a team of individuals who share our vision, we
            can continue to innovate and break down barriers to financial
            inclusion, ensuring that more people across Africa can engage with
            the digital economy.
          </h6>
        </div>
        <div className="flex items-center justify-center mb-3">
          <Image
            height={312}
            width={499}
            alt="Life at payyme image"
            src="/asset/payyme-life.png"
            className="object-fit"
          />
        </div>
      </div>
    </div>
  );
}
