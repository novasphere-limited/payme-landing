import { InnerBlogList } from "@/contants";
import Image from "next/image";
import Link from "next/link";

export default function BlogHerosection() {
  return (
    <>
      <div className="bg-[#CFECE117] mb-5 lg:ps-[48px] md:[36px] ps-[18px] py-5 lg:pe-[96px] md:pe-[48px] main-container">
        <h2 className="header-2_black sm:ms-3 mb-3">Blog</h2>
        <p className="text-2_regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis
          <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu
        </p>
      </div>
      <div className="main-container">
        <div className="blog-grid my-5">
          <div>
            <Image
              src="/asset/blog-hero_img.png"
              alt="Info picture"
              width={836}
              height={616}
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="label-1_bold mb-4">Popular News this week</h2>

            {InnerBlogList.map((blog) => (
              <div
                className="my-5 py-5 bg-[#CFECE117] ps-3 rounded-[8px]"
                key={blog.id}
              >
                <div>
                  <h2 className="text-2_bold grnSec mb-1 text-grnSec">
                    {blog.header}
                  </h2>
                  <Link href="/blog/1">
                    <h1 className="text-1_bold mb-1">{blog.title}</h1>
                  </Link>
                  <p className="text-2_regular">By {blog.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h5 className="label-1_bold mb-4">
          {" "}
          Finance: Insights, Tips, and Trends
        </h5>
        <p className="text-1_regular mb-5">
          Transforming Ideas into Digital Realities, Where Vision Meets
          Innovation. Your Partner in Technology Transforming Ideas into Digital
          Realities, Where Meets Innovation. Your Partner
        </p>
        <div className="flex gap-5 items-center">
          <div>
            <Image
              src="/asset/Felix.png"
              alt="Person image"
              width={100}
              height={100}
            />
          </div>
          <div>
            <p className="text-1_medium mb-3">Felix Ade</p>
            <p className="text-1_regular">May 20, 2023. 2 mins read</p>
          </div>
        </div>
      </div>
    </>
  );
}
