import React from "react";
import {Link} from "react-router-dom";

const Sidebar = ({ children, width }) => (
  <div
    className="h-100"
    style={{
      width:`${width}`,
      background: "white",
      boxShadow: "3px 0 3px rgba(0,0,0,.2)",
      position: "fixed",
      padding: "10px 24px",
      top:0
    }}
  >
    <Link to="/">
      <img src="/logo.png" className="d-block mx-auto w-75" />
    </Link>    
    {children}
  </div>
);

export default Sidebar;
