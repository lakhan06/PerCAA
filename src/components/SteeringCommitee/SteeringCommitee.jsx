import RightContent from "../RightContent/RightContent"
import data from "./data.json"
import styles from "./SteeringCommitee.module.css"
const SteeringCommittee = ()=>{
    return(
        <div className="papaContainer">
            <div className="leftContainer">
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
                                    <div className={styles.member_details}>
                                        {member.title ? `${member.title} , ` : ''}  {member.institution} {member.country}
                                    </div>
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
    )
}

export default SteeringCommittee