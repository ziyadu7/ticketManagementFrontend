import React, { useEffect, useState } from 'react'
import TicketListTable from '../../components/ticketListTable'
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { studentLogout } from '../../store/slice/student';
import AddTicketModal from '../../components/student/addTicketModal';
import axiosInstance from '../../api/studentAxios';
import errorFunction from '../../helpers/errorHandling';
import TicketDetails from '../../components/student/ticketDetails';
import Fiquers from '../../components/student/fiquers';
import { MdOutlineGppGood, MdDiscount } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import Search from '../../components/search';
import Comments from '../../components/comments';
import AddComment from '../../components/student/addComment';

function TicketsPage() {

    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [tickets, setTickets] = useState([])
    const [ticketDetail, setTicketDetails] = useState(false)
    const [refreshC, setRefreshC] = useState(false)
    const [search, setSearch] = useState('')
    const [ticket, setTicket] = useState('')

    const { token } = useSelector(state => state.Student)

    useEffect(() => {
        axiosInstance.get('/fetchTickets').then(res => {
            setTickets(res?.data?.tickets)
        }).catch(err => {
            errorFunction(err)
        })
    }, [refresh])

    const logout = () => {
        dispatch(studentLogout())
    }
    return (
        <div className='md:p-10 p-2 bg-slate-100 min-h-screen'>
            {ticketDetail ?
                <>
                    <TicketDetails ticket={ticket} ticketDetail={ticketDetail} setTicketDetails={setTicketDetails} />
                    <div className='flex justify-center mt-2'>
                    <div className='bg-white md:w-3/4 w-full p-4'>
                        <AddComment refresh={refreshC} setRefresh={setRefreshC} ticketId={ticket?.id}/>
                        <Comments token={token} refresh={refreshC} url={`/fetchComments/${ticket?.id}`}/>
                    </div>
                    </div>
                </> : <>
                    <div className='grid md:grid-cols-4 sm:mb-4 mb-2 grid-cols-2 gap-4 px-2'>
                        <Fiquers tickets={tickets} Icon={MdDiscount} bg={' bg-blue-600'} heading={'Total Tickets'} />
                        <Fiquers tickets={tickets} Icon={FaRegClock} bg={' bg-yellow-400'} heading={'Pending Tickets'} />
                        <Fiquers tickets={tickets} Icon={MdOutlineGppGood} bg={' bg-emerald-500'} heading={'Closed Tickets'} />
                        <Fiquers tickets={tickets} Icon={RiDeleteBin6Line} bg={' bg-red-500'} heading={'Deleted Tickets'} />
                    </div>
                    <div className='bg-white min-h-screen'>
                        <div className='flex justify-between p-2'>
                            <p className='font-semibold'>Manage Tickets</p>
                            <div className='flex gap-2'>
                                <button onClick={() => logout()} className='px-1 py-1 bg-red-500 flex rounded-sm text-white'>Logout</button>
                                <button onClick={() => setShowModal(true)} className='px-1 py-1 bg-blue-500 flex rounded-sm text-white'><AiFillPlusCircle className='mt-1 me-1' />Add Ticket</button>
                            </div>
                        </div>
                        <div>
                            <Search setSearch={setSearch} />
                        </div>
                        <AddTicketModal refresh={refresh} setRefresh={setRefresh} showModal={showModal} setShowModal={setShowModal} />
                        <TicketListTable search={search} setTicket={setTicket} ticket={ticket} tickets={tickets} setTicketDetails={setTicketDetails} />
                    </div>
                </>}
        </div>
    )
}

export default TicketsPage