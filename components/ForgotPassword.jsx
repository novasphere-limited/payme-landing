import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="flex justify-center page-center">
      <div style={{ maxWidth: "43.625rem" }}>
        <h2 className="header-2_bold mb-10 grnDrk">Forgot password?</h2>

        <form className="">
          <div className="mb-6">
            <label className="label-3_medium mb-4">
              Enter the phone number you reigistered with
            </label>
            <input
              type="number"
              placeholder="Enter your phone number"
              className="p-3 w-full border-2"
            />
          </div>
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
