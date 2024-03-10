import { Link } from "react-router-dom";

export default function LinkBtn({ href, text, style, height, width, icon }) {
  return (
    <>
      <Link to={href} className="flex">
        <button
          className="label-2_medium  px-[107px] py-4 rounded-lg flex items-center"
          style={style}
        >
          {text}
          <span className="ms-1">
            {icon && (
              <img src={icon} height={height} width={width} alt="Icon" />
            )}
          </span>
        </button>
      </Link>
    </>
  );
}
