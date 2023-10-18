import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-5 w-full h-screen overflow-scroll overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
