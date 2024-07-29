import './App.css'
import { Routes, Route} from 'react-router-dom'
// import ProgramCommitee from './components/ProgramCommitee/ProgramCommitee'
// import SteeringCommittee from './components/SteeringCommitee/SteeringCommitee'
import Registration from './components/Registration/Registration'
import Contact from './components/Contact/Contact'
import Home from './components/HomeContent/Home'
import Navbar from './components/Navbar/Navbar'
import CallForPapers from './components/CallForPapers/CallForPapers'
import TopComp from './components/topComp/TopComp'
import LocalAttractions from './components/LocalAttractions/LocalAttractions'
import Venue from './components/Venue/Venue'
import Speakers from './components/Speakers/Speakers'
import AuthorGuidelines from './components/AuthorGuidelines/AuthorGuidelines'
import ImportantDates from './components/ImportantDates/ImportantDates'
import OrganizingCommittee from './components/OrganizingCommittee/OrganizingCommittee'
function App() {
  return (
    <>
    <TopComp/>
    <Navbar></Navbar>
      <div>
        <Routes>
          <Route path='/PerCAA-2024/' element={<Home/>}></Route>
          <Route path='/PerCAA-2024/contact' element={<Contact />}></Route>
          <Route path='/PerCAA-2024/registration' element={<Registration/>}></Route>
          <Route path='/PerCAA-2024/contact' element={<Contact />}></Route>
          <Route path='/PerCAA-2024/local-attractions' element={<LocalAttractions/>}></Route>
          <Route path='/PerCAA-2024/venue' element={<Venue></Venue>}></Route>
          <Route path='/PerCAA-2024/speakers' element={<Speakers/>}></Route>
          <Route path='/PerCAA-2024/callForPaper' element={<CallForPapers/>}></Route>
          <Route path='/PerCAA-2024/author-guidelines' element={<AuthorGuidelines/>}></Route>
          <Route path='/PerCAA-2024/important-dates' element={<ImportantDates/>}></Route>
          <Route path='/PerCAA-2024/speakers' element={<Speakers/>}></Route>
          <Route path='/PerCAA-2024/organizingcommittee' element={<OrganizingCommittee/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App