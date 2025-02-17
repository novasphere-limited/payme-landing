import Image from "next/image";

export default function CareerLife() {
  return (
    <div className="xl:py-[100px] py-8 md:py-[75px] lg:py-[80px] text-[#444444] xl:mx-[100px] lg:mx-[65px] md:mx-[48px] sm:mx-8 mx-6">
      <div className="lg:flex">
        <div className="w-full">
          <h2 className="relative font-medium lg:text-[34px] text-2xl mb-1 inline-flex">
            Life at PayyMe{" "}
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
        <h6 className="sm:text-base text-sm w-full text-[#444444]">
          We’re an African fintech proud to serve more than five million
          customers. As a  global startup, we work at a fast pace (we call it
          ‘PayyMe Now’) across multiple timezones to solve some of the toughest
          challenges in order to deliver on our mission: to provide the most
          trusted and accessible financial services for people living in Africa
          and beyond.
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
      {/* <div className="bg-[#FFFFFF40] md:rounded-[100px] rounded-[10px] border-2 md:border-0 border-[#0DA16859] mb-6 shadow-style max-w-[1028px] py-5 xl:px-[161px] lg:px-[111px] md:px-[46px] px-[22px] mx-auto text-center">
        <h6>
          Join at a pivotal moment; the opportunity is huge, and PayyMe is just
          getting started. Help us shape the future of the African continent.
        </h6>
      </div> */}
    </div>
  );
}
