import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import FindFooter from "../components/FindFooter.jsx";
import MapListTabs from "../components/MapListTabs.jsx";
import heroBg from "../assets/hero-bg.jpg";

const programs = [
  {
    name: "Web Development Program",
    address: "Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia",
    url: "https://hbc.edu/webdev",
    phone: "+93 700 000 000",
    campus: "HBC Main Campus, Negeri Sembilan Malaysia",
    color: "8a2be2",
  },
  {
    name: "Data Analytics Program",
    address: "Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia",
    url: "https://hbc.edu/data",
    phone: "+93 700 000 001",
    campus: "HBC Main Campus, Negeri Sembilan Malaysia",
    color: "e6007e",
  },
];

export default function FindProgram() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const listContent = (
    <div>
      {programs.map((p) => (
        <div
          key={p.name}
          className="mb-[13px] flex flex-col gap-3.5 rounded-[11px] bg-white p-[18px] shadow-[0_7px_20px_rgba(40,50,65,0.07)] [@media(min-width:701px)]:flex-row"
        >
          <img
            src={`https://placehold.co/120x120/${p.color}/ffffff?text=HBC`}
            alt={p.name}
            className="h-[90px] w-[90px] shrink-0 rounded-[7px] object-cover"
          />
          <div className="flex-1">
            <h3 className="mb-1.5 text-[13px] text-[#3f4855]">{p.name}</h3>
            <p className="mb-1 text-[10px] leading-[1.4] text-[#6b7480]">{p.address}</p>
            <p className="mb-1 text-[10px] leading-[1.4] text-[#6b7480]">{p.url}</p>
            <p className="mb-1 text-[10px] leading-[1.4] text-[#6b7480]">{p.phone}</p>
            <p className="mb-1 text-[10px] leading-[1.4] text-[#6b7480]">{p.campus}</p>
          </div>
          <div className="flex shrink-0 flex-row justify-center gap-2 [@media(min-width:701px)]:flex-col">
            <button className="flex-1 rounded-md bg-pink2 px-3 py-2.5 text-[9px] font-bold text-white [@media(min-width:701px)]:w-[170px] [@media(min-width:701px)]:flex-none">
              MORE ABOUT THIS PROGRAM
            </button>
            <button className="flex-1 rounded-md bg-pink2 px-3 py-2.5 text-[9px] font-bold text-white [@media(min-width:701px)]:w-[170px] [@media(min-width:701px)]:flex-none">
              FIND AN INSTRUCTOR AND SCHEDULE
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-[#f6f8fb] font-arial text-[#3f4857]">
      <Sidebar active="Programs" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="ml-0 md:ml-[220px]">
        <section
          className="relative mx-[17px] mt-4 min-h-[211px] overflow-hidden rounded-[10px] text-white [@media(min-width:701px)]:mx-[25px] [@media(min-width:701px)]:mt-5 [@media(min-width:701px)]:min-h-[320px]"
          style={{
            backgroundImage: `linear-gradient(115deg, rgba(177,0,133,0.82), rgba(221,0,125,0.42), rgba(42,31,151,0.85)), url(${heroBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex items-start justify-between px-[22px] py-2.5 [@media(min-width:701px)]:px-[25px] [@media(min-width:701px)]:py-[13px]">
            <div className="flex items-start gap-2.5">
              <div>
                <div className="flex items-center gap-1.5 text-[10px] text-white">
                  <i className="fa-solid fa-house text-[9px]"></i>
                  <span>/ Find Program</span>
                </div>
                <div className="mt-1 text-[10px] font-bold">Find Program</div>
              </div>
            </div>

            <div className="flex items-center gap-[7px] [@media(min-width:701px)]:gap-3">
              <div className="hidden h-[31px] w-[170px] items-center gap-[7px] rounded-md bg-white px-2.5 text-[#6c7480] [@media(min-width:701px)]:flex">
                <i className="fa-solid fa-magnifying-glass text-[10px]"></i>
                <input type="text" placeholder="Type here..." className="w-full border-0 text-[9px] outline-0" />
              </div>
              <button onClick={() => setSidebarOpen(true)} className="block border-0 bg-transparent text-white md:hidden">
                <i className="fa-solid fa-bars"></i>
              </button>
              <a href="/logout" className="flex items-center gap-1 text-[8px] font-semibold text-white [@media(min-width:701px)]:text-[10px]">
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
              </a>
              <i className="fa-solid fa-gear text-[9px] text-white [@media(min-width:701px)]:text-[11px]"></i>
              <i className="fa-solid fa-bell text-[9px] text-white [@media(min-width:701px)]:text-[11px]"></i>
            </div>
          </div>

          <div className="relative z-[2] px-5 pb-2.5 pt-[23px] text-center [@media(min-width:701px)]:pt-[45px]">
            <h1 className="mb-1.5 text-[25px] font-bold text-white [@media(min-width:701px)]:text-[34px]">
              Find a Program
            </h1>
            <p className="mb-3.5 text-[10px] text-white [@media(min-width:701px)]:mb-5 [@media(min-width:701px)]:text-[13px]">
              Search programs and schedule a session with instructors through the program
            </p>
            <div className="mb-3.5 flex justify-center gap-1.5">
              <input type="text" placeholder="Search" className="h-[27px] w-[calc(50%-3px)] rounded-md border-0 px-2 text-[8px] outline-none [@media(min-width:701px)]:h-[43px] [@media(min-width:701px)]:w-[340px] [@media(min-width:701px)]:px-[13px] [@media(min-width:701px)]:text-[11px]" />
              <input type="text" placeholder="Campus or Department" className="h-[27px] w-[calc(50%-3px)] rounded-md border-0 px-2 text-[8px] outline-none [@media(min-width:701px)]:h-[43px] [@media(min-width:701px)]:w-[340px] [@media(min-width:701px)]:px-[13px] [@media(min-width:701px)]:text-[11px]" />
            </div>
            <div className="mx-auto flex w-[276px] justify-between [@media(min-width:701px)]:w-[480px]">
              <button className="h-[30px] w-[74px] rounded-md border-0 bg-blue2 text-[8px] font-bold text-white [@media(min-width:701px)]:h-[42px] [@media(min-width:701px)]:w-[120px] [@media(min-width:701px)]:text-[10px]">
                CURRENT
              </button>
              <button className="h-[30px] w-[74px] rounded-md border-0 bg-blue2 text-[8px] font-bold text-white [@media(min-width:701px)]:h-[42px] [@media(min-width:701px)]:w-[120px] [@media(min-width:701px)]:text-[10px]">
                SEARCH
              </button>
            </div>
          </div>
        </section>

        <section className="mx-[17px] mt-10 [@media(min-width:701px)]:mx-[25px] [@media(min-width:701px)]:mt-[42px]">
          <MapListTabs listContent={listContent} />
        </section>

        <FindFooter />
      </div>
    </div>
  );
}
