import Image from "next/image";

export default function Todo() {
  return (
    <div className="main-container">
      <h2 className="header-2_bold text-center mb-3">What do we do?</h2>
      <p className="text-2_regular mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>
      <div className="grid-2">
        <div className="bg-blue100 py-10 px-4 rounded-md">
          <div className="mb-3">
            <Image
              src="/favicon_io/flight.svg"
              alt="Flight icon"
              width={12}
              height={14}
            />
          </div>
          <h6 className="label-2_medium mb-4">
            <span className="pe-2">01</span> Digital Advertising
          </h6>
          <p className="text-2_regular mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <button className="text-2_bold flex gap-2 mb-10 items-center">
            <p className="text-blue500">Read More</p>
            <Image
              src="/favicon_io/arrow_up.svg"
              alt="Arrow icon"
              width={12}
              height={14}
            />
          </button>
        </div>
        <div className="bg-warning100 py-10 px-4 rounded-md">
          <div className="mb-3">
            <Image
              src="/favicon_io/flight.svg"
              alt="Flight icon"
              width={12}
              height={14}
            />
          </div>
          <h6 className="label-2_medium mb-4">
            <span className="pe-2">01</span> Digital Advertising
          </h6>
          <p className="text-2_regular mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <button className="text-2_bold flex gap-2 mb-10 items-center">
            <p className="text-warning500">Read More</p>
            <Image
              src="/favicon_io/arrow_up.svg"
              alt="Arrow icon"
              width={12}
              height={14}
            />
          </button>
        </div>
        <div className="bg-warning100 py-10 px-4 rounded-md">
          <div className="mb-3">
            <Image
              src="/favicon_io/flight.svg"
              alt="Flight icon"
              width={12}
              height={14}
            />
          </div>
          <h6 className="label-2_medium mb-4">
            <span className="pe-2">01</span> Digital Advertising
          </h6>
          <p className="text-2_regular mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <button className="text-2_bold flex gap-2 mb-10 items-center">
            <p className="text-warning500">Read More</p>
            <Image
              src="/favicon_io/arrow_up.svg"
              alt="Arrow icon"
              width={12}
              height={14}
            />
          </button>
        </div>
        <div className="bg-blue100 py-10 px-4 rounded-md">
          <div className="mb-3">
            <Image
              src="/favicon_io/flight.svg"
              alt="Flight icon"
              width={12}
              height={14}
            />
          </div>
          <h6 className="label-2_medium mb-4">
            <span className="pe-2">01</span> Digital Advertising
          </h6>
          <p className="text-2_regular mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <button className="text-2_bold flex gap-2 mb-10 items-center">
            <p className="text-blue500">Read More</p>
            <Image
              src="/favicon_io/arrow_up.svg"
              alt="Arrow icon"
              width={12}
              height={14}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
