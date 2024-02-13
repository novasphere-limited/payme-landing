import { ROUTES } from "@/contants/ROUTES";
import Link from "next/link";
import LinkBtn from "../../components/LinkButton";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import Image from "next/image";
import Button from "../../components/Button";
import FormLayout from "../../components/FormLayout";
import ImageComponent from "@/components/ImageComponent";

export default function Login() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <FormLayout>
        <ImageComponent />
        <h2 className="header-2_bold mb-3 text-[#0DA168] text-center">
          Login Into your account
        </h2>
        <p className="label-4_regular mb-10 text-center">
          Access your account without stress
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="p-5">
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
            type="email"
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                message: "Invalid password format.",
              },
            }}
            control={control}
          />
          <Link
            className="flex justify-end mb-4 mt-2"
            href={ROUTES.FORGOTPASSWORD}
          >
            <p className="label-4_black grnDrk">Forgot password?</p>
          </Link>
          <div className="px-10">
            <Button
              text="Login"
              type="submit"
              classname="w-3/4 btn-primary_bg p-3"
            />
          </div>
        </form>
        <h6 className="label-3_medium text-center">
          Don&rsquo;t have an account?
          <Link href={ROUTES.SIGNUP} className="label-4_regular grnDrk ms-1">
            Signup
          </Link>
        </h6>
      </FormLayout>
    </>
  );
}
