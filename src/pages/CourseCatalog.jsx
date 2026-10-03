import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import DashboardFooter from "../components/DashboardFooter.jsx";

const programs = [
  {
    name: "AI Fundamentals",
    department: "AI Department",
    duration: "4 months",
    desc: "Learn the core ideas behind machine learning and build your first AI models.",
    icon: "fa-robot",
    color: "from-purple to-[#5b1aa3]",
    id: "AI-101",
  },
  {
    name: "Web Development",
    department: "Web Department",
    duration: "5 months",
    desc: "Build real websites and web apps from scratch with HTML, CSS, JavaScript and React.",
    icon: "fa-laptop-code",
    color: "from-blue to-blue3",
    id: "WEB-101",
  },
  {
    name: "Digital Marketing",
    department: "Marketing Department",
    duration: "3 months",
    desc: "Learn social media, SEO and online advertising to grow a brand from zero.",
    icon: "fa-bullhorn",
    color: "from-pink to-pink2",
    id: "MKT-101",
  },
  {
    name: "E-Commerce",
    department: "E-Commerce Department",
    duration: "3 months",
    desc: "Learn how to build, run and grow an online store from product to payment.",
    icon: "fa-cart-shopping",
    color: "from-orange to-[#c97a0f]",
    id: "ECM-101",
  },
  {
    name: "Data Analytics",
    department: "Data Department",
    duration: "4 months",
    desc: "Turn raw data into clear insights using spreadsheets, SQL and dashboards.",
    icon: "fa-chart-simple",
    color: "from-green to-[#1d7a46]",
    id: "DATA-101",
  },
];

