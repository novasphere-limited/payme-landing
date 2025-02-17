import Image from "next/image";
import Link from "next/link";
import NavTab from "../NavTab";

export default function FaqOptions() {
  const data = [
    {
      id: 1,
      icon: "/favicon_io/faq-icon-1.svg",
      title: "Getting started on PayyMe",
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
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[32px] gap-[16px] my-[64px] margin-gen">
        {data.map((e) => (
          <Link
            className="rounded-[15px] p-6 flex gap-[24px] items-center text-[#1A1A1A] faq-option"
            key={e.id}
            href={`/faq/${e.id}`}
          >
            <div className="w-full">
              <div className="h-[42px] w-[42px] rounded-full bg-[#F5F5F5] mb-4 flex items-center justify-center">
                <Image height={24} width={24} alt="Faq icon" src={e.icon} />
              </div>
              <h6 className="font-semibold md:text-base text-sm">{e.title}</h6>
              <p className="md:text-sm text-xs font-normal mb-3">{e.content}</p>
            </div>
            <div>
              <Image
                src="/favicon_io/payyme-arr-right.svg"
                alt="Right arrow icon"
                height={16}
                width={8}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
