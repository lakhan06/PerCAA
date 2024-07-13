import data from "./data.json"
import "./styles.css"
const SteeringCommittee = ()=>{
    return(
        <div className="main">
            <div className="wrapper">
            <div className="members-container">
                {
                    data.map((member , index)=>(
                        <div>
                            <div className="member-info-container">
                                <img src={member.image} alt="" />
                                <div className="member-info">
                                <div className="member-name">
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