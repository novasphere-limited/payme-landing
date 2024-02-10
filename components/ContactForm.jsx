import Image from "next/image";
import Link from "next/link";
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="main-container">
      <div className="flex mt-5 gap-5">
        <div className="w-full">
          <h2 className="header-3_black text-grnSec mb-4">Send us a Message</h2>
          <p className="label-3_regular mb-1">
            Fill the form or drop an Email and we would reach out to you as soon
            as possible.
          </p>
          <div>
            <div className="flex gap-3 mb-3 items-center">
              <div>
                <Image
                  src="/favicon_io/phone.svg"
                  alt="Phone icon"
                  width={18}
                  height={18}
                />
              </div>
              <h6 className="label-3_regular">+23489034566547</h6>
            </div>
            <div className="flex gap-3 mb-3 items-center">
              <div>
                <Image
                  src="/favicon_io/mail.svg"
                  alt="Phone icon"
                  width={18}
                  height={18}
                />
              </div>
              <h6 className="label-3_regular">+Support@payyME.com</h6>
            </div>
            <div className="flex gap-3 mb-3 items-center">
              <div>
                <Image
                  src="/favicon_io/phone.svg"
                  alt="Phone icon"
                  width={18}
                  height={18}
                />
              </div>
              <h6 className="label-3_regular">ikeja, allen avenue</h6>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="rounded-md border-2">
            <form onSubmit={handleSubmit(onSubmit)} className="p-5">
              <CustomInput
                placeholder="Username"
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
                // label="Email"
                placeholder="Email"
                type="email"
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email.",
                  },
                }}
                control={control}
              />
              <CustomInput
                placeholder="Subject"
                type="text"
                name="subject"
                rules={{
                  required: "Subject is required",
                  minLength: {
                    value: 3,
                    message: "Minimum length is 3 characters",
                  },
                }}
                control={control}
              />
              <CustomInput
                placeholder="Your message"
                type="textarea"
                name="message"
                rules={{
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Minimum length is 3 characters",
                  },
                }}
                control={control}
              />
              <button type="submit" className="w-full btn-primary_bg">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          label="Username"
          type="text"
          name="username"
          rules={{
            required: "Username is required",
            minLength: { value: 3, message: "Minimum length is 3 characters" },
          }}
          control={control}
        />

        <CustomInput
          label="Password"
          type="password"
          name="password"
          rules={{
            required: "Password is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              message:
                "Password must contain at least one uppercase letter, one lowercase letter, and one digit.",
            },

            // minLength: { value: 8, message: "Minimum length is 8 characters" },
          }}
          control={control}
        />
        <CustomInput
          label="Birthday"
          type="date"
          name="date"
          rules={{
            required: "Birthday year is required",
          }}
          control={control}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
