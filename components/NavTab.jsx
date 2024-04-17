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
      className="pb flex justify-center mx-[80px] mt-8 mb-[68px]"
    >
      {options.map((option, index) => (
        <Link
          key={option.id}
          href={option.href}
          className={`${
            router.pathname === option.href
              ? "text-warning600 border-b-4 border-warning600"
              : ""
          } py-3 px-4 font-semibold text-sm`}
        >
          {option.text}
        </Link>
      ))}
    </div>
  );
}
