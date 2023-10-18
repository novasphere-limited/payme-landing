import Link from "next/link";

export default function OtpVerify() {
  return (
    <div className="flex justify-center page-center">
      <div style={{ maxWidth: "24rem", maxHeight: "50%" }}>
        <h2 className="header-2_bold grnDrk">OTP verification</h2>
        <p className="label-4_regular mb-10">
          An OTP Code has been sent to your Phone, Please enter the code below
        </p>
        <form className="">
          <div className="mb-6 flex gap-5 justify-center">
            <input
              className="p-3 border-2 rounded-md"
              style={{ maxWidth: "48px", maxHeight: "48px" }}
            />
            <input
              className="p-3 border-2 rounded-md"
              style={{ maxWidth: "48px", maxHeight: "48px" }}
            />
            <input
              className="p-3 border-2 rounded-md"
              style={{ maxWidth: "48px", maxHeight: "48px" }}
            />
            <input
              className="p-3 border-2 rounded-md"
              style={{ maxWidth: "48px", maxHeight: "48px" }}
            />
            <input
              className="p-3 border-2 rounded-md"
              style={{ maxWidth: "48px", maxHeight: "48px" }}
            />
            <input
              className="p-3 border-2 rounded-md"
              style={{ maxWidth: "48px", maxHeight: "48px" }}
            />
          </div>
          <div className="px-10">
            <button type="submit" className="w-full btn-primary_bg">
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
