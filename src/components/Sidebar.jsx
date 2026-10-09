import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ open, onClose }) {
  const { pathname } = useLocation();

  const items = [
    { to: "/dashboard", icon: "fa-gauge", label: "Dashboard" },
    { to: "/find-program", icon: "fa-book", label: "Programs" },
    { to: "#", icon: "fa-user-graduate", label: "Students" },
    {
      to: "/find-instructor",
      icon: "fa-chalkboard-user",
      label: "Instructors",
    },
    { to: "/find-resources", icon: "fa-store", label: "Marketplace" },
    { to: "#", icon: "fa-graduation-cap", label: "Graduates" },
    { to: "#", icon: "fa-diagram-project", label: "Projects" },
    { to: "#", icon: "fa-chart-line", label: "Reports" },
    { to: "#", icon: "fa-gear", label: "Settings" },
  ];

  return (
    <>
      <aside className={`sidebar${open ? " open" : ""}`} id="sidebar">
        <div className="sidebar-top">
          <div className="logo">
            <i className="fa-solid fa-graduation-cap"></i> HBC Admin
          </div>
          <button id="closeSidebar" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {items.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className={`menu-item${pathname === item.to ? " active" : ""}`}
          >
            <i className={`fa-solid ${item.icon}`}></i> {item.label}
          </Link>
        ))}
      </aside>

      <div
        className={`overlay${open ? " show" : ""}`}
        id="overlay"
        onClick={onClose}
      ></div>
    </>
  );
}
