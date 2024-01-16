import React, { useState } from 'react'
import Login from '../../components/login'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axios'
import errorFunction from '../../helpers/errorHandling'
import {adminLogin} from '../../store/slice/admin'

function AdminLogin() {
    
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [loader,setLoader] = useState(false)
    const [err,setErr] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = ()=>{
        console.log(loader);
        setLoader(true)
        setErr('')
        if(name.trim().length==0||password.trim().length==0){
            setLoader(false)
            setErr('Fill all the fields')
        }else if(password.length<=3){
            setLoader(false)
            setErr('Password is too short')
        }else{
            axiosInstance.post('/admin/login',{name,password}).then(res=>{
                setLoader(false)
                localStorage.setItem('AdminToken',res?.data?.token)
                dispatch(adminLogin({name:res?.data?.name,role:res?.data?.role,token:res?.data?.token,isSuper:res?.data?.isSuper}))
                navigate('/admin')
            }).catch(err=>{
                setLoader(false)
                errorFunction(err)
            })
        }
    }

  return (
    <Login isAdmin={true} setName={setName} loader={loader} setPassword={setPassword} handleSubmit={handleSubmit} err={err}/>
  )
}

export default AdminLogin