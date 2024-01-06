import React from 'react'

function StudentsListTable({ students, handleAction }) {
    return (
        <div className="relative overflow-x-auto">
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
                                {student?.isAccepted ? <button disabled>Accepted</button> : <button onClick={() => handleAction(students.id)}>Accept</button>}
                            </td>
                        </tr>
                        )
                    })) : ''}

                </tbody>
            </table></div>
    )
}

export default StudentsListTable