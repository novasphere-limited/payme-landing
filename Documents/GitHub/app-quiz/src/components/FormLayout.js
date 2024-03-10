export default function FormLayout({ children }) {
  return (
    <div className="flex justify-center bg-[#8D8D8D1F] h-screen overflow-y-scroll">
      <div className="pt-[56px]">{children}</div>
    </div>
  );
}
