import React from 'react'

function TicketListTable({ tickets, setTicketDetails, setTicket, search }) {
    
    return (
        <div className="relative overflow-x-auto md:mx-5 sm:mx-3 mx-1">
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
                    {tickets?.filter((ticket => (ticket?.subject ? ticket?.ticketSubject?.subject?.toLowerCase().includes(search) : ticket))).map(ticket => {
                        return (
                            <tr key={ticket?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                                    <p className={`px-2  font-medium rounded-sm text-center ${ticket?.ticketSubject?.priority == 'high' ? "bg-red-300 text-red-600" : ticket?.ticketSubject?.priority == 'medium' ? 'bg-yellow-400 text-yellow-600' : 'bg-slate-200 text-slate-700'}`}> {ticket?.subject ? ticket?.ticketSubject?.priority : 'Low'}</p>
                                </td>
                                <td className={`px-6 py-4`}>
                                    <p className={`px-2  text-white font-medium rounded-sm text-center ${ticket?.status == 'Pending' ? "bg-yellow-400" : ticket?.status == 'Closed' ? 'bg-slate-800' : ticket?.status == 'Open' ? 'bg-teal-500' : ticket?.status == 'Deleted' ? 'bg-red-500' : ''}`}>{ticket?.status}</p>
                                </td>
                                <td className="px-6 py-4">
                                    {ticket?.createdDate.slice(0, 10)}
                                </td>
                                <td className="px-6 py-4">
                                    {ticket?.dueDate ? ticket?.dueDate?.slice(0, 10) : "Didn't completed"}
                                </td>
                                <td className="px-6 py-4">
                                    {ticket?.status == 'Deleted' || ticket?.status == 'Closed' ? '...' : <button onClick={() => {
                                        setTicket(ticket)
                                        setTicketDetails(true)
                                    }} className='px-1 py-1 bg-blue-500 flex rounded-sm text-white'>View</button>}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table></div>
    )
}

export default TicketListTable