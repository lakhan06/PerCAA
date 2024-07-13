import './Contact.css'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import RightContent from '../RightContent/RightContent';


const Contact = () => {
    return (
        <div>
            <div className="papaContainer">
                <div className="leftContainer">
                    <div className="contact">
                        <h1 className='contactSectionHeading'>Contact Us</h1>
                        <div className="contactCard">
                            <div className="contactCardLeft">
                                <img src="https://www.poornima.org/img/institute.png" alt="" />
                                <div className="contactName">Dr. Nikita Jain</div>
                                <div className="contactDesignation">Program Chair</div>
                            </div>
                            <div className="contactCardRight">
                                <p className='contact_CI1'>Contact Information</p>
                                <p className='contact_mailphone'><MdEmail /> <a href="mailto:nikita.jain@poornima.org">nikita.jain@poornima.org</a></p>
                                <p className='contact_mailphone'><FaPhoneAlt /> <a href="tel:+919413069023">+91 9413069023</a></p>
                                <p><span>Address:</span> ISI-6, RIICO Institutional Area, Sitapura, Jaipur-302022</p>
                                <p><span>Conference Email:</span> <a href="mailto:conference@example.com">conference@example.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightContainer">
                    <RightContent />
                </div>
            </div>
        </div>
    )
}

export default Contact