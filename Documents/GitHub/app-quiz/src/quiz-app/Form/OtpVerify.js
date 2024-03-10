import { useForm } from "react-hook-form";
import FormLayout from "../../components/FormLayout";
import CustomInput from "../../components/CustomInput";
import Button from "../../components/Button";

export default function Otp() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <FormLayout>
        <h2 className="header-4 text-center mb-[64px] flex justify-center btn-margin-b">
          CONFIRMATION OTP
        </h2>
        <div style={{ maxWidth: "526px" }} className="log-container bg-white">
          <p className="text-center body-text_1 mb-[48px]">
            Kindly enter below the confirmation OTP sent to your email
            <span className="text-[#6666B3]">modupesalami2024@gmail.com</span>
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="mb-6 flex justify-center gap-5">
              <CustomInput
                type="text"
                name="text1"
                maxlength="1"
                rules={{
                  required: "Field cannot be blank",
                  pattern: {
                    message: "Cannot be blank",
                  },
                }}
                style={{ width: "60px", height: "80px" }}
                control={control}
              />
              <CustomInput
                type="text"
                name="text2"
                maxlength="1"
                rules={{
                  required: "Field cannot be blank",
                  pattern: {
                    message: "Cannot be blank",
                  },
                }}
                style={{ width: "60px", height: "80px" }}
                control={control}
              />
              <CustomInput
                type="text"
                name="text3"
                maxlength="1"
                rules={{
                  required: "Field cannot be blank",
                  pattern: {
                    message: "Cannot be blank",
                  },
                }}
                style={{ width: "60px", height: "80px" }}
                control={control}
              />
              <CustomInput
                type="text"
                name="text4"
                maxlength="1"
                rules={{
                  required: "Field cannot be blank",
                  pattern: {
                    message: "Cannot be blank",
                  },
                }}
                style={{ width: "60px", height: "80px" }}
                control={control}
              />
            </div>
            <p className="text-center my-[48px]">
              Didn’t get a code?{" "}
              <button className="#000080">RESEND CODE</button> (42 secs)
            </p>
            <div className="px-10">
              <Button
                text="Proceed"
                type="submit"
                classname="w-full rounded-lg p-3 bg-[#000080] text-white btn-margin"
              />
            </div>
          </form>
        </div>
      </FormLayout>
    </>
  );
}
