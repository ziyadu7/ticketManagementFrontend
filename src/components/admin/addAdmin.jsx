import React, { useState } from 'react'
import Loader from '../loader'
import axiosInstance from '../../api/axios'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import errorFunction from '../../helpers/errorHandling'

function AddAdmin({ showModal, setShowModal }) {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')
    const [isSuper,setIsSuper] = useState(false)
    const [loader, setLoader] = useState(false)
    const { token } = useSelector(state => state.Admin)

    function addAdmin() {
        setLoader(true)
        setErr('')
        if(name.trim().length==0||password.trim().length==0){
            setErr('Fill all the field')
        }else{
            axiosInstance.post('/admin/addAdmin',{name,password,isSuper},{
                headers: {
                    authorization: `Bearer ${token}`
                }
            }).then(res=>{
                toast.success(res?.data?.message)
                setLoader(false)
                setShowModal(false)
                setName('')
                setPassword('')
            }).catch(err=>{
                setLoader(false)
                setName('')
                setPassword('')
                errorFunction(err)
            })
        }
    }

    return (
        <div>  {showModal ? (
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">

                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    Add Admin
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                            </div>

                            <div className="relative p-6 flex-auto">
                                <div className="flex flex-col">
                                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                                        <div className=" px-6 py-8 rounded shadow-md w-full">
                                            <div className='text-black'>
                                                <input
                                                    type="text"
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                                    name="Name"
                                                    placeholder="name" />

                                                <input
                                                    type="password"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                                    name="password"
                                                    placeholder="Password" />
                                            </div>
                                            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
                                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                                    <div className="flex items-center ps-3">
                                                        <input
                                                            onChange={(e) =>setIsSuper(true)}
                                                            id="horizontal-list-radio-license"
                                                            type="radio"
                                                            value="true"
                                                            name="list-radio"
                                                            className="w-4 h-4 hover:cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                                        />
                                                        <label
                                                            htmlFor="horizontal-list-radio-license"
                                                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                                                        >
                                                            Super
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                                    <div className="flex items-center ps-3">
                                                        <input
                                                            onChange={(e) =>setIsSuper(false)}
                                                            id="horizontal-list-radio-license"
                                                            type="radio"
                                                            checked 
                                                            value="false"
                                                            name="list-radio"
                                                            className="w-4 h-4 hover:cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                                        />
                                                        <label
                                                            htmlFor="horizontal-list-radio-license"
                                                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                                                        >
                                                            Normal
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className='felx justify-center items-center'>
                                                <small className='text-red-600 text-center flex justify-center'>{err}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                        setName('')
                                        setPassword('')
                                        setErr('')
                                        setShowModal(false)
                                    }}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-emerald-500  min-w-32 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => addAdmin()}
                                >
                                    {loader ? <Loader WA={'w-6 h-6'} /> : 'Add Admin'}

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}</div>
    )
}

export default AddAdmin