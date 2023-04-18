import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="nav_link" to="/">
        Home
      </Link>
      <Link className="nav_link" to="/Projects">
        Projects
      </Link>
      <Link className="nav_link" to="/Contact">
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
