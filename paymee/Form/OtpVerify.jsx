import Link from "next/link";
import CustomInput from "../../components/CustomInput";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Image from "next/image";
import FormLayout from "../../components/FormLayout";
import ImageComponent from "@/components/ImageComponent";

export default function OtpVerify() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormLayout>
      <ImageComponent />
      <h2 className="header-2_bold text-grnDrk text-center">
        OTP verification
      </h2>
      <p className="label-4_regular text-center">
        An OTP Code has been sent to your Phone, Please enter the code below
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="p-5">
        <div className="mb-6 flex justify-between">
          <CustomInput
            type="text"
            name="text1"
            rules={{
              required: "Field cannot be blank",
              pattern: {
                message: "Cannot be blank",
              },
            }}
            style={{ width: "60px", height: "60px" }}
            control={control}
          />
          <CustomInput
            type="text"
            name="text2"
            rules={{
              required: "Field cannot be blank",
              pattern: {
                message: "Cannot be blank",
              },
            }}
            style={{ width: "60px", height: "60px" }}
            control={control}
          />
          <CustomInput
            type="text"
            name="text3"
            rules={{
              required: "Field cannot be blank",
              pattern: {
                message: "Cannot be blank",
              },
            }}
            style={{ width: "60px", height: "60px" }}
            control={control}
          />
          <CustomInput
            type="text"
            name="text4"
            rules={{
              required: "Field cannot be blank",
              pattern: {
                message: "Cannot be blank",
              },
            }}
            style={{ width: "60px", height: "60px" }}
            control={control}
          />
          <CustomInput
            type="text"
            name="text5"
            rules={{
              required: "Field cannot be blank",
              pattern: {
                message: "Cannot be blank",
              },
            }}
            style={{ width: "60px", height: "60px" }}
            control={control}
          />
          <CustomInput
            type="text"
            name="text6"
            rules={{
              required: "Field cannot be blank",
              pattern: {
                message: "Cannot be blank",
              },
            }}
            style={{ width: "60px", height: "60px" }}
            control={control}
          />
        </div>
        <div className="px-10">
          <Button
            text="Verify OTP"
            type="submit"
            classname="w-3/4 btn-primary_bg p-3"
          />
        </div>
      </form>
    </FormLayout>
  );
}
