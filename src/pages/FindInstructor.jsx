import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/dashboard.css";
import "../styles/find.css";

export default function FindInstructor() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [view, setView] = useState("map"); // "map" | "list"
  const [mapMode, setMapMode] = useState("map"); // "map" | "satellite"

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
                  <span>/ Find Instructor</span>
                </div>
                <div className="page-title">Find Instructor</div>
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
            <h1>Find an Instructor</h1>
            <p>Search instructors and schedule a consultation</p>
            <div className="row">
              <input type="text" placeholder="Search by name or subject" />
              <input type="text" placeholder="Campus or Department" />
            </div>
            <div className="row buttons-row">
              <button className="blue" onClick={() => setShowResults(true)}>
                CURRENT
              </button>
              <button className="pink" onClick={() => setShowResults(true)}>
                SEARCH
              </button>
            </div>
          </div>
        </section>

        {!showResults && (
          <div id="homeContent">
            <section className="home-card special-services">
              <h2>Special Services</h2>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon heart-icon">
                    <i className="fa-solid fa-heart-pulse"></i>
                  </div>
                  <div className="service-text">
                    <h3>Instructor Consultation</h3>
                    <p>
                      Talk with our instructors to help you achieve your
                      learning goals
                    </p>
                  </div>
                  <i className="fa-solid fa-chevron-down service-arrow"></i>
                </div>

                <div className="service-card">
                  <div className="service-icon">
                    <i className="fa-solid fa-chalkboard-user"></i>
                  </div>
                  <div className="service-text">
                    <h3>Academic Support</h3>
                    <p>We provide academic support for students and learners</p>
                  </div>
                  <i className="fa-solid fa-chevron-down service-arrow"></i>
                </div>

                <div className="service-card">
                  <div className="service-icon orange">
                    <i className="fa-solid fa-book-open"></i>
                  </div>
                  <div className="service-text">
                    <h3>Learning Services</h3>
                    <p>From courses to training we offer learning services</p>
                  </div>
                  <i className="fa-solid fa-chevron-down service-arrow"></i>
                </div>

                <div className="service-card">
                  <div className="service-icon red">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <div className="service-text">
                    <h3>Urgent Support</h3>
                    <p>We offer urgent support for important academic needs</p>
                  </div>
                  <i className="fa-solid fa-chevron-down service-arrow"></i>
                </div>
              </div>
            </section>

            <section className="home-card specialty-section">
              <h2>Find Instructors By Specialty</h2>
              <p className="specialty-description">
                Select a Specialty to View All Instructors and schedule an
                Appointment
              </p>
              <div className="specialty-grid">
                {[
                  "Anesthesiology",
                  "Dermatology",
                  "Emergency Medicine",
                  "Neurology",
                  "Consultation",
                  "Ophthalmology",
                ].map((s) => (
                  <button className="specialty-item" key={s}>
                    <span>{s}</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}

        {showResults && (
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
                <input className="fi" type="text" placeholder="Subject" />
                <input
                  className="fi"
                  type="text"
                  placeholder="Campus or Department"
                />
                <h3>Filter By</h3>
                <select className="fi">
                  <option>Subject</option>
                  <option>Web Development</option>
                  <option>Data Analytics</option>
                  <option>Programming</option>
                </select>
                <select className="fi">
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <select className="fi">
                  <option>Experience Level</option>
                  <option>Junior</option>
                  <option>Intermediate</option>
                  <option>Senior</option>
                </select>
                <select className="fi">
                  <option>Languages</option>
                  <option>English</option>
                  <option>Dari</option>
                  <option>Pashto</option>
                </select>
                <h3>Instructors Who Teach</h3>
                <label className="check-item">
                  <input type="checkbox" />
                  <span>All Programs</span>
                </label>
                <label className="check-item">
                  <input type="checkbox" />
                  <span>Online Classes</span>
                </label>
                <label className="check-item">
                  <input type="checkbox" />
                  <span>On Campus</span>
                </label>
                <h3>View Only</h3>
                <label className="check-item">
                  <input type="checkbox" />
                  <span>Available Consultation</span>
                </label>
                <label className="check-item">
                  <input type="checkbox" />
                  <span>HBC Main Campus</span>
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
                    <div className="instructor-card">
                      <img
                        src="https://ui-avatars.com/api/?name=Sara+Karimi&background=8a2be2&color=fff&size=100"
                        alt="Sara Karimi"
                      />
                      <div className="instructor-info">
                        <h3>Sara Karimi</h3>
                        <p>Web Development Instructor</p>
                        <p>Visiting Instructor</p>
                        <p>HBC Main Campus, Room 204</p>
                        <p>sara.karimi@hbc.edu</p>
                        <p>+93 700 000 000</p>
                        <p>English, Dari</p>
                        <button className="pink small">
                          NEXT AVAILABLE: TUESDAY, MARCH 22
                        </button>
                      </div>
                    </div>

                    <div className="instructor-card">
                      <img
                        src="https://ui-avatars.com/api/?name=Omid+Rahimi&background=e6007e&color=fff&size=100"
                        alt="Omid Rahimi"
                      />
                      <div className="instructor-info">
                        <h3>Omid Rahimi</h3>
                        <p>Data Analytics Instructor</p>
                        <p>Visiting Instructor</p>
                        <p>HBC Main Campus, Room 108</p>
                        <p>omid.rahimi@hbc.edu</p>
                        <p>+93 700 000 001</p>
                        <p>English, Dari</p>
                        <button className="pink small">
                          NEXT AVAILABLE: TUESDAY, MARCH 22
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
}
