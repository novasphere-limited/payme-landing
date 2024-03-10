import LinkBtn from "../../components/LinkButton";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

export default function CategoryDetails() {
  const dashboardList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

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
        <h6 className="header-5 mb-2 font-semibold">Literature</h6>
        <p className="text-base mb-[75px]">
          Learn the basics of literature and storytelling, how to write a<br />{" "}
          good story and explore captivating reads.
        </p>
        <h6 className="header-5 mb-4 font-semibold">What you would learn:</h6>
        <ul className="grid grid-cols-2 gap-6 mb-[40px] list-disc">
          {dashboardList.map((card) => (
            <li className="font-normal text-base text-[#555555] mb-[27px]">
              Learn the basics of literature and storytelling, how to write a
              good story and explore captivating reads
            </li>
          ))}
        </ul>
        <h5 className="font-semibold text-2xl mb-[27px]">Course Outline</h5>
        <ul className="mb-[40px]">
          {dashboardList.map((card) => (
            <li className="font-normal text-base text-[#555555] mb-[27px]">
              Select from the available courses in this category
            </li>
          ))}
        </ul>
        <LinkBtn
          text="Get Started"   
          href="#"
          style={{
            borderRadius: "24px",
            padding: "16px 24px",
            backgroundColor: "#000080",
            color: "#fff",
          }}
        />
        {/* <PaginationComponent
          curPaginatedValue={curPaginatedValue}
          onPaginatedChange={setCurPaginatedValue}
        /> */}
      </DashboardLayout>
    </>
  );
}
