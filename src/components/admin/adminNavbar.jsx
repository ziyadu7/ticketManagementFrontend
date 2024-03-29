import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { adminLogout } from '../../store/slice/admin';
import AddAdmin from './addAdmin';

function AdminNavbar() {

  const [nav, setNav] = useState(false);
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  const { isSuper } = useSelector(state => state.Admin)

  const handleNav = () => {
    setNav(!nav);
  };

  const logout = () => {
    dispatch(adminLogout())
    navigate('/admin/login')
  }

  return (
    <div className=' flex justify-between bg-slate-400 z-50 items-center h-24 max-w-full mx-auto px-4 text-black'>
      <AddAdmin showModal={showModal} setShowModal={setShowModal} />
      <h1 className='w-full text-3xl font-bold text-slate-600'>Admin</h1>
      <div className='w-full justify-center gap-5 md:flex hidden'>
        {isSuper ? <p onClick={() => setShowModal(true)} className={`hover:cursor-pointer hover:bg-slate-600 rounded-sm px-3 py-1`}>Add Admin</p> : ''}
        <p onClick={() => navigate('/admin/students')} className={`hover:cursor-pointer hover:bg-slate-600 rounded-sm px-3 py-1 ${location.pathname == '/admin/students' ? 'bg-slate-600' : ''}`}>Students</p>
        <p onClick={() => navigate('/admin/subjects')} className={`hover:cursor-pointer hover:bg-slate-600 rounded-sm px-3 py-1 ${location.pathname == '/admin/subjects' ? 'bg-slate-600' : ''}`}>Subjects</p>
        <p onClick={() => navigate('/admin')} className={`hover:cursor-pointer hover:bg-slate-600 rounded-sm px-3 py-1 ${location.pathname == '/admin' ? 'bg-slate-600' : ''}`}>Assigned Tickets</p>
        <p onClick={() => { logout() }} className={`hover:cursor-pointer bg-black text-white rounded-sm px-3 py-1`}>Logout</p>
      </div>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r z-50 border-r-gray-900 bg-slate-400 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-bg-slate-600 m-4'>Admin</h1>

        <li
          onClick={() => navigate('/admin/students')}
          className='p-4 border-b rounded-xl hover:bg-slate-600 duration-300 hover:text-black cursor-pointer border-gray-600'
        >
          Students
        </li>
        {isSuper ? <li
          onClick={() => setShowModal(true)}
          className='p-4 border-b rounded-xl hover:bg-slate-600 duration-300 hover:text-black cursor-pointer border-gray-600'
        >
          Add Admin
        </li> : ''}
        <li
          onClick={() => navigate('/admin/subjects')}
          className='p-4 border-b rounded-xl hover:bg-slate-600 duration-300 hover:text-black cursor-pointer border-gray-600'
        >
          Students
        </li>
        <li
          onClick={() => navigate('/admin')}
          className='p-4 border-b rounded-xl hover:bg-slate-600 duration-300 hover:text-black cursor-pointer border-gray-600'
        >
          Assigned Tickets
        </li>
      </ul>
    </div>
  )
}

export default AdminNavbar