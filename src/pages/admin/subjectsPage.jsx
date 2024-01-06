import React, { useState } from 'react'
import AdminNavbar from '../../components/admin/adminNavbar'
import SubjectsTable from '../../components/admin/subjectsTable'
import toast from 'react-hot-toast'

function SubjectsPage() {

    const [subject,setSetSubject] = useState('')
    const [priority,setPriority] = useState('')

    function addSubject(){
        toast.success(priority)
    }
    return (
        <div>
            <AdminNavbar />
            <div>
                <div className='flex justify-center'>
                    <div className='sm:w-1/2 p-5'>
                        <input type="text" onChange={(e)=>setSetSubject(e.target.value)} placeholder='Add subject' className='block border border-slate-600 w-full p-3 rounded mb-4' />
                        <div>
                            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Priority</h3>
                            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                    <div className="flex items-center ps-3">
                                        <input
                                        onChange={(e)=>setPriority(e.target.value)}
                                            id="horizontal-list-radio-license"
                                            type="radio"
                                            value="high"
                                            name="list-radio"
                                            className="w-4 h-4 hover:cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="horizontal-list-radio-license"
                                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                                        >
                                            High
                                        </label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                    <div className="flex items-center ps-3">
                                        <input
                                        onChange={(e)=>setPriority(e.target.value)}
                                            id="horizontal-list-radio-license"
                                            type="radio"
                                            value="medium"
                                            name="list-radio"
                                            className="w-4 h-4 hover:cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="horizontal-list-radio-license"
                                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                                        >
                                            Medium
                                        </label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                    <div className="flex items-center ps-3">
                                        <input
                                        onChange={(e)=>setPriority(e.target.value)}
                                            id="horizontal-list-radio-license"
                                            type="radio"
                                            value="low"
                                            name="list-radio"
                                            className="w-4 h-4 hover:cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="horizontal-list-radio-license"
                                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                                        >
                                            Low
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='flex justify-end mt-2'>
                            <button onClick={()=>addSubject()} className='bg-slate-400 hover:bg-slate-500 rounded-sm px-3 py-1'>Add Subject</button>
                        </div>
                    </div>
                </div>
                <SubjectsTable />
            </div>
        </div>
    )
}

export default SubjectsPage