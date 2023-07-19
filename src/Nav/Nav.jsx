import React, { useState } from "react";

import "./Nav.css"; // Import your CSS file
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../Data/DataContext";

const Sidebar = () => {

  const{auth} = useContext(DataContext);
  
  const [showMenu, setShowMenu] = useState(false);

  const [sidebarClosed, setSidebarClosed] = useState(true);

  const handleArrowClick = () => {
    setShowMenu((prevState) => !prevState);
  };

  const handleSidebarClick = () => {
    setSidebarClosed((prevState) => !prevState);
  };

  return (
    <>
      {
        auth?<div className={`sidebar ${sidebarClosed ? "close" : ""}`}>
        <div className="logo-details">
          <i className="bx bx-menu" onClick={handleSidebarClick}></i>
        </div>

        
  
        <ul className="nav-links">
          <Link to="/">
              <li>
                <a>
                  <i className="bx bx-grid-alt"></i>
      
                  <span className="link_name">Dashboard</span>
                </a>
      
                <ul className={`sub-menu ${showMenu ? "" : "blank"}`}>
                  <li>
                    <a className="link_name">
                      Category
                    </a>
                  </li>
                </ul>
              </li>
          </Link>
          

          <Link to='/profile'> 
            <li>
              <a>
                <i className="bx bx-line-chart"></i>
    
                <span className="link_name">Chart</span>
              </a>
    
              <ul className={`sub-menu ${showMenu ? "" : "blank"}`}>
                <li>
                  <a className="link_name">
                    Chart
                  </a>
                </li>
              </ul>
            </li>
          </Link>
          
          {
            auth.role="Approver"?
            <Link>
              <li>
                <a>
                  <i className="bx bx-compass"></i>
                  <span className="link_name">Pending</span>
                </a>
      
                <ul className={`sub-menu ${showMenu ? "" : "blank"}`}>
                  <li>
                    <a className="link_name">
                      Pending
                    </a>
                  </li>
                </ul>
              </li>
            </Link>:<></>
           }

          {
            auth.role=="Admin"?
            <Link to="/users">  
            <li>
              <a>
                <i className="bx bx-history"></i>
    
                <span className="link_name">History</span>
              </a>
    
              <ul className={`sub-menu ${showMenu ? "" : "blank"}`}>
                <li>
                  <a className="link_name">
                    History
                  </a>
                </li>
              </ul>
            </li>
            </Link>:<></>
          }


          <Link to="/profile-edit">
            <li>
              <a>
                <i className="bx bx-cog"></i>
                  <span className="link_name"> Edit Profile</span>
                </a>
              <ul className={`sub-menu ${showMenu ? "" : "blank"}`}>
                <li>
                  <a className="link_name">
                    Setting
                  </a>
                </li>
              </ul>
            </li>
          </Link>
  
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
      </div>:<></>
      }

    </>
    
    
  );
};

export default Sidebar;
