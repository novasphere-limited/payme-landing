import Image from "next/image";

export default function Testimony() {
  return (
    <div className="main-container flex gap-[68px] pad-1 items-center">
      <div className="w-full">
        <Image
          src="/asset/hauwa-image.png"
          alt="customer testimony imge"
          width={520}
          height={331}
          className="testimony-img rounded-lg"
        />
      </div>

      <div className="w-full">
        <h1 className="font-medium text-5xl mb-4 leading-[48px]">
          Revolutionize payments all with a single SMS
        </h1>
        <p className="text-base font-normal mb-4">
          Empowering Your Ideas Digitally: Where Vision and Innovation Thrive.
          Let's Evolve Technology Together.
        </p>
        <p className="text-base text-warning800 font-semibold mb-2">Hauwa</p>
        <p className="text-sm font-normal">Trader</p>
      </div>
    </div>
  );
}
