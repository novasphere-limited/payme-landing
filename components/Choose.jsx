import Image from "next/image";

export default function Choose() {
  return (
    <div className="main-container text-center">
      <h1 className="header-1_black mb-4">Why choose us</h1>
      <p className="label-4_regular mb-3">
        Transforming Ideas into Digital Realities, Where Vision Meets
        Innovation. Your Partner in Technology Evolution
      </p>
      <div className="grid-2">
          <div className="w-100 rounded-md shadow-md p-4">
            <div className="mb-2 flex justify-center">
              <Image
                src="/asset/choose-img1.png"
                width={320}
                height={170}
                alt="Why choose us"
                className="rounded-lg"
              />
            </div>
            <div>
              <h4 className="header-4_medium mb-3">Efficiency</h4>
              <h6 className="label-2_regular text-start">
                Transforming Ideas into Digital Realities, Where Vision Meets
                Innovation. Your Partner in Technology Evolution Transforming
                Ideas into Digital Realities, Where Vision Meets Innovation.
                Your Partner in Technology Evolution.
              </h6>
            </div>
          </div>
          <div className="w-100 rounded-md shadow-md p-4">
            <div className="mb-2 flex justify-center">
              <Image
                src="/asset/choose-img2.png"
                width={320}
                height={170}
                alt="Why choose us"
                className="rounded-lg"
              />
            </div>
            <div>
              <h4 className="header-4_medium mb-3">Reliability</h4>
              <h6 className="label-2_regular text-start">
                Transforming Ideas into Digital Realities, Where Vision Meets
                Innovation. Your Partner in Technology Evolution Transforming
                Ideas into Digital Realities, Where Vision Meets Innovation.
                Your Partner in Technology Evolution.
              </h6>
            </div>
          </div>
          <div className="w-100 rounded-md shadow-md p-4">
            <div className="mb-2 flex justify-center">
              <Image
                src="/asset/choose-img3.png"
                width={320}
                height={170}
                alt="Why choose us"
                className="rounded-lg"
              />
            </div>
            <div>
              <h4 className="header-4_medium mb-3">Speed</h4>
              <h6 className="label-2_regular text-start">
                Transforming Ideas into Digital Realities, Where Vision Meets
                Innovation. Your Partner in Technology Evolution Transforming
                Ideas into Digital Realities, Where Vision Meets Innovation.
                Your Partner in Technology Evolution.
              </h6>
            </div>
          </div>
          <div className="w-100 rounded-md shadow-md p-4">
            <div className="mb-2 flex justify-center">
              <Image
                src="/asset/choose-img4.png"
                width={320}
                height={170}
                alt="Why choose us"
                className="rounded-lg"
              />
            </div>
            <div>
              <h4 className="header-4_medium mb-3">Security</h4>
              <h6 className="label-2_regular text-start">
                Transforming Ideas into Digital Realities, Where Vision Meets
                Innovation. Your Partner in Technology Evolution Transforming
                Ideas into Digital Realities, Where Vision Meets Innovation.
                Your Partner in Technology Evolution.
              </h6>
            </div>
          </div>
      </div>
    </div>
  );
}
