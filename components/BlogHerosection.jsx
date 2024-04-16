import Image from "next/image";
import Link from "next/link";

export default function BlogHerosection() {
  return (
    <div>
      <div className="blog-bg_image">
        <div className="xl:px-[100px] lg:px-[75px] md:px-[50px] sm:px-[35px] px-4 py-[48px] backdrop-blur-sm bg-[#000000BF]">
          <h1 className="font-semibold xl:text-[48px] lg:text-[44px] text-[36px] mb-4 text-[#FEFCFC]">
            <span className="text-warning600">Payyme</span> in the news
          </h1>

          <p className="text-normal text-[22px] w-[400px] mb-[42px] text-white">
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
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
