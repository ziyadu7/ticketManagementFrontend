import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import AdminLogin from '../pages/admin/adminLogin'
import Tickets from '../components/admin/tickets'

function AdminRoute() {
  const {token} = useSelector(state=>state.Admin)
    return (
        <div>
            <Routes>
                <Route path='/login' element={<AdminLogin/>} />
                <Route path='/' element={token?<Tickets/>:<Navigate to={'/login'}/>} />
                {/* <Route path='/*' element={<NotFound />} /> */}
            </Routes>
        </div>
    )
}

export default AdminRoute