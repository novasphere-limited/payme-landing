import Link from "next/link";
import LinkBtn from "./LinkBtn";

export default function HelpPayment() {
  return (
    <div className="help-container bg-warning700 text-white xl:py-[69px] py-3 sm:py-5 md:py-9 lg:py-[50px]">
      <div className="flex justify-center">
        <h2
          className="md:text-5xl text-3xl mb-4 font-medium"
          style={{ maxWidth: "643px" }}
        >
          We help you make Payments Anywhere, Anytime to Anyone
        </h2>
      </div>
      <p className="text-base font-normal mb-3">
        Redefining finance, embracing inclusion, innovating solutions.
      </p>
      <LinkBtn
        text="Get Started"
        href="#"
        style={{ color: "#0B8657", background: "#fff" }}
      />
    </div>
  );
}
