import { useState } from "react";
import FakeMap from "./FakeMap.jsx";

export default function MapListTabs({ listContent }) {
  const [tab, setTab] = useState("map");

  return (
    <>
      <div className="mb-[25px] flex w-[280px]">
        <button
          onClick={() => setTab("map")}
          className={`h-[31px] w-[140px] rounded-[5px] border-0 bg-transparent text-xs text-[#414958] ${
            tab === "map" ? "bg-white shadow-[0_2px_7px_rgba(0,0,0,0.08)]" : ""
          }`}
        >
          <i className="fa-solid fa-map mr-1.5 text-pink3"></i> Map
        </button>
        <button
          onClick={() => setTab("list")}
          className={`h-[31px] w-[140px] rounded-[5px] border-0 bg-transparent text-xs text-[#414958] ${
            tab === "list" ? "bg-white shadow-[0_2px_7px_rgba(0,0,0,0.08)]" : ""
          }`}
        >
          <i className="fa-solid fa-list mr-1.5 text-pink3"></i> List
        </button>
      </div>

      <div className="grid grid-cols-[225px_1fr] items-start gap-[18px] [@media(max-width:700px)]:grid-cols-[208px_1fr]">
        <aside className="rounded-[11px] bg-white p-[17px] shadow-[0_8px_20px_rgba(40,50,65,0.07)]">
          <input
            className="mb-[11px] h-[34px] w-full rounded-[6px] border border-[#e2e5e9] bg-white px-2.5 text-[10px] text-[#6b7480] outline-none"
            type="text"
            placeholder="Subject"
          />
          <input
            className="mb-[11px] h-[34px] w-full rounded-[6px] border border-[#e2e5e9] bg-white px-2.5 text-[10px] text-[#6b7480] outline-none"
            type="text"
            placeholder="Campus or Department"
          />
          <h3 className="my-[9px] text-[11px] font-medium text-[#4a5260]">
            Filter By
          </h3>
          <select className="mb-[11px] h-[34px] w-full rounded-[6px] border border-[#e2e5e9] bg-white px-2.5 text-[10px] text-[#6b7480] outline-none">
            <option>Subject</option>
            <option>Web Development</option>
            <option>Data Analytics</option>
            <option>Programming</option>
          </select>
          <select className="mb-[11px] h-[34px] w-full rounded-[6px] border border-[#e2e5e9] bg-white px-2.5 text-[10px] text-[#6b7480] outline-none">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <select className="mb-[11px] h-[34px] w-full rounded-[6px] border border-[#e2e5e9] bg-white px-2.5 text-[10px] text-[#6b7480] outline-none">
            <option>Experience Level</option>
            <option>Junior</option>
            <option>Intermediate</option>
            <option>Senior</option>
          </select>
          <select className="mb-[11px] h-[34px] w-full rounded-[6px] border border-[#e2e5e9] bg-white px-2.5 text-[10px] text-[#6b7480] outline-none">
            <option>Languages</option>
            <option>English</option>
            <option>Dari</option>
            <option>Pashto</option>
          </select>
          <h3 className="my-[9px] text-[11px] font-medium text-[#4a5260]">
            Instructors Who Teach
          </h3>
          <label className="mb-[9px] flex items-center gap-[7px] text-[10px] text-[#555e6b]">
            <input type="checkbox" className="m-0 h-[15px] w-[15px]" />
            <span>All Programs</span>
          </label>
          <label className="mb-[9px] flex items-center gap-[7px] text-[10px] text-[#555e6b]">
            <input type="checkbox" className="m-0 h-[15px] w-[15px]" />
            <span>Online Classes</span>
          </label>
          <label className="mb-[9px] flex items-center gap-[7px] text-[10px] text-[#555e6b]">
            <input type="checkbox" className="m-0 h-[15px] w-[15px]" />
            <span>On Campus</span>
          </label>
          <h3 className="my-[9px] text-[11px] font-medium text-[#4a5260]">
            View Only
          </h3>
          <label className="mb-[9px] flex items-center gap-[7px] text-[10px] text-[#555e6b]">
            <input type="checkbox" className="m-0 h-[15px] w-[15px]" />
            <span>Available Consultation</span>
          </label>
          <label className="mb-[9px] flex items-center gap-[7px] text-[10px] text-[#555e6b]">
            <input type="checkbox" className="m-0 h-[15px] w-[15px]" />
            <span>HBC Main Campus</span>
          </label>
        </aside>

        <div className="results-area">
          <div className="flex h-[37px] items-center gap-[9px]">
            <span className="mr-0.5 text-sm">Sort By</span>
            <button className="h-[30px] rounded-[6px] border-0 bg-pink2 px-[15px] text-[8px] font-bold text-white">
              NEXT AVAILABLE
            </button>
            <button className="h-[30px] rounded-[6px] border-0 bg-pink2 px-[15px] text-[8px] font-bold text-white">
              DISTANCE
            </button>
          </div>

          {tab === "map" ? <FakeMap /> : <div>{listContent}</div>}
        </div>
      </div>
    </>
  );
}
