import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import Button from "../../components/Button";
import { GenderList } from "../../constants";

export default function WithdrawalForm({ handleModal }) {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleModal(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          label="Select Bank"
          type="select"
          name="selectBank"
          control={control}
          options={GenderList}
        />

        <CustomInput
          label="Account number"
          placeholder="0000111122"
          type="text"
          name="accNumber"
          rules={{
            required: "Field cannot be empty",
            pattern: {
              value: /^\d{10}$/,
              message: "Account number must be 10 digits",
            },
          }}
          control={control}
        />
        <CustomInput
          label="Amount"
          placeholder="#500.00"
          type="text"
          name="amount"
          rules={{
            required: "Field cannot be empty",
            pattern: {
              message: "Amount to withdraw must be provided",
            },
          }}
          control={control}
        />
        <CustomInput
          label="Narration"
          placeholder="For exam blabla..."
          type="text"
          name="narration"
          rules={{
            required: "Field cannot be empty",
            minLength: {
              value: 3,
              message: "Minimum length is 3 characters",
            },
          }}
          control={control}
        />
        <div className="px-10">
          <Button
            text="Proceed"
            type="submit"
            classname="w-[300px] rounded-lg p-3 bg-[#000080] text-white btn-margin"
          />
        </div>
      </form>
    </>
  );
}
