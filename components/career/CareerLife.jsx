import Image from "next/image";

export default function CareerLife() {
  return (
    <div className="mt-[100px] text-[#444444]">
      <div className="flex mx-[108px] mb-[100px]">
        <div className="w-full">
          <h2 className="font-medium text-[34px] mb-1 inline-flex">
            Life at PayyMe{" "}
            <span className="">
              <Image
                src="/asset/stripe.png"
                alt="Stripe icon"
                height={27}
                width={26}
              />
            </span>
          </h2>
        </div>
        <h6 className="text-base w-full">
          We’re an <span className="font-medium">African fintech</span> proud to
          serve more than five million customers. As a 
          <span className="font-medium">global startup</span>, we work at a fast
          pace (we call it ‘<span className="font-medium">PayyMe Now</span>’)
          across multiple timezones to solve some of the toughest challenges in
          order to deliver on our mission:{" "}
          <span className="font-medium">
            to provide the most trusted and accessible financial services for
            people living in Africa and beyond.
          </span>
          <br />
          <br />
          This means we place emphasis on high-performance, outcome-driven
          results and adaptability. How we go about our work is just as
          important, and our Chipper values:Be Customer Obsessed, Be Bold, Be an
          Owner, Be Communicative to Develop Trust— guide how we show up for
          each other. We believe we do our best work by adopting a hybrid
          approach; mixing remote with regular time spent together in one of our
          Chipper offices dotted around the world.
        </h6>
      </div>
      <div className="mx-[173px] flex gap-[99px] items-center mb-[100px]">
        <div className="w-full">
          <h2 className="font-medium text-[34px] mb-1 inline-flex">
            Imagine it PayyMe{" "}
            <span className="">
              <Image
                src="/asset/stripe.png"
                alt="Stripe icon"
                height={27}
                width={26}
              />
            </span>
          </h2>
          <h6 className="text-base">
            You're just clicks away from your next seamless payment.
          </h6>
        </div>
        <div className="py-[34px] w-full text-center bg-[#FFFFFF40] rounded-[10px] shadow-style ">
          <h5 className="text-2xl font-normal text-[#032015] mb-6">Careers</h5>
          <h3 className="text-5xl font-medium text-[#444444 mb-[30px]">
            See all open jobs
          </h3>
          <button className="bg-[#0DA168] py-[11.5px] rounded-[4px] px-[34px] text-[#FEFCFC] font-medium text-sm">
            Careers
          </button>
        </div>
      </div>
      <div className="bg-[#FFFFFF40] rounded-[100px] mb-6 shadow-style max-w-[1028px] py-5 px-[162px] mx-auto text-center">
        <h6>
          Join at a pivotal moment; the opportunity is huge, and Payyme is just
          getting started. Help us shape the future of the African continent.
        </h6>
      </div>
    </div>
  );
}
