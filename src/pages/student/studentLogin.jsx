import React, { useState } from 'react'
import Login from '../../components/login'
import axiosInstance from '../../api/axios'
import { useDispatch } from 'react-redux'
import { studentLogin } from '../../store/slice/student'
import { useNavigate } from 'react-router-dom'
import errorFunction from '../../helpers/errorHandling'

function StudentLogin() {
    
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [err,setErr] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loader,setLoader] = useState(false)

    const handleSubmit = ()=>{
        setLoader(true)
        setErr('')
        if(name.trim().length==0||password.trim().length==0){
            setLoader(false)
            setErr('Fill all the fields')
        }else if(password.length<=3){
            setLoader(false)
            setErr('Password is too short')
        }else{
            axiosInstance.post('/login',{name,password}).then(res=>{
                setLoader(false)
                localStorage.setItem('StudentToken',res?.data?.token)
                dispatch(studentLogin({name:res?.data?.name,role:res?.data?.role,token:res?.data?.token}))
                navigate('/')
            }).catch(err=>{
                setLoader(false)
                errorFunction(err)
            })
        }
    }

  return (
    <Login isAdmin={false} loader={loader} setName={setName} setPassword={setPassword} handleSubmit={handleSubmit} err={err}/>
  )
}

export default StudentLogin