import React, { useEffect, useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import axiosInstance from '../../api/axios'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import errorFunction from '../../helpers/errorHandling'

function TicketDetailsAdmin({ refresh, setRefresh, setTicketDetails, ticket }) {

    const [status, setStatus] = useState('')
    const { token } = useSelector(state => state.Admin)

    useEffect(() => {
        if (status === 'Deleted') {
            submitEdits();
        }
    }, [status]);

    function submitEdits() {
        if(status!=''){
            axiosInstance.put(`/admin/updateStatus/:${ticket?.id}`, { status }, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }).then(res => {
                toast.success(res?.data?.message)
                setRefresh(!refresh)
                setTicketDetails(false)
            }).catch(err => {
                setRefresh(!refresh)
                errorFunction(err)
            })
        }
    }

    return (
        <>
            <h3 className='font-semibold md:mb-5'>Ticket Details</h3>
            <div className='flex justify-center'>
                <div className='bg-white rounded-sm md:w-3/4 p-4'>
                    <div className='flex justify-between'>
                        <h5 className='font-semibold'>Sample subject</h5>
                        <button onClick={() => setTicketDetails(false)} className='text-blue-500 flex items-center gap-1'><IoArrowBack />Back</button>
                    </div>

                    <div className='flex justify-between gap-5 md:px-10 lg:px-40 mt-2 md:mt-5'>
                        <div className=''>
                            <p className='md:mb-5 mb-2 text-slate-600'>Reported By :   {ticket?.requestedByStudent?.name}</p>
                            <p className='md:mb-5 mb-2 text-slate-600'>Created At :        {ticket?.createdDate?.slice(0, 10)}</p>
                            <div className='flex gap-2'>
                                <label className="block md:mb-5 mt-2 mb-2 text-slate-600">
                                    Status :
                                </label>
                                <div className="relative">
                                    <select onChange={(e) => setStatus(e.target.value)} className="block  border-2 appearance-none w-full border-gray-900 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <option value={ticket?.status} selected>{ticket?.status}</option>
                                        <option value={'Pending'}>Pending</option>
                                        <option value={'Open'}>Open</option>
                                        <option value={'Closed'}>Closed</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='md:mb-5 mb-2 text-slate-600'>Assigned To: {ticket?.assigneeAdmin?.name}</p>
                            <p className='md:mb-5 mb-2 text-slate-600'>Updated On :  {ticket?.dueDate ? ticket?.dueDate?.slice(0, 10) : "Didn't completed"}</p>
                            <p className='md:mb-5 mb-2 text-slate-600'>Priority :   {ticket?.subject ? ticket?.ticketSubject?.priority : 'Low'}</p>
                        </div>
                    </div>
                    <div className='text-slate-600 '>
                        Overview :
                        <p className='text-slate-600 ms-2' style={{ overflowWrap: 'break-word' }}>{ticket?.description}</p>
                    </div>
                    <div className='flex justify-end gap-2'>
                        <button onClick={() => {
                            setStatus('Deleted')
                            submitEdits()
                        }} className=' bg-red-600 rounded-sm px-2 hover:bg-red-800'>Delete Token</button>
                        <button onClick={submitEdits} className=' bg-green-600 rounded-sm px-2 hover:bg-green-800'>Submit Edits</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TicketDetailsAdmin