import Link from "next/link";

export default function LinkBtn({ href, text, style, onClick }) {
  return (
    <div>
      <Link href={href}>
        <button
          onClick={onClick}
          className="md:text-2xl text-sm font-medium my-5 md:px-[48px] md:py-[10px] sm:px-[30px] px-3 py-3 bg-warning600 hover:bg-[#0A7C52] hover:shadow-md transition-all duration-300 ease-in-out text-white rounded-[4px] w-full sm:w-[248px]"
          style={style}
        >
          {text}
        </button>
      </Link>
    </div>
  );
}
