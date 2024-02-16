export default function Subscribe() {
  return (
    <div className="subscribe-container bg-[#CDE3CF1A]">
      <h2 className="header-2_bold mb-4">Stay in the loop</h2>
      <div className="flex justify-center">
        <p className="label-2_regular mb-4 text-contain">
          Learn how we’re breaking payments barriers through inclusion and
          innovation - one text at a time.
        </p>
      </div>
      <form className=" lg:flex m-auto w-3/4 lg:border-2 p-2 rounded-md">
        <input
          type="email"
          placeholder="Enter your email to subscribe to our daily news"
          className="p-3 w-full mb-3 lg:mb-0 rounded-md"
        />
        <button
          type="submit"
          className="btn-primary_bg label-2_medium px-[34px] py-[17px]"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
