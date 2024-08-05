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
                        <ul className={styles.list}>
                            <li><a href="https://cmt3.research.microsoft.com/PERCAA2024" className={styles.list_item}>Paper Submission Link</a></li>
                            <li><a href="/docs/RegistrationForm.pdf" download="Registraion Form" className={styles.list_item}>Registration Form</a></li>
                        </ul>
                    </div>
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