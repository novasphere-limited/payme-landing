export default function Button({ btnText, type }) {
  return (
    <button type={type} className="btn-nova_bg label-2_medium">
      {btnText}
    </button>
  );
}
