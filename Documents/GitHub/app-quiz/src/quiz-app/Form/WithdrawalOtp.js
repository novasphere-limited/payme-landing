import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import Button from "../../components/Button";

export default function WithdrawalOtp({ setModalOtp, setModalSuccess }) {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setModalOtp(false);
    setModalSuccess(true);
  };
  return (
    <>
      <h5 className="text-2xl font-semibold mb-2">Enter OTP</h5>
      <p>Enter OTP sent to your inbox to process this withdrawal</p>
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
          Didn’t get a code? <button className="#000080">RESEND CODE</button>{" "}
          (42 secs)
        </p>
        <div className="px-10">
          <Button
            text="Proceed"
            type="submit"
            classname="w-full rounded-lg p-3 bg-[#000080] text-white btn-margin"
          />
        </div>
      </form>
    </>
  );
}
