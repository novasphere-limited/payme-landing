import { dummyData } from "@/contants";
import SelectComponent from "./SelectComponent";
import PaginationComponent from "./Pagination";
import { useState } from "react";

export default function Notification() {
  const [curPaginatedValue, setCurPaginatedValue] = useState(1);
  console.log(curPaginatedValue);

  return (
    <div>
      <h6 className="mb-5">Notifications</h6>
      <SelectComponent />
      <div className="">
        <table className="w-full tabble">
          <thead>
            <tr className="text-center">
              <th className="label-4_regular">All Notifications</th>
              <th className="label-4_regular whitespace-nowrap">Date</th>
              <th className="label-4_regular">Time</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((user) => (
              <tr key={user.id}>
                <td className="flex items-center gap-3 mb-6">
                  <form>
                    <input
                      type="checkbox"
                      style={{ width: "18px", height: "18px" }}
                    />
                  </form>
                  <p className="text-1_regular whitespace-nowrap">
                    Usman Hassan just sent you a message
                  </p>
                </td>
                <td>
                  <p className="text-1_regular">3/03/23</p>
                </td>
                <td>
                  <p className="text-1_regular">2 mins ago</p>
                </td>
                <td>
                  <p className="text-1_regular">see details</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaginationComponent
        curPaginatedValue={curPaginatedValue}
        onPaginatedChange={setCurPaginatedValue}
      />
    </div>
  );
}
