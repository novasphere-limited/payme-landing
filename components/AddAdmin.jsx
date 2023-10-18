import Link from "next/link";

export default function AddAdmin() {
  return (
    <div className="flex justify-center page-center">
      <div style={{ maxWidth: "43.625rem" }}>
        <h2 className="header-2_bold mb-3 grnDrk">Add new admin</h2>

        <form className="">
          <div className="mb-5">
            <label className="label-3_medium">Admin Name</label>
            <input
              type="text"
              placeholder="Enter admin full name"
              className="p-3 w-full border-2"
            />
          </div>
          <div className="mb-5">
            <label className="label-3_medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter admin email address"
              className="p-3 w-full border-2"
            />
          </div>
          <div className="mb-5">
            <label className="label-3_medium">Admin Type</label>
            <input
              type="text"
              placeholder="Enter admin email address"
              className="p-3 w-full border-2"
            />
          </div>
          <div className="flex gap-3">
            <button type="submit" className="w-full btn-sec_bg">
              Submit
            </button>
            <button className="w-full">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
