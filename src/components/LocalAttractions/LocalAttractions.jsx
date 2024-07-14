import data from "./data.json";
import RightContent from "../RightContent/RightContent";
import "./LocalAttractions.css";
import Footer from "../Footer/Footer";
const LocalAttractions = ()=>{
    return(
        <>
            <div className="papaContainer">
            <div className="leftContainer">
                <div className="attrations-container">
                    {
                        data.map((attraction,index) =>(
                            <div className="attractions-info">
                                <div className="attraction-heading">
                                    {attraction.name}
                                </div>
                                <div className="attraction-details">
                                    <div className="image-container">
                                        <img src={attraction.image} alt="" />
                                    </div>
                                    <div className="desc-container">
                                        {attraction.description} 
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="rightContainer">
                <RightContent/>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default LocalAttractions;