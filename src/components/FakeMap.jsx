import { useState } from "react";

export default function FakeMap() {
  const [activeButton, setActiveButton] = useState("Map");

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[9px] bg-[#b5dfd9]">
      <div className="absolute left-2 top-2 z-10 flex">
        {["Map", "Satellite"].map((label) => (
          <button
            key={label}
            onClick={() => setActiveButton(label)}
            className={`h-8 px-4 text-xs shadow-[0_1px_4px_rgba(0,0,0,0.2)] ${
              activeButton === label ? "bg-white text-[#222]" : "bg-white text-[#555]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        className="relative h-full w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(25deg, transparent 0 47%, rgba(255,255,255,0.75) 48% 49%, transparent 50%), linear-gradient(130deg, transparent 0 48%, rgba(255,255,255,0.8) 49% 50%, transparent 51%), #d5e8cb",
        }}
      >
        <div className="absolute -left-20 -top-[30px] h-[500px] w-[220px] rotate-[5deg] bg-[#80d3df]" />

        <div className="absolute left-0 top-[45%] h-[5px] w-[600px] -rotate-[14deg] bg-white/90" />
        <div className="absolute left-[15%] top-[62%] h-[5px] w-[550px] rotate-[10deg] bg-white/90" />
        <div className="absolute left-[40%] top-[35%] h-[5px] w-[450px] rotate-[32deg] bg-white/90" />
        <div className="absolute left-[30%] top-[80%] h-[5px] w-[500px] -rotate-[22deg] bg-white/90" />
        <div className="absolute left-[55%] top-[60%] h-[5px] w-[350px] rotate-[65deg] bg-white/90" />

        <span className="absolute left-[47%] top-[38%] z-[5] text-[11px] font-semibold text-[#65705e]">
          HBC Main Campus
        </span>
        <span className="absolute left-[68%] top-[63%] z-[5] text-[11px] font-semibold text-[#65705e]">
          Campus
        </span>
        <span className="absolute left-[55%] top-[72%] z-[5] text-[11px] font-semibold text-[#65705e]">
          Main Building
        </span>

        <i className="fa-solid fa-location-dot absolute left-[49%] top-[43%] z-[8] text-[30px] text-[#e63c3c] [filter:drop-shadow(0_2px_2px_rgba(0,0,0,0.25))]"></i>
        <i className="fa-solid fa-location-dot absolute left-[59%] top-[55%] z-[8] text-[30px] text-[#e63c3c] [filter:drop-shadow(0_2px_2px_rgba(0,0,0,0.25))]"></i>
        <i className="fa-solid fa-location-dot absolute left-[66%] top-[48%] z-[8] text-[30px] text-[#e63c3c] [filter:drop-shadow(0_2px_2px_rgba(0,0,0,0.25))]"></i>
        <i className="fa-solid fa-location-dot absolute left-[57%] top-[65%] z-[8] text-[30px] text-[#e63c3c] [filter:drop-shadow(0_2px_2px_rgba(0,0,0,0.25))]"></i>

        <strong className="absolute left-[52%] top-[53%] z-[6] text-[17px] text-[#505750]">
          HBC
        </strong>
      </div>
    </div>
  );
}
