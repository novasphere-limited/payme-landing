import { useForm } from "react-hook-form";
import FormLayout from "../../components/FormLayout";
import CustomInput from "../../components/CustomInput";
import Button from "../../components/Button";

export default function ForgotPassword() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <FormLayout>
        <h2 className="header-4 text-center flex justify-center btn-margin-b">
          FORGOT PASSWORD
        </h2>
        <div style={{ maxWidth: "488px" }} className="log-container bg-white">
          <p className="body-text_1 mb-[32px]">
            Kindly enter your email address to reset password. We would send a
            verification code to your inbox
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="p-5">
            <CustomInput
              label="Email Address"
              placeholder="kehindejejelaye@gmail.com"
              type="email"
              name="email"
              rules={{
                required: "Email is required",
                minLength: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid password format",
                },
              }}
              control={control}
            />

            <div className="px-10 mt-[32px]">
              <Button
                text="Proceed"
                type="submit"
                classname="w-full p-3 rounded-lg bg-[#000080] text-white btn-margin"
              />
            </div>
          </form>
        </div>
      </FormLayout>
    </>
  );
}
