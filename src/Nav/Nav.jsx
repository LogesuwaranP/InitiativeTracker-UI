import React, { useState } from "react";

import "./Nav.css"; // Import your CSS file
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [sidebarClosed, setSidebarClosed] = useState(true);

  const handleArrowClick = () => {
    setShowMenu((prevState) => !prevState);
  };

  const handleSidebarClick = () => {
    setSidebarClosed((prevState) => !prevState);
  };

  return (
    <div className={`sidebar ${sidebarClosed ? "close" : ""}`}>
      <div className="logo-details">
        <i className="bx bx-menu" onClick={handleSidebarClick}></i>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#">
            <i className="bx bx-grid-alt"></i>

            <span className="link_name">Dashboard</span>
          </a>

          <ul className={`sub-menu ${showMenu ? "" : "blank"}`}>
            <li>
              <a className="link_name" href="#">
                Category
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#">
            <i className="bx bx-line-chart"></i>

            <span className="link_name">Chart</span>
          </a>

          <ul className={`sub-menu ${showMenu ? "" : "blank"}`}>
            <li>
              <a className="link_name" href="#">
                Chart
              </a>
            </li>
          </ul>
        </li>
        

        <li>
          <a href="#">
            <i className="bx bx-compass"></i>
            <span className="link_name">Explore</span>
          </a>

          <ul className={`sub-menu ${showMenu ? "" : "blank"}`}>
            <li>
              <a className="link_name" href="#">
                Explore
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#">
            <i className="bx bx-history"></i>

            <span className="link_name">History</span>
          </a>

          <ul className={`sub-menu ${showMenu ? "" : "blank"}`}>
            <li>
              <a className="link_name" href="#">
                History
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#">
            <i className="bx bx-cog"></i>

            <span className="link_name">Setting</span>
          </a>

          <ul className={`sub-menu ${showMenu ? "" : "blank"}`}>
            <li>
              <a className="link_name" href="#">
                Setting
              </a>
            </li>
          </ul>
        </li>

        <Link to='/profile-edit' >        
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img src="image/profile.jpg" alt="profileImg" />
              </div>
              <div className="name-job">
                <div className="profile_name">Treaker</div>
                <div className="job">Team</div>
              </div>
              <i className="bx bx-log-out"></i>
            </div>
          </li>
        </Link>

      </ul>
    </div>
  );
};

export default Sidebar;
