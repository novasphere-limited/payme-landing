import { useForm } from "react-hook-form";
import FormLayout from "../../components/FormLayout";
import CustomInput from "../../components/CustomInput";
import { GenderList } from "../../constants";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/ROUTES";

export default function Signup() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <FormLayout>
        <h2 className="header-4 text-center flex justify-center">
          CREATE YOUR ACCOUNT
        </h2>
        <p className="text-center mb-[48px] btn-margin-b">
          {" "}
          ALL FIELDS ARE REQUIRED
        </p>
        <div style={{ maxWidth: "768px" }} className="log-container bg-white">
          <form onSubmit={handleSubmit(onSubmit)} className="p-5">
            <div className="flex gap-5">
              <div className="w-full">
                <CustomInput
                  label="First Name"
                  placeholder="Kehinde"
                  type="text"
                  name="firstname"
                  rules={{
                    required: "Firstname is required",
                    minLength: {
                      value: 3,
                      message: "Minimum length is 3 characters",
                    },
                  }}
                  control={control}
                />
              </div>
              <div className="w-full">
                <CustomInput
                  label="Last Name"
                  placeholder="Jejelaye"
                  type="text"
                  name="lastname"
                  rules={{
                    required: "Lastname is required",
                    minLength: {
                      value: 3,
                      message: "Minimum length is 3 characters",
                    },
                  }}
                  control={control}
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-full">
                <CustomInput
                  label="Username"
                  placeholder="...username"
                  type="text"
                  name="username"
                  rules={{
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Minimum length is 3 characters",
                    },
                  }}
                  control={control}
                />
              </div>
              <div className="w-full">
                <CustomInput
                  label="Age"
                  placeholder="45"
                  type="number"
                  name="age"
                  rules={{
                    required: "Age is required",
                    minLength: {
                      value: /^(0?[1-9]|[1-9][0-9]|[1][0-2][0-9]|130)$/,
                      message: "Invalid age format",
                    },
                  }}
                  control={control}
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-full">
                <CustomInput
                  label="Gender"
                  type="select"
                  name="select"
                  control={control}
                  options={GenderList}
                />
              </div>
              <div className="w-full">
                <CustomInput
                  label="Email"
                  placeholder="kehindejejelaye@gmail.com"
                  type="email"
                  name="email"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email format.",
                    },
                  }}
                  control={control}
                />
              </div>
            </div>
            <CustomInput
              label="Password"
              placeholder="Password"
              type="password"
              name="password"
              rules={{
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                  message: "Invalid password format.",
                },
              }}
              control={control}
            />
            <CustomInput
              label="Confirm Password"
              placeholder="Confirm Password"
              type="password"
              name="password"
              rules={{
                required: "Confirm password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                  message: "Password must match.",
                },
              }}
              control={control}
            />
            <div className="px-10">
              <Button
                text="Signup"
                type="submit"
                classname="w-full rounded-lg text-white p-3 bg-[#000080] btn-margin"
              />
            </div>
          </form>
          <h6 className="label-3_medium text-center">
            Already have an account?
            <Link to={ROUTES.LOGIN} className="label-4_regular grnDrk ms-1">
              Login
            </Link>
          </h6>
        </div>
      </FormLayout>
    </>
  );
}
