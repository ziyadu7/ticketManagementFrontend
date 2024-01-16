import React, { useEffect, useState } from 'react'
import axiosInstance from '../../api/adminAxios'
import errorFunction from '../../helpers/errorHandling'
import AdminNavbar from '../../components/admin/adminNavbar'
import StudentsListTable from '../../components/admin/studentsListTable'
import toast from 'react-hot-toast'
import Search from '../../components/search'

function StudentList() {

    const [students, setStudents] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [search,setSearch] = useState('')
    useEffect(() => {
        axiosInstance.get('/admin/getStudents').then(res => {
            setStudents(res?.data?.students)
        }).catch(err => {
            errorFunction(err)
        })
    }, [refresh])

    const handleAction = (studentId) => {
        axiosInstance.patch('/admin/acceptStudent', { studentId }).then(res=>{
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
                <Search setSearch={setSearch}/>
                <StudentsListTable search={search} students={students} handleAction={handleAction} />
            </div>
        </div>
    )
}

export default StudentList