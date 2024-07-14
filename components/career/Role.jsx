import Image from "next/image";

export default function CareerRole() {
  return (
    <>
      <div className="rounded-[40px] bg-[#032015] lg:mx-10 mx-5 md:mx-7 text-[#FEFCFC] font-medium mb-[60px]">
        <h3
          className="pb-4 pt-[59px] l:px-[64px] lg:px-[48px] md:px-[36px] sm:px-[24px] px-4 md:text-5xl text-2xl"
          style={{ borderBottom: "1px solid #A9A7A7" }}
        >
          Find your best role
        </h3>
        <div>
          <div
            className="xl:px-[64px] lg:px-[48px] md:px-[36px] sm:px-[24px] px-4 pt-6 pb-[40px] md:flex"
            style={{ borderBottom: "1px solid #A9A7A7" }}
          >
            <h5 className="md:text-2xl text-xl w-full mb-6 md:mb-0">
              Business & Customer Operation
            </h5>
            <div className="p-4 flex ms-auto justify-between bg-[#ECF3F54D] rounded-[10px] w-full">
              <div>
                <h5 className="md:text-2xl text-xl mb-1">
                  Customer Success Manager
                </h5>
                <p className="font-normal text-sm text-[#D3D0D0]">
                  Full-Time Role
                </p>
              </div>
              <div className="h-[39px] w-[39px] rounded-full bg-[#0DA168] flex items-center justify-center">
                <Image
                  alt="Slant arrow icon"
                  height={24}
                  width={24}
                  src="/favicon_io/arrow-slant.svg"
                />
              </div>
            </div>
          </div>
          <div
            className="xl:px-[64px] lg:px-[48px] md:px-[36px] sm:px-[24px] px-4 pt-6 pb-[40px] md:flex"
            style={{ borderBottom: "1px solid #A9A7A7" }}
          >
            <h5 className="md:text-2xl text-xl w-full mb-6 md:mb-0">
              Engineering
            </h5>
            <div className="ms-auto w-full">
              <div className="p-4 flex ms-auto w-full justify-between mb-6 bg-[#ECF3F54D] rounded-[10px]">
                <div>
                  <h5 className="md:text-2xl text-xl mb-1">
                    Head of Engineering
                  </h5>
                  <p className="font-normal text-sm text-[#D3D0D0]">
                    Full-Time Role
                  </p>
                </div>
                <div>
                  <div className="h-[39px] w-[39px] rounded-full bg-[#0DA168] flex items-center justify-center">
                    <Image
                      alt="Slant arrow icon"
                      height={24}
                      width={24}
                      src="/favicon_io/arrow-slant.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 flex ms-auto w-full justify-between bg-[#ECF3F54D] rounded-[10px]">
                <div>
                  <h5 className="md:text-2xl text-xl mb-1">
                    Senior Software Engineering
                  </h5>
                  <p className="font-normal text-sm text-[#D3D0D0]">
                    Full-Time Role
                  </p>
                </div>
                <div>
                  <div className="h-[39px] w-[39px] rounded-full bg-[#0DA168] flex items-center justify-center">
                    <Image
                      alt="Slant arrow icon"
                      height={24}
                      width={24}
                      src="/favicon_io/arrow-slant.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="xl:px-[64px] lg:px-[48px] md:px-[36px] sm:px-[24px] px-4 pt-6 pb-[40px] md:flex"
            style={{ borderBottom: "1px solid #A9A7A7" }}
          >
            <h5 className="md:text-2xl text-xl w-full mb-6 md:mb-0">Finance</h5>
            <div className="p-4 flex ms-auto w-full justify-between bg-[#ECF3F54D] rounded-[10px]">
              <div>
                <h5 className="md:text-2xl text-xl mb-1">
                  Senior Software Engineering
                </h5>
                <p className="font-normal text-sm text-[#D3D0D0]">
                  Full-Time Role
                </p>
              </div>
              <div className="h-[39px] w-[39px] rounded-full bg-[#0DA168] flex items-center justify-center">
                <Image
                  alt="Slant arrow icon"
                  height={24}
                  width={24}
                  src="/favicon_io/arrow-slant.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
