import Image from "next/image";
import Btn from "./Button";
import { useState } from "react";
import { toast } from "sonner";
import { useContactForm } from "@/service/forms";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const { contactData, contactDataIsLoading, contactDataPayload } =
    useContactForm((res) => {
      toast.success("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });
    });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    contactDataPayload(formData);
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/asset/full-circ.png")',
        backgroundSize: "620px 620px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top -82px left 0px",
      }}
      className="md:pt-16 pt-[58px]"
    >
      <div className="md:flex gap-[47px]">
        <div className="w-full xl:ps-[100px] lg:ps-[65px] md:ps-[48px] sm:ps-8 ps-6 sm:pe-8 pe-6">
          <h2 className="md:text-[40px] text-start text-5xl font-normal mb-6 text-[#060606]">
            Contact us
          </h2>
          <p className="md:text-lg text-sm mb-6 text-start font-normal leading-[28px]">
            Kindly fill the form to log your complaints and one of our customer
            service agent will be in touch shortly after..
          </p>
          <div>
            <div className="flex gap-2 mb-3 items-center">
              <div>
                <Image
                  src="/favicon_io/mail.svg"
                  alt="Phone icon"
                  width={18}
                  height={18}
                />
              </div>
              <h6 className="md:text-lg text-sm">Support@payymenow.com</h6>
            </div>
            <div className="flex gap-2 mb-8 items-center">
              <div>
                <Image
                  src="/favicon_io/phone.svg"
                  alt="Phone icon"
                  width={18}
                  height={18}
                />
              </div>
              <h6 className="md:text-lg text-sm">09000000000</h6>
            </div>
          </div>
        </div>
        <div
          className="sm:ps-8 ps-6 w-full xl:pe-[100px] lg:pe-[65px] md:pe-[48px] sm:pe-8 pe-6 xl:pb-[122px] pb-[72px] md:pb-[92px] lg:pb-[102px]"
          style={{
            backgroundImage: 'url("/asset/circ.png")',
            backgroundSize: "620px 620px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom 0px right 0px",
          }}
        >
          <div className="rounded-md border-2 bg-[#fff]">
            <form
              className="py-[50px] px-[30px]"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <input
                type="text"
                placeholder="First name"
                className="p-3 w-full mb-5 border-2 rounded-[4px] input-form"
                name="firstName"
                value={formData?.firstName}
                onChange={(e) => handleChange(e)}
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className="p-3 w-full mb-5 border-2 rounded-[4px] input-form"
                name="lastName"
                value={formData?.lastName}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                placeholder="Phone number"
                className="p-3 w-full mb-3 border-2 rounded-[4px] input-form"
                name="phoneNumber"
                onChange={(e) => handleChange(e)}
                value={formData?.phoneNumber}
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-3 w-full mb-5 border-2 rounded-[4px] input-form"
                name="subject"
                onChange={(e) => handleChange(e)}
                value={formData?.subject}
                required
              />
              <textarea
                placeholder="Your message"
                className="p-3 w-full mb-2 border-2 rounded-[4px] input-form"
                style={{ minHeight: "200px" }}
                name="message"
                onChange={(e) => handleChange(e)}
                value={formData?.message}
                required
              ></textarea>
              <Btn
                text="Submit"
                type="submit"
                disabled={contactDataIsLoading}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
