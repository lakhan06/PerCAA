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
                        <div className="container_wrapper">
                        <div className="container">
                            <div className="card-contact">
                                <h2>Dr. Nikita Jain</h2>
                                <p style={{fontWeight:"bold" , fontSize:".8rem"}}>Organizing Chair</p>
                                <p style={{fontWeight:"bold" , fontSize:".8rem" , marginTop:"10px"}}>Contact : +91 9413069023</p>
                                <p style={{fontWeight:"bold" , fontSize:".8rem" , marginTop:"10px"}}>Email : percaa2024@poornima.org</p>
                            </div>
                            <div className="card-contact">
                                <h2>Dr. Abhishek Sharma</h2>
                                <p style={{fontWeight:"bold" , fontSize:".8rem"}}>Convenor</p>
                                <p style={{fontWeight:"bold" , fontSize:".8rem" , marginTop:"10px"}}>Contact : +91 9897257571</p>
                                <p style={{fontWeight:"bold" , fontSize:".8rem" , marginTop:"10px"}}>Email : percaa2024@poornima.org</p>
                            </div>
                            <div className="card-contact">
                                <h2>Ms. Sonam Gaur</h2>
                                <p style={{fontWeight:"bold" , fontSize:".8rem"}}>Co Convenor</p>
                                <p style={{fontWeight:"bold" , fontSize:".8rem" , marginTop:"10px"}}>Contact : +91 9509885411</p>
                                <p style={{fontWeight:"bold" , fontSize:".8rem" , marginTop:"10px"}}>Email : percaa2024@poornima.org</p>

                            </div>
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