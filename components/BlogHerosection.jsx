import Image from "next/image";
import Link from "next/link";

export default function BlogHerosection() {
  return (
    <div className="main-container">
      <h2 className="header-2_black text-center mb-5">
        In-Depth Insights and Expert Advice
        <span className="text-grnSec">from PayyME</span>
      </h2>
      <div className="flex my-5 gap-5">
        <div className="w-3/4">
          <Image
            src="/asset/blog-hero_img.png"
            alt="Info picture"
            width={801}
            height={609}
            className="rounded-lg"
          />
        </div>
        <div className="">
          <h2 className="label-1_bold text-grnSec mb-4">
            Popular Blogs this week
          </h2>
          <div className="flex gap-3 my-5">
            <div>
              <Image
                src="/asset/blog-img.png"
                alt="Info picture"
                width={120}
                height={120}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2_bold grnSec mb-1">Finance</h2>
              <Link href="/blog/1">
                <h1 className="text-1_bold mb-1">
                  Money: Insights, Tips, and Trends
                </h1>
              </Link>
              <p className="text-2_regular">By James Audu</p>
            </div>
          </div>
          <div className="flex gap-3 my-5">
            <div>
              <Image
                src="/asset/blog-img.png"
                alt="Info picture"
                width={120}
                height={120}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2_bold grnSec mb-1">Finance</h2>
              <Link href="/blog/2">
                <h1 className="text-1_bold mb-1">
                  Money: Insights, Tips, and Trends
                </h1>
              </Link>
              <p className="text-2_regular">By James Audu</p>
            </div>
          </div>
          <div className="flex gap-3 my-5">
            <div>
              <Image
                src="/asset/blog-img.png"
                alt="Info picture"
                width={120}
                height={120}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2_bold grnSec mb-1">Finance</h2>
              <Link href="/blog/3">
                <h1 className="text-1_bold mb-1">
                  Money: Insights, Tips, and Trends
                </h1>
              </Link>
              <p className="text-2_regular">By James Audu</p>
            </div>
          </div>
          <div className="flex gap-3 my-5">
            <div>
              <Image
                src="/asset/blog-img.png"
                alt="Info picture"
                width={120}
                height={120}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2_bold grnSec mb-1">Finance</h2>
              <Link href="/blog/4">
                <h1 className="text-1_bold mb-1">
                  Money: Insights, Tips, and Trends
                </h1>
              </Link>
              <p className="text-2_regular">By James Audu</p>
            </div>
          </div>
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
  );
}
