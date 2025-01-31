import Image from "next/image";
import Link from "next/link";

export default function FaqOptionOne() {
  const data = [
    {
      id: 2,
      icon: "/favicon_io/faq-icon-2.svg",
      title: "Account Verification and Managements",
      content: "FAQ's and Common Issues",
    },
    {
      id: 3,
      icon: "/favicon_io/faq-icon-3.svg",
      title: "Cash Deposits",
      content: "FAQ's and Common Issues",
    },
    {
      id: 4,
      icon: "/favicon_io/faq-icon-3.svg",
      title: "Send & Receive Cash",
      content: "FAQ's and Common Issues",
    },
  ];
  return (
    <>
      <div className="md:flex margin-gen justify-between mb-10 xl:gap-[48px] md:gap-[32px] gap-[16px]">
        <div className="w-full">
          <h2 className="xl:text-5xl text-2xl md:text-3xl lg:text-4xl font-medium text-[#1F1F1F] mb-6">
            About PayyMe:
          </h2>
          <p className="text-[#696969] text-sm mb-8">
            What is PayyMe and how do we operate?
          </p>
          <div className="mb-4 h-[250px] overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1713356881/PayyMe/Frame_1321315172_tgtdjx.png"
              alt="customer testimony imge"
              width={606}
              height={250}
              className="testimony-img rounded-lg mb-1 w-full"
              style={{ height: "250px !important" }}
              objectFit="contain"
              objectPosition="center"
              loading="lazy"
            />
          </div>
          <h6 className="text-sm font-normal mb-6">
            Welcome to PayyMe, we are glad you are interested in exploring new
            payment options to truly become digital..
          </h6>
          <h5 className="text-xl md:text-2xl text-[#1F1F1F] font-medium mb-2">
            What is PayyMe?
          </h5>
          <h6 className="text-base font-normal">
            We are a Fintech company that offers several products and services
            that promote digital payment solutions such as;
          </h6>
          <ul className="list-disc text-base font-normal mb-6 ms-5">
            <li>Local payments (send and receive money)</li>
            <li>Data and airtime </li>
            <li>Bill payment </li>
          </ul>

          <h6 className="text-base font-normal mb-6">
            Using PayyMe puts you in charge of your funds. Either you urgently
            need to send money to someone in the night and there are no pos
            around to help carry out the transaction or you are in a remote
            setting with no internet connection but still need to carry out
            transactions. We are here to  help you make payments easy, one sms
            at a time.
          </h6>
          <h5 className="text-xl md:text-2xl text-[#1F1F1F] font-medium mb-2">
            Which Countries do we operate in
          </h5>
          <ul className="list-disc text-base font-normal ms-5">
            <li>We currently operate in Nigeria</li>
          </ul>
        </div>
        <div className="w-full">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-medium text-[#1F1F1F] mb-6">
            Related Articles
          </h2>
          <div>
            {data.map((e) => (
              <div
                className="rounded-[15px] p-6 flex gap-[24px] items-center text-[#1A1A1A] mb-4"
                style={{ border: "1px solid #DEDEDE" }}
                key={e.id}
              >
                <div className="w-full">
                  <div className="h-[42px] w-[42px] rounded-full bg-[#F5F5F5] mb-4 flex items-center justify-center">
                    <Image
                      height={24}
                      width={24}
                      alt="Faq icon"
                      src={"/favicon_io/faq-icon-1.svg"}
                    />
                  </div>
                  <Link href={`/faq/${e.id}`}>
                    <h6 className="font-semibold text-base">{e.title}</h6>
                  </Link>
                  <p className="text-sm font-normal mb-3">{e.content}</p>
                </div>
                <div>
                  <Image
                    src="/favicon_io/payyme-arr-right.svg"
                    alt="Right arrow icon"
                    height={16}
                    width={8}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
