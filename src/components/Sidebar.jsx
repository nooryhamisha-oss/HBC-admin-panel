import { Link } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: "fa-gauge", to: "/dashboard" },
  { label: "Programs", icon: "fa-book", to: "/find-program" },
  { label: "Students", icon: "fa-user-graduate", to: "#" },
  { label: "Instructors", icon: "fa-chalkboard-user", to: "/find-instructor" },
  { label: "Graduates", icon: "fa-graduation-cap", to: "#" },
  { label: "Projects", icon: "fa-diagram-project", to: "#" },
  { label: "Reports", icon: "fa-chart-line", to: "#" },
  { label: "Settings", icon: "fa-gear", to: "#" },
];

export default function Sidebar({ active, open, onClose }) {
  return (
    <>
      <aside
        className={`fixed left-0 top-0 z-[200] h-screen w-[220px] border-r border-[#eee] bg-white p-5 transition-transform duration-300 ease-in-out md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-5 flex justify-between">
          <div className="font-bold">
            <i className="fa-solid fa-graduation-cap mr-1.5 text-purple"></i> HBC
            Admin
          </div>
          <button
            onClick={onClose}
            className="block border-none bg-transparent md:hidden"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className={`mb-1 block rounded-lg p-2.5 text-[#555] ${
              active === item.label
                ? "bg-gradient-to-r from-pink to-purple text-white"
                : ""
            }`}
          >
            <i className={`fa-solid ${item.icon} mr-2`}></i> {item.label}
          </Link>
        ))}
      </aside>

      <div
        onClick={onClose}
        className={`fixed inset-0 z-[150] bg-black/40 md:hidden ${
          open ? "block" : "hidden"
        }`}
      />
    </>
  );
}
