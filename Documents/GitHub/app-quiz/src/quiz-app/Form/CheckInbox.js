import FormLayout from "../../components/FormLayout";
import LinkBtn from "../../components/LinkButton";
import { ROUTES } from "../../constants/ROUTES";

export default function CheckInbox() {
  return (
    <>
      <FormLayout>
        <h2 className="header-4 text-center mb-[64px] flex justify-center btn-margin-b">
          CHECK YOUR INBOX
        </h2>
        <div
          style={{ maxWidth: "526px" }}
          className="log-container bg-white mb-[48px]"
        >
          <p className="body-text_1 mb-[48px]">
            You’re almost there! A confirmation OTP has been sent to your email
            address inputed. Kindly click on the code sent to verify your
            registration.
          </p>

          <LinkBtn
            text="Proceed"
            href={ROUTES.OTPVERIFY}
            style={{
              marginTop: "40px",
              backgroundColor: "#000080",
              color: "#fff",
            }}
          />
        </div>
      </FormLayout>
    </>
  );
}
