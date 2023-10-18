import Link from "next/link";

export default function Login() {
  return (
    <div className="flex justify-center page-center">
      <div style={{ maxWidth: "43.625rem" }}>
        <h2 className="header-2_bold mb-3">Login Into your account</h2>
        <p className="label-4_regular mb-10">
          Access your account without stress
        </p>
        <form className="">
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
          <Link className="flex justify-end mb-4 mt-2" href="/forgotpassword">
            <p className="label-4_black grnDrk">Forgot password?</p>
          </Link>
          <button type="submit" className="w-full btn-primary_bg">
            Login
          </button>
        </form>
        <h6 className="label-3_medium text-center">
          Don&rsquo;t have an account?
          <Link href="/signup" className="label-4_regular grnDrk ms-1">
            Signup
          </Link>
        </h6>
      </div>
    </div>
  );
}
