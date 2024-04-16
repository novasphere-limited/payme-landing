import { ChooseList } from "@/contants";
import Image from "next/image";

export default function Choose() {
  return (
    <div className="px-[130px] text-center main-container md:mt-8 mt-3">
      <h1 className="text-5xl text-warning600 mb-[14px]">Why choose us</h1>
      <p className="label-4_regular mb-3 mx-auto" style={{ maxWidth: "652px" }}>
        We’re making payments accessible, even to the most remote people and
        places without worrying about connectivity.
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-[42px]">
        {ChooseList.map((choose, index) => (
          <div className="rounded-lg shadow-md px-[34px] py-[28px]" key={index}>
            <div className="mb-2 flex justify-center">
              <Image
                src="/asset/choose-img1.png"
                width={500}
                height={334}
                alt="Why choose us"
                className="rounded-lg"
                loading="lazy"
              />
            </div>
            <div>
              <h4 className="text-[22px] text-warning600 font-semibold mb-2">
                {choose.title}
              </h4>
              <h6 className="label-2_regular text-center">{choose.text}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
