import { TeamList } from "@/contants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Team() {
  const [hoveredStates, setHoveredStates] = useState(
    Array(TeamList.length).fill(false)
  );
  const handleMouseEnter = (index) => {
    const updatedHoveredStates = [...hoveredStates];
    updatedHoveredStates[index] = true;
    setHoveredStates(updatedHoveredStates);
  };

  const handleMouseLeave = (index) => {
    const updatedHoveredStates = [...hoveredStates];
    updatedHoveredStates[index] = false;
    setHoveredStates(updatedHoveredStates);
  };

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
            className={`${
              i % 2 != 0 ? "mt-10" : ""
            } flex justify-center relative ${
              hoveredStates[i] ? "contrast-normal" : "contrast-black"
            }`}
            key={team.id}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            <Image
              height={500}
              width={292}
              src={team.imgSrc}
              alt="Team members icon"
              className={`h-[500px] rounded-md w-full ${
                hoveredStates[i] ? "" : "filter grayscale"
              } h-500`}
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
            <div
              className={`absolute bottom-0 w-full ${
                hoveredStates[i] ? "pb-12" : "pb-6"
              } text-white transition-opacity duration-300 ease-in-out`}
            >
              <h5 className="md:text-4xl text-2xl mb-2 text-center font-medium">
                {team.name}
              </h5>
              <h5 className="text-sm mb-2 text-center font-normal">
                {team.post}
              </h5>
              <Link
                href={team.link}
                className={`${
                  hoveredStates[i] ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300 ease-in-out`}
                target="_blank"
              >
                <h6 className="text-sm text-center font-normal underline">
                  {team.url}
                </h6>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <style jsx>{`
  .blur {
    filter: blur(5px);
  }

  .blur-none {
    filter: blur(0);
  }
`}</style> */
}