export default function CourseCatalog() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(7);

  const filtered = programs.filter((p) =>
    `${p.name} ${p.department}`.toLowerCase().includes(search.toLowerCase()),
  );

  const visible = filtered.slice(0, perPage);

  return (
    <div className="flex min-h-screen bg-[#f4f5f8] font-segoe">
      <Sidebar
        active="Course Catalog"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="ml-0 min-w-0 flex-1 md:ml-[220px]">
        {/* Header */}
        <header className="flex min-h-[66px] items-center justify-between gap-3 border-b border-[#eee] bg-white px-4 py-[15px] sm:px-5">
          <div className="flex min-w-0 items-center gap-3 sm:gap-[15px]">
            <button
              onClick={() => setSidebarOpen(true)}
              className="block shrink-0 border-none bg-transparent md:hidden"
            >
              <i className="fa-solid fa-bars"></i>
            </button>

            <div className="min-w-0">
              <div className="truncate text-[0.7rem] text-[#999] sm:text-[0.75rem]">
                <i className="fa-solid fa-house"></i> / Course Catalog
              </div>

              <div className="truncate font-bold">Course Catalog</div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3 sm:gap-[15px]">
            <div className="hidden items-center gap-2 rounded-lg border border-[#ddd] px-3 py-2 lg:flex">
              <i className="fa-solid fa-magnifying-glass"></i>

              <input
                type="text"
                placeholder="Type here..."
                className="w-[130px] border-none outline-none"
              />
            </div>

            <a href="/logout" className="hidden text-[#555] sm:block">
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
            </a>

            <i className="fa-solid fa-gear"></i>
            <i className="fa-solid fa-bell"></i>
          </div>
        </header>

        {/* Main */}
        <main className="p-3 sm:p-4 md:p-5">
          {/* Programs */}
          <div className="mb-4 rounded-[10px] bg-white p-4 sm:mb-5 sm:p-[22px]">
            <h2 className="mb-5 text-[1.1rem] font-bold sm:text-[1.3rem]">
              Browse HBC Programs and enroll in what you need
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {programs.map((p) => (
                <div key={p.id} className="min-w-0">
                  <div
                    className={`mb-3 flex h-[190px] items-center justify-center rounded-[6px] bg-gradient-to-br text-white sm:h-[230px] ${p.color}`}
                  >
                    <i
                      className={`fa-solid ${p.icon} text-[3.2rem] sm:text-[4rem]`}
                    ></i>
                  </div>

                  <div className="mb-1.5 flex items-center justify-between gap-3">
                    <span className="text-[0.85rem] text-[#3f4857] sm:text-[0.95rem]">
                      {p.department}
                    </span>

                    <span className="shrink-0 text-[0.95rem] font-bold text-blue2 sm:text-[1.05rem]">
                      FREE
                    </span>
                  </div>

                  <div className="mb-2 flex items-center gap-2.5">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white ${p.color}`}
                    >
                      <i className={`fa-solid ${p.icon} text-[0.85rem]`}></i>
                    </span>

                    <strong className="text-[0.95rem] sm:text-[1.05rem]">
                      {p.name}
                    </strong>
                  </div>

                  <p className="mb-3 text-[0.85rem] leading-[1.4] text-[#666] sm:text-[0.9rem]">
                    {p.desc}
                  </p>

                  <button className="rounded-[20px] bg-pink px-5 py-2.5 text-[0.75rem] font-bold text-white sm:px-6 sm:py-3 sm:text-[0.8rem]">
                    ENROLL NOW
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Other Programs */}
          <div className="rounded-[10px] bg-white p-4 sm:p-[22px]">
            <h2 className="mb-4 text-[1rem] font-bold sm:text-[1.1rem]">
              Other programs at HBC
            </h2>

            <div className="mb-3 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
              <label className="flex items-center gap-2 text-[0.8rem] text-[#666] sm:text-[0.85rem]">
                <select
                  value={perPage}
                  onChange={(e) => setPerPage(Number(e.target.value))}
                  className="rounded-md border border-[#ddd] px-2 py-1"
                >
                  <option value={3}>3</option>
                  <option value={5}>5</option>
                  <option value={7}>7</option>
                </select>
                entries per page
              </label>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full rounded-md border border-[#ddd] px-3 py-1.5 text-[0.85rem] outline-none sm:w-[220px]"
              />
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-[0.85rem]">
                <thead>
                  <tr className="border-b border-[#eee] text-[#999]">
                    <th className="py-2 pr-3">NAME</th>
                    <th className="py-2 pr-3">CATEGORY</th>
                    <th className="py-2 pr-3">DEPARTMENT</th>
                    <th className="py-2 pr-3">DURATION</th>
                    <th className="py-2 pr-3">COST</th>
                    <th className="py-2">ID</th>
                  </tr>
                </thead>

                <tbody>
                  {visible.map((p) => (
                    <tr key={p.id} className="border-b border-[#f3f3f3]">
                      <td className="py-2.5 pr-3">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[7px] bg-gradient-to-br text-white ${p.color}`}
                          >
                            <i
                              className={`fa-solid ${p.icon} text-[0.8rem]`}
                            ></i>
                          </span>

                          <span className="font-semibold">{p.name}</span>
                        </div>
                      </td>

                      <td className="py-2.5 pr-3">Course</td>

                      <td className="py-2.5 pr-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white ${p.color}`}
                          >
                            <i
                              className={`fa-solid ${p.icon} text-[0.6rem]`}
                            ></i>
                          </span>

                          <span>{p.department}</span>
                        </div>
                      </td>

                      <td className="py-2.5 pr-3">{p.duration}</td>

                      <td className="py-2.5 pr-3 font-semibold text-blue2">
                        FREE
                      </td>

                      <td className="py-2.5">{p.id}</td>
                    </tr>
                  ))}

                  {visible.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-4 text-center text-[#999]">
                        No results found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-[0.75rem] text-[#999] sm:text-[0.8rem]">
              Showing 1 to {visible.length} of {filtered.length} entries
            </p>
          </div>
        </main>

        <DashboardFooter />
      </div>
    </div>
  );
}
