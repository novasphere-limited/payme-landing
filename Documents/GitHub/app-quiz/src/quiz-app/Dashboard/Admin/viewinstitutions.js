import CardComponent from "../../components/CardLayout";
import LinkBtn from "../../components/LinkButton";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

export default function ViewInstitutions() {
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
        <h6 className="header-5 mb-2 font-semibold">Institutions</h6>
        <p className="text-base mb-[40px]">
          Examiners institution registered on the platform
        </p>
        <CardComponent>
          {dashboardList.map((card) => (
            <CardComponent
              classname="bg-white"
              style={{ borderRadius: "14px", padding: "26px 24px 40px 24px" }}
            >
              <h5 className="text-[#160A0A] header-5 mb-[4px] font-medium">
                Literature
              </h5>
              <p className="text-[#555555] text-base mb-[32px]">LIT 101</p>
              <p className="text-sm text-[#555555] mb-[32px]">
                Learn the basics of literature and story telling
              </p>
              <LinkBtn
                text="Select"
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
          ))}
        </CardComponent>
        {/* <PaginationComponent
          curPaginatedValue={curPaginatedValue}
          onPaginatedChange={setCurPaginatedValue}
        /> */}
      </DashboardLayout>
    </>
  );
}
