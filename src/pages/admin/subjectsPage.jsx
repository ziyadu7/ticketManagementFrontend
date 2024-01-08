import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../components/admin/adminNavbar'
import SubjectsTable from '../../components/admin/subjectsTable'
import toast from 'react-hot-toast'
import axiosInstance from '../../api/axios'
import { useSelector } from 'react-redux'
import errorFunction from '../../helpers/errorHandling'
import Loader from '../../components/loader'

function SubjectsPage() {

    const [subject, setSetSubject] = useState('')
    const [priority, setPriority] = useState('')
    const [subjects, setSubjects] = useState([])
    const [refresh, setRefresh] = useState(false)
    const[loader,setLoader] = useState(false)
    const [err, setErr] = useState('')

    const { token } = useSelector(state => state.Admin)

    useEffect(() => {
        axiosInstance.get('/admin/getSubjects', {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then(res => {
            setSubjects(res?.data?.subjects)
        }).catch(err=>{
            errorFunction(err)
        })
    }, [refresh])

    function addSubject() {
        setLoader(true)
        if (subject.length <= 0 || priority == '') {
            setLoader(false)
            setErr('Fill all the fields')
        } else {
            axiosInstance.post('/admin/addSubject', { subject, priority }, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }).then(res => {
                setLoader(false)
                toast.success(res?.data?.message)
                setRefresh(!refresh)
            }).catch(err => {
                setLoader(false)
                errorFunction(err)
            })
        }
    }


    const deleteSubject = (subjectId)=>{
        axiosInstance.delete('')
    }

    return (
        <div>
            <AdminNavbar />
            <div>
                <div className='flex justify-center'>
                    <div className='sm:w-1/2 p-5'>
                        <input type="text" onChange={(e) => setSetSubject(e.target.value)} placeholder='Add subject' className='block border border-slate-600 w-full p-3 rounded mb-4' />
                        <div>
                            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Priority</h3>
                            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                    <div className="flex items-center ps-3">
                                        <input
                                            onChange={(e) => setPriority(e.target.value)}
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
                                            onChange={(e) => setPriority(e.target.value)}
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
                                            onChange={(e) => setPriority(e.target.value)}
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
                        <div className='flex justify-between mt-2'>
                            <small className='text-red-500'>{err}</small>
                            <button onClick={() => addSubject()} className='bg-slate-400 hover:bg-slate-500 rounded-sm min-w-36 px-3 py-1'>{loader?<Loader WA={'w-4 h-4'}/>:'Add Subject'}</button>
                        </div>
                    </div>
                </div>
                <SubjectsTable subjects={subjects} handleAction={deleteSubject} />
            </div>
        </div>
    )
}

export default SubjectsPage