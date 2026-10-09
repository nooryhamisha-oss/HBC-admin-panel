import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/dashboard.css";
import "../styles/find.css";

const programs = [
  {
    name: "Web Development Program",
    img: "https://placehold.co/120x120/8a2be2/ffffff?text=HBC",
    address:
      "Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia",
    url: "https://hbc.edu/webdev",
    phone: "+93 700 000 000",
    campus: "HBC Main Campus, Negeri Sembilan Malaysia",
  },
  {
    name: "Data Analytics Program",
    img: "https://placehold.co/120x120/e6007e/ffffff?text=HBC",
    address:
      "Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia",
    url: "https://hbc.edu/data",
    phone: "+93 700 000 001",
    campus: "HBC Main Campus, Negeri Sembilan Malaysia",
  },
];

export default function FindProgram() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [view, setView] = useState("map");
  const [mapMode, setMapMode] = useState("map");

  return (
    <>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main">
        <section className="banner">
          <div className="topbar">
            <div className="top-left">
              <div className="title-block">
                <div className="breadcrumb">
                  <i className="fa-solid fa-house"></i>{" "}
                  <span>/ Find Program</span>
                </div>
                <div className="page-title">Find Program</div>
              </div>
            </div>

            <div className="navbar-right">
              <div className="search-box">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Type here..." />
              </div>
              <button
                id="menuToggle"
                className="icon-btn"
                onClick={() => setSidebarOpen(true)}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
              <a href="/logout" id="logoutBtn">
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
              </a>
              <i className="fa-solid fa-gear icon-btn"></i>
              <i className="fa-solid fa-bell icon-btn"></i>
            </div>
          </div>

          <div className="banner-content">
            <h1>Find a Program</h1>
            <p>
              Search programs and schedule a session with instructors through
              the program
            </p>
            <div className="row">
              <input type="text" placeholder="Search" />
              <input type="text" placeholder="Campus or Department" />
            </div>
            <div className="row buttons-row">
              <button className="blue">CURRENT</button>
              <button className="blue">SEARCH</button>
            </div>
          </div>
        </section>

        <section className="results-section">
          <div className="tabs">
            <button
              className={`tab${view === "map" ? " active" : ""}`}
              onClick={() => setView("map")}
            >
              <i className="fa-solid fa-map"></i> Map
            </button>
            <button
              className={`tab${view === "list" ? " active" : ""}`}
              onClick={() => setView("list")}
            >
              <i className="fa-solid fa-list"></i> List
            </button>
          </div>

          <div className="results-layout">
            <aside className="filters">
              <input className="fi" type="text" placeholder="Program" />
              <input
                className="fi"
                type="text"
                placeholder="Campus or Department"
              />
              <h3>Filter By</h3>
              <select className="fi">
                <option>Program Type</option>
                <option>Web Development</option>
                <option>Data Analytics</option>
                <option>Digital Marketing</option>
              </select>
              <select className="fi">
                <option>Duration</option>
                <option>3 Months</option>
                <option>6 Months</option>
                <option>1 Year</option>
              </select>
              <select className="fi">
                <option>Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <h3>Available For</h3>
              <label className="check-item">
                <input type="checkbox" />
                <span>All Ages</span>
              </label>
              <label className="check-item">
                <input type="checkbox" />
                <span>Adults</span>
              </label>
              <h3>View Only</h3>
              <label className="check-item">
                <input type="checkbox" />
                <span>Online Classes</span>
              </label>
              <label className="check-item">
                <input type="checkbox" />
                <span>On Campus</span>
              </label>
            </aside>

            <div className="results-area">
              <div className="sort">
                <span>Sort By</span>
                <button className="pink small">NEXT AVAILABLE</button>
                <button className="pink small">DISTANCE</button>
              </div>

              {view === "map" && (
                <div className="map-view">
                  <div className="map-buttons">
                    <button
                      className={`map-button${
                        mapMode === "map" ? " active" : ""
                      }`}
                      onClick={() => setMapMode("map")}
                    >
                      Map
                    </button>
                    <button
                      className={`map-button${
                        mapMode === "satellite" ? " active" : ""
                      }`}
                      onClick={() => setMapMode("satellite")}
                    >
                      Satellite
                    </button>
                  </div>
                  <div className="fake-map">
                    <div className="water"></div>
                    <div className="map-road r1"></div>
                    <div className="map-road r2"></div>
                    <div className="map-road r3"></div>
                    <div className="map-road r4"></div>
                    <div className="map-road r5"></div>
                    <span className="map-place p1">HBC Main Campus</span>
                    <span className="map-place p2">Campus</span>
                    <span className="map-place p3">Main Building</span>
                    <i className="fa-solid fa-location-dot marker m1"></i>
                    <i className="fa-solid fa-location-dot marker m2"></i>
                    <i className="fa-solid fa-location-dot marker m3"></i>
                    <i className="fa-solid fa-location-dot marker m4"></i>
                    <strong className="map-center">HBC</strong>
                  </div>
                </div>
              )}

              {view === "list" && (
                <div className="list-view">
                  {programs.map((p) => (
                    <div className="location-card" key={p.name}>
                      <img src={p.img} alt={p.name} />
                      <div className="location-info">
                        <h3>{p.name}</h3>
                        <p>{p.address}</p>
                        <p>{p.url}</p>
                        <p>{p.phone}</p>
                        <p>{p.campus}</p>
                      </div>
                      <div className="location-actions">
                        <button className="loc-btn">
                          MORE ABOUT THIS PROGRAM
                        </button>
                        <button className="loc-btn">
                          FIND AN INSTRUCTOR AND SCHEDULE
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
