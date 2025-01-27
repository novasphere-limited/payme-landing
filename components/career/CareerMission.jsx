import Image from "next/image";

export default function CareerMission() {
  const TeamList = [
    {
      id: 1,
      imgSrc: "/asset/team-1_1.png",
    },
    {
      id: 2,
      imgSrc: "/asset/team-1_2.png",
    },
    {
      id: 3,
      imgSrc: "/asset/team-1_3.png",
    },
    {
      id: 4,
      imgSrc: "/asset/team-1_4.png",
    },
  ];

  return (
    <div className="xl:px-[100px] lg:px-[65px] md:px-[48px] sm:px-8 px-5 py-[45px] bg-[#FFFFFF]">
      <div className="lg:flex xl:gap-[95px] gap-[48px]">
        <div className="w-full justify-center flex flex-col">
          <div className="sm:mb-auto mb-8">
            <h1 className="font-medium xl:text-5xl sm:text-xl md:text-2xl lg:text-3xl text-base md:mb-4 mb-2 text-[#043623] text-center">
              <span style={{ width: "29px", borderTop: "3.5px solid #0DA168" }}>
                Our
              </span>{" "}
              Mission
            </h1>

            <h6 className="sm:text-base text-sm font-normal md:mb-4 mb-2">
              To revolutionize payments through inclusion and innovation. We
              believe that everyone deserves to be included in the fintech
              ecosystem, regardless of location or access to technology. To do
              this, we’re committed to breaking down payment barriers and
              creating possibilities for total financial inclusivity using a
              text-based approach.
            </h6>
          </div>
          <div>
            <h1 className="font-medium xl:text-5xl sm:text-xl md:text-2xl lg:text-3xl text-base md:mb-4 mb-2 text-[#043623] text-center">
              <span style={{ width: "29px", borderTop: "3.5px solid #0DA168" }}>
                Our
              </span>{" "}
              Goal
            </h1>

            <h6 className="sm:text-base text-sm font-normal md:mb-4 mb-2">
              We’re a team of passionate individuals dedicated to making a
              positive impact. The diverse team brings together experience in
              finance, digital technology, people management, research and
              artificial intelligence. Regardless, we share a common goal, to
              make safe and secure financial solutions available to all.
            </h6>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 md:gap-6 sm:gap-4 gap-2 mt-[44px] lg:mt-0">
          {TeamList.map((team, index) => (
            <Image
              key={index}
              src={team.imgSrc}
              height={292}
              width={292}
              alt="Team member icon"
              className="object-cover w-full"
              style={{
                borderRadius: "0px 57.02px 0px 57.02px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
