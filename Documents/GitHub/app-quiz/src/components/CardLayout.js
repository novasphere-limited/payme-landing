export default function CardComponent({ classname, children, style }) {
  return (
    <div className={classname} style={style}>
      {children}
    </div>
  );
}
