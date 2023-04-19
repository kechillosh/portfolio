import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { SlHome } from "react-icons/sl";
import { SlBookOpen } from "react-icons/sl";
import { SlSpeech } from "react-icons/sl";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="nav_link" to="/">
        <SlHome /> Home
      </Link>
      <Link className="nav_link" to="/Projects">
        <SlBookOpen /> Projects
      </Link>
      <Link className="nav_link" to="/Contact">
        <SlSpeech /> Contact
      </Link>
    </div>
  );
}

export default Navbar;
