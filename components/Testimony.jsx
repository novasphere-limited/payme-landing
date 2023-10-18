import Image from "next/image";

export default function Testimony() {
  return (
    <div className="main-container flex gap-5">
      <div className="relative w-full">
        <div>
          <Image
            src="/asset/hauwa-image.png"
            alt="customer testimony imge"
            width={736}
            height={691}
            className="testimony-img"
          />
        </div>
        <div
          className="rounded-md shadow-lg p-2 testimony-abs"
          style={{ background: "#fff" }}
        >
          <p className="text-1_regular mb-3">
            Transforming Ideas into Digital Realities, Where Vision Meets
            Innovation. Your Partner in Technology Evolution Transforming Ideas
            into Digital Realities, Where Vision Meets Innovation. Your Partner
            in Technology Evolution Transforming Ideas into Digital Realities,
            Where Vision Meets Innovation. Your Partner in Technology Evolution
          </p>
          <h6 className="label-3_bold text-grnSec mb-2">Hauwa</h6>
          <h6 className="label-4_regular">Trader</h6>
        </div>
      </div>
      <div className="w-full">
        <h1 className="header-1_black mt-5">
          Elevating Possibilities Through Technology{" "}
          <span className="text-grnSec">Excellence</span>
        </h1>
      </div>
    </div>
  );
}
