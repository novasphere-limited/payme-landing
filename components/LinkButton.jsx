import Link from "next/link";

export default function LinkBtn({ href, text }) {
  return (
    <>
      <Link href={href}>
        <button className="label-2_medium btn-primary_bg my-5">{text}</button>
      </Link>
    </>
  );
}
