import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axios'
import toast from 'react-hot-toast'
import errorFunction from '../../helpers/errorHandling'
import Loader from '../../components/loader'

function Register() {
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [loader,setLoader] = useState(false)
    
    const passwordRegex = /^(?=.*?[A-Z])(?=.*[a-z])(?=.*[0-9]){3,16}/gm

    const [err,setErr] = useState('')
    const navigate = useNavigate()

    const confirmRegister = ()=>{
        setLoader(true)
        setErr('')
        if(name.trim().length==0||password.trim().length==0){
            setLoader(false)
            setErr('Fill all the fields')
        }else if (password.length<=3){
            setLoader(false)
            setErr('Password too small')
        }else if(passwordRegex.test(password) == false){
            setLoader(false)
            setErr('Password must contain [a-zA-Z0-9]')
        }else{
            axiosInstance.post('/register',{name,password}).then(res=>{
                setLoader(false)
                toast.success(res?.data?.message)
                navigate('/login')
            }).catch(err=>{
                setLoader(false)
                errorFunction(err)
            })
        }
    }
    return (
        <div className="">
            <div className="min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className=" px-6 py-8 rounded shadow-md w-full">
                        <h1 className="mb-8 text-3xl text-center">Student Register</h1>
                        <div className='text-black'>
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="Name"
                                placeholder="Username" />

                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />
                        </div>
                        <div className='felx justify-center items-center'>
                            <small className='text-red-600 text-center flex justify-center'>{err}</small>
                        </div>
                        <p className='text-center text-blue-600 cursor-pointer' onClick={() => navigate('/login')}>Alerady have account ?</p>
                        <button
                            type="button"
                            onClick={() => confirmRegister()}
                            className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-green-dark focus:outline-none my-1"
                        >{loader ?<Loader WA={'w-6 h-6'}/>:'Register'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register