import LinkBtn from "../../components/LinkButton";

export default function HelpPayment() {
  return (
    <div className="help-container main-container">
      <div className="flex justify-center">
        <h3 className="header-3_medium text-center mb-4 text-contain py-10">
          We help you make Payments Anywhere, Anytime to Anyone
        </h3>
      </div>
      <h5 className="label-2_regular mb-3">
        Redefining finance, embracing inclusion, innovating solutions.
      </h5>
      <LinkBtn href="/" text="Get Started" />
    </div>
  );
}
