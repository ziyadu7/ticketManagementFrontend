import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [err,setErr] = useState('')
    const navigate = useNavigate()
    const confirmRegister = ()=>{
        
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
                                onChange={(e) => setUserName(e.target.value)}
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
                        <div className='felx justify-center'>
                            <small className='text-red-600'>{err}</small>
                        </div>
                        <p className='text-center text-blue-600 cursor-pointer' onClick={() => navigate('/student/login')}>Alerady have account ?</p>
                        <button
                            type="button"
                            onClick={() => confirmRegister()}
                            className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register