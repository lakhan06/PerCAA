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
                        <h1 className='contactSectionHeading'>Contact Details for Correspondence / Query</h1>
                        <div className="contactCard">
                            <div className="contactCardDetails">
                                <p><span>Convener: </span>PERCAA -2024</p>
                                <p><span>E-mail: </span>percaa2024@poornima.org</p>
                                <p>
                                    <span>Contact Number(s): </span><br />
                                    <a href="tel:+919897257571">+91-9897257571</a>  
                                    <br className="break" />
                                    <a href="tel:+917318158178">+91-7318158178</a>
                                </p>
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