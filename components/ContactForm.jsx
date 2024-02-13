import Image from "next/image";
import Link from "next/link";
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import Button from "./Button";

export default function ContactForm({ style }) {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="main-container">
      <div className="md:flex mt-5 gap-5">
        <div className="w-full mb-[48px]">
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
        <div className="w-full mb-[48px]">
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
                style={{ height: "159px" }}
              />

              <Button
                text="Submit"
                type="submit"
                classname="w-full btn-primary_bg p-3"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
