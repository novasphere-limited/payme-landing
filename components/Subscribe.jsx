import Button from "./Button";

export default function Subscribe() {
  return (
    <div className="main-container">
      <h2 className="header-2_bold mb-3 text-center">
        Don&rsquo;t want to miss out information
      </h2>
      <h6 className="label-2_regular mb-5 text-center">
        iincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud
      </h6>
      <form className=" lg:flex m-auto w-3/4">
        <input
          type="email"
          placeholder="Enter your email to subscribe to our daily news"
          className="p-3 w-full border-2 mb-3 lg:mb-0 rounded-md"
        />
        <Button btnText="Subscribe" type="submit" />
      </form>
    </div>
  );
}
