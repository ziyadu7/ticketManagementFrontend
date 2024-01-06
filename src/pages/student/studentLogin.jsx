import React, { useState } from 'react'
import Login from '../../components/login'
import axiosInstance from '../../api/axios'
import { useDispatch } from 'react-redux'
import { studentLogin } from '../../store/slice/student'
import { useNavigate } from 'react-router-dom'

function StudentLogin() {
    
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [err,setErr] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = ()=>{
        setErr('')
        if(name.trim().length==0||password.trim().length==0){
            setErr('Fill all the fields')
        }else if(password.length<=3){
            setErr('Password is too short')
        }else{
            axiosInstance.post('/login',{name,password}).then(res=>{
                dispatch(studentLogin({name:res?.data?.name,role:res?.data?.role,token:res?.data?.token}))
                navigate('/')
            })
        }
    }

  return (
    <Login isAdmin={false} setName={setName} setPassword={setPassword} handleSubmit={handleSubmit} err={err}/>
  )
}

export default StudentLogin