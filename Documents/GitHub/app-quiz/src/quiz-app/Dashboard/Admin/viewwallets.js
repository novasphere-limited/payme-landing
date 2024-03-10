import CardComponent from "../../../components/CardLayout";
import DashboardLayout from "../../../components/dashboard/DashboardLayout";

export default function ViewWallets() {
  const dashboardList = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];

  return (
    <>
      <DashboardLayout>
        <div className="mb-[20px] flex items-center gap-2">
          <img
            src="/assets/favicon_io/quiz-arrow_left.svg"
            width={10}
            height={11.67}
            alt="Back arrow icon"
          />
          <h6 className="text-[#FD9933]">BACK</h6>
        </div>
        <h6 className="header-5 mb-2 font-semibold">View Wallets</h6>
        <p className="text-base mb-[40px]">
          Track wallet balances, status and funding requests.
        </p>
        <div className="flex justify-between ms-[60px] items-center mb-[40px]">
          <div className="flex">
            <div
              style={{ borderRight: "2px solid #DADADA", paddingRight: "16px" }}
            >
              <h1 className="text-[#FD9933] text-3xl mb-[5px]">11,240</h1>
              <p className="text-[#94949C] text-center text-sm">
                Money Paid out
              </p>
            </div>
            <div className="ms-4">
              <h1 className="text-[#4BB543] text-3xl mb-[5px]">11,240</h1>
              <p className="text-[#94949C] text-center text-sm">
                Money Paid out
              </p>
            </div>
          </div>
          <CardComponent classname="py-2 ps-1 pe-[69px] bg-white">
            <p className="text-sm text-[#94949C] mb-2">Total Monthly Payment</p>
            <p className="text-base font-semibold text-[#333399]">11,240</p>
          </CardComponent>
        </div>
        <div>
          <CardComponent
            style={{
              maxWidth: "732px",
              borderRadius: "14px",
              padding: "26px 24px 24px 24px",
            }}
            classname="bg-white"
          >
            {dashboardList.map((card) => (
              <CardComponent
                classname="bg-white mb-2 shadow-md"
                style={{ borderRadius: "14px", padding: "27px 24px 27px 24px" }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <div>
                      <img
                        src="/assets/images/app-user.png"
                        height={40}
                        width={40}
                        alt="User image"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-[#333399] text-base mb-1 font-semibold">
                        Ms Ronu
                      </p>
                      <p className="text-sm text-[#FD9933] font-semibold">
                        25 Transactions
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[#333399] font-semibold">
                    $11,240
                  </p>
                </div>
              </CardComponent>
            ))}
          </CardComponent>
        </div>
        {/* <PaginationComponent
          curPaginatedValue={curPaginatedValue}
          onPaginatedChange={setCurPaginatedValue}
        /> */}
      </DashboardLayout>
    </>
  );
}
