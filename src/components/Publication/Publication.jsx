import RightContent from "../RightContent/RightContent"
import styles from "./Publication.module.css"
const Publication = ()=>{
    return(
        <>
            <div className="papaContainer">
                <div className="leftContainer"></div>
                <div className="rightContainer">
                    <RightContent/>
                </div>
            </div>
        </>
    )
}

export default Publication