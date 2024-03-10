import LinkBtn from "../components/LinkButton";
import { ROUTES } from "../constants/ROUTES";
export default function Home() {
  return (
    <>
      <div className="grid grid-cols-4">
        <LinkBtn
          text="Login"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.LOGIN}
        />
        <LinkBtn
          text="Signup"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.SIGNUP}
        />
        <LinkBtn
          text="forgot"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.FORGOTPASSWORD}
        />
        <LinkBtn
          text="checkinbox"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.CHECKINBOX}
        />
        <LinkBtn
          text="otpverify"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.OTPVERIFY}
        />
        <LinkBtn
          text="register"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.REGISTERSUCCESS}
        />
        <LinkBtn
          text="Dashboard"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.DASHBOARDEXAMCONTENT}
        />
        <LinkBtn
          text="IndividualExam"
          href={ROUTES.DASHBOARDINDIVIDUALEXAMCONTENT}
          style={{ backgroundColor: "#000080", color: "#fff" }}
        />
        <LinkBtn
          text="CreateExam"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.DASHBOARDCREATE}
        />
        <LinkBtn
          text="Dashboard"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.DASHBOARD}
        />
        <LinkBtn
          text="Withdrawal"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.DASHBOARDWITHDRAWAL}
        />
        <LinkBtn
          text="Admin Dashboard"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.DASHBOARDADMIN}
        />
        <LinkBtn
          text="Dashboard Categories"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.DASHBOARDCATEGORIES}
        />
        <LinkBtn
          text="Categories Details"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href="/dashboard/categories/1"
        />
        <LinkBtn
          text="Admin Exam"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.DASHBOARDADMINEXAM}
        />
        <LinkBtn
          text="Admin Students"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.DASHBOARDADMINSTUDENT}
        />
        <LinkBtn
          text="Admin Examiners"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.DASHBOARDADMINEXAMINERS}
        />
        <LinkBtn
          text="Admin ViewWallet"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.DASHBOARDADMINVIEWWALLET}
        />
        <LinkBtn
          text="Admin Withdrawal"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.DASHBOARDADMINWITHDRAWAL}
        />
        <LinkBtn
          text="Admin Viewrequest"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.DASHBOARDADMINVIEWREQUEST}
        />
        <LinkBtn
          text="Admin Viewtransaction"
          style={{ backgroundColor: "#000080", color: "#fff" }}
          href={ROUTES.DASHBOARDADMINVIEWTRANSACTION}
        />
      </div>
    </>
  );
}
