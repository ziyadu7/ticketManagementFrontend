import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from '../pages/student/register'
import StudentLogin from '../pages/student/studentLogin'

function StudentRoute() {
    return (
        <div>
            <Routes>
                <Route path='/register' element={<Register/>} />
                <Route path='/login' element={<StudentLogin/>} />
                {/* <Route path='/*' element={<NotFound />} /> */}
            </Routes>
        </div>
    )
}

export default StudentRoute