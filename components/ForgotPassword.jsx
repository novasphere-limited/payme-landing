import Link from "next/link";
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import Image from "next/image";
import FormLayout from "./FormLayout";
import Button from "./Button";
import ImageComponent from "./ImageComponent";

export default function ForgotPassword() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormLayout>
      <h2 className="header-2_bold mb-10 text-[#0DA168] text-center">
        Forgot password?
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="p-5">
        <CustomInput
          label="Enter the phone number you registered with"
          type="text"
          name="phonenumber"
          rules={{
            required: "Phone number is required",
            minLength: {
              value: 3,
              message: "Minimum length is 3 characters",
            },
          }}
          control={control}
        />
        <div className="px-10">
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
