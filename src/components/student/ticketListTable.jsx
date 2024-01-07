import React, { useState } from 'react'

function TicketListTable({ tickets, setTicketDetails,ticket,setTicket }) {

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Requested By
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Subject
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Assignee
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Priority
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Created Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Due Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tickets?.map(ticket => {
                        return (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {ticket?.id}
                                </th>
                                <td className="px-6 py-4">
                                    {ticket?.requestedByStudent?.name}
                                </td>
                                <td className="px-6 py-4">
                                    {ticket?.subject ? ticket?.ticketSubject?.subject : 'Other'}
                                </td>
                                <td className="px-6 py-4">
                                    {ticket?.assigneeAdmin?.name}
                                </td>
                                <td className="px-6 py-4">
                                    {ticket?.subject ? ticket?.ticketSubject?.priority : 'Low'}
                                </td>
                                <td className="px-6 py-4">
                                    {ticket?.status}

                                </td>
                                <td className="px-6 py-4">
                                    {ticket?.createdDate.slice(0, 10)}
                                </td>
                                <td className="px-6 py-4">
                                    {ticket?.dueDate ? ticket?.dueDate?.createdDate.slice(0, 10) : "Didn't completed"}
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => {
                                        setTicket(ticket)
                                        setTicketDetails(true)
                                    }} className='px-1 py-1 bg-blue-500 flex rounded-sm text-white'>View</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table></div>
    )
}

export default TicketListTable