import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/studentAxios";
import errorFunction from "../../helpers/errorHandling";
import toast from "react-hot-toast";
import Loader from "../loader";

function AddTicketModal({ showModal, setShowModal ,refresh,setRefresh}) {

    const [subjects, setSubjects] = useState([])
    const [assignees, setAssignees] = useState([])
    const [loader,setLoader] = useState(false)

    const [subject,setSubject] = useState(0)
    const [assignee,setAssignee] = useState(0)
    const [description,setDescription] = useState('')
    const [err,setErr] = useState('')

    useEffect(() => {
        axiosInstance.get('/getSubjects').then(res => {
            setSubjects(res?.data?.subjects)
        }).catch(err => {
            errorFunction(err)
        })

        axiosInstance.get('/fetchAdmins').then(res => {
            setAssignees(res?.data?.admins)
            setAssignee(res?.data?.admins[0]?.id)
        }).catch(err => {
            errorFunction(err)
        })
    }, [])

    function addTicket (){
        setLoader(true)
        if(subject===''||assignee===0||description.trim().length==0){
            setLoader(false)
            setErr('Fill all the fields')
        }else {
            axiosInstance.post('/addTicket',{subject,assignee,description}).then(res=>{
                setLoader(false)
                setAssignee(0)
                setDescription('')
                setSubject(0)
                toast.success(res?.data?.message)
                setRefresh(!refresh)
                setShowModal(false)
            }).catch(err=>{
                setLoader(false)
                setAssignee(0)
                setDescription('')
                setSubject(0)
                errorFunction(err)
            })
        }
    }

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Add Ticket
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
                                    <form className="w-full max-w-lg md:min-w-96">
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                                    Subject
                                                </label>
                                                <div className="relative">
                                                    <select onChange={(e)=>{setSubject(e.target.value)}} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                                        <option value={0}>Other</option>
                                                        {subjects?.map((subject) => (
                                                            <option value={subject?.id} key={subject?.id}>{subject?.subject}</option>
                                                        ))}
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div className="w-full md:w-1/2 px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                                    Assignee
                                                </label>
                                                <div className="relative">
                                                    <select onChange={(e)=>setAssignee(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                                        {assignees?.map((assignee) => (
                                                            <option value={assignee?.id} key={assignee?.id}>{assignee?.name}</option>
                                                        ))}
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                                                    Description
                                                </label>
                                                <textarea onChange={(e)=>setDescription(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" type="text" placeholder="Enter description here" />
                                            </div>
                                        </div>
                                        <p className="text-red-500 text-xs italic">{err}</p>
                                    </form>

                                </div>

                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => 
                                            {
                                                setDescription('')
                                                setErr('')
                                                setShowModal(false)
                                            }}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500  min-w-32 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => addTicket()}
                                    >
                                        {loader?<Loader WA={'w-6 h-6'}/>:'Add Ticket'}
                                       
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default AddTicketModal