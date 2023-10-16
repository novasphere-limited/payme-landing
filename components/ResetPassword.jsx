import Link from "next/link";

export default function ResetPassword() {
  return (
    <div className="flex justify-center page-center">
      <div style={{ maxWidth: "43.625rem" }}>
        <h2 className="header-2_bold mb-3 grnDrk text-center">
          Reset password
        </h2>
        <p className="label-4_regular mb-10 text-center">
          Enter your new password
        </p>
        <form className="">
          <div className="mb-5">
            <label className="label-3_medium mb-3">Password</label>
            <input
              type="number"
              placeholder="Enter your phone number"
              className="p-3 w-full border-2"
            />
          </div>
          <div classname="mb-5">
            <label className="label-3_medium mb-3">Confirm password</label>
            <input type="password" className="p-3 w-full border-2" />
          </div>
          <div className="px-10 mt-3">
            <button type="submit" className="w-full btn-primary_bg">
              Reset password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
