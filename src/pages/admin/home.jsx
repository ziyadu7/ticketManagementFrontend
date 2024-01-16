import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../components/admin/adminNavbar'
import TicketListTable from '../../components/ticketListTable'
import errorFunction from '../../helpers/errorHandling'
import axiosInstance from '../../api/adminAxios'
import TicketDetailsAdmin from '../../components/admin/ticketDetailsAdmin'
import Search from '../../components/search'

function Home() {

  const [tickets, setTickets] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [ticket, setTicket] = useState('')
  const [ticketDetails, setTicketDetails] = useState(false)
  const [search,setSearch] = useState('')

  useEffect(() => {
    axiosInstance.get('/admin/getTickets').then(res => {
      setTickets(res?.data?.tickets)
    }).catch(err => {
      errorFunction(err)
    })
  }, [refresh])

  return (
    <div><AdminNavbar />{ticketDetails ?
      <div className='bg-slate-100 min-h-screen'>
        <TicketDetailsAdmin refresh={refresh} setRefresh={setRefresh} ticket={ticket} setTicketDetails={setTicketDetails} />
      </div> : 
      <div>
        <Search setSearch={setSearch}/>
        <TicketListTable tickets={tickets} search={search} setTicketDetails={setTicketDetails} setTicket={setTicket} />
        </div>
        }

      </div>
  )
}

export default Home