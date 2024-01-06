import React from 'react'

function StudentsListTable({ students, handleAction }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-50">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {students?.length >= 0 ? students.map((student => {
                        return (
                            <tr className="bg-white border-b text-black">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {student?.id}
                            </th>
                            <td className="px-6 py-4">
                                {student?.name}
                            </td>
                            <td className="px-6 py-4">
                                {student?.isAccepted ? <button className='rounded-sm bg-slate-400 px-3' disabled>Accepted</button> : <button className='rounded-sm px-3 bg-green-600' onClick={() => handleAction(student?.id)}>Accept</button>}
                            </td>
                        </tr>
                        )
                    })) : ''}

                </tbody>
            </table></div>
    )
}

export default StudentsListTable