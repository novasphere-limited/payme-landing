import Btn from "./Button";

export default function Subscribe() {
  return (
    <div className="subscribe-container text-[#FEFCFC]">
      <div className="backdrop-blur-lg bg-[#000000BF] p-4">
        <h2 className="header-2_black mb-4">Stay in the loop</h2>
        <div className="justify-center flex">
          <p className="label-4_regular mb-4" style={{ maxWidth: "484px" }}>
            Learn how we’re breaking payments barriers through inclusion and
            innovation - one text at a time.
          </p>
        </div>
        <div className="flex justify-center">
          <form
            className=" lg:flex lg:border-2 rounded-md p-2 bg-transparent w-[662px] justify-between"
            style={{ border: "1px solid #0DA168" }}
          >
            <input
              type="email"
              placeholder="Email"
              className="p-3 mb-3 lg:mb-0 border-2 rounded-md lg:border-0 w-full"
            />
            <Btn text="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  );
}
