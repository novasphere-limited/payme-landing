import DashboardLayout from "../../components/dashboard/DashboardLayout";
import LinkBtn from "../../components/LinkButton";
import { dummyExamData } from "../../constants";
import { ROUTES } from "../../constants/ROUTES";

export default function ExamContent() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-[40px]">
        <div>
          <h6 className="header-5 mb-2">Exams</h6>
          <p className="subtitle-2">
            Track and manage assessment results of your students
          </p>
        </div>
        <LinkBtn
          text="Create exam"
          icon="/assets/images/quiz-arrow_right.png"
          height="24"
          width="24"
          href={ROUTES.DASHBOARDCREATE}
          style={{
            borderRadius: "24px",
            padding: "16px 24px",
            backgroundColor: "#000080",
            color: "#fff",
          }}
        />
      </div>
      <div className="bg-white rounded-lg p-6">
        <h5 className="text-[#160A0A] header-5 mb-[20px]">Exam Summary</h5>
        <table className="w-full tabble">
          <thead className="border-b-2 mb-4">
            <tr className="text-center text-[#000080] ">
              <th className=" subtitle-2">S/N</th>
              <th className=" subtitle-2 whitespace-nowrap">Title</th>
              <th className=" subtitle-2">Subject/Course</th>
              <th className=" subtitle-2">No. of Participants</th>
              <th className=" subtitle-2">No. of Questions</th>
              <th className=" subtitle-2">Time Stamp</th>
              <th className=" subtitle-2">Status</th>
              <th className=" subtitle-2">View</th>
            </tr>
          </thead>
          <tbody>
            {dummyExamData.map((exam, index) => (
              <tr
                key={exam.id}
                className={`text-center py-3 ${
                  dummyExamData.Length !== index + 1 ? "border-b-2" : ""
                }`}
              >
                <td>
                  <p className="text-1_regular">{exam.id}</p>
                </td>
                <td>
                  <p className="text-1_regular">{exam.title}</p>
                </td>
                <td>
                  <p className="text-1_regular">{exam.subject}</p>
                  <p className="text-1_regular">{exam.course}</p>
                </td>
                <td>
                  <p className="text-1_regular">{exam.participant}</p>
                </td>
                <td>
                  <p className="text-1_regular">{exam.questions}</p>
                </td>
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
