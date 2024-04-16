import Link from "next/link";

export default function Btn({ text, style }) {
  return (
    <button
      className="md:text-2xl text-xl font-medium md:px-[48px] md:py-[10px] sm:px-[30px] px-3 py-2 bg-warning600 text-white rounded-md"
      style={style}
    >
      {text}
    </button>
  );
}
