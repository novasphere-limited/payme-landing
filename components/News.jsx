import { NewsList } from "@/contants";
import Image from "next/image";
import Link from "next/link";

export default function News() {
  return (
    <div className="xl:mx-[100px] lg:mx-[70px] md:mx-[35px] sm:mx-[20px] mx-3">
      <div className="relative">
        <h2 className="flex items-center gap-1 font-medium xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-[22px] z-50">
          <div
            style={{ height: "3.5px", width: "29px", background: "#0DA168" }}
          ></div>
          News at Novasphere
        </h2>
      </div>
      <div
        className="grid grid-cols-1 justify-between mb-4 sm:grid-cols-2 lg:grid-cols-3"
        style={{ rowGap: "2.5rem" }}
      >
        {NewsList.map((news) => (
          <>
            <div className="w-100 p-4">
              <div className="mb-2 flex justify-center">
                <Image
                  src={news.imgSrc}
                  width={333}
                  height={188}
                  alt={news.author}
                  className="rounded-[10px] w-full"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex">
                  <h4 className="text-xs text-warning600 mb-[22px] md:mt-[32px] mt-[24px] bg-[#CFECE1] p-1">
                    {news.title}
                  </h4>
                </div>
                <h6 className="font-medium text-base md:mb-4 mb-2 text-[#444444]">
                  {news.header}
                </h6>
                <h6 className="font-normal text-sm mb-[22px] text-[#444444]">
                  {news.text}
                </h6>
                <Link
                  className="text-2_bold flex gap-2 items-center mt-auto"
                  href={`/blog/${news.id}`}
                >
                  <p className="text-warning600 font-medium text-base font-rope">
                    Read More
                  </p>
                  <Image
                    src="/favicon_io/payyme-arrow-up.svg"
                    alt="Arrow icon"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
