import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import StudentRoute from './routes/studentRoute'
import AdminRoute from './routes/adminRoute'

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/admin/*' element={<AdminRoute/>}/>
      <Route path='/*' element={<StudentRoute/>}/>
    </Routes>
   </Router>
  )
}

export default App
