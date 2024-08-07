import RightContent from "../RightContent/RightContent"
import styles from "./Publication.module.css"
import IET_logo from '/logos/IET_logo.png'
import Bentham_logo from '/logos/Bentham_logo.png'
const Publication = () => {
    return (
        <>
            <div className="papaContainer">
                <div className="leftContainer">
                    <div>
                        <div className={styles.heading}>IET</div>
                        <div className={styles.publicationData}>

                            <div className={styles.data}>
                                The confernece proceeding will be published by the Institution of Engineering and Technology (IET) on IET Digital Library, indexed by IET Inspec . The IET Digital Library holds more than 190,000 technical papers from 1994 onwards for all IET journals, magazines, books, conference publications and seminar digests, the IET&apos;s member magazine Engineering & Technology, plus seminar digests and conference publications.
                            </div>
                            <img className={styles.IET_logo} src={IET_logo} alt="" />
                        </div>

                    </div>
                    <div>
                        <div className={`${styles.heading}`}>Bentham</div>

                        <div className={styles.publicationData}>
                            <div className={`${styles.data} ${styles.customM}`}>
                                Selected papers will be published in Bentham Book Series. Bentham Books is a comprehensive program, which covers a broad range of disciplines featuring the following : Variety of Books such as monographs, handbooks, proceedings, textbooks, review volumes.
                            </div>
                            <img className={styles.Bentham_logo} src={Bentham_logo} alt="" />

                        </div>



                    </div>
                    <div className={styles.books_container}>
                        <div className={styles.book_card}>
                            <p className={styles.book_card_heading}>Pervasive and Ubiquitous Computing: Innovations and Challenges</p>
                            <p className={styles.updated_soon_text}>Will Be Updated Soon</p>
                        </div>
                        <div className={styles.book_card}>
                            <p className={styles.book_card_heading}>Mobile Communication Systems: A Comprehensive Guide to Networking</p>
                            <p className={styles.updated_soon_text}>Will Be Updated Soon</p>
                        </div>
                    </div>
                </div>
                <div className="rightContainer">
                    <RightContent />
                </div>
            </div>
        </>
    )
}

export default Publication