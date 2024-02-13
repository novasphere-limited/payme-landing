import { ROUTES } from "@/contants/ROUTES";
import Link from "next/link";

export default function PasswordSuccess() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="header-2_bold text-[#0DA168] text-center mb-4">
          Your Password has been changed successfully
        </h1>
        <Link
          href={ROUTES.LOGIN}
          className="label-3_medium text-[#0DA168] flex justify-center"
        >
          Go back to Login
        </Link>
      </div>
    </div>
  );
}
