import { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
// import IET_logo from '/logos/IET_logo.jpg'
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
          <li className="active"><Link onClick={handleToggle} to={"/"}>Home</Link></li>
          <li>
            <a to="#">Announcement</a>
            <ul>
              <li onClick={handleToggle}><Link to={'/callForPaper'}>Call for Papers</Link></li>
              <li onClick={handleToggle}><Link to={'/author-guidelines'}>Author Guidelines</Link></li>
              <li onClick={handleToggle}><Link to={'/important-dates'}>Important Dates</Link></li>
            </ul>
          </li>
          <li>
            <Link to={'/organizingcommittee'} onClick={handleToggle} >Organizing Committee</Link>
            {/* <ul>
              <li><Link onClick={handleToggle} to={'/steering-commitee'}>Steering Committee</Link></li>
              <li><Link onClick={handleToggle} to="Organization_Committee.html">Organizing Committee</Link></li>
              <li><Link onClick={handleToggle} to={'/program-commitee'}>Program Committee</Link></li>
            </ul> */}
          </li>
          <li>
            <a to="#">Program/Registration</a>
            <ul>
              {/* <li><a to="#">Agenda & Program</a></li> */}
              <li><Link onClick={handleToggle} to={'/registration'}>Registration</Link></li>
              {/* <li><Link to="Registration_Policy.html">Registration Policy</Link></li> */}
              {/* <li><Link to="#">Hotel Reservation</Link></li> */}
              <li><Link onClick={handleToggle} to={'/speakers'}>Keynotes & Invited Talks</Link></li>
              {/* <li><a to="#">Accepted Papers</a></li> */}
              {/* <li><a to="#">Tutorials</a></li> */}
            </ul>
          </li>
          {/* <li>
            <a to="#">Workshops</a>
            <ul>
              <li><a to="Call_for_percaa_workshop.html">PerCAA 2019 Workshops</a></li>onClick={handleToggle} 
            </ul>
          </li> */}
          <li>
            <a to="#">Information</a>
            <ul>
              <li><Link onClick={handleToggle} to={'/venue'}>Venue</Link></li>
              {/* <li><a to="How_to_reach.html">How to Reach</a></li> */}
              <li><Link onClick={handleToggle} to={'/local-attractions'}>Local Attraction</Link></li>
            </ul>
          </li>
          <li><Link onClick={handleToggle} to={'/contact'}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
