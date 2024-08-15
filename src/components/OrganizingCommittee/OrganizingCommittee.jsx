import styles from "./OrganizingCommittee.module.css"
import data from "./data.json"
import Footer from "../Footer/Footer"
import RightContent from "../RightContent/RightContent"
const OrganizingCommittee =  ()=>{
    return(
        <>
            <div className="papaContainer">
                <div className="leftContainer">
                    <div className={styles.heading}>
                        General Chair : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                    <div className={styles.container}>
                        {
                            data.GeneralChair.map((item , index)=>{
                                return(
                                    <div className={styles.card}>
                                        {
                                            item.img &&(
                                                <img src={item.img}/>
                                            )
                                        }
                                        <h2>{item.name}</h2>
                                        <p className={styles.designation_title}>{item.title}</p>
                                        <p>{item.institution} , {item.location}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    </div>
                    <div className={styles.heading}>
                        General Co Chair : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.GeneralCoChair.map((item , index)=>{
                                    return(
                                        <div className={styles.card}>
                                            <img src={item.img}></img>
                                            <h2>{item.name}</h2>
                                            <p className={styles.designation_title}>{item.title}</p>
                                            <p>{item.institution} , {item.location}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.heading}>
                        Organizing Chair : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.OrganizingChair.map((item , index)=>{
                                    return(
                                        <div className={styles.card}>
                                            <img src={item.img}></img>
                                            <h2>{item.name}</h2>
                                            <p className={styles.designation_title}>{item.title}</p>
                                            <p>{item.institution} , {item.location}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.heading}>
                        Convenor : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.Convenor.map((item , index)=>{
                                    return(
                                        <div className={styles.card}>
                                            <img src={item.img}></img>
                                            <h2>{item.name}</h2>
                                            <p className={styles.designation_title}>{item.title}</p>
                                            <p>{item.institution} , {item.location}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.heading}>
                        Co Convenor : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.CoConvenor.map((item , index)=>{
                                    return(
                                        <div className={styles.card}>
                                            <img src={item.img}></img>
                                            <h2>{item.name}</h2>
                                            <p className={styles.designation_title}>{item.title}</p>
                                            <p>{item.institution} , {item.location}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.heading}>
                        Track Chair : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.TrackChair.map((item , index)=>{
                                    return(
                                        <div className={styles.card}>
                                            <img src={item.img}></img>
                                            <h2>{item.name}</h2>
                                            <p className={styles.designation_title}>{item.title}</p>
                                            <p>{item.institution} , {item.location}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div><div className={styles.heading}>
                        Publicity Chair : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.PublicityChair.map((item , index)=>{
                                    return(
                                        <div className={styles.card}>
                                            <img src={item.img}></img>
                                            <h2>{item.name}</h2>
                                            <p className={styles.designation_title}>{item.title}</p>
                                            <p>{item.institution} , {item.location}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.heading}>
                        Web Team : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.WebTeam.map((item , index)=>{
                                    return(
                                        <div className={styles.card}>
                                            {
                                                item.img &&(
                                                    <img src={item.img}/>
                                                )
                                            }
                                            <h2>{item.name}</h2>
                                            <p>{item.details}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.WebTeamStudents.map((item , index)=>{
                                    return(
                                        <div className={styles.card}>
                                            <h2>{item.name}</h2>
                                            <p>{item.details}</p>
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

export default OrganizingCommittee
