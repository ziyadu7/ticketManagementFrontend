import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import AdminLogin from '../pages/admin/adminLogin'
import StudentList from '../pages/admin/studentList'
import Home from '../pages/admin/home'
import SubjectsPage from '../pages/admin/subjectsPage'
import NotFound from '../components/notFound'

function AdminRoute() {
  const {token} = useSelector(state=>state.Admin)
    return (
        <div>
            <Routes>
                <Route path='/login' element={token?<Navigate to={'/admin'}/>:<AdminLogin/>} />
                <Route path='/' element={token?<Home/>:<Navigate to={'/admin/login'}/>} />
                <Route path='/students' element={token?<StudentList/>:<Navigate to={'/admin/login'}/>} />
                <Route path='/subjects' element={token?<SubjectsPage/>:<Navigate to={'/admin/login'}/>} />
                <Route path='/*' element={<NotFound/>} />
            </Routes>
        </div>
    )
}

export default AdminRoute