import Link from "next/link";
import { useRouter } from "next/router";

export default function NavTab() {
  const router = useRouter();

  const options = [
    {
      id: 1,
      text: "Blog",
      href: "/blog",
    },
    {
      id: 2,
      text: "Press releases",
      href: "#",
    },
    {
      id: 3,
      text: "Newsroom",
      href: "#",
    },
    {
      id: 4,
      text: "FAQ's",
      href: "/faq",
    },
  ];
  console.log(router.pathname);
  return (
    <div
      style={{ borderBottom: "2px solid #001F1F14" }}
      className="pb flex justify-center xl:mx-[80px] sm:mx-[32px] md:mx-[42px] lg:mx-[54px] mx-[23px] mt-8 lg:mb-[68px] sm:mb-[40px] mb-6"
    >
      {options.map((option, index) => (
        <Link
          key={option.id}
          href={option.href}
          className={`${
            router.pathname === option.href
              ? "text-warning600 border-b-4 border-warning600 font-semibold"
              : "font-normal"
          } py-3 md:px-4 px-2  md:text-sm text-[13px]`}
        >
          {option.text}
        </Link>
      ))}
    </div>
  );
}
