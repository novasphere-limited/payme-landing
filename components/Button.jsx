export default function Btn({ text, style, onClick }) {
  return (
    <button
      className="flex justify-center md:text-2xl text-xl font-normal md:px-[48px] py-[10px] sm:px-[30px] transition-all duration-300 ease-in-out hover:shadow-md px-3 py-2 bg-warning600 hover:bg-[#0A7C52] text-white rounded-md w-full sm:w-auto "
      style={style}
      onClick={onClick}
    >
      <h6 className="text-center">{text}</h6>
    </button>
  );
}
