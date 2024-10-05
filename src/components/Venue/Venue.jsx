import RightContent from "../RightContent/RightContent"
import "./Venue.css";   
import Footer from "../Footer/Footer";
const Venue = () =>{
    return(
        <>
            <div className="papaContainer">
            <div className="leftContainer">
                <div className="details">
                    <img src="/TopCrousalIMages/poornima5.jpg" alt="" />
                    <div className="venue-details">
                        <div className="venue-heading">
                            Poornima College Of Enginering
                        </div>
                        <div className="venue-address">
                            ISI-6, RIICO Institutional Area, Sitapura, Jaipur, Rajasthan 302022
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightContainer">    
                <RightContent></RightContent>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Venue