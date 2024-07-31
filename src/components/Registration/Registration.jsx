/* eslint-disable react/no-unknown-property */
import RightContent from "../RightContent/RightContent";
import styles from "./Registration.module.css"
import Footer from "../Footer/Footer";
const Registration = () => {

    const tableData = {
        categories: [
            "Regular author academician/industry person",
            "Regular author academician/industry person (IEEE/ACM)",
            "Regular author student (Ph.D./PG)",
            "Regular author student (Ph.D./PG) IEEE/ACM",
            "Attendee / Co-author",
        ],
        earlyBid: {
            national: ["₹8100", "₹7200", "₹6200", "₹5400", "60% of Respective Category"],
            international: ["$220", "$240", "$140", "$120", "60% of Respective Category"],
        },
        lateRegistration: {
            national: ["₹9100", "₹8100", "₹7200", "₹6300", "60% of Respective Category"],
            international: ["$330", "$300", "$240", "$150", "60% of Respective Category"],
        },
    };

    const { categories, earlyBid, lateRegistration } = tableData;


    return (
        <>
            <div className="papaContainer">
                <div className="leftContainer">
                    <div className={styles.heading}>
                        Registration Fees :
                    </div>
                    <div className="tableWrapper">
                        <table border="1" cellspacing="0" cellpadding="2" width="99%">
                            <thead>
                                <tr>
                                    <th width="20%" align="center"><b>Category</b></th>
                                    <th colspan="2" width="40%" align="center"><b>Early Bid</b></th>
                                    <th colspan="2" width="40%" align="center"><b>Late Registration</b></th>
                                </tr>
                                <tr>
                                    <td width="20%" align="center">&nbsp;</td>
                                    <td width="20%" align="center">National Authors (INR)</td>
                                    <td width="20%" align="center">International Authors ($)</td>
                                    <td width="20%" align="center">National Authors (INR)</td>
                                    <td width="20%" align="center">International Authors ($)</td>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category, index) => (
                                    <tr key={index}>
                                        <td align="center">{category}</td>
                                        <td align="center">{earlyBid.national[index]}</td>
                                        <td align="center">{earlyBid.international[index]}</td>
                                        <td align="center">{lateRegistration.national[index]}</td>
                                        <td align="center">{lateRegistration.international[index]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                    {/* <div className="tableWrapper">
                        <table border="1" cellspacing="0" cellpadding="2" width="99%">
                            <tr>
                                <td width="6%" align="center"><b>Registration Category</b></td>
                                <td colspan="2" width="9%" align="center"><b>Full Conference Package</b></td>
                                <td colspan="2" width="9%" align="center"><b>Main Conference</b></td>
                                <td colspan="2" width="9%" align="center"><b>Workshop</b></td>
                                <td colspan="2" width="11%" align="center"><b>Tutorial</b></td>
                            </tr>
                            <tr>
                                <td width="6%" align="center">&nbsp;</td>
                                <td width="4%" align="center">International ($)</td>
                                <td width="5%" align="center">Indian (INR)</td>
                                <td width="4%" align="center">International ($)</td>
                                <td width="4%" align="center">Indian (INR)</td>
                                <td width="4%" align="center">International ($)</td>
                                <td width="4%" align="center">Indian (INR)</td>
                                <td width="5%" align="center">International ($)</td>
                                <td width="5%" align="center">Indian (INR)</td>
                            </tr>
                            <tr>
                                <td align="center">ACM / SIG Member Early</td>
                                <td align="center">$600</td>
                                <td align="center">11000</td>
                                <td align="center">$400</td>
                                <td align="center">9000</td>
                                <td align="center">$300</td>
                                <td align="center">3500</td>
                                <td align="center">$225</td>
                                <td align="center">2500</td>
                            </tr>
                            <tr>
                                <td align="center">ACM / SIG Member Late / On-site</td>
                                <td align="center">$650</td>
                                <td align="center">12000</td>
                                <td align="center">$500</td>
                                <td align="center">10000</td>
                                <td align="center">$350</td>
                                <td align="center">4000</td>
                                <td align="center">$250</td>
                                <td align="center">3000</td>
                            </tr>
                            <tr>
                                <td align="center">Non-ACM/SIG Member Early</td>
                                <td align="center">$700</td>
                                <td align="center">14000</td>
                                <td align="center">$500</td>
                                <td align="center">10000</td>
                                <td align="center">$300</td>
                                <td align="center">8500</td>
                                <td align="center">$225</td>
                                <td align="center">2500</td>
                            </tr>
                            <tr>
                                <td align="center">Non-ACM/SIG Member Late / On-Site</td>
                                <td align="center">$750</td>
                                <td align="center">13000</td>
                                <td align="center">$550</td>
                                <td align="center">11000</td>
                                <td align="center">$350</td>
                                <td align="center">4000</td>
                                <td align="center">$250</td>
                                <td align="center">3000</td>
                            </tr>
                            <tr>
                                <td align="center">Student Early</td>
                                <td align="center">$400</td>
                                <td align="center">7000</td>
                                <td align="center">$300</td>
                                <td align="center">6000</td>
                                <td align="center">$200</td>
                                <td align="center">2500</td>
                                <td align="center">$125</td>
                                <td align="center">2000</td>
                            </tr>
                            <tr>
                                <td align="center">Student Late / On-site</td>
                                <td align="center">$450</td>
                                <td align="center">8000</td>
                                <td align="center">$350</td>
                                <td align="center">7000</td>
                                <td align="center">$250</td>
                                <td align="center">2000</td>
                                <td align="center">$150</td>
                                <td align="center">2500</td>
                            </tr>
                            <tr>
                                <td align="center">Attendees Faculty</td>
                                <td align="center">$300</td>
                                <td align="center">5000</td>
                                <td align="center">$150</td>
                                <td align="center">3000</td>
                                <td align="center">$100</td>
                                <td align="center">2000</td>
                                <td align="center">&nbsp; <b>N/A</b></td>
                                <td align="center">&nbsp; <b>N/A</b></td>
                            </tr>
                            <tr>
                                <td align="center">Attendees Students</td>
                                <td align="center">$150</td>
                                <td align="center">2500</td>
                                <td align="center">$75</td>
                                <td align="center">1500</td>
                                <td align="center">$50</td>
                                <td align="center">1000</td>
                                <td align="center">&nbsp; <b>N/A</b></td>
                                <td align="center">&nbsp; <b>N/A</b></td>
                            </tr>
                        </table>
                    </div> */}
                </div>
                <div className="rightContainer">
                    <RightContent></RightContent>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Registration;