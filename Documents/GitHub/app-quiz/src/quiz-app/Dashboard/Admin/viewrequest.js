import Button from "../../../components/Button";
import CardComponent from "../../../components/CardLayout";
import DashboardLayout from "../../../components/dashboard/DashboardLayout";

export default function ViewRequest() {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center">
        <div>
          <div className="mb-[20px] flex items-center gap-2">
            <img
              src="/assets/favicon_io/quiz-arrow_left.svg"
              width={10}
              height={11.67}
              alt="Back arrow icon"
            />
            <h6 className="text-[#FD9933]">BACK</h6>
          </div>
          <h6 className="header-5 mb-2 font-semibold">View Request</h6>
          <p className="text-base mb-[40px]">
            Track wallet balances, status and funding requests.
          </p>
        </div>
        <CardComponent classname="py-2 ps-1 pe-[69px] bg-white">
          <p className="text-sm text-[#94949C] mb-2">Ms Ronu’s Wallet Bal</p>
          <p className="text-base font-semibold text-[#333399]">4,500</p>
        </CardComponent>
      </div>
      <CardComponent
        classname="flex justify-center bg-white rounded-[14px]"
        style={{
          borderRadius: "14px",
          padding: "26px 24px 24px 24px",
        }}
      >
        <div style={{ maxWidth: "688px" }} className="text-[#94949C]">
          <div className="flex justify-center">
            <p className="bg-[#FD7F0036] text-[#FD7F00] py-1 px-2 flex rounded-[16px] text-sm font-medium mb-3">
              Pending
            </p>
          </div>
          <p className="text-base mb-3 text-center">
            Withdrawal requested on Feb 11, 2024 at 12:23pm
          </p>
          <h6 className="header-5 mb-2 font-semibold text-center text-black">
            $4,500.00
          </h6>
          <p className="text-sm text-[#94949C] mb-2 text-center">
            Ms Ronu Esther
          </p>
          <p className="text-center mb-[32px] text-[8px]">Examiner</p>
          <p className="text-sm">Amount</p>
          <p
            className="text-base py-[10px] px-[12px] rounded-md mb-4"
            style={{ border: "2px solid #8D8D8D1F" }}
          >
            $2,500.00
          </p>
          <p className="text-sm">To</p>
          <p
            className="text-base py-[10px] px-[12px] rounded-md mb-4"
            style={{ border: "2px solid #8D8D8D1F" }}
          >
            GT Bank
          </p>
          <p className="text-sm">Description</p>
          <p
            className="text-base py-[10px] px-[12px] rounded-md mb-4"
            style={{ border: "2px solid #8D8D8D1F" }}
          >
            Payout
          </p>
          <p className="text-sm">Payment Method</p>
          <p
            className="text-base py-[10px] px-[12px] rounded-md mb-4"
            style={{ border: "2px solid #8D8D8D1F" }}
          >
            Outward Transfer
          </p>
          <p className="text-sm">Request Reference</p>
          <p
            className="text-base py-[10px] px-[12px] rounded-md mb-4"
            style={{ border: "2px solid #8D8D8D1F" }}
          >
            099022436008263930
          </p>
          <div
            style={{ border: "2px solid #4BB543" }}
            className="text-[#4BB543] py-4 text-center rounded-md"
          >
            <h6 className="mb-1 text-base font-medium">APPROVED!</h6>
            <p className="text-[13px]">
              Request approved. Funds to be processed shortly.
            </p>
          </div>
          <div
            style={{ border: "2px solid #EF4444" }}
            className="text-[#EF4444] py-4 text-center rounded-md"
          >
            <h6 className="mb-1 text-base font-medium">DECLINED!</h6>
            <p className="text-[13px]">
              Request declined. Funds cannot be processed.
            </p>
          </div>
          <div className="flex justify-between mb-8 mt-4">
            <Button
              text="Decline"
              classname="px-6 py-4 rounded-[32px] bg-[#EF4444] text-white btn-margin"
            />
            <Button
              text="Approve"
              classname="px-6 py-4 rounded-[32px] bg-[#000080] text-white btn-margin"
            />
          </div>
          <textarea
            // id={inputId}
            className=" w-full mb-6 mt-1 border-2 border-[#096B45] rounded-lg"
          />
        </div>
      </CardComponent>
    </DashboardLayout>
  );
}
