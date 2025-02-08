import Link from "next/link";
import LinkBtn from "./LinkBtn";
import OpenSms from "./opensms";

export default function HelpPayment() {
  return (
    <div className="help-container bg-warning700 text-white xl:py-[69px] py-[84px] sm:py-[54px] md:py-9 lg:py-[50px] px-[19px]">
      <div className="flex justify-center">
        <h2
          className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl sm:mb-2 md:mb-4 mb-1 font-medium"
          style={{ maxWidth: "643px" }}
        >
          We help you make Payments Anywhere, Anytime to Anyone
        </h2>
      </div>
      <p className="text-base font-normal mb-3">
        Redefining finance, embracing inclusion, innovating solutions.
      </p>
      <OpenSms
        text="Get Started"
        style={{ color: "#0B8657", background: "#fff", hover: "" }}
      />
    </div>
  );
}
