import data from "./data.json"
import styles from "./ProgramCommitee.module.css"
import RightContent from "../RightContent/RightContent"
const ProgramCommitee = ()=>{    
    return(
        <div className="papaContainer">
            <div className="leftContainer">
                <div className={styles.heading}>
                    Program Commitee : 
                </div>
                <div className={styles.member_container}>
                    {
                        
                        data.map((member , index)=>(
                            <div className={styles.member_info}>
                                <div className={styles.member_name}>
                                    {member.name}
                                </div>
                                <div className={styles.member_details}>
                                {member.title ? `${member.title} , ` : ''}  {member.institution} , {member.country}
                                </div>
                                <hr></hr>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="rightContainer">
                <RightContent/>
            </div>
        </div>
    )
}

export default ProgramCommitee;