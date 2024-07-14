import RightContent from "../RightContent/RightContent";
import styles from "./Registration.module.css"
import Footer from "../Footer/Footer";
const Registration = () => {
    return (
        <>
            <div className="papaContainer">
            <div className="leftContainer">
            <div className ={styles.heading}>
                Registration Fees :
            </div>
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