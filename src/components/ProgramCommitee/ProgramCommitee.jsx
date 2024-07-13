import data from "./data.json"
import styles from "./ProgramCommitee.module.css"
const ProgramCommitee = ()=>{    
    return(
        <div className={styles.main}>
            <div className={styles.wrapper}>
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
                            <div>
                            {member.title ? `${member.title} ` : ''}{member.institution}, {member.country}
                            </div>
                            <hr></hr>
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    )
}

export default ProgramCommitee;