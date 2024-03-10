import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./quiz-app/Home";
import Login from "./quiz-app/Form/Login";
import { ROUTES } from "./constants/ROUTES";
import ForgotPassword from "./quiz-app/Form/ForgotPword";
import Otp from "./quiz-app/Form/OtpVerify";
import RegisterSuccess from "./quiz-app/Form/RegisterSuccess";
import RegisterFailure from "./quiz-app/Form/RegisterFailure";
import Signup from "./quiz-app/Form/Signup";
import CheckInbox from "./quiz-app/Form/CheckInbox";
import NoContent from "./quiz-app/NoPage";
import CreateExamContent from "./quiz-app/Dashboard/CreateExamContent";
import ExamContent from "./quiz-app/Dashboard/ExamContent";
import IndividualExamContent from "./quiz-app/Dashboard/IndividualExamContent";
import Index from "./quiz-app/Dashboard/Index";
import Withdrawal from "./quiz-app/Dashboard/Withdrawal";
import AdminDashboard from "./quiz-app/Dashboard/Admin";
import Categories from "./quiz-app/Dashboard/category";
import CategoryDetails from "./quiz-app/Dashboard/categoriesdetail";
import Exam from "./quiz-app/Dashboard/Admin/exam";
import Students from "./quiz-app/Dashboard/Admin/students";
import Examiners from "./quiz-app/Dashboard/Admin/examiner";
import ViewWallets from "./quiz-app/Dashboard/Admin/viewwallets";
import WithdrawalRequest from "./quiz-app/Dashboard/Admin/withdrawalrequest";
import ViewRequest from "./quiz-app/Dashboard/Admin/viewrequest";
import ViewTransactions from "./quiz-app/Dashboard/Admin/viewtransactions";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
        <Route path={ROUTES.FORGOTPASSWORD} element={<ForgotPassword />} />
        <Route path={ROUTES.OTPVERIFY} element={<Otp />} />
        <Route path={ROUTES.REGISTERSUCCESS} element={<RegisterSuccess />} />
        <Route path={ROUTES.REGISTERFAILURE} element={<RegisterFailure />} />
        <Route path={ROUTES.CHECKINBOX} element={<CheckInbox />} />
        <Route path={ROUTES.DASHBOARDCREATE} element={<CreateExamContent />} />
        <Route path={ROUTES.DASHBOARDEXAMCONTENT} element={<ExamContent />} />
        <Route path={ROUTES.DASHBOARD} element={<Index />} />
        <Route path={ROUTES.DASHBOARDWITHDRAWAL} element={<Withdrawal />} />
        <Route
          path={ROUTES.DASHBOARDINDIVIDUALEXAMCONTENT}
          element={<IndividualExamContent />}
        />
        <Route path={ROUTES.DASHBOARDADMIN} element={<AdminDashboard />} />
        <Route path={ROUTES.DASHBOARDCATEGORIES} element={<Categories />} />
        <Route
          path={ROUTES.DASHBOARDCATEGORIESDETAILS}
          element={<CategoryDetails />}
        />
        <Route path={ROUTES.DASHBOARDADMINEXAM} element={<Exam />} />
        <Route path={ROUTES.DASHBOARDADMINSTUDENT} element={<Students />} />
        <Route path={ROUTES.DASHBOARDADMINEXAMINERS} element={<Examiners />} />
        <Route
          path={ROUTES.DASHBOARDADMINVIEWWALLET}
          element={<ViewWallets />}
        />
        <Route
          path={ROUTES.DASHBOARDADMINWITHDRAWAL}
          element={<WithdrawalRequest />}
        />
        <Route
          path={ROUTES.DASHBOARDADMINVIEWREQUEST}
          element={<ViewRequest />}
        />
        <Route
          path={ROUTES.DASHBOARDADMINVIEWTRANSACTION}
          element={<ViewTransactions />}
        />
        <Route path="*" element={<NoContent />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
