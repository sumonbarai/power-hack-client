import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-area">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <p>Logo</p>
          </div>
          <div className="amount">
            <p>
              Paid total: <span>00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
