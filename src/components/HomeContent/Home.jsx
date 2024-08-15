import "./Home.css";
import RightContent from "../RightContent/RightContent";
import { useEffect, useState } from "react";
// import Crousal from '../topimagesSection/Crousal'
import Footer from "../Footer/Footer";
import NewCrousal from "../NewCrousal/NewCrousal";
import { IoMdClose } from "react-icons/io";
import { IconContext } from "react-icons";
function Home() {
  const [showPopUp , setShowPopUp] = useState(false);
  const closebuttonHandler = ()=>{
    setShowPopUp(!showPopUp)
  }
  useEffect(()=>{
    setTimeout(()=>{
      setShowPopUp(true);
    },300)
  } , [])
  return (
    <>
      {/* <Crousal></Crousal> */}
      <div className={`${showPopUp ? 'reducedOpacity' : ''}`}>
        <NewCrousal></NewCrousal>
      </div>
      <div className={`linkContainer ${showPopUp ? 'reducedOpacity' : ''}`}>
              <a href="https://cmt3.research.microsoft.com/PERCAA2024">Paper Submission Link : Please Click  Here To Submit Paper</a>
      </div>
      {
        showPopUp && (
          <div className={`popup_container ${showPopUp ? 'show' : ''}`}>
              <div className="top_heading_container">
                  <div className="top_heading_container_2">
                    <p className="percaa_pop">PerCAA 2024</p>
                    <div className="perca_top_sub">Important Links</div>
                  </div>
                  <div className="close_icon" onClick={closebuttonHandler}>
                    <IconContext.Provider value={{color:"blue" ,size:"30"}}>
                      <div className="close_icon">
                        <IoMdClose></IoMdClose>
                      </div>
                    </IconContext.Provider>
                  </div>
              </div>
              <div className="popup_content_container">
                <div className="popup_content">
                  <p><span>Note : </span>Submitted Papers will be published by the Institution of Engineering and Technology (IET) on IET Digital Library, indexed by IET Inspec and Standard paper of Conference will be submitted to the following books published under Bentham series.</p>
                </div>
                <div className="linkContainer_popup">
                    <a href="https://cmt3.research.microsoft.com/PERCAA2024"> Click  Here To Submit Paper</a>
                </div>
              </div>
          </div>
        )
      }
      <div className={`papaContainer ${showPopUp ? 'reducedOpacity' : ''}`}>
        <div className="leftContainer">
          <div className="homeContent">
            <div className="homeheading">ABOUT THE CONFERENCE</div>
            <div className="paracontent">
              <p>
                PerCAA-2024(Pervasive Computing Advances and Applications) aim is to unite scholars, scientists, and researchers, facilitating the exchange of their knowledge, expertise, and experiences concerning advancements in the field of computing, as well as sciences and communication technologies.
              </p>
              <p>
                The conference involve at all levels the leading academicians from India and abroad having expertise in Pervasive Computing Domain. Maintaining Quality of research and publications is the primary objective of the organizers. Dr. Sajal Das and Dr. Mohan Kumar are founder members of IEEE Conference on Pervasive Computing (PerCom) organizing since 2003. The advice and support from them has been sought for its planning and execution. The conference aims to create a leading interdisciplinary platform, fostering global connections among educators, researchers, and practitioners. Furthermore, it will facilitate the presentation and discussion of the latest innovations, trends, and issues in the relevant research areas.
              </p>
            </div>
          </div>
          <div className="homeContent">
            <div className="homeheading">ABOUT POORNIMA COLLEGE</div>
            <div className="paracontent">
              <p>
                Poornima College of Engineering, established in the year 2000 aims to impart pragmatic technical education at par with international standards. With innovation driven approach and a cosmopolitan based learning, we relentlessly  follow the pursuit of excellence. In our magnificent journey of Silver Jublee, we have set benchmarks and reached new pinnacles in engineering disciplines. Poornima College offers a pleasant and engaging environment to its students. The student's routine revolves around balanced amount of work, play, and leisure time activities. Moreover, the college curriculum is structured in an way, that it is both engaging and challenging. Project-based learning, problem-based learning, and the freedom to select the desired subject, enhances the student's participation in college activities.
              </p>
              <p>
                Furthermore, a weekly induction programme, mentor system, and close student-teacher relationship help to keep the students eager and motivated to study. The students' creative engagement is maintained throughout the year by organizing frequent technical, sports and cultural activities at departmental, intra-institutional, and inter-institutional levels. Last but not the least, Jaipur's pleasant climate, good food, transportation system, parks, and other amenities make a stay at the Poornima campus comfortable and advantageous for the overall development of the students.
              </p>
              <p>
              We have been awarded a prestigious NAAC A+ accreditation and enjoy autonomous status by the UGC. These accolades reflect our commitment to quality education and research. As we embark on these two days of insightful presentations, engaging discussions, and networking opportunities, let us embrace the spirit of innovation and sustainability that drives us all.
              </p>
            </div>
          </div>
        </div>
        
        <div className="rightContainer">
          <RightContent></RightContent>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
