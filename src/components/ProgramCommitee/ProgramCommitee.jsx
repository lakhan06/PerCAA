import data from "./data.json"
import "./ProgramCommitee.css"
const ProgramCommitee = ()=>{    
    return(
        <div className="main">
            <div className="wrapper">
            <div className="heading">
                Program Commitee : 
            </div>
            <div className="member-container">
                {
                    
                    data.map((member , index)=>(
                        <div className="member-info">
                            <div className="member-name">
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