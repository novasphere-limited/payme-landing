import CardComponent from "../../../components/CardLayout";
import LinkBtn from "../../../components/LinkButton";
import DashboardLayout from "../../../components/dashboard/DashboardLayout";

export default function Exam() {
  return (
    <>
      <DashboardLayout>
        {/* <div className="mb-[20px] flex items-center gap-2">
          <img
            src="/assets/favicon_io/quiz-arrow_left.svg"
            width={10}
            height={11.67}
            alt="Back arrow icon"
          />
          <h6 className="text-[#FD9933]">BACK</h6>
        </div> */}
        <h6 className="header-5 mb-2">Exam Overview</h6>
        <p className="text-base mb-[40px]">
          Track and manage exams of users on the platform
        </p>
        <div className="mb-[40px]" style={{ maxWidth: "560px" }}>
          <CardComponent
            classname="bg-white"
            style={{ borderRadius: "14px", padding: "26px 24px 40px 24px" }}
          >
            <h5 className="text-[#160A0A] header-5 mb-[4px] font-medium">
              Number of Exams conducted
            </h5>
            <p className="text-[#555555] text-base mb-[32px]">15</p>
            <p className="text-sm text-[#555555] mb-[32px]">
              Learn the basics of literature and story telling
            </p>
            <LinkBtn
              text="View All"
              icon="/assets/favicon_io/quiz-arrow_right.svg"
              height={14}
              width={12}
              href="#"
              style={{
                borderRadius: "24px",
                padding: "9px 24px",
                color: "#FD9933",
                border: "2px solid #FD9933",
              }}
            />
          </CardComponent>
        </div>
        <div style={{ maxWidth: "560px" }}>
          <CardComponent
            classname="bg-white"
            style={{ borderRadius: "14px", padding: "26px 24px 40px 24px" }}
          >
            <h5 className="text-[#160A0A] header-5 mb-[4px] font-medium">
              Results
            </h5>
            <p className="text-sm text-[#555555] mb-[32px]">
              Learn the basics of literature and story telling
            </p>
            <LinkBtn
              text="View All"
              icon="/assets/favicon_io/quiz-arrow_right.svg"
              height={14}
              width={12}
              href="#"
              style={{
                borderRadius: "24px",
                padding: "9px 24px",
                color: "#FD9933",
                border: "2px solid #FD9933",
              }}
            />
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
