import data from "./data.json"
import "./styles.css"
const SteeringCommittee = ()=>{
    return(
        <div className={styles.main}>
            <div className={styles.wrapper}>
            <div className={styles.members_container}>
                {
                    data.map((member , index)=>(
                        <div>
                            <div className={styles.member_info_container}>
                                <img src={member.image} alt="" />
                                <div className={styles.member_info}>
                                <div className={styles.member_name}>
                                    {member.name}
                                </div>
                                <div>
                                {member.title ? `${member.title} ` : ''}{member.institution}, {member.country}
                                </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                        
                    ))
                }
            </div>
            </div>
        </div>
    )
}

export default SteeringCommittee