import RightContent from "../RightContent/RightContent"
import styles from "./Speakers.module.css"
import data from "./data.json"
import Footer from "../Footer/Footer"
const Speakers = ()=>{
    return(
        <>
            <div className="papaContainer">
                <div className="leftContainer">
                <div className={styles.heading}>
                    Keynotes & Session Chairs : 
                </div>
                    <div className={styles.contianer_wrapper}>
                    <div className={styles.container}>
                        {
                            data.map((item , index)=>{
                                return(
                                    <div className={styles.card}>
                                        {
                                            item.img &&(
                                                <img src={item.img} alt="" />
                                            )
                                        }
                                        <h2>{item.name}</h2>
                                        <div className={styles.info}>
                                            <p>{item.title}</p>
                                            <p>{item.institution}</p>
                                            <p>{item.location}</p>
                                        </div>
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
            <Footer></Footer>
        </>
    )
}

export default Speakers;