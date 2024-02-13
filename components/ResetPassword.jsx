import Button from "./Button";
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import Image from "next/image";
import FormLayout from "./FormLayout";

export default function ResetPassword() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormLayout>
      {/* <div className="flex justify-center">
        <Image
          src="/asset/Paymee.png"
          width={160}
          height={63}
          alt="Company logo"
        />
      </div> */}
      <h2 className="header-2_bold mb-3 grnDrk text-center">Reset password</h2>
      <p className="label-4_regular mb-10 text-center">
        Enter your new password
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="p-5">
        <CustomInput
          label="Password"
          placeholder="Password"
          type="password"
          name="password"
          rules={{
            required: "Password is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              message: "Invalid password format.",
            },
          }}
          control={control}
        />
        <CustomInput
          label="Confirm Password"
          placeholder="Password"
          type="password"
          name="confirmPassword"
          rules={{
            required: "Password is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              message: "Password doesn't match",
            },
          }}
          control={control}
        />
        <div className="px-10 mt-3">
          <Button
            text="Reset password"
            type="submit"
            classname="w-3/4 btn-primary_bg p-3"
          />
        </div>
      </form>
    </FormLayout>
  );
}
