import React from "react";
import "./Home.css";
import RightContent from "../RightContent/RightContent";

function Home() {
  return (
    <div className="papaContainer">
      <div className="leftContainer">
        <div className="homeContent">
          <div className="homeheading">ABOUT THE CONFERENCE</div>
          <div className="paracontent">
            <p>
              PerCAA-2024 Pervasive Computing Advances and Applications aim is
              to unite scholars, scientists, and researchers, facilitating the
              exchange of their knowledge, expertise, and experiences concerning
              advancements in the field of computing, as well as sciences and
              communication technologies.
            </p>
            <p>
              The conference involve at all levels the leading academicians from
              India and abroad having expertise in Pervasive Computing Domain
              Maintaining Quality of research and publications is the primary
              objective of the organizers. Dr. Sajal Das and Dr. Mohan Kumar are
              founder members of IEEE Conference on Pervasive Computing PerCom
              organizing since 2003. The advice and support from them has been
              sought for its planning and execution. The conference aims to
              create a leading interdisciplinary platform, fostering global
              connections among educators, researchers, and practitioners.
              Furthermore, it will facilitate the presentation and discussion of
              the latest innovations, trends, and issues in the relevant
              research areas.
            </p>
          </div>
        </div>
        <div className="homeContent">
          <div className="homeheading">ABOUT POORNIMA COLLEGE</div>
          <div className="paracontent">
            <p>
              Poornima College of Engineering, established in the year 2000 aims
              to impart pragmatic technical education at par with international
              standards. With innovation driven approach and a cosmopolitan
              based learning, we relentlessly follow the pursuit of excellence.
              In our magnificent journey of 2 decades, we have set benchmarks
              and reached new pinnacles in engineering disciplines. Poornima
              College offers a pleasant and engaging environment to its
              students. The student's routine revolves around balanced amount of
              work, play, and leisure time activities. Moreover, the college
              curriculum is structured in an way, that it is both engaging and
              challenging. Project-based learning, problem-based learning, and
              the freedom to select the desired subject, enhances the student's
              participation in college activities
            </p>
            <p>
              Furthermore, a weekly induction programme, mentor system, and
              close student-teacher relationship help to keep the students eager
              and motivated to study. The students' creative engagement is
              maintained throughout the year by organizing frequent technical,
              sports and cultural activities at departmental,
              intra-institutional, and inter-institutional levels. Last but not
              the least, Jaipur's pleasant climate, good food, transportation
              system, parks, and other amenities make a stay at the Poornima
              campus comfortable and advantageous for the overall development of
              the students
            </p>
          </div>
        </div>
      </div>
      <div className="rightContainer">
        <RightContent></RightContent>
      </div>
    </div>
  );
}

export default Home;
