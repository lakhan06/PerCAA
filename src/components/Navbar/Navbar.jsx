import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="toggle-button" onClick={handleToggle}>
        {toggle ? <IoMdClose /> : <GiHamburgerMenu />}
      </div>
      <nav id="mainav" className={`navbar ${toggle ? "toggleActive" : ""}`}>
        <ul className="clear">
          <li className="active"><a href="index.html">Home</a></li>
          <li>
            <a href="#">Announcement</a>
            <ul>
              <li><a href="Call_for_Papers.html">Call for Papers</a></li>
              <li><a href="Author_Guidelines.html">Author Guidelines</a></li>
              <li><a href="Call_for_workshop.html">Call for Workshops</a></li>
              <li><a href="Call_for_tutorials.html">Call for Tutorials</a></li>
              <li><a href="Call_for_Sponsors.html">Call for Sponsorship</a></li>
              <li><a href="Important_Dates.html">Important Dates</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Organization</a>
            <ul>
              <li><a href="Steering_Committee.html">Steering Committee</a></li>
              <li><a href="Organization_Committee.html">Organizing Committee</a></li>
              <li><a href="Program_Committee.html">Program Committee</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Program/Registration</a>
            <ul>
              <li><a href="#">Agenda & Program</a></li>
              <li><a href="Registration.html">Registration</a></li>
              <li><a href="Registration_Policy.html">Registration Policy</a></li>
              <li><a href="#">Hotel Reservation</a></li>
              <li><a href="Keynotes.html">Keynotes & Invited Talks</a></li>
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
              <li><a href="Venue_page.html">Venue</a></li>
              <li><a href="How_to_reach.html">How to Reach</a></li>
              <li><a href="local_attraction.html">Local Attraction</a></li>
            </ul>
          </li>
          <li><a href="Contact_us.html">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
