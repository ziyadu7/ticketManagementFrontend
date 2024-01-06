import React, { useEffect, useState } from 'react'
import axiosInstance from '../../api/axios'
import { useSelector } from 'react-redux'
import errorFunction from '../../helpers/errorHandling'
import AdminNavbar from '../../components/admin/adminNavbar'
import StudentsListTable from '../../components/admin/studentsListTable'
import toast from 'react-hot-toast'

function StudentList() {

    const [students, setStudents] = useState([])
    const [refresh, setRefresh] = useState(false)
    const { token } = useSelector(state => state.Admin)
    useEffect(() => {
        axiosInstance.get('/admin/getStudents', {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then(res => {
            setStudents(res?.data?.students)
        }).catch(err => {
            errorFunction(err)
        })
    }, [refresh])

    const handleAction = (studentId) => {
        axiosInstance.patch('/admin/acceptStudent', { studentId }, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then(res=>{
            toast.success(res?.data?.message)
            setRefresh(!refresh)
        }).catch(err=>{
            errorFunction(err)
        })
    }
    return (
        <div>
            <AdminNavbar />
            <div className='-z-50 px-16 w-full'>
                <StudentsListTable students={students} handleAction={handleAction} />
            </div>
        </div>
    )
}

export default StudentList