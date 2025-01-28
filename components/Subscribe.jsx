import Btn from "./Button";

export default function Subscribe() {
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
            className="flex lg:border-2 rounded-md sm:p-2 bg-transparent w-[662px] justify-between items-center"
            style={{ border: "1px solid #0DA168" }}
          >
            <input
              type="email"
              placeholder="Email"
              className="p-3 sm:mb-3 lg:mb-0 border-0 rounded-md lg:border-0 w-full bg-transparent"
            />
            <div>
              <Btn text="Subscribe" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
