import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import BarComponent from "./BarComponent";
import PieComponent from "./PieComponent";

export default function DashboardMain() {
  return (
    <div>
      <div className="flex justify-between border-2 rounded-md p-2">
        <form className="flex gap-1 items-center">
          <FontAwesomeIcon
            icon={faSearch}
            style={{ width: "20px", height: "20px" }}
          />
          <input
            type="email"
            placeholder="Enter your email to subscribe to our daily news"
            className="p-2 w-full border-2 lg:mb-0 rounded-md"
          />
        </form>
        <div>
          <Image
            src="/asset/dashboard-profile.png"
            width={43}
            height={43}
            alt="User image"
          />
        </div>
      </div>
      <div className="flex gap-5 my-10">
        <div className="main-flex">
          <div style={{ background: "#CDE3CF3D", height: "48px" }}>
            <Image
              src="/favicon_io/user-paymee.svg"
              width={24}
              height={24}
              alt="User icon"
              className="m-3"
            />
          </div>
          <div>
            <p className="label-4_regular mb-3">Users</p>
            <h5 className="label-1_bold">5000</h5>
          </div>
        </div>
        <div className="main-flex">
          <div style={{ background: "#CDE3CF3D", height: "48px" }}>
            <Image
              src="/favicon_io/user-paymee.svg"
              width={24}
              height={24}
              alt="User icon"
              className="m-3"
            />
          </div>
          <div>
            <p className="label-4_regular mb-3">Users</p>
            <h5 className="label-1_bold">5000</h5>
          </div>
        </div>
        <div className="main-flex">
          <div style={{ background: "#CDE3CF3D", height: "48px" }}>
            <Image
              src="/favicon_io/user-paymee.svg"
              width={24}
              height={24}
              alt="User icon"
              className="m-3"
            />
          </div>
          <div className="items-end">
            <p className="label-4_regular mb-3">Users</p>
            <h5 className="label-1_bold">5000</h5>
          </div>
        </div>
      </div>
      <div className="lg:flex mb-5">
        <BarComponent />
        <PieComponent />
      </div>
      <h6 className="label-1_bold">Recent Activities</h6>
    </div>
  );
}
