import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';

function AdminNavbar() {

    const [nav, setNav] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()
    const handleNav = () => {
      setNav(!nav);
    };

  return (
    <div className=' flex justify-between bg-slate-400 z-50 items-center h-24 max-w-full mx-auto px-4 text-black'>

      <h1 className='w-full text-3xl font-bold text-slate-600'>Admin</h1>
    <div className='w-full justify-center gap-5 md:flex hidden'>
      <p onClick={()=>navigate('/admin/students')} className={`hover:cursor-pointer hover:bg-slate-600 rounded-sm px-3 py-1 ${location.pathname=='/admin/students'? 'bg-slate-600':''}`}>Students</p>
      <p onClick={()=>navigate('/admin/tickets')} className={`hover:cursor-pointer hover:bg-slate-600 rounded-sm px-3 py-1 ${location.pathname=='/admin/tickets'? 'bg-slate-600':''}`}>Assigned Tickets</p>
    </div>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-400 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-bg-slate-600 m-4'>Admin</h1>

          <li
            className='p-4 border-b rounded-xl hover:bg-slate-600 duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            Students
          </li>
          <li
            className='p-4 border-b rounded-xl hover:bg-slate-600 duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            Assigned Tickets
          </li>
      </ul>
    </div>
  )
}

export default AdminNavbar