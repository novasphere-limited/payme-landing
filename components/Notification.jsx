import { dummyData } from "@/contants";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Notification() {
  return (
    <div>
      <h6 className="mb-5">Notifications</h6>
      <div className="flex justify-between border-2 rounded-md p-2 mb-5">
        <form className="flex gap-1 items-center">
          <FontAwesomeIcon
            icon={faSearch}
            style={{ width: "20px", height: "20px" }}
          />
          <input
            type="email"
            placeholder="Search notification by date ,time, name"
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
                <td className="flex items-center gap-3 mb-4">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
