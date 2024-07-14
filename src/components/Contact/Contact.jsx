import './Contact.css'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import RightContent from '../RightContent/RightContent';
import Footer from '../Footer/Footer';
const Contact = () => {
    return (
        <div>
            <div className="papaContainer">
                <div className="leftContainer">
                    <div className="contact">
                        <h1 className='contactSectionHeading'>Contact Us</h1>
                        <div className="contactCard">
                            <div className="contactCardLeft">
                                <img src="https://www.poornima.org/uploads/team/1716886760.jpg" alt="" />
                                <div className="contactName">Dr. Nikita Jain</div>
                                <div className="contactDesignation">Program Chair</div>
                            </div>
                            <div className="contactCardRight">
                                {/* <p className='contact_CI1 contactborder'>Contact Information</p> */}
                                <p className='contact_mailphone contactborder'><MdEmail /> <a href="mailto:nikita.jain@poornima.org">nikita.jain@poornima.org</a></p>
                                <p className='contact_mailphone contactborder'><FaPhoneAlt /> <a href="tel:+919413069023">+91 9413069023</a></p>
                                <p className='contactborder'><span>Address:</span> ISI-6, RIICO Institutional Area, Sitapura, Jaipur-302022</p>
                                <p className='contactborder'><span>Conference Email:</span> <a href="mailto:conference@example.com">conference@example.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightContainer">
                    <RightContent />
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Contact