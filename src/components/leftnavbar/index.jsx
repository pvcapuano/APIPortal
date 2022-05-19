import React from "react";
import "./styles.css";

const LeftNavbar = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          <li>
            <a>
              <i class="fas fa-home"></i>Home
            </a>
          </li>
          <li>
            <a>
              <i class="fas fa-user"></i>Profile
            </a>
          </li>
          <li>
            <a>
              <i class="fas fa-address-card"></i>About
            </a>
          </li>
          <li>
            <a>
              <i class="fas fa-project-diagram"></i>Portfolio
            </a>
          </li>
          <li>
            <a>
              <i class="fas fa-blog"></i>Blogs
            </a>
          </li>
          <li>
            <a>
              <i class="fas fa-address-book"></i>Contact
            </a>
          </li>
          <li>
            <a>
              <i class="fas fa-map-pin"></i>Map
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNavbar;
