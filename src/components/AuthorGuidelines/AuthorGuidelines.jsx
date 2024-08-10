import RightContent from "../RightContent/RightContent"
import "./AuthorGuidelines.css";
import Footer from "../Footer/Footer";
const AuthorGuidelines = ()=>{
    return(
        <>
            <div className="papaContainer">
                <div className="leftContainer">
                    <div className="author_guideline_heading">
                        Author Guidelines
                    </div>
                    <div className="doc_container">
                        <a href="public/docs/Schedule 3 Manuscript Preparation Guidelines (003) (002) (1).doc" download="Author Guidelines" className="doc_details" >Click Here To Download Author Guidelines</a>
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

export default AuthorGuidelines