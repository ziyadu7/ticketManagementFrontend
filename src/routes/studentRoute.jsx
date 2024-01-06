import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Register from '../pages/student/register'
import StudentLogin from '../pages/student/studentLogin'
import TicketsPage from '../pages/student/ticketsPage'
import { useSelector } from 'react-redux'

function StudentRoute() {

    const { token } = useSelector(state => state.Student)
    return (
        <div>
            <Routes>
                <Route path='/register' element={token ? <Navigate to={'/'} /> : <Register />} />
                <Route path='/login' element={token ? <Navigate to={'/'} /> : <StudentLogin />} />
                <Route path='/' element={token ? <TicketsPage /> : <Navigate to={'/login'} />} />
                {/* <Route path='/*' element={<NotFound />} /> */}
            </Routes>
        </div>
    )
}

export default StudentRoute