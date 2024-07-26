import './RightContent.css'
import ACM_Jaipur from '/logos/ACM_Jaipur.png'
import ACM_merrut from '/logos/ACM_merrut.png'
import Poornima_Logo_full from '/Assets/Poornima_Logo.jpg'
// import computingJournel from '/logos/computingJournel.png'
// import naturalComputing from '/logos/naturalComputing.png'
import IET_logo from '/logos/IET_logo.jpg'
import ACM_chapter from '/logos/ACM_chapter.png'
import Poornima_Logo from "/Assets/Poornima_Logo_logo.jpg"
const RightContent = () => {
    const dates = [
        { event: "Last Date of Paper Submission", date: "August 20, 2024" },
        { event: "Acceptance Notification", date: "August 31, 2024" },
        { event: "Camera Ready Paper Submission", date: "September 30, 2024" },
        { event: "Last Date of Registration", date: "October 10, 2024" },
        { event: "Conference Date", date: "October 18-19, 2024" },
    ];

    return (
        <div>
            <div className="rightContent">

                <div className="sectionHeading">Organized By</div>
                <div className="technicalSponsers">
                    {/* <img src={Poornima_Logo} alt="" /> */}
                    {/* <img src={Mnit_logo} alt="" /> */}
                    {/* <img src={ACM_Jaipur} alt="" /> */}
                    <img src={Poornima_Logo_full} alt="" />
                </div>

                <div className="sectionHeading">Important Dates</div>
                <table>
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dates.map((item, index) => (
                            <tr key={index}>
                                <td>{item.event}</td>
                                <td>{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="sectionHeading smallSectionHeading">Technically Sponsored by</div>
                <div className="technicalSponsers">
                    {/* <img src={Poornima_Logo_full} alt="" /> */}
                    {/* <img src={IET_logo} alt="" /> */}
                    <div className="smallLogosTechSponsers">
                        <img src={ACM_Jaipur} alt="" />
                        <img src={ACM_merrut} alt="" />
                    </div>
                    <img className='right_acm_chapterLogo' src={ACM_chapter} alt="" />
                </div>

                {/* <div className="sectionHeading smallSectionHeading">Selected Extended Post Conference Papers will be published in</div>
                <div className="conferencePapers">
                    <img src={computingJournel} alt="" />
                    <img src={naturalComputing} alt="" />
                </div>

                <div className="rredheadline">
                Selected papers will be published in Scopus
                indexed Springer Proceeding
                </div> */}

            </div>
        </div>
    )
}

export default RightContent