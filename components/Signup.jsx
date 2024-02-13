import { ROUTES } from "@/contants/ROUTES";
import Link from "next/link";
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Button from "./Button";
import FormLayout from "./FormLayout";

export default function Signup() {
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
      <h2 className="header-2_bold mb-3 text-[#0DA168] text-center">
        Create your account
      </h2>
      <p className="label-4_regular mb-10 text-center">
        Create an account without stress
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="p-5">
        <CustomInput
          label="Full Name"
          placeholder="Enter your full name"
          type="text"
          name="fullname"
          rules={{
            required: "Fullname is required",
            minLength: {
              value: 3,
              message: "Minimum length is 3 characters",
            },
          }}
          control={control}
        />
        <CustomInput
          label="Phone Number"
          placeholder="Phone Number"
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
        <CustomInput
          label="Password"
          placeholder="Password"
          type="password"
          name="password"
          rules={{
            required: "Password is required is required",
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
          type="email"
          name="email"
          rules={{
            required: "Password is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              message: "Password doesn't match",
            },
          }}
          control={control}
        />
        <Link className="flex mb-4 mt-2" href={ROUTES.FORGOTPASSWORD}>
          <p className="label-4_black grnDrk">Forgot password?</p>
        </Link>

        <Button
          text="Signup"
          type="submit"
          classname="w-3/4 btn-primary_bg p-3"
        />
      </form>
      <h6 className="label-3_medium text-center">
        Already have an account?
        <Link href={ROUTES.LOGIN} className="label-4_regular grnDrk ms-1">
          Login
        </Link>
      </h6>
    </FormLayout>
  );
}
