import Image from "next/image";

export default function CareerHerosection() {
  return (
    <div
      className="xl:pb-[176px] pb-[50px] sm:pb-[75px] md:pb-[100px] lg:pb-[120px]"
      style={{
        backgroundImage: 'url("/asset/terms-bgimg.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top -120px",
      }}
    >
      <div className="xl:px-[103px] lg:px-[70px] md:px-[48px] sm:px-8 px-5">
        <div className="max-w-[581px] mx-auto mb-2.5t text-center pt-7">
          <h5 className="text-[#0DA168] text-2xl mb-2 font-normal">Careers</h5>
          <h1 className="font-medium xl:text-[42px] text-5xl md:text-5xl">
            Unlocking New Possibilities in Global Transact
          </h1>
        </div>
      </div>
      <Image
        src="/asset/terms-bg.jpg"
        alt="Career image"
        height={925}
        width={1440}
        className="w-full h-full"
      />
    </div>
  );
}
