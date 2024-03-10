import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div className="flex mt-2">
        <Sidebar />

        <div
          className="w-full bg-[#FAFAFA] p-[40px] overflow-y-scroll"
          style={{ height: "calc(100vh - 94px)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
