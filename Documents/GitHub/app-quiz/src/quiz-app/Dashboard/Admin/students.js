import SearchAndFilter from "../../../components/SearchFilter";
import DashboardLayout from "../../../components/dashboard/DashboardLayout";
import { dummyIndividualExamData } from "../../../constants";

export default function Students() {
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
        <h6 className="header-5 mb-2 font-semibold">Students</h6>
        <p className="subtitle-2 text-base font-normal mb-[40px]">
          List of students on the platform.
        </p>
        <div className="bg-white rounded-lg p-6">
          <SearchAndFilter showFilter={true} />
          <table className="w-full tabble mt-[20px]">
            <thead className="border-b-2 mb-4">
              <tr className="text-center text-[#000080] ">
                <th className=" subtitle-2 whitespace-nowrap">User ID</th>
                <th className=" subtitle-2">Full Name</th>
                <th className=" subtitle-2">Email Address</th>
                <th className=" subtitle-2">Phone Number</th>
                <th className=" subtitle-2">Role</th>
                <th className=" subtitle-2">Date Added</th>
                <th className=" subtitle-2">Status</th>
                <th className=" subtitle-2">View</th>
              </tr>
            </thead>
            <tbody>
              {dummyIndividualExamData.map((exam, index) => (
                <tr
                  key={exam.id}
                  className={`text-center py-3 ${
                    dummyIndividualExamData.Length !== index + 1
                      ? "border-b-2"
                      : ""
                  }`}
                >
                  <td>
                    <p className="text-1_regular">{exam.userId}</p>
                  </td>
                  <td>
                    <p className="text-1_regular">{exam.fullname}</p>
                  </td>
                  <td>
                    <p className="text-1_regular">{exam.email}</p>
                  </td>
                  <td>
                    <p className="text-1_regular">+234 8112334321</p>
                  </td>
                  <td>
                    <p className="text-1_regular">Student</p>
                  </td>
                  <td>
                    <p className="text-1_regular pt-3">Feb 10, 2024</p>
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
                      Active
                    </p>
                  </td>
                  <td>
                    <div className="flex justify-center my-auto">
                      <img
                        src={exam.icon}
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
    </>
  );
}
