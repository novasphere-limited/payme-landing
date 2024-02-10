import { ChooseData } from "@/contants";
import Image from "next/image";

export default function Choose() {
  return (
    <div className="main-container text-center">
      <h1 className="header-2_bold mb-4">Why choose us</h1>
      <p className="label-2_regular mb-3">
        Transforming Ideas into Digital Realities, Where Vision Meets
        Innovation. Your Partner in Technology Evolution
      </p>
      <div className="grid-2">
        {ChooseData.map((choose) => (
          <div className="w-100 rounded-md shadow-md p-5" key={choose.id}>
            <div className="mb-2 flex justify-center">
              <Image
                src={choose.imgSrc}
                width={509}
                height={571}
                alt="Why choose us"
                className="rounded-lg"
              />
            </div>
            <div>
              <h4 className="header-4_medium mb-3 text-[#0DA168]">
                {choose.title}
              </h4>
              <h6 className="label-2_regular text-start mb-3">{choose.text}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
