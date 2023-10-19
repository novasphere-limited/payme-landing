import { dummyData } from "@/contants";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function AllAdmin() {
  return (
    <div>
      <div className="flex justify-between border-2 rounded-md p-2 mb-5">
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
      <div className="flex justify-between mb-5 items-center">
        <h5 className="label-4_light">All Admin</h5>
        <Link href="/dashboard/addadmin">
          <button className="btn-sec_bg">+ Add Admin</button>
        </Link>
      </div>
      <div className="">
        <table className="w-full tabble">
          <thead>
            <tr className="text-center">
              <th className="label-4_regular">Name</th>
              <th className="label-4_regular whitespace-nowrap">
                Phone Number
              </th>
              <th className="label-4_regular">Date</th>
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
                      {user.email} + ajayiabiodunsamson05@gmail.com
                    </p>
                  </div>
                </td>

                <td>
                  <p className="text-1_regular">{user.phoneNumber}</p>
                </td>
                <td>
                  <p className="text-1_regular">3/03/23</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
