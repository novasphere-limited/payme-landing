import Image from "next/image";

export default function Faq() {
  return (
    <div className="faq-container-bg md:text-center">
      <div className="md:h-[456px] h-[320px] flex justify-center items-center backdrop-blur-sm bg-[#000000BF] lg:px-8 sm:px-4 px-2">
        <div style={{ maxWidth: "728px" }}>
          <h6 className="text-[#B4B4B4] mb-2 text-start md:ps-9">FAQS</h6>
          <h1 className="lg:text-[54px] md:text-[42px] sm:text-[36px] text-[30px] text-[#FDFBFB] mx-auto md:text-center mb-4">
            Frequently asked Questions
          </h1>
          <p className="text-[#D3D0D0] text-base font-normal mb-6 md:px-8">
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