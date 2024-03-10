import FormLayout from "./FormLayout";

export default function SuccessComponent() {
  return (
    <div>
      <div className="flex justify-center mb-[56px]">
        <img
          src="/assets/images/reg_success.png"
          height={100}
          width={100}
          alt="Register success icon"
        />
      </div>
      <h2 className="header-4 text-center mb-[32px] flex justify-center">
        TRANSACTION SUCCESSFUL
      </h2>
      <p className="body-text_1 mb-[56px]">
        You have successfully made a withdrawal of 25.00 from your wallet to
        your bank.
      </p>
    </div>
  );
}
