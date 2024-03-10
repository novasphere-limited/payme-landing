import FormLayout from "../../components/FormLayout";
import LinkBtn from "../../components/LinkButton";
import { ROUTES } from "../../constants/ROUTES";

export default function RegisterFailure() {
  return (
    <div>
      <FormLayout>
        <div style={{ maxWidth: "526px" }} className="log-container bg-white">
          <div className="flex justify-center mb-[56px]">
            <img
              src="/assets/images/reg_failure.png"
              height={100}
              width={100}
              alt="Register success icon"
            />
          </div>
          <h2 className="header-4 text-center mb-[32px] flex justify-center">
            CONGRATULATIONS
          </h2>
          <p className="body-text_1 mb-[56px]">
            Your account has been successfully created. You can now proceed to
            log into your account to enjoy our platform.
          </p>
          <LinkBtn text="Proceed to login" href={ROUTES.LOGIN} style={{backgroundColor: "#000080",
            color: "#fff",}}/>
        </div>
      </FormLayout>
    </div>
  );
}
