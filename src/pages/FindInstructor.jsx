import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import FindFooter from "../components/FindFooter.jsx";
import MapListTabs from "../components/MapListTabs.jsx";
import heroBg from "../assets/hero-bg.jpg";

const services = [
  { title: "Instructor Consultation", desc: "Talk with our instructors to help you achieve your learning goals", icon: "fa-heart-pulse", color: "text-[#f04444]" },
  { title: "Academic Support", desc: "We provide academic support for students and learners", icon: "fa-chalkboard-user", color: "text-[#ef3d3d]" },
  { title: "Learning Services", desc: "From courses to training we offer learning services", icon: "fa-book-open", color: "text-[#f04b25]" },
  { title: "Urgent Support", desc: "We offer urgent support for important academic needs", icon: "fa-circle-check", color: "text-[#ef443d]" },
];

const specialties = ["Anesthesiology", "Dermatology", "Emergency Medicine", "Neurology", "Consultation", "Ophthalmology"];

const instructors = [
  { name: "Sara Karimi", role: "Web Development Instructor", type: "Visiting Instructor", room: "HBC Main Campus, Room 204", email: "sara.karimi@hbc.edu", phone: "+93 700 000 000", lang: "English, Dari", color: "8a2be2" },
  { name: "Omid Rahimi", role: "Data Analytics Instructor", type: "Visiting Instructor", room: "HBC Main Campus, Room 108", email: "omid.rahimi@hbc.edu", phone: "+93 700 000 001", lang: "English, Dari", color: "e6007e" },
];

