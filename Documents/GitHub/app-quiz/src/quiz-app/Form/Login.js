import { useForm } from "react-hook-form";
import FormLayout from "../../components/FormLayout";
import CustomInput from "../../components/CustomInput";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/ROUTES";

export default function Login() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <FormLayout>
        <h2 className="header-4 text-center flex justify-center">
          WELCOME BACK
        </h2>
        <p className="text-center mb-[48px] btn-margin-b">LOGIN HERE</p>
        <div style={{ maxWidth: "416px" }} className="log-container bg-white">
          <form onSubmit={handleSubmit(onSubmit)} className="p-5">
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
            <div className="flex gap-2 items-center">
              <CustomInput type="checkbox" control={control} name="checker" />
              <p>Remember me</p>
            </div>
            <div className="px-10 mt-[40px] mb-[14px] btn-margin">
              <Button
                text="Login"
                type="submit"
                classname="w-full p-3 rounded-lg bg-[#000080] text-white"
              />
            </div>
          </form>
          <h6 className="label-3_medium ">
            Don&rsquo;t have an account?
            <Link to={ROUTES.SIGNUP} className="label-4_regular ms-1">
              Register
            </Link>
          </h6>
          <Link to={ROUTES.FORGOTPASSWORD}>
            <p className="text-center underline">Forgot your password?</p>
          </Link>
        </div>
      </FormLayout>
    </>
  );
}
