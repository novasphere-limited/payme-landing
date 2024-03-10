export default function Button({ text, style, type, classname }) {
  return (
    <div className="flex justify-center">
      <button className={classname} style={style} type={type}>
        {text}
      </button>
    </div>
  );
}
