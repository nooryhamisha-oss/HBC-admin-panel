import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import DashboardFooter from "../components/DashboardFooter.jsx";

const cards = [
  {
    title: "Popular Programs",
    badgeIcon: "fa-book",
    badgeColor: "bg-purple",
    stats: [
      { icon: "fa-laptop-code", color: "text-purple", label: "Web Development", value: "19%" },
      { icon: "fa-chart-simple", color: "text-pink", label: "Data Analytics", value: "4%" },
      { icon: "fa-bullhorn", color: "text-blue", label: "Digital Marketing", value: "10%" },
      { icon: "fa-robot", color: "text-orange", label: "AI Fundamentals", value: "21%" },
      { icon: "fa-cart-shopping", color: "text-green", label: "E-Commerce", value: "2%" },
    ],
    moreDetails: true,
  },
  {
    title: "Students by Program",
    badgeIcon: "fa-user-graduate",
    badgeColor: "bg-pink",
    stats: [
      { icon: "fa-laptop-code", color: "text-purple", label: "Web Development", value: "32%" },
      { icon: "fa-chart-simple", color: "text-pink", label: "Data Analytics", value: "18%" },
      { icon: "fa-bullhorn", color: "text-blue", label: "Digital Marketing", value: "15%" },
      { icon: "fa-robot", color: "text-orange", label: "AI Fundamentals", value: "25%" },
      { icon: "fa-cart-shopping", color: "text-green", label: "E-Commerce", value: "10%" },
    ],
    moreDetails: true,
  },
  {
    title: "Smart Learning App Usage",
    badgeIcon: "fa-mobile-screen",
    badgeColor: "bg-blue",
    stats: [
      { icon: "fa-youtube", brand: true, color: "text-purple", label: "YouTube Tutorials", value: "25%" },
      { icon: "fa-github", brand: true, color: "text-pink", label: "GitHub Classroom", value: "15%" },
      { icon: "fa-comments", color: "text-blue", label: "HBC Chat App", value: "60%" },
    ],
    moreDetails: false,
  },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-[#f4f5f8] font-segoe">
      <Sidebar active="Dashboard" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="ml-0 flex-1 md:ml-[220px]">
        <header className="flex items-center justify-between border-b border-[#eee] bg-white px-5 py-[15px]">
          <div className="flex items-center gap-[15px]">
            <button
              onClick={() => setSidebarOpen(true)}
              className="block border-none bg-transparent md:hidden"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <div>
              <div className="text-[0.75rem] text-[#999]">
                <i className="fa-solid fa-house"></i> / Dashboard
              </div>
              <div className="font-bold">Dashboard</div>
            </div>
          </div>

          <div className="flex items-center gap-[15px]">
            <div className="hidden items-center gap-2 rounded-lg border border-[#ddd] px-3 py-2 md:flex">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Type here..." className="border-none outline-none" />
            </div>
            <a href="/logout" className="text-[#555]">
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
            </a>
            <i className="fa-solid fa-gear"></i>
            <i className="fa-solid fa-bell"></i>
          </div>
        </header>

        <main className="p-5">
          <h1 className="mb-[25px]">Welcome to HBC Admin Panel!</h1>

          <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2">
            {cards.map((card) => (
              <div key={card.title} className="rounded-[10px] bg-white p-[18px]">
                <h3 className="mb-[15px] flex items-center gap-2.5">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white ${card.badgeColor}`}
                  >
                    <i className={`fa-solid ${card.badgeIcon}`}></i>
                  </span>
                  {card.title}
                </h3>
                <div className="mb-[15px] flex items-center gap-6 [@media(max-width:768px)]:flex-col">
                  <div className="h-[100px] w-[100px] min-w-[100px] shrink-0 rounded-full border-[15px] border-purple border-r-pink border-b-blue" />
                  <ul className="flex-1">
                    {card.stats.map((s) => (
                      <li
                        key={s.label}
                        className="flex items-center gap-2 border-b border-[#f0f0f0] py-1.5 text-[0.85rem]"
                      >
                        <i
                          className={`w-4 ${s.brand ? "fa-brands" : "fa-solid"} ${s.icon} ${s.color}`}
                        ></i>{" "}
                        {s.label} <span className="ml-auto font-bold">{s.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {card.moreDetails && (
                  <button className="mx-auto mt-2.5 block rounded-[20px] bg-[#f0eefc] px-5 py-2 text-purple">
                    MORE DETAILS
                  </button>
                )}
              </div>
            ))}

            <div className="rounded-[10px] bg-white p-[18px]">
              <h3 className="mb-[15px] flex items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green text-white">
                  <i className="fa-solid fa-award"></i>
                </span>
                Program Completion Rate
              </h3>
              <div className="text-[1.8rem] font-bold">
                70% <span className="text-[0.9rem] text-green">+3%</span>
              </div>
              <p className="text-[0.8rem] text-[#999]">Compared to last semester</p>
            </div>
          </div>
        </main>

        <DashboardFooter />
      </div>
    </div>
  );
}
