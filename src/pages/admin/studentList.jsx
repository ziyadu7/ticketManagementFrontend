import React, { useEffect, useState } from 'react'
import axiosInstance from '../../api/axios'
import { useSelector } from 'react-redux'
import errorFunction from '../../helpers/errorHandling'
import AdminNavbar from '../../components/admin/adminNavbar'
import StudentsListTable from '../../components/admin/studentsListTable'

function StudentList() {

    const [students,setStudents] = useState([])
    const [refresh,setRefresh] = useState(false)
    const {token} = useSelector(state=>state.Admin)
    useEffect(()=>{
        axiosInstance.get('/admin/getStudents',{headers:{
            authorization: `Bearer ${token}`
        }}).then(res=>{
            setStudents(res?.data?.students)
        }).catch(err=>{
            errorFunction(err)
        })
    },[refresh])

    const handleAction = ()=>{

    }
  return (
    <div><AdminNavbar/><StudentsListTable students={students} handleAction={handleAction}/></div>
  )
}

export default StudentList