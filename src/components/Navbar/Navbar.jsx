import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="toggle-button" onClick={handleToggle}>
        {toggle ? <IoMdClose className="cross"/> : <GiHamburgerMenu />}
      </div>
      <nav id="mainav" className={`navbar ${toggle ? "toggleActive" : ""}`}>
        <ul className="clear">
          <li className="active"><Link to={"/"}>Home</Link></li>
          <li>
            <a to="#">Announcement</a>
            <ul>
              <li><Link to={'/callForPaper'}>Call for Papers</Link></li>
              <li><Link to={'/author-guidelines'}>Author Guidelines</Link></li>
              <li><Link to={'/important-dates'}>Important Dates</Link></li>
            </ul>
          </li>
          <li>
            <a to="#">Organization</a>
            <ul>
              <li><Link to={'/steering-commitee'}>Steering Committee</Link></li>
              <li><Link to="Organization_Committee.html">Organizing Committee</Link></li>
              <li><Link to={'/program-commitee'}>Program Committee</Link></li>
            </ul>
          </li>
          <li>
            <a to="#">Program/Registration</a>
            <ul>
              <li><a to="#">Agenda & Program</a></li>
              <li><Link to={'/registration'}>Registration</Link></li>
              <li><Link to="Registration_Policy.html">Registration Policy</Link></li>
              <li><Link to="#">Hotel Reservation</Link></li>
              <li><Link to={'/speakers'}>Keynotes & Invited Talks</Link></li>
              <li><a to="#">Accepted Papers</a></li>
              <li><a to="#">Tutorials</a></li>
            </ul>
          </li>
          <li>
            <a to="#">Workshops</a>
            <ul>
              <li><a to="Call_for_percaa_workshop.html">PerCAA 2019 Workshops</a></li>
            </ul>
          </li>
          <li>
            <a to="#">Information</a>
            <ul>
              <li><Link to={'/venue'}>Venue</Link></li>
              <li><a to="How_to_reach.html">How to Reach</a></li>
              <li><Link to={'/local-attractions'}>Local Attraction</Link></li>
            </ul>
          </li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
