import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from '../pages/student/register'

function StudentRoute() {
    return (
        <div>
            <Routes>
                <Route path='/register' element={<Register />} />
                {/* <Route path='/*' element={<NotFound />} /> */}
            </Routes>
        </div>
    )
}

export default StudentRoute