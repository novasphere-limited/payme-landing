import Image from "next/image";

export default function CareerRole() {
  return (
    <>
      <div className="rounded-[40px] bg-[#032015] mx-10 text-[#FEFCFC] font-medium">
        <h3
          className="pb-4 pt-[59px] ps-[64px] text-5xl"
          style={{ borderBottom: "1px solid #A9A7A7" }}
        >
          Find your best role
        </h3>
        <div>
          <div
            className="px-[64px] pt-6 pb-[40px] flex"
            style={{ borderBottom: "1px solid #A9A7A7" }}
          >
            <h5 className="text-2xl">Business & Customer Operation</h5>
            <div className="p-4 flex ms-auto w-[713px] justify-between">
              <div>
                <h5 className="text-2xl mb-1">Customer Success Manager</h5>
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
            className="px-[64px] pt-6 pb-[40px] flex"
            style={{ borderBottom: "1px solid #A9A7A7" }}
          >
            <h5 className="text-2xl">Engineering</h5>
            <div className="ms-auto">
              <div className="p-4 flex ms-auto w-[713px] justify-between mb-6">
                <div>
                  <h5 className="text-2xl mb-1">Head of Engineering</h5>
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
              <div className="p-4 flex ms-auto w-[713px] justify-between mb-6">
                <div>
                  <h5 className="text-2xl mb-1">Senior Software Engineering</h5>
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
            className="px-[64px] pt-6 pb-[40px] flex"
            style={{ borderBottom: "1px solid #A9A7A7" }}
          >
            <h5 className="text-2xl">Finance</h5>
            <div className="p-4 flex ms-auto w-[713px] justify-between">
              <div>
                <h5 className="text-2xl mb-1">Senior Software Engineering</h5>
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
