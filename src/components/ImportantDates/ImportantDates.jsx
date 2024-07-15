import RightContent from "../RightContent/RightContent";
import "./ImportantDates.css";
import Footer from "../Footer/Footer";
const ImportantDates = ()=>{
    const dates = [
        { event: "Last Date of Paper Submission", date: "February 14, 2024" },
        { event: "Acceptance Notification", date: "March 15, 2024" },
        { event: "Camera Ready Paper Submission", date: "April 15, 2024" },
        { event: "Last Date of Registration", date: "May 15, 2024" },
        { event: "Conference Date", date: "To Be Announced" },
    ];
    return(
        <>
            <div className="papaContainer">
                <div className="leftContainer ">
                   <div className="table-container">
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
                                        <td><strong>{item.date}</strong></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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

export default ImportantDates