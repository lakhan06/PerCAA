import RightContent from "../RightContent/RightContent"
import Footer from "../Footer/Footer"
import data from "./data.json"
import styles from "./LocalOrganizingCommittee.module.css"
import student from "./students.json"
const LocalOrganizingCommittee = ()=>{
    return(
        <>
            <div className="papaContainer">
                <div className="leftContainer">
                    <div className={styles.heading}>
                        Local Organizing Commitee : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                    <div className={styles.container}>
                        {
                            data.map((item , index)=>{
                                return(
                                    <div className={styles.card}>
                                        <h2>{item.name}</h2>
                                        <p className={styles.designation_title}>{item.designation}</p>
                                        <p>{item.institution}</p>
                                    </div>
                                )
                            })
                        }
                        {/* {
                            student.map((item , index) => {
                                return(
                                    <div className={styles.card}>
                                        <h2>{item.name}</h2>
                                        <p>{item.details}</p>
                                    </div>
                                )
                            })
                        } */}
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


export default LocalOrganizingCommittee