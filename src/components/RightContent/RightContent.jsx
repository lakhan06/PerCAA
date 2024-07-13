import './RightContent.css'
import PULogo from '../../../public/logos/PULogo.png'
import Mnit_logo from '../../../public/logos/Mnit_logo.png'
import acmChapterLogo from '../../../public/logos/acmChapterLogo.png'
import IEE_logo from '../../../public/logos/IEE_logo.jpg'
import IGI_Global_logo from '../../../public/logos/IGI_Global_logo.png'
import computingJournel from '../../../public/logos/computingJournel.png'
import naturalComputing from '../../../public/logos/naturalComputing.png'


const RightContent = () => {
    const dates = [
        { event: "Last Date of Paper Submission", date: "February 14, 2024" },
        { event: "Acceptance Notification", date: "March 15, 2024" },
        { event: "Camera Ready Paper Submission", date: "April 15, 2024" },
        { event: "Last Date of Registration", date: "May 15, 2024" },
        { event: "Conference Date", date: "To Be Announced" },
    ];
    return (
        <div>
            <div className="rightContent">

                <div className="sectionHeading">Organized By</div>
                <div className="organizersLogos">
                    <img src={PULogo} alt="" />
                    <img src={Mnit_logo} alt="" />
                    <img src={acmChapterLogo} alt="" />
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
                    <img src={IEE_logo} alt="" />
                    <img src={IGI_Global_logo} alt="" />
                </div>

                <div className="sectionHeading smallSectionHeading">Selected Extended Post Conference Papers will be published in</div>
                <div className="conferencePapers">
                    <img src={computingJournel} alt="" />
                    <img src={naturalComputing} alt="" />
                </div>

                <div className="rredheadline">
                    All excepted paper will be published in Elsevier computer Science procedia.

                </div>

            </div>
        </div>
    )
}

export default RightContent