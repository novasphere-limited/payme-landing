import { TeamList } from "@/contants";
import Image from "next/image";

export default function Team() {
  return (
    <div className="main-container">
      <h1 className="header-2_bold mb-4 text-center">Meet the Team</h1>
      <h3 className="text-2_regular mb-5 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </h3>
      <div className="grid sm:grid-cols-3 gap-4 grid-cols-1">
        {TeamList.map((team) => (
          <div className="flex items-center flex-col" key={team.id}>
            <div className="flex items-center mb-4">
              <Image
                alt={team.name}
                src={team.imgSrc}
                width={364}
                height={364}
              />
            </div>
            <h4 className="header-4_bold mb-2">{team.name}</h4>
            <p className="text-2_regular">{team.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
