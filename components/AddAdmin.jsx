import Link from "next/link";
import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import Image from "next/image";
import Button from "./Button";

export default function AddAdmin() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center page-center">
      <div className="w-3/4">
        <h2 className="header-2_bold mb-3 grnDrk">Add new admin</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="py-5">
          <CustomInput
            label="Admin Name"
            placeholder="Enter admin name"
            type="text"
            name="adminName"
            rules={{
              required: "Admin name field is required",
              minLength: {
                value: 3,
                message: "Minimum length is 3 characters",
              },
            }}
            control={control}
          />
          <CustomInput
            label="Email Address"
            placeholder="Enter admin email address"
            type="text"
            name="adminEmail"
            rules={{
              required: "Admin email field is required",
              minLength: {
                value: 3,
                message: "Minimum length is 3 characters",
              },
            }}
            control={control}
          />
          <CustomInput
            label="Admin Type"
            placeholder="Enter admin type"
            type="text"
            name="adminType"
            rules={{
              required: "Admin type field is required",
              minLength: {
                value: 3,
                message: "Minimum length is 3 characters",
              },
            }}
            control={control}
          />

          <div className="flex gap-3 px-10">
            <Button
              text="submit"
              type="Submit"
              classname="w-full btn-primary_bg p-3"
            />
            <Button
              text="Cancel"
              type="reset"
              classname="w-full p-3"
              style={{ background: "#ffffff", text: "#000000" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
