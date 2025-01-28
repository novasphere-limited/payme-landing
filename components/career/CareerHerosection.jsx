import Image from "next/image";

export default function CareerHerosection() {
  return (
    <div className="xl:px-[103px] lg:px-[70px] md:px-[48px] sm:px-8 px-5">
      <div className="max-w-[581px] mx-auto md:mb-[67px] mb-[44px] text-center pt-7">
        <h5 className="text-[#0DA168] text-2xl mb-2 font-normal">Careers</h5>
        <h1 className="font-medium xl:text-[42px] text-5xl md:text-5xl">
          Unlocking New Possibilities in Global Transact
        </h1>
      </div>
      <div className="lg:flex xl:gap-6 gap-4 hidden">
        <div className="flex flex-col gap-6">
          <div className="w-[292px] h-[466px] rounded-[10px]">
            <Image
              height={466}
              width={292}
              alt="Career images icon"
              src="/asset/career-img-1.png"
              className="object-cover w-full rounded-[10px] h-full"
            />
          </div>
          <div className="w-[292px] h-[444px] rounded-[10px]">
            <Image
              height={444}
              width={292}
              alt="Career images icon"
              src="/asset/career-img-1.png"
              className="object-cover w-full  rounded-[10px] h-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="w-full h-[519px] rounded-[10px]">
            <Image
              height={519}
              width={608}
              alt="Career images icon"
              src="/asset/career-img-1.png"
              className="object-cover w-full rounded-[10px] h-full"
            />
          </div>
          <div className="w-full h-[391px] rounded-[10px]">
            <Image
              height={391}
              width={608}
              alt="Career images icon"
              src="/asset/career-img-1.png"
              className="object-cover w-full rounded-[10px] h-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-[289px] h-[292px] rounded-[10px]">
            <Image
              height={292}
              width={289}
              alt="Career images icon"
              src="/asset/career-img-1.png"
              className="object-cover w-full rounded-[10px] h-full"
            />
          </div>
          <div className="w-[289px] h-[355px] rounded-[10px]">
            <Image
              height={355}
              width={289}
              alt="Career images icon"
              src="/asset/career-img-1.png"
              className="object-cover w-full rounded-[10px] h-full"
            />
          </div>
          <div className="w-[289px] h-[239px] rounded-[10px]">
            <Image
              height={239}
              width={289}
              alt="Career images icon"
              src="/asset/career-img-1.png"
              className="object-cover w-full rounded-[10px] h-full"
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden gap-4 grid sm:grid-cols-2 grid-cols-1">
        <div className="w-full h-[466px] rounded-[10px]">
          <Image
            height={466}
            width={292}
            alt="Career images icon"
            src="/asset/career-img-1.png"
            className="object-cover w-full rounded-[10px] h-full"
          />
        </div>
        <div className="w-full h-[466px] rounded-[10px]">
          <Image
            height={444}
            width={292}
            alt="Career images icon"
            src="/asset/career-img-1.png"
            className="object-cover w-full  rounded-[10px] h-full"
          />
        </div>
        <div className="w-full h-[391px] rounded-[10px]">
          <Image
            height={519}
            width={608}
            alt="Career images icon"
            src="/asset/career-img-1.png"
            className="object-cover w-full rounded-[10px] h-full"
          />
        </div>
        <div className="w-full h-[391px] rounded-[10px]">
          <Image
            height={391}
            width={608}
            alt="Career images icon"
            src="/asset/career-img-1.png"
            className="object-cover w-full rounded-[10px] h-full"
          />
        </div>
        <div className="w-full h-[292px] rounded-[10px]">
          <Image
            height={292}
            width={289}
            alt="Career images icon"
            src="/asset/career-img-1.png"
            className="object-cover w-full rounded-[10px] h-full"
          />
        </div>
        <div className="w-full h-[292px] rounded-[10px]">
          <Image
            height={355}
            width={289}
            alt="Career images icon"
            src="/asset/career-img-1.png"
            className="object-cover w-full rounded-[10px] h-full"
          />
        </div>
        <div className="w-full h-[292px] rounded-[10px]">
          <Image
            height={239}
            width={289}
            alt="Career images icon"
            src="/asset/career-img-1.png"
            className="object-cover w-full rounded-[10px] h-full"
          />
        </div>
      </div>
    </div>
  );
}
