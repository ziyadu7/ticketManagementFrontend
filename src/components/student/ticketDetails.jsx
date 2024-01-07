import React from 'react'
import { IoArrowBack } from "react-icons/io5";

function TicketDetails({ setTicketDetails, ticket }) {
    return (
        <>
            <h3 className='font-semibold md:mb-5'>Ticket Details</h3>
            <div className='flex justify-center'>
                <div className='bg-white md:w-3/4 p-4'>
                    <div className='flex justify-between'>
                        <h5 className='font-semibold'>Sample subject</h5>
                        <button onClick={() => setTicketDetails(false)} className='text-blue-500 flex items-center gap-1'><IoArrowBack />Back</button>
                    </div>

                    <div className='flex justify-between gap-5 md:px-10 lg:px-40 mt-2 md:mt-5'>
                        <div className=''>
                            <p className='md:mb-5 mb-2 text-slate-600'>Reported By :   {ticket?.requestedByStudent?.name}</p>
                            <p className='md:mb-5 mb-2 text-slate-600'>Created At :        {ticket?.createdDate.slice(0, 10)}</p>
                            <p className={`md:mb-5 mb-2 px-2 py-1 text-slate-600`}>Status :       {ticket?.status}</p>
                        </div>
                        <div>
                            <p className='md:mb-5 mb-2 text-slate-600'>Assigned To: {ticket?.assigneeAdmin?.name}</p>
                            <p className='md:mb-5 mb-2 text-slate-600'>Updated On :  {ticket?.dueDate ? ticket?.dueDate?.createdDate.slice(0, 10) : "Didn't completed"}</p>
                            <p className='md:mb-5 mb-2 text-slate-600'>Priority :   {ticket?.subject ? ticket?.ticketSubject?.priority : 'Low'}</p>
                        </div>
                    </div>
                    <div className='text-slate-600 '>
                        Overview :
                        <p className='text-slate-600 ms-2' style={{ overflowWrap: 'break-word' }}>{ticket?.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TicketDetails