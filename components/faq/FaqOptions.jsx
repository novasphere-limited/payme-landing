import Image from "next/image";
import Link from "next/link";
import NavTab from "../NavTab";

export default function FaqOptions() {
  const data = [
    {
      id: 1,
      icon: "/favicon_io/faq-icon-1.svg",
      title: "Getting started on Payyme",
      content: "FAQ's and Common Issues",
    },
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
      <NavTab />
      <div className="grid grid-cols-2 gap-[32px] my-[64px] mx-[100px]">
        {data.map((e) => (
          <div
            className="rounded-[15px] p-6 flex gap-[24px] items-center text-[#1A1A1A]"
            style={{ border: "1px solid #DEDEDE" }}
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
    </>
  );
}
