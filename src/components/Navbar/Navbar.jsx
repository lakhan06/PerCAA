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
            <a href="#">Announcement</a>
            <ul>
              <li><Link to={'/callForPaper'}>Call for Papers</Link></li>
              <li><Link to={'/author-guidelines'}>Author Guidelines</Link></li>
              <li><Link to={'/important-dates'}>Important Dates</Link></li>
            </ul>
          </li>
          <li>
            <a href="#">Organization</a>
            <ul>
              <li><a href={'/steering-commitee'}>Steering Committee</a></li>
              <li><a href="Organization_Committee.html">Organizing Committee</a></li>
              <li><a href={'/program-commitee'}>Program Committee</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Program/Registration</a>
            <ul>
              <li><a href="#">Agenda & Program</a></li>
              <li><a href={'/registration'}>Registration</a></li>
              <li><a href="Registration_Policy.html">Registration Policy</a></li>
              <li><a href="#">Hotel Reservation</a></li>
              <li><a href={'/speakers'}>Keynotes & Invited Talks</a></li>
              <li><a href="#">Accepted Papers</a></li>
              <li><a href="#">Tutorials</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Workshops</a>
            <ul>
              <li><a href="Call_for_percaa_workshop.html">PerCAA 2019 Workshops</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Information</a>
            <ul>
              <li><a href={'/venue'}>Venue</a></li>
              <li><a href="How_to_reach.html">How to Reach</a></li>
              <li><a href={'/local-attractions'}>Local Attraction</a></li>
            </ul>
          </li>
          <li><a href={'/contact'}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
