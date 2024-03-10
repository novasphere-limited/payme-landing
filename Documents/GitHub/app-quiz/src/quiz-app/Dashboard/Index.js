import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { RecentLectureList } from "../../constants";

export default function Index() {
  const dashboardList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const upcomingLectureList = [{ id: 1 }, { id: 2 }];
  return (
    <DashboardLayout>
      <div className="mb-4">
        <h4 className="text-2xl font-semibold">Welcome, Ms Moe</h4>
        <p className="text-base font-normal">Reg ID: 4500B20JYU</p>
        <p className="text-base font-normal">Status: Examiner</p>
      </div>
      <div className="grid grid-cols-4 gap-6 mb-[40px]">
        {dashboardList.map((card) => (
          <div className="rounded-[14px] flex p-[22px] bg-white">
            <div className="w-full">
              <p className="text-base font-medium mb-[33px]">Level</p>
              <h1 className="text-4xl font-medium">3/10</h1>
            </div>
            <div>
              <img
                src="/assets/images/circular-img.png"
                height={32}
                width={32}
                alt="Circular icon"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg p-6 mb-[40px]">
        <h5 className="text-[#160A0A] header-5 mb-[20px]">Recent Lectures</h5>
        <table className="w-full tabble">
          <thead className="border-b-2 mb-4">
            <tr className="text-center text-[#000080] ">
              <th className=" subtitle-2">S/N</th>
              <th className=" subtitle-2 whitespace-nowrap">Course</th>
              <th className=" subtitle-2">Task</th>
              <th className=" subtitle-2">Topic</th>
              <th className=" subtitle-2">Unit/Point</th>
              <th className=" subtitle-2">Time Stamp</th>
              <th className=" subtitle-2">Status</th>
              <th className=" subtitle-2">View</th>
            </tr>
          </thead>
          <tbody>
            {upcomingLectureList.map((exam, index) => (
              <tr
                key={index}
                className={`text-center py-3 ${
                  RecentLectureList.Length !== index + 1 ? "border-b-2" : ""
                }`}
              >
                <td>
                  <p className="text-1_regular">{index + 1}</p>
                </td>
                <td>
                  <p className="text-1_regular">Physics 101</p>
                </td>
                <td>
                  <p className="text-1_regular pt-3">Week 2 Assignment</p>
                  <p className="text-1_regular">Thermodynamics</p>
                  <p className="text-1_regular pb-3">Laws of Thermodynamics</p>
                </td>
                <td>
                  <p className="text-1_regular pt-3">
                    Using Newton's First Law, solve the equation
                  </p>
                  <p className="text-1_regular pb-3">Laws of Thermodynamics</p>
                </td>
                <td>
                  <p>12</p>
                </td>
                <td>
                  <p className="text-1_regular">Feb 10, 2024</p>
                  <p className="text-1_regular pb-3">12:00PM</p>
                </td>
                <td>
                  <p className="bg-[#EF444436] text-[#EF4444] rounded-lg">
                    Upcoming
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
      <div className="bg-white rounded-lg p-6">
        <h5 className="text-[#160A0A] header-5 mb-[20px]">Recent Lectures</h5>
        <table className="w-full tabble">
          <thead className="border-b-2 mb-4">
            <tr className="text-center text-[#000080] ">
              <th className=" subtitle-2">S/N</th>
              <th className=" subtitle-2 whitespace-nowrap">Course</th>
              <th className=" subtitle-2">Task</th>
              <th className=" subtitle-2">Topic</th>
              <th className=" subtitle-2">Unit/Point</th>
              <th className=" subtitle-2">Time Stamp</th>
              <th className=" subtitle-2">Status</th>
              <th className=" subtitle-2">View</th>
            </tr>
          </thead>
          <tbody>
            {RecentLectureList.map((exam, index) => (
              <tr
                key={exam.id}
                className={`text-center py-3 ${
                  RecentLectureList.Length !== index + 1 ? "border-b-2" : ""
                }`}
              >
                <td>
                  <p className="text-1_regular">{exam.id}</p>
                </td>
                <td>
                  <p className="text-1_regular">{exam.course}</p>
                </td>
                <td>
                  <p className="text-1_regular pt-3">Week 2 Assignment</p>
                  <p className="text-1_regular">Thermodynamics</p>
                  <p className="text-1_regular pb-3">Laws of Thermodynamics</p>
                </td>
                <td>
                  <p className="text-1_regular pt-3">
                    Using Newton's First Law, solve the equation
                  </p>
                  <p className="text-1_regular pb-3">Laws of Thermodynamics</p>
                </td>
                <td>{<p>{exam.point}</p>}</td>
                <td>
                  <p className="text-1_regular pt-3">Uploaded on</p>
                  <p className="text-1_regular">Feb 10, 2024</p>
                  <p className="text-1_regular pb-3">16:54:00</p>
                </td>
                <td>
                  <p
                    className={`${
                      exam.status === "Active"
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
  );
}
