import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main">
        <header className="navbar">
          <div className="navbar-left">
            <button id="menuToggle" onClick={() => setSidebarOpen(true)}>
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className="title-block">
              <div className="breadcrumb">
                <i className="fa-solid fa-house"></i> / Dashboard
              </div>
              <div className="page-title">Dashboard</div>
            </div>
          </div>

          <div className="navbar-right">
            <div className="search-box">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Type here..." />
            </div>
            <a href="/logout" id="logoutBtn">
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
            </a>
            <i className="fa-solid fa-gear icon-btn"></i>
            <i className="fa-solid fa-bell icon-btn"></i>
          </div>
        </header>

        <main className="content">
          <h1>Welcome to HBC Admin Panel!</h1>

          <div className="cards-grid">
            <div className="card">
              <h3>
                <span className="icon-badge purple">
                  <i className="fa-solid fa-book"></i>
                </span>
                Popular Programs
              </h3>
              <div className="chart-row">
                <div className="donut"></div>
                <ul className="stat-list">
                  <li>
                    <i className="fa-solid fa-laptop-code icon-purple"></i> Web
                    Development <span className="val">19%</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-chart-simple icon-pink"></i> Data
                    Analytics <span className="val">4%</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-bullhorn icon-blue"></i> Digital
                    Marketing <span className="val">10%</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-robot icon-orange"></i> AI
                    Fundamentals <span className="val">21%</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-cart-shopping icon-green"></i>{" "}
                    E-Commerce <span className="val">2%</span>
                  </li>
                </ul>
              </div>
              <button className="more-btn">MORE DETAILS</button>
            </div>

            <div className="card">
              <h3>
                <span className="icon-badge pink">
                  <i className="fa-solid fa-user-graduate"></i>
                </span>
                Students by Program
              </h3>
              <div className="chart-row">
                <div className="donut"></div>
                <ul className="stat-list">
                  <li>
                    <i className="fa-solid fa-laptop-code icon-purple"></i> Web
                    Development <span className="val">32%</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-chart-simple icon-pink"></i> Data
                    Analytics <span className="val">18%</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-bullhorn icon-blue"></i> Digital
                    Marketing <span className="val">15%</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-robot icon-orange"></i> AI
                    Fundamentals <span className="val">25%</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-cart-shopping icon-green"></i>{" "}
                    E-Commerce <span className="val">10%</span>
                  </li>
                </ul>
              </div>
              <button className="more-btn">MORE DETAILS</button>
            </div>

            <div className="card">
              <h3>
                <span className="icon-badge blue">
                  <i className="fa-solid fa-mobile-screen"></i>
                </span>
                Smart Learning App Usage
              </h3>
              <div className="chart-row">
                <div className="donut"></div>
                <ul className="stat-list">
                  <li>
                    <i className="fa-brands fa-youtube icon-purple"></i> YouTube
                    Tutorials <span className="val">25%</span>
                  </li>
                  <li>
                    <i className="fa-brands fa-github icon-pink"></i> GitHub
                    Classroom <span className="val">15%</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-comments icon-blue"></i> HBC Chat
                    App <span className="val">60%</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h3>
                <span className="icon-badge green">
                  <i className="fa-solid fa-award"></i>
                </span>
                Program Completion Rate
              </h3>
              <div className="score">
                70% <span className="up">+3%</span>
              </div>
              <p className="score-note">Compared to last semester</p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
