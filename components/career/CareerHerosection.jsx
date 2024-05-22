import Image from "next/image";

export default function CareerHerosection() {
  return (
    <div className="mx-[103px]">
      <div className="max-w-[581px] mx-auto mb-[67px] text-center pt-7">
        <h5 className="text-[#0DA168] text-2xl mb-2 font-normal">Careers</h5>
        <h1 className="font-medium text-[42px]">
          Unlocking New Possibilities in Global Transact
        </h1>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-6">
          <div className="w-[292px] h-[466px] rounded-[10px]">
            <Image
              height={466}
              width={292}
              alt="Career images icon"
              src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1714508324/image_CEO_bwe94p.png"
              className="object-cover w-full rounded-[10px] h-full"
            />
          </div>
          <div className="w-[292px] h-[444px] rounded-[10px]">
            <Image
              height={444}
              width={292}
              alt="Career images icon"
              src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1714508324/image_CEO_bwe94p.png"
              className="object-cover w-full  rounded-[10px] h-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-[608px] h-[519px] rounded-[10px]">
            <Image
              height={519}
              width={608}
              alt="Career images icon"
              src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1714508324/image_CEO_bwe94p.png"
              className="object-cover w-full rounded-[10px] h-full"
            />
          </div>
          <div className="w-[608px] h-[391px] rounded-[10px]">
            <Image
              height={391}
              width={608}
              alt="Career images icon"
              src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1714508324/image_CEO_bwe94p.png"
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
              src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1714508324/image_CEO_bwe94p.png"
              className="object-cover w-full rounded-[10px] h-full"
            />
          </div>
          <div className="w-[289px] h-[355px] rounded-[10px]">
            <Image
              height={355}
              width={289}
              alt="Career images icon"
              src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1714508324/image_CEO_bwe94p.png"
              className="object-cover w-full rounded-[10px] h-full"
            />
          </div>
          <div className="w-[289px] h-[239px] rounded-[10px]">
            <Image
              height={239}
              width={289}
              alt="Career images icon"
              src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1714508324/image_CEO_bwe94p.png"
              className="object-cover w-full rounded-[10px] h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
