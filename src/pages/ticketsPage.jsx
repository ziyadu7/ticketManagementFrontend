import React from 'react'
import TicketListTable from '../components/ticketListTable'
import { AiFillPlusCircle } from "react-icons/ai";

function TicketsPage() {
    return (
        <div>
            <div className='flex justify-between p-2'>
                <p className='font-semibold'>Manage Tickets</p>
                <button className='px-1 py-1 bg-blue-500 flex rounded-sm text-white'><AiFillPlusCircle className='mt-1 me-1' />Add Ticket</button>
            </div>
            <div>
                <div className="flex mb-3 items-center p-4">
                    <label
                        htmlFor="exampleSearch2"
                        className="me-2 text-slate-500"
                    >
                        Search : 
                    </label>
                    <input
                        type="search"
                        className="peer block min-h-[auto] rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6]"
                        id="exampleSearch2"
                        placeholder="Type query"
                    />
                </div>
            </div>
            <TicketListTable />
        </div>
    )
}

export default TicketsPage