import styles from "./OrganizingCommittee.module.css"
import RightContent from "../RightContent/RightContent"
import data from "./data.json"
import Footer from "../Footer/Footer"
const OrganizingCommittee = ()=>{
    return(
    <>
        <div className="papaContainer">
            <div className="leftContainer o-m-l">
                <div className={styles.heading}>
                    Organizing Commitee : 
                </div>
                <div className={styles.container}>
                    {
                        data.map((item , index)=>{
                            return(
                                <div className={styles.card}>
                                    <h2>{item.name}</h2>
                                    <p>{item.college}</p>
                                </div>
                            )
                        })
                    }
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


export default OrganizingCommittee