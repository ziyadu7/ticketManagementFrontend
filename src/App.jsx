import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import TicketsPage from './pages/ticketsPage'

function App() {

  return (
   <Router>
    <Routes>
      <Route path='/' element={<TicketsPage/>}/>
    </Routes>
   </Router>
  )
}

export default App
