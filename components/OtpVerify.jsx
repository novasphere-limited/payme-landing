import Link from "next/link";
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";

export default function OtpVerify() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center page-center">
      <div style={{ maxHeight: "50%" }} className="w-1/2">
        <h2 className="header-2_bold grnDrk">OTP verification</h2>
        <p className="label-4_regular mb-10">
          An OTP Code has been sent to your Phone, Please enter the code below
        </p>
        <form className="">
          <div className="mb-6 flex gap-5 justify-center">
            <input
              className="p-3 border-2 rounded-md"
              style={{ maxWidth: "72px", maxHeight: "72px" }}
            />
            <input
              className="p-3 border-2 rounded-md"
              style={{ maxWidth: "72px", maxHeight: "72px" }}
            />
            <input
              className="p-3 border-2 rounded-md"
              style={{ maxWidth: "72px", maxHeight: "72px" }}
            />
            <input
              className="p-3 border-2 rounded-md"
              style={{ maxWidth: "72px", maxHeight: "72px" }}
            />
            <input
              className="p-3 border-2 rounded-md"
              style={{ maxWidth: "72px", maxHeight: "72px" }}
            />
            <input
              className="p-3 border-2 rounded-md"
              style={{ maxWidth: "72px", maxHeight: "72px" }}
            />
          </div>
          <div className="px-10">
            <button type="submit" className="w-full btn-primary_bg">
              Verify OTP
            </button>
          </div>
        </form>
        {/* <form onSubmit={handleSubmit(onSubmit)} className="p-5">
          <div className="mb-6 flex gap-5 justify-center">
            <CustomInput
              type="text"
              name="text1"
              rules={{
                required: "Field cannot be blank",
                pattern: {
                  message: "Cannot be blank",
                },
              }}
              style={{ maxWidth: "72px", maxHeight: "72px", padding: "12px" }}
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
              style={{ maxWidth: "72px", maxHeight: "72px", padding: "12px" }}
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
              style={{ maxWidth: "72px", maxHeight: "72px", padding: "12px" }}
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
              style={{ maxWidth: "72px", maxHeight: "72px", padding: "12px" }}
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
              style={{ maxWidth: "72px", maxHeight: "72px", padding: "12px" }}
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
              style={{ maxWidth: "72px", maxHeight: "72px", padding: "12px" }}
              control={control}
            />
          </div>
          <div className="px-10">
            <button type="submit" className="w-full btn-primary_bg">
              Verify OTP
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
}
