import { OptionsList, dummyData } from "@/contants";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";

export default function SelectComponent({
  showFilter = true,
  showProfile = false,
}) {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex justify-between items-center border-2 rounded-md p-2 mb-5 gap-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex gap-1 items-center w-full"
        >
          <FontAwesomeIcon
            icon={faSearch}
            style={{ width: "20px", height: "20px" }}
          />
          <div className="w-full">
            <CustomInput
              placeholder="Search user by Name, Email, Account Number"
              type="text"
              name="search"
              rules={{
                required: "Search text is required",
                minLength: {
                  value: 3,
                  message: "Minimum length is 3 characters",
                },
              }}
              control={control}
              style={{ marginBottom: "0px", border: "0px" }}
            />
          </div>
        </form>
        {showFilter && (
          <div className="border-2 rounded-md flex items-center gap-2 p-2">
            <Image
              src="/asset/filter.png"
              height={10}
              width={14}
              alt="Filter icon"
            />
            <CustomInput
              type="select"
              name="select"
              control={control}
              options={OptionsList}
              style={{ marginBottom: "0px" }}
            />
          </div>
        )}
        {showProfile && (
          <div>
            <Image
              src="/asset/dashboard-profile.png"
              width={43}
              height={43}
              alt="User image"
            />
          </div>
        )}
      </div>
    </>
  );
}
