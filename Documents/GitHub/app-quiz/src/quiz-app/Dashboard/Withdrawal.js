import { Typography } from "@mui/material";
import ModalComponent from "../../components/Modal";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import CustomInput from "../../components/CustomInput";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import WithdrawalForm from "../Form/WithdrawalForm";
import { useState } from "react";
import WithdrawalPin from "../Form/WithdrawalPin";
import WithdrawalOtp from "../Form/WithdrawalOtp";
import SuccessComponent from "../../components/SuccessComponent";

export default function Withdrawal() {
  const withdrawalList = [
    { id: 1, status: "Pass" },
    { id: 2, status: "Pass" },
    { id: 3, status: "Pass" },
    { id: 4, status: "Pass" },
  ];
  const [modal, setModal] = useState(false);
  const [modalOtp, setModalOtp] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  console.log(modal);
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <DashboardLayout>
      <div className="mb-8">
        <div className="mb-[20px] flex items-center gap-2">
          <img
            src="/assets/favicon_io/quiz-arrow_left.svg"
            width={10}
            height={11.67}
            alt="Back arrow icon"
          />
          <h6 className="text-[#FD9933]">BACK</h6>
        </div>
        <h4 className="text-2xl font-semibold mb-[4px]">Request Withdrawal</h4>
        <p className="text-base font-normal mb-[32px]">
          Make fast withdrawal from your wallet by simply filling in required
          information.
        </p>
        <p className="text-base font-medium mb-[4px]">Account Balance</p>
        <img
          src="/assets/images/withdrawal-card.png"
          height={345}
          width={275}
          alt="Money card image"
          className=""
        />
      </div>
      <div className="bg-white rounded-lg p-6">
        <div className="flex justify-between">
          <h5 className="text-[#160A0A] header-5 mb-[20px]">Transactions</h5>
          <p className="text-[#FD7F00]">View all</p>
        </div>
        <table className="w-full tabble">
          <thead className="border-b-2 mb-4">
            <tr className="text-center text-[#000080] ">
              <th className=" subtitle-2">S/N</th>
              <th className=" subtitle-2 whitespace-nowrap">User ID</th>
              <th className=" subtitle-2">Full Name</th>
              <th className=" subtitle-2">Email Address</th>
              <th className=" subtitle-2">Request</th>
              <th className=" subtitle-2">Time Stamp</th>
              <th className=" subtitle-2">Status</th>
              <th className=" subtitle-2">View</th>
            </tr>
          </thead>
          <tbody>
            {withdrawalList.map((exam, index) => (
              <tr
                key={exam.id}
                className={`text-center py-3 ${
                  withdrawalList.Length !== index + 1 ? "border-b-2" : ""
                }`}
              >
                <td>
                  <p className="text-1_regular">{exam.id}</p>
                </td>
                <td>
                  <p className="text-1_regular">SPK456787556</p>
                </td>
                <td>
                  <p className="text-1_regular pt-3">Modupe Salami</p>
                </td>
                <td>
                  <p className="text-1_regular pt-3">Modupe@gmail.com </p>
                </td>
                <td>
                  <p>$4,000</p>
                </td>
                <td>
                  <p className="text-1_regular">Feb 10, 2024</p>
                  <p className="text-1_regular pb-3">16:54:00</p>
                </td>
                <td>
                  <p
                    className={`${
                      exam.status === "Pass"
                        ? "text-[#027A48] bg-[#ECFDF3]"
                        : "bg-[#EF444436] text-[#EF4444]"
                    } rounded-lg p-1`}
                  >
                    {exam.status}
                  </p>
                </td>
                <td>
                  <div className="flex justify-center my-auto">
                    <img
                      src="/assets/favicon_io/quiz-view.svg"
                      height={24}
                      width={24}
                      alt="View icon"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <PaginationComponent
          curPaginatedValue={curPaginatedValue}
          onPaginatedChange={setCurPaginatedValue}
        /> */}
      </div>
      <p className="text-base font-medium mt-[40px] mb-[20px]">
        Withdrawal Details
      </p>
      <WithdrawalForm handleModal={setModal} />
      {modal && (
        <ModalComponent
          modal={modal}
          setModal={setModal}
          setModalOtp={setModalOtp}
        >
          <WithdrawalPin setModal={setModal} setModalOtp={setModalOtp} />
        </ModalComponent>
      )}
      {modalOtp && (
        <ModalComponent modal={modalOtp} setModal={setModalOtp}>
          <WithdrawalOtp
            setModalOtp={setModalOtp}
            setModalSuccess={setModalSuccess}
          />
        </ModalComponent>
      )}
      {modalSuccess && (
        <ModalComponent modal={modalSuccess} setModal={setModalSuccess}>
          <SuccessComponent />
        </ModalComponent>
      )}
    </DashboardLayout>
  );
}
