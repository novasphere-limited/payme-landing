import Image from "next/image";
import Link from "next/link";

export default function FaqOptionTwo() {
  const data = [
    {
      id: 1,
      icon: "/favicon_io/faq-icon-1.svg",
      title: "Getting started on Payyme",
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
          <h2 className="text-5xl font-medium text-[#1F1F1F] mb-6">
            Account Verification and Management:
          </h2>
          <p className="text-[#696969] text-sm mb-8">
            What is PayyMe and how do we operate?
          </p>
          <div className="flex items-center gap-2">
            <Image
              height={24}
              width={24}
              alt="Faq user icon"
              src="/asset/faq-avatar-1.png"
            />
          </div>
          <p className="text-[#737373] mb-[44px]">
            Written by Ahmed <br /> Update a week ago
          </p>
          <div className="mb-6" style={{ height: "250px !important" }}>
            <Image
              src="/asset/hauwa-image.png"
              alt="customer testimony imge"
              width={606}
              height={250}
              className="testimony-img rounded-lg w-full"
              style={{ height: "250px !important" }}
              objectFit="contain"
              objectPosition="center"
              loading="lazy"
            />
          </div>
          <h6 className="text-base font-normal mb-6">
            PayyMe is a community built on trust and in order to maintain that
            trust amongst users you will be required to verify your account
            before you are able to carry out transactions on your PayyMe
            account.
          </h6>
          <h5 className="text-text-2xl text-[#1F1F1F] font-medium mb-2">
            What document do you need to verify your account on PayyMe
          </h5>
          <h6 className="text-base font-normal">
            You need your BVN (Bank Verification Number) which is requested
            during registration to verify your account.
          </h6>
        </div>
        <div className="w-full">
          <h2 className="text-5xl font-medium text-[#1F1F1F] mb-6">
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
                    <Image height={24} width={24} alt="Faq icon" src={e.icon} />
                  </div>
                  <Link href={`/faq/${e.id}`}>
                    <h6 className="font-semibold text-base">{e.title}</h6>
                  </Link>
                  <p className="text-sm font-normal mb-3">{e.content}</p>
                  <div className="flex items-center gap-2">
                    <Image
                      height={24}
                      width={24}
                      alt="Faq user icon"
                      src="/asset/faq-avatar-1.png"
                    />
                    <p className="text-[#737373]">By Christine . 5 articles</p>
                  </div>
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
