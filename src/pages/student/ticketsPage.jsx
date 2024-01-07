import React, { useEffect, useState } from 'react'
import TicketListTable from '../../components/student/ticketListTable'
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { studentLogout } from '../../store/slice/student';
import AddTicketModal from '../../components/student/addTicketModal';
import axiosInstance from '../../api/axios';
import errorFunction from '../../helpers/errorHandling';

function TicketsPage() {

    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const [refresh,setRefresh] = useState(false)
    const [tickets,setTickets] = useState([])

    const { token } = useSelector(state => state.Student)

    useEffect(()=>{
        axiosInstance.get('/fetchTickets',{
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then(res=>{
            console.log(res?.data?.tickets);
            setTickets(res?.data?.tickets)
        }).catch(err=>{
            errorFunction(err)
        })
    },[])
    
    const logout = ()=>{
        dispatch(studentLogout())
    }
    return (
        <div>
            <div className='flex justify-between p-2'>
                <p className='font-semibold'>Manage Tickets</p>
                <div className='flex gap-2'>
                <button onClick={()=>logout()} className='px-1 py-1 bg-red-500 flex rounded-sm text-white'>Logout</button>
                <button onClick={() => setShowModal(true)} className='px-1 py-1 bg-blue-500 flex rounded-sm text-white'><AiFillPlusCircle className='mt-1 me-1' />Add Ticket</button>
                </div>
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
            <AddTicketModal refresh={refresh} setRefresh={setRefresh} showModal={showModal} setShowModal={setShowModal}/>
            <TicketListTable tickets={tickets} />
        </div>
    )
}

export default TicketsPage