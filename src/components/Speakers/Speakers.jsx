import RightContent from "../RightContent/RightContent"
import styles from "./Speakers.module.css"
import data from "./data.json"
const Speakers = ()=>{
    return(
        <>
            <div className="papaContainer">
                <div className="leftContainer">
                <div className={styles.heading}>
                    Keynote Speakers : 
                </div>
                    <div className={styles.contianer_wrapper}>
                    <div className={styles.container}>
                        {
                            data.map((item , index)=>{
                                return(
                                    <div className={styles.card}>
                                        <img src={item.img} alt="" />
                                        <h2>{item.name}</h2>
                                        <p>{item.college}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    </div>
                </div>
                <div className="rightContainer">
                    <RightContent></RightContent>
                </div>
            </div>
        </>
    )
}

export default Speakers;