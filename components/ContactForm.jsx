import Image from "next/image";
import Link from "next/link";
import Btn from "./Button";

export default function ContactForm() {
  return (
    <div className="margin-gen md:mb-8 mb-3">
      <div className="md:flex mt-5 gap-5">
        <div className="w-full">
          <h2 className="md:text-[40px] text-5xl font-normal mb-4 text-[#060606]">
            Contact us
          </h2>
          <p className="text-lg mb-6">
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
              <h6 className="text-lg">Support@payymenow.com</h6>
            </div>
            <div className="flex gap-2 mb-3 items-center">
              <div>
                <Image
                  src="/favicon_io/phone.svg"
                  alt="Phone icon"
                  width={18}
                  height={18}
                />
              </div>
              <h6 className="text-lg">+23489034566547</h6>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="rounded-md border-2">
            <form className="p-5">
              <input
                type="text"
                placeholder="Your name"
                className="p-3 w-full mb-5 border-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 w-full mb-3 border-2"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-3 w-full mb-5 border-2"
              />
              <textarea
                placeholder="Your message"
                className="p-3 w-full mb-2 border-2"
                style={{ minHeight: "200px" }}
              ></textarea>
              <Btn text="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
