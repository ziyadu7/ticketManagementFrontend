import React from 'react'

function SubjectsTable({subjects,handleAction}) {
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
                            Priority
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {subjects?.length >= 0 ? subjects.map((subject => {
                        return (
                            <tr className="bg-white border-b text-black">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {subject?.id}
                                </th>
                                <td className="px-6 py-4">
                                    {subject?.name}
                                </td>
                                <td className="px-6 py-4">
                                    {subject?.priority}
                                </td>
                                <td className="px-6 py-4">
                                    <button className='rounded-sm px-3 bg-red-600' onClick={() => handleAction(subject?.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })) : ''}

                </tbody>
            </table>
        </div>
  )
}

export default SubjectsTable