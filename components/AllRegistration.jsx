import { RegList, dummyData } from "@/contants";
import Image from "next/image";
import { useForm } from "react-hook-form";
import SelectComponent from "./SelectComponent";
import CustomInput from "./CustomInput";
import PaginationComponent from "./Pagination";
import { useState } from "react";

export default function AllRegistration() {
  const [curPaginatedValue, setCurPaginatedValue] = useState(1);
  console.log(curPaginatedValue);
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex items-center gap-10">
        <div className="w-full">
          <SelectComponent />
        </div>
        <div>
          <Image
            src="/asset/dashboard-profile.png"
            width={70}
            height={70}
            alt="User image"
          />
        </div>
      </div>
      <div className="flex">
        <form className="rounded-md" onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            type="select"
            name="select"
            control={control}
            options={RegList}
            style={{ marginBottom: "0px", backgroundColor: "#E8ECF04D" }}
          />
        </form>
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
                      {user.email}
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
      <PaginationComponent
        curPaginatedValue={curPaginatedValue}
        onPaginatedChange={setCurPaginatedValue}
      />
    </div>
  );
}
