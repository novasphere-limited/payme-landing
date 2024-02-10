import Link from "next/link";
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import Image from "next/image";

export default function ForgotPassword() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center ">
      <div className="w-1/2 mt-[97px] mb-[20px]">
        <div className="flex justify-center">
          <Image src="/asset/Paymee.png" width={160} height={63} />
        </div>
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
            <button type="submit" className="w-full btn-primary_bg">
              Reset password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
