import { Card } from "@mui/material";
import CardComponent from "../../../components/CardLayout";
import LinkBtn from "../../../components/LinkButton";
import SearchAndFilter from "../../../components/SearchFilter";
import DashboardLayout from "../../../components/dashboard/DashboardLayout";
import { dummyIndividualExamData } from "../../../constants";

export default function AdminDashboard() {
  const dashboardList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <>
      <DashboardLayout>
        <div className="flex items-center justify-between mb-[40px]">
          <div>
            <h6 className="header-5 mb-2">Overview</h6>
            <p className="subtitle-2">
              Track and manage listing of users on the platform
            </p>
          </div>
          <LinkBtn
            text="Select"
            height="24"
            width="24"
            href="#"
            style={{
              borderRadius: "24px",
              padding: "16px 24px",
              border: "2px solid #FD9933",
              color: "#FD9933",
            }}
          />
        </div>
        <SearchAndFilter />
        <div className="my-[20px] flex justify-between items-center">
          <h5 className="text-[#160A0A] header-5 ">All Categories</h5>
          <h5 className="text-[#FD9933] header-5">See All</h5>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-[40px]">
          {dashboardList.map((card) => (
            <CardComponent
              classname="bg-white"
              style={{ borderRadius: "14px", padding: "26px 24px 40px 24px" }}
            >
              <div className="flex">
                <div className="w-full">
                  <p className="text-base font-medium mb-[33px]">Primary</p>
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
              <div className="flex justify-center mt-[78px]">
                <img
                  src="/assets/images/app-chm.png"
                  height={130}
                  width={142}
                  alt="Categories image"
                />
              </div>
            </CardComponent>
          ))}
        </div>
        <h5 className="text-[#160A0A] header-5">Overall Information</h5>
        <div className="grid-container gap-6 mb-[40px]">
          <CardComponent
            classname="bg-[#8D8D8D1F] flex justify-center gap-8"
            style={{ borderRadius: "14px", padding: "26px 24px 26px 24px" }}
          >
            <CardComponent
              classname="bg-[#fff] mt-auto"
              style={{
                borderRadius: "14px",
                padding: "26px 24px 0px 24px",
                height: "236px",
              }}
            >
              <div className="mb-[42px] mt-[20px] flex justify-center">
                <img
                  src="/assets/images/circular-img.png"
                  height={32}
                  width={32}
                  alt="Circular icon"
                />
              </div>
              <div>
                <h5 className="text-[#160A0A] header-5 mb-[19px] text-center">
                  5
                </h5>
                <p className="text-base font-medium">Categories</p>
              </div>
            </CardComponent>
            <CardComponent
              classname="bg-[#fff]"
              style={{
                borderRadius: "14px",
                padding: "26px 24px 0px 24px",
                height: "318px",
              }}
            >
              <div className="mb-[115px] mt-[20px] flex justify-center">
                <img
                  src="/assets/images/circular-img.png"
                  height={32}
                  width={32}
                  alt="Circular icon"
                />
              </div>
              <div>
                <h5 className="text-[#160A0A] header-5 mb-[19px] mt-[27px] text-center">
                  5
                </h5>
                <p className="text-base font-medium mt-[27px]">Categories</p>
              </div>
            </CardComponent>

            <CardComponent
              classname="bg-[#fff] mt-auto"
              style={{
                borderRadius: "14px",
                padding: "26px 24px 0px 24px",
                height: "276px",
              }}
            >
              <div className="mb-[81px] mt-[20px] flex justify-center">
                <img
                  src="/assets/images/circular-img.png"
                  height={32}
                  width={32}
                  alt="Circular icon"
                />
              </div>
              <div>
                <h5 className="text-[#160A0A] header-5 mb-[19px] text-center">
                  5
                </h5>
                <p className="text-base font-medium">Categories</p>
              </div>
            </CardComponent>
          </CardComponent>
          <CardComponent
            classname="bg-[#8D8D8D1F]"
            style={{ borderRadius: "14px", padding: "26px 24px 0px 24px" }}
          >
            <CardComponent
              classname="bg-white mb-[17px]"
              style={{ padding: "12px 20px", borderRadius: "9px" }}
            >
              <div className="flex justify-between items-center">
                <h5 className="text-[#160A0A] text-base">All Categories</h5>
                <h5 className="text-[#FD9933] text-base">See All</h5>
              </div>
            </CardComponent>
            <CardComponent
              classname="bg-white"
              style={{ padding: "12px 20px", borderRadius: "9px" }}
            >
              <div className="flex justify-between items-center">
                <h5 className="text-[#160A0A] text-base">All Categories</h5>
                <h5 className="text-[#FD9933] text-base">See All</h5>
              </div>
            </CardComponent>
            <p className="text-xl font-medium mt-[83px] text-center">
              A graph or chat to be placed here
            </p>
          </CardComponent>
        </div>
        <h5 className="text-[#160A0A] header-5 mb-[20px]">User Information</h5>
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
