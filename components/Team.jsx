import { TeamList } from "@/contants";
import Image from "next/image";

export default function Team() {
  return (
    <div className="mt-[87px]">
      <h1 className="text-5xl text-[#043623] mb-[64px] text-center font-medium">
        Leadership Team
      </h1>
      <div className="grid grid-cols-4 gap-[42px] ms-[121px] me-6">
        {TeamList.map((team, i) => (
          <Image
            key={team.id}
            height={500}
            width={292}
            src={team.imgSrc}
            alt="Team members icon"
            className={`${i % 2 != 0 ? "mt-10" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
