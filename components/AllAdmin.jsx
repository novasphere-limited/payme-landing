import { dummyData } from "@/contants";
import Image from "next/image";
import Dropdown from "./Dropdown";
import SelectComponent from "./SelectComponent";
import LinkBtn from "./LinkButton";
import { ROUTES } from "@/contants/ROUTES";
import PaginationComponent from "./Pagination";
import { useState } from "react";

export default function AllAdmin() {
  const [curPaginatedValue, setCurPaginatedValue] = useState(1);
  console.log(curPaginatedValue);

  return (
    <div>
      <SelectComponent />
      <div className="flex justify-between mb-5 items-center">
        <h5 className="label-4_light">All Admin</h5>
        {/* <Link href="/dashboard/addadmin">
          <button className="btn-sec_bg">+ Add Admin</button>
        </Link> */}
        <LinkBtn href={ROUTES.DASHBOARDADDADMIN} text="+ Add Admin" />
      </div>
      <div className="">
        <table className="w-full tabble">
          <thead>
            <tr className="text-center">
              <th className="label-4_regular">Name</th>
              <th className="label-4_regular whitespace-nowrap">Team</th>
              <th className="label-4_regular">Role</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((user) => (
              <tr key={user.id}>
                <td className="flex items-center gap-3 mb-4">
                  <form>
                    <input
                      type="checkbox"
                      style={{ width: "18px", height: "18px" }}
                    />
                  </form>
                  <div>
                    <Image
                      src={user.imagePath}
                      width={45}
                      height={45}
                      alt="User image"
                    />
                  </div>
                  <div>
                    <p className="text-1_regular">{user.name}</p>
                    <p className="text-1_regular whitespace-nowrap">
                      {user.email}
                    </p>
                  </div>
                </td>

                <td>
                  <p className="text-1_regular">Product</p>
                </td>
                <td>
                  <p className="text-1_regular">Designer</p>
                </td>
                <td className="flex items-center justify-center">
                  <Dropdown />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <PaginationComponent
          curPaginatedValue={curPaginatedValue}
          onPaginatedChange={setCurPaginatedValue}
        />
      </div>
    </div>
  );
}
