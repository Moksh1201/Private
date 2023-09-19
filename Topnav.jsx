import React from "react";
import "./index.css"; // Import your CSS file

function Bar() {
  return (
    <div className="nav">
      <div className="wrap1">
        <h4>Dev@Deakin</h4>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="nav-bar">
          <ul>
            <li>
              <a href="#">POST</a>
            </li>
            <li>
              <a href="#">LOGIN</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Bar;
