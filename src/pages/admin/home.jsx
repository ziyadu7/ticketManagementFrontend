import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../components/admin/adminNavbar'
import TicketListTable from '../../components/ticketListTable'
import { useSelector } from 'react-redux'
import errorFunction from '../../helpers/errorHandling'
import axiosInstance from '../../api/axios'
import TicketDetailsAdmin from '../../components/admin/ticketDetailsAdmin'

function Home() {

  const [tickets, setTickets] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [ticket, setTicket] = useState('')
  const [ticketDetails, setTicketDetails] = useState(false)

  const { token } = useSelector(state => state.Admin)
  useEffect(() => {
    axiosInstance.get('/admin/getTickets', {
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then(res => {
      setTickets(res?.data?.tickets)
    }).catch(err => {
      errorFunction(err)
    })
  }, [refresh])

  return (
    <div><AdminNavbar />{ticketDetails ?
      <div className='bg-slate-100 min-h-screen'>
        <TicketDetailsAdmin ticket={ticket} setTicketDetails={setTicketDetails} />
      </div> : <TicketListTable tickets={tickets} setTicketDetails={setTicketDetails} setTicket={setTicket} />}</div>
  )
}

export default Home