export default function FindInstructor() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const listContent = (
    <div>
      {instructors.map((ins) => (
        <div key={ins.name} className="mb-[13px] flex gap-3.5 rounded-[11px] bg-white p-[18px] shadow-[0_7px_20px_rgba(40,50,65,0.07)]">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(ins.name)}&background=${ins.color}&color=fff&size=100`}
            alt={ins.name}
            className="h-[78px] w-[78px] shrink-0 rounded-[7px] object-cover"
          />
          <div>
            <h3 className="mb-[5px] text-xs text-[#3f4855]">{ins.name}</h3>
            <p className="mb-[3px] text-[10px] leading-[1.3] text-[#6b7480]">{ins.role}</p>
            <p className="mb-[3px] text-[10px] leading-[1.3] text-[#6b7480]">{ins.type}</p>
            <p className="mb-[3px] text-[10px] leading-[1.3] text-[#6b7480]">{ins.room}</p>
            <p className="mb-[3px] text-[10px] leading-[1.3] text-[#6b7480]">{ins.email}</p>
            <p className="mb-[3px] text-[10px] leading-[1.3] text-[#6b7480]">{ins.phone}</p>
            <p className="mb-[3px] text-[10px] leading-[1.3] text-[#6b7480]">{ins.lang}</p>
            <button className="mt-1.5 h-[30px] rounded-[6px] bg-pink2 px-[15px] text-[8px] font-bold text-white">
              NEXT AVAILABLE: TUESDAY, MARCH 22
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-[#f6f8fb] font-arial text-[#3f4857]">
      <Sidebar active="Instructors" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

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
                  <span>/ Find Instructor</span>
                </div>
                <div className="mt-1 text-[10px] font-bold">Find Instructor</div>
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
              Find an Instructor
            </h1>
            <p className="mb-3.5 text-[10px] text-white [@media(min-width:701px)]:mb-5 [@media(min-width:701px)]:text-[13px]">
              Search instructors and schedule a consultation
            </p>
            <div className="mb-3.5 flex justify-center gap-1.5">
              <input type="text" placeholder="Search by name or subject" className="h-[27px] w-[calc(50%-3px)] rounded-md border-0 px-2 text-[8px] outline-none [@media(min-width:701px)]:h-[43px] [@media(min-width:701px)]:w-[340px] [@media(min-width:701px)]:px-[13px] [@media(min-width:701px)]:text-[11px]" />
              <input type="text" placeholder="Campus or Department" className="h-[27px] w-[calc(50%-3px)] rounded-md border-0 px-2 text-[8px] outline-none [@media(min-width:701px)]:h-[43px] [@media(min-width:701px)]:w-[340px] [@media(min-width:701px)]:px-[13px] [@media(min-width:701px)]:text-[11px]" />
            </div>
            <div className="mx-auto flex w-[276px] justify-between [@media(min-width:701px)]:w-[480px]">
              <button
                onClick={() => setShowResults(true)}
                className="h-[30px] w-[74px] rounded-md border-0 bg-blue2 text-[8px] font-bold text-white [@media(min-width:701px)]:h-[42px] [@media(min-width:701px)]:w-[120px] [@media(min-width:701px)]:text-[10px]"
              >
                CURRENT
              </button>
              <button
                onClick={() => setShowResults(true)}
                className="h-[30px] w-[74px] rounded-md border-0 bg-pink2 text-[8px] font-bold text-white [@media(min-width:701px)]:h-[42px] [@media(min-width:701px)]:w-[120px] [@media(min-width:701px)]:text-[10px]"
              >
                SEARCH
              </button>
            </div>
          </div>
        </section>

        {!showResults ? (
          <div>
            <section className="mx-[17px] mt-[45px] rounded-xl bg-white p-[25px_22px_27px] shadow-[0_8px_24px_rgba(43,53,66,0.06)] [@media(min-width:701px)]:mx-[25px] [@media(min-width:701px)]:mt-[55px]">
              <h2 className="text-center text-lg font-semibold text-[#465163]">
                Special Services
              </h2>
              <div className="mt-[17px] grid grid-cols-1 gap-3 [@media(min-width:481px)]:grid-cols-2 [@media(min-width:701px)]:gap-[18px]">
                {services.map((s) => (
                  <div
                    key={s.title}
                    className="relative flex min-h-[76px] items-center gap-2 rounded-sm border border-[#e6e7e9] p-2.5 shadow-[0_2px_3px_rgba(0,0,0,0.12)] [@media(min-width:701px)]:gap-3 [@media(min-width:701px)]:p-[10px_14px]"
                  >
                    <div className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center text-[25px] ${s.color}`}>
                      <i className={`fa-solid ${s.icon}`}></i>
                    </div>
                    <div className="min-w-0 pr-5">
                      <h3 className="mb-1 text-[11px] font-medium text-[#4b5360] [@media(min-width:701px)]:text-sm">
                        {s.title}
                      </h3>
                      <p className="max-w-[400px] text-[9px] leading-[1.5] text-[#596473] [@media(min-width:701px)]:text-[11px]">
                        {s.desc}
                      </p>
                    </div>
                    <i className="fa-solid fa-chevron-down absolute right-[13px] text-[9px] text-[#6c7480]"></i>
                  </div>
                ))}
              </div>
            </section>

            <section className="mx-[17px] mt-[34px] rounded-xl bg-white p-[25px_22px_27px] shadow-[0_8px_24px_rgba(43,53,66,0.06)] [@media(min-width:701px)]:mx-[25px]">
              <h2 className="text-center text-lg font-semibold text-[#465163]">
                Find Instructors By Specialty
              </h2>
              <p className="mb-4 mt-1.5 text-center text-[13px] text-[#404851]">
                Select a Specialty to View All Instructors and schedule an Appointment
              </p>
              <div className="grid grid-cols-1 gap-3 [@media(min-width:481px)]:grid-cols-2 [@media(min-width:701px)]:gap-[18px]">
                {specialties.map((sp) => (
                  <button
                    key={sp}
                    className="flex h-[43px] items-center justify-between border border-[#e2e4e7] bg-white px-[13px] text-xs text-[#4b515b] shadow-[0_2px_3px_rgba(0,0,0,0.12)]"
                  >
                    <span>{sp}</span>
                    <i className="fa-solid fa-chevron-down text-[9px] text-[#727984]"></i>
                  </button>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <section className="mx-[17px] mt-10 [@media(min-width:701px)]:mx-[25px] [@media(min-width:701px)]:mt-[42px]">
            <MapListTabs listContent={listContent} />
          </section>
        )}

        <FindFooter />
      </div>
    </div>
  );
}
