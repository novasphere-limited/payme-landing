import Link from "next/link";

export default function LinkBtn({ href, text }) {
  return (
    <>
      <Link href={href}>
        <button className="label-2_medium btn-primary_bg my-5 md:px-[34px] md:py-[17px] px-5 py-3">
          {text}
        </button>
      </Link>
    </>
  );
}
