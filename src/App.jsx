import './App.css'
import { Routes , Route , useNavigate } from 'react-router-dom'
import ProgramCommitee from './components/ProgramCommitee/ProgramCommitee'
import SteeringCommittee from './components/SteeringCommitee/SteeringCommitee'
import Registration from './components/Registration/Registration'
import Crousal from './components/topimagesSection/Crousal'

function App() {
  return (
    <>
      <div>
    <Crousal></Crousal>
        <Routes>
          <Route path='/program-commitee' element={<ProgramCommitee/>}></Route>
          <Route path='/steering-commitee' element={<SteeringCommittee/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App