import { TeamList } from "@/contants";
import Image from "next/image";

export default function Team() {
  return (
    <div className="xl:mt-[87px] mt-4 md:mt-9">
      <h1 className="xl:text-5xl text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#043623] xl:mb-[64px] mb-3 sm:mb-6 md:mb-9 lg:mb-50 text-center font-medium flex justify-center items-center gap-2">
        <div
          style={{ height: "3.5px", width: "29px", background: "#0DA168" }}
        ></div>
        Leadership Team
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[42px] md:gap-[30px] gap-[16px] xl:ms-[121px] sm:ms-7 md:ms-10 lg:ms-75 ms-4 me-3 sm:me-4 lg:me-5">
        {TeamList.map((team, i) => (
          <div
            className={`${i % 2 != 0 ? "mt-10" : ""} flex justify-center`}
            key={team.id}
          >
            <Image
              height={500}
              width={292}
              src={team.imgSrc}
              alt="Team members icon"
              classname="w-full"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
