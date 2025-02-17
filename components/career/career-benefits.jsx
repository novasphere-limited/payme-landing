import Image from "next/image";

export default function CareerBenefits() {
  const list = [
    {
      id: 1,
      img: "/asset/benefit-1.jpg",
      title: "Opportunity To Make Real Impact",
      text: "Drive meaningful change and see the direct results of your contributions to our mission.",
    },
    {
      id: 2,
      img: "/asset/benefit-2.jpg",

      title: "Take On Ownership Mentality",
      text: "Be empowered to make decisions and take responsibility for your projects and outcomes.",
    },
    {
      id: 3,
      img: "/asset/benefit-3.jpg",

      title: "Collaborate With Like Minded  Individuals",
      text: "Join a team of passionate professionals who share your drive for excellence.",
    },
    {
      id: 4,
      img: "/asset/benefit-4.jpg",

      title: "Work In A Dynamic Environment",
      text: "Thrive in a fast-paced setting where no two days are the same and innovation is constant.",
    },
    {
      id: 5,
      img: "/asset/benefit-5.jpg",

      title: "Opportunity For Career Growth",
      text: "Develop your skills and advance your career with our comprehensive development programs.",
    },
    {
      id: 6,
      img: "/asset/benefit-6.jpg",

      title: "Be Flexible And Express Innovation",
      text: "Share your ideas freely and help shape the future through creative problem-solving.",
    },
  ];
  return (
    <div className="xl:pb-[132px] lg:pb-[100px] md:pb-[75px] lg:pb-[80px] text-[#444444] xl:mx-[100px] lg:mx-[65px] md:mx-[48px] sm:mx-8 mx-6">
      <div className="w-full mb-10">
        <h2 className="relative font-medium md:text-[34px] text-[30px] mb-1 inline-flex">
          Benefits{" "}
          <span className="absolute top-0 right-[-14px]">
            <Image
              src="/asset/stripe.png"
              alt="Stripe icon"
              height={27}
              width={26}
            />
          </span>
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-10 lg:gap-8 md:gap-6 gap-4">
        {list.map((_, index) => (
          <div
            className="border border-[#EDEDED] rounded-[12px] overflow-hidden"
            key={index}
          >
            <div>
              <Image
                src={_.img}
                alt="Career images"
                height={214}
                width={381}
                className="object-cover w-full"
              />
            </div>
            <div className="p-6">
              <h6
                className="font-semibold text-base text-[#111827] mb-3"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {_.title}
              </h6>
              <p
                className="font-normal text-sm text-[#4B5563] leading-[26px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {_.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
