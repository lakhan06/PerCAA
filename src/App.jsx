import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProgramCommitee from './components/ProgramCommitee/ProgramCommitee'
import SteeringCommittee from './components/SteeringCommitee/SteeringCommitee'
import Registration from './components/Registration/Registration'
import Crousal from './components/topimagesSection/Crousal'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      <Contact />
      {/* <div>
    <Crousal></Crousal>
        <Routes>
          <Route path='/program-commitee' element={<ProgramCommitee/>}></Route>
          <Route path='/steering-commitee' element={<SteeringCommittee/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
        </Routes>
      </div> */}
    </>
  )
}

export default App