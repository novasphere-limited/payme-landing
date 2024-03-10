import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import { GenderList } from "../constants";

export default function SearchAndFilter({ showFilter = false }) {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const handleInputChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-between items-center"
      >
        <div className="w-[400px]">
          <CustomInput
            placeholder="Search"
            type="text"
            name="search"
            rules={{
              required: "Can't be empty",
              minLength: {
                value: 3,
                message: "Minimum length is 3 characters",
              },
            }}
            style={{ marginBottom: "0px" }}
            control={control}
            onInputChange={handleInputChange}
          />
        </div>
        {showFilter && (
          <div className="relative">
            <div className="#FD7F00 p-2 absolute top-3 left-0 bg-[#FD7F00] rounded-[4px]">
              <img
                className=""
                src="/assets/favicon_io/filter-icon.svg"
                height={24}
                width={24}
                alt="Search icon"
              />
            </div>
            <CustomInput
              type="select"
              name="filter"
              control={control}
              options={GenderList}
              style={{ paddingLeft: "40px", border: "none" }}
            />
          </div>
        )}
      </form>
    </>
  );
}
