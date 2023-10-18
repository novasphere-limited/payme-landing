export default function Subscribe() {
  return (
    <div className="subscribe-container">
      <h2 className="header-2_black mb-4">Stay in the loop</h2>
      <p className="label-4_regular mb-4">
        Transforming Ideas into Digital Realities, Where Vision Meets
        Innovation. Your Partner in Technology Evolution
      </p>
      <form className=" lg:flex m-auto w-1/2">
        <input
          type="email"
          placeholder="Enter your email to subscribe to our daily news"
          className="p-3 w-full border-2 mb-3 lg:mb-0 rounded-md"
        />
        <button type="submit" className="btn-primary_bg label-2_medium">
          Subscribe
        </button>
      </form>
    </div>
  );
}
