import Link from "next/link";

export default function Btn({ text, style }) {
  return (
    <button
      className="flex justify-center md:text-2xl text-xl font-normal md:px-[48px] py-[10px] sm:px-[30px] px-3 py-2 bg-warning600 text-white rounded-md w-full sm:w-auto "
      style={style}
    >
      <h6 className="text-center">{text}</h6>
    </button>
  );
}
