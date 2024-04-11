import Link from "next/link";

export default function HelpPayment() {
  return (
    <div className="help-container main-container bg-warning700 text-white py-[69px]">
      <div className="flex justify-center">
        <h2 className="text-5xl mb-4 font-medium" style={{ maxWidth: "643px" }}>
          We help you make Payments Anywhere, Anytime to Anyone
        </h2>
      </div>
      <p className="text-base font-normal mb-3">
        Redefining finance, embracing inclusion, innovating solutions.
      </p>
      <Link
        className="text-2xl bg-[#FEFCFC] text-warning700 px-7 py-3 rounded-sm"
        href="#"
      >
        Get started
      </Link>
    </div>
  );
}
