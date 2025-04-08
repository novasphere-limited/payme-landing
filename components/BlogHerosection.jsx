import Image from "next/image";

export default function BlogHerosection() {
  return (
    <div>
      <div className="bg-[#033A08]">
        <div className="blog-bg_image">
          <div className="xl:px-[100px] lg:px-[75px] md:px-[50px] sm:px-[35px] px-4 py-[21px] bg-[#171717B2] xl:py-[120px] sm:py-[40px] md:py-[75px] lg:py-[100px]">
            <h1 className="font-semibold xl:text-[48px] lg:text-[44px]  text-2xl sm:text-4xl md:text-6xl lg:mb-4 sm:mb-2 mb-1 text-[#FEFCFC] font-rope">
              <span className="text-warning600">Payyme</span> in the news
            </h1>

            <p className="text-normal md:text-[22px] text-base w-[400px] lg:mb-[42px] mb-[24px] text-white">
              The latest news, announcements from PayyMe
            </p>

            <div
              className="px-2 py-1 flex items-center rounded-md "
              style={{ border: "1px solid #fff", maxWidth: "322px" }}
            >
              <div>
                <Image
                  height={20}
                  width={20}
                  alt="Search icon"
                  src="/favicon_io/nova-search-normal.svg"
                  className="me-2"
                />
              </div>
              <form className="w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border-none w-full bg-transparent"
                  style={{
                    outline: "none !important",
                    border: "none !important",
                    boxShadow: "none !important",
                    color: "#fff !important",
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
