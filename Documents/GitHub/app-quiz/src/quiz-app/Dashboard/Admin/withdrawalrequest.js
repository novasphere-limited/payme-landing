import SearchAndFilter from "../../../components/SearchFilter";
import DashboardLayout from "../../../components/dashboard/DashboardLayout";

export default function WithdrawalRequest() {
  const withdrawalList = [
    { id: 1, status: "Approved" },
    { id: 2, status: "Pending" },
    { id: 3, status: "Approved" },
    { id: 4, status: "Declined" },
  ];

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
        <h4 className="text-2xl font-semibold mb-[4px]">Withdrawal Requests</h4>
        <p className="text-base font-normal mb-[32px]">
          Track wallet balances, status and funding requests.
        </p>
      </div>
      <div className="bg-white rounded-lg p-6">
        <SearchAndFilter />
        <table className="w-full tabble mt-5">
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
                      exam.status === "Approved"
                        ? "text-[#027A48] bg-[#ECFDF3]"
                        : exam.status === "Declined"
                        ? "bg-[#EF444436] text-[#EF4444]"
                        : "bg-[#FD7F0036] text-[#FD7F00]"
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
    </DashboardLayout>
  );
}
