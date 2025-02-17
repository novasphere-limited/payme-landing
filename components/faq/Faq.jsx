import Image from "next/image";

export default function Faq() {
  return (
    <div className="faq-container-bg md:text-center">
      <div className="md:h-[456px] h-[209px] sm:h-[309px] flex justify-center items-center backdrop-blur-sm bg-[#000000BF] lg:px-8 sm:px-4 px-2">
        <div style={{ maxWidth: "728px" }}>
          <h6 className="text-[#B4B4B4] mb-2 text-start text-sm md:text-[22px] sm:text-xl text-medium md:ps-3 flex gap-3 items-center">
            <span
              style={{ height: "3.5px", width: "29px", background: "#0DA168" }}
            ></span>
            FAQS
          </h6>
          <h1 className="lg:text-[54px] md:text-[42px] sm:text-[36px] text-[20px] text-[#FDFBFB] mx-auto text-center md:mb-4 mb-2">
            Frequently asked Questions
          </h1>
          <p className="text-[#D3D0D0] md:text-base text-sm font-normal md:mb-6 mb-4 md:px-8 text-center">
            PayyMe is a leading payment and financial service platform dedicated
            to fostering financial inclusion. Here are must frequent asked
            questions from our visitor’s
          </p>
          <div
            className="px-2 py-1 flex items-center rounded-md w-[322px] mx-auto"
            style={{ border: "1px solid #fff" }}
          >
            <div>
              <Image
                height={20}
                width={20}
                alt="Search icon"
                src="/favicon_io/nova-search-normal.svg"
                className="me-2"
                loading="lazy"
              />
            </div>
            <form className="w-full">
              <input
                style={{
                  outline: "none !important",
                  border: "none !important",
                  boxShadow: "none !important",
                  color: "#fff !important",
                }}
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
