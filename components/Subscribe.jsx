import { useState } from "react";
import Btn from "./Button";
import { useSubscribe } from "@/service/forms";
import { toast } from "sonner";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const { subscribeData, subscribeDataIsLoading, subscribeDataPayload } =
    useSubscribe((res) => {
      setEmail("");
      toast.success("Subscribed successfully!");
    });
  const handleSubmit = () => {
    const payload = {
      email,
    };
    subscribeDataPayload(payload);
  };

  return (
    <div className="subscribe-container text-[#FEFCFC]">
      <div className="backdrop-blur-lg bg-[#000000BF] px-4 lg:py-[46px] py-[77px] sm:py-[67px]">
        <h2 className="font-semibold font-rope xl:text-5xl md:mb-4  mb-2 text-2xl md:text-3xl lg:text-4xl">
          Stay in the loop
        </h2>
        <div className="justify-center flex">
          <p
            className="text-sm font-normal md:text-base mb-4"
            style={{ maxWidth: "494px" }}
          >
            Learn how we’re breaking payments barriers through inclusion and
            innovation - one text at a time.
          </p>
        </div>
        <div className="flex justify-center">
          <form
            className="w-[662px] flex flex-col sm:p-2 bg-transparent"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div
              className="flex justify-between items-center rounded-md overflow-hidden"
              style={{ border: "1px solid #0DA168" }}
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 w-full border-0 outline-none bg-transparent"
                style={{
                  boxShadow: "none",
                }}
              />
              <Btn
                text="Subscribe"
                type="submit"
                disabled={subscribeDataIsLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
