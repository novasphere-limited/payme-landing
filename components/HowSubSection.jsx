import Image from "next/image";

export default function HowSub() {
  return (
    <div className="px-[100px] my-10">
      <div className="flex gap-[68px] items-center mb-[100px]">
        <div className="w-full flex justify-center">
          <Image
            src="/asset/hauwa-image.png"
            alt="customer testimony imge"
            width={520}
            height={331}
            className="testimony-img rounded-lg"
          />
        </div>
        <div className="w-full">
          <h1 className="font-medium text-5xl mb-4 leading-[48px] text-[#1F1F1F]">
            Instant Airtime & Data for Less
          </h1>
          <p className="text-base font-normal mb-4">
            Get Airtime & Data every time. Instantly top up data and airtime
            from your PayyMe wallet even if you are low on data. It is faster
            and easier.
          </p>
        </div>
      </div>
      <div className="flex gap-[68px] items-center mb-[100px]">
        <div className="w-full">
          <h1 className="font-medium text-5xl mb-4 leading-[48px] text-[#1F1F1F]">
            Pay Bills
          </h1>
          <p className="text-base font-normal mb-4">
            Use PayyMe to make instant bill payments. Paying bills is easy,
            secure, and can all be done from one place. Plus, you’ll never pay
            additional fees.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Image
            src="/asset/hauwa-image.png"
            alt="customer testimony imge"
            width={520}
            height={331}
            className="testimony-img rounded-lg"
          />
        </div>
      </div>
      <div className="flex gap-[68px] items-center">
        <div className="w-full">
          <h1 className="font-medium text-5xl mb-4 leading-[48px] text-[#1F1F1F]">
            Create Account
          </h1>
          <p className="text-base font-normal mb-4">
            Everyone on PayyMe creates account & verifies their identity for
            increased trust. With unique Tags on PayyMe, make is easy to always
            be sure you are sending money to the right person.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Image
            src="/asset/hauwa-image.png"
            alt="customer testimony imge"
            width={520}
            height={331}
            className="testimony-img rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
