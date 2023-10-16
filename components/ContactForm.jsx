import Image from "next/image";
import Link from "next/link";

export default function ContactForm() {
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
              <button type="submit" className="w-full btn-primary_bg">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
