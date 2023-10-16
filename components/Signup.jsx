import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex justify-center">
      <div style={{ maxWidth: "43.625rem" }}>
        <h2 className="header-2_bold mb-3 grnDrk text-center">
          Create your account
        </h2>
        <p className="label-4_regular mb-10 text-center">
          Create an account without stress
        </p>
        <form className="">
          <div className="mb-5">
            <label className="label-3_medium mb-3">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="p-3 w-full border-2"
            />
          </div>
          <div className="mb-5">
            <label className="label-3_medium mb-3">Phone Number</label>
            <input
              type="number"
              placeholder="Enter your phone number"
              className="p-3 w-full border-2"
            />
          </div>
          <div classname="mb-5">
            <label className="label-3_medium mb-3">Password</label>
            <input type="password" className="p-3 w-full border-2" />
          </div>
          <div classname="mb-5">
            <label className="label-3_medium mb-3">Confirm Password</label>
            <input type="password" className="p-3 w-full border-2" />
          </div>
          <Link className="flex justify-end mb-4 mt-2" href="/forgotpassword">
            <p className="label-4_black grnDrk">Forgot password?</p>
          </Link>
          <button type="submit" className="w-full btn-primary_bg">
            Signup{" "}
          </button>
        </form>
        <h6 className="label-3_medium text-center">
          Already have an account?
          <Link href="/login" className="label-4_regular grnDrk ms-1">
            Login{" "}
          </Link>
        </h6>
      </div>
    </div>
  );
}
