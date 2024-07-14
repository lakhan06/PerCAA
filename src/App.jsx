import './App.css'
import { Routes, Route} from 'react-router-dom'
import ProgramCommitee from './components/ProgramCommitee/ProgramCommitee'
import SteeringCommittee from './components/SteeringCommitee/SteeringCommitee'
import Registration from './components/Registration/Registration'
// import Crousal from './components/topimagesSection/Crousal'
import Contact from './components/Contact/Contact'
import Home from './components/HomeContent/Home'
import Navbar from './components/Navbar/Navbar'
import CallForPapers from './components/CallForPapers/CallForPapers'
import TopComp from './components/topComp/TopComp'
import LocalAttractions from './components/LocalAttractions/LocalAttractions'

function App() {
  return (
    <>
    <TopComp/>
    <Navbar></Navbar>
      <div>
        <Routes>
          <Route path='/program-commitee' element={<ProgramCommitee/>}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/steering-commitee' element={<SteeringCommittee/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App