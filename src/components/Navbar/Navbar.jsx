import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav id="mainav" className="clear navbar">
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
        <li><a href="Contact_us.html">Contact Us</a></li>
      </ul>
      {/* <form action="#">
        <select onChange={(e) => window.location = e.target.value}>
          <option value="">MENU</option>
          <option value="index.html">- Home</option>
          <option value="#">- Announcement</option>
          <option value="Call_for_Papers.html">- - Call for Papers</option>
          <option value="Author_Guidelines.html">- - Author Guidelines</option>
          <option value="Call_for_workshop.html">- - Call for Workshops</option>
          <option value="Call_for_tutorials.html">- - Call for Tutorials</option>
          <option value="Call_for_Sponsors.html">- - Call for Sponsorship</option>
          <option value="Important_Dates.html">- - Important Dates</option>
          <option value="#">- Organization</option>
          <option value="Steering_Committee.html">- - Steering Committee</option>
          <option value="Organization_Committee.html">- - Organizing Committee</option>
          <option value="Program_Committee.html">- - Program Committee</option>
          <option value="#">- Program/Registration</option>
          <option value="#">- - Agenda & Program</option>
          <option value="Registration.html">- - Registration</option>
          <option value="Registration_Policy.html">- - Registration Policy</option>
          <option value="#">- - Hotel Reservation</option>
          <option value="Keynotes.html">- - Keynotes & Invited Talks</option>
          <option value="#">- - Accepted Papers</option>
          <option value="#">- - Tutorials</option>
          <option value="#">- Workshops</option>
          <option value="Call_for_percaa_workshop.html">- - PerCAA 2019 Workshops</option>
          <option value="#">- Information</option>
          <option value="Venue_page.html">- - Venue</option>
          <option value="How_to_reach.html">- - How to Reach</option>
          <option value="local_attraction.html">- - Local Attraction</option>
          <option value="Contact_us.html">- Contact Us</option>
        </select>
      </form> */}
    </nav>
  );
};

export default Navbar;
