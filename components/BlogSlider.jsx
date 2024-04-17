import Image from "next/image";
import NavTab from "./NavTab";

export default function BlogSlide() {
  return (
    <div className="xl:mb-[120px] md:mb-[50px] mb-8">
      <NavTab />
      <div className="xl:mx-[100px] lg:mx-[70px] md:mx-[35px] sm:mx-[20px] mx-3">
        <h3 className="text-3xl font-semibold mb-[42px]">
          Recent news at Novasphere
        </h3>
        <div className="md:flex bg-white rounded-lg justify-center items-center">
          <div className="">
            <Image
              alt="Nova slider image"
              src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1713356910/PayyMe/Article_Figure_Link_linkedin-sales-solutions-wS73LE0GnKs-unsplash.jpg_zrubau.png"
              width={473}
              height={332}
              className="rounded-lg"
              loading="lazy"
              objectFit="contain"
            />
          </div>
          <div className="rounded-lg p-5 w-full py-6">
            <h6 className="text-xs mb-4"> Linkedin — 6 min read</h6>
            <h2 className="xl:text-3xl lg:text-2xl  font-semibold mb-4">
              How to Find Email Addresses on LinkedIn in 2024
            </h2>
            <p className="text-2_regular mb-5 pb-2">
              As a content writer who mostly works for B2B companies, LinkedIn
              is my go-to platform for finding potential clients because…
            </p>
            <div className="flex items-center gap-4">
              <div
                style={{ height: "44px", width: "44px" }}
                className="rounded-full bg-[#D9D9D9]"
              >
                <Image
                  src="/asset/nova-slider-avatar.png"
                  alt="Testimonial person profile"
                  width={44}
                  height={44}
                />
              </div>
              <div>
                <h4 className="text-[#1F1F1F] font-semibold">ALTHEA STORM</h4>
                <p className="text-[#444444]">Wiza Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
