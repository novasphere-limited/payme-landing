import { SidebarList } from "../../constants";

export default function Sidebar() {
  return (
    <div
      className="bg-[#F5F5F5] flex flex-col gap-1 text-center overflow-y-scroll"
      style={{ maxWidth: "117px", height: "calc(100vh - 94px)" }}
    >
      {SidebarList.map((sidebar) => (
        <div className="p-4 bg-white" key={sidebar.id}>
          <div className="mb-2 flex justify-center">
            <img src={sidebar.icon} height={24} width={24} alt={sidebar.name} />
          </div>
          <p className="subtitle-2">{sidebar.name}</p>
        </div>
      ))}
    </div>
  );
}
