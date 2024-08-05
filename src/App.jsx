import './App.css'
import { Routes, Route} from 'react-router-dom'
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
import TechnicalCommittee from './components/TechnicalCommittee/TechnicalCommittee'
import LocalOrganizingCommittee from './components/LocalOrganizingCommittee/LocalOrganizingCommittee'
import OrganizingCommittee from './components/OrganizingCommittee/OrganizingCommittee'
import Publication from './components/Publication/Publication'
function App() {
  return (
    <>
    <TopComp/>
    <Navbar></Navbar>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/local-attractions' element={<LocalAttractions/>}></Route>
          <Route path='/venue' element={<Venue></Venue>}></Route>
          <Route path='/speakers' element={<Speakers/>}></Route>
          <Route path='/callForPaper' element={<CallForPapers/>}></Route>
          <Route path='/author-guidelines' element={<AuthorGuidelines/>}></Route>
          <Route path='/important-dates' element={<ImportantDates/>}></Route>
          <Route path='/speakers' element={<Speakers/>}></Route>
          <Route path='/technical-committee' element={<TechnicalCommittee/>}></Route>
          <Route path='/local-organizing-comittee' element= {<LocalOrganizingCommittee></LocalOrganizingCommittee>}></Route>
          <Route path='/organizing-committee' element={<OrganizingCommittee/>}></Route>
          <Route path='/publication' element={<Publication/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App