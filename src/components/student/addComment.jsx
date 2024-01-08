import React, {  useState } from 'react'
import Loader from '../loader'
import { useSelector } from 'react-redux'
import axiosInstance from '../../api/axios'
import toast from 'react-hot-toast'
import errorFunction from '../../helpers/errorHandling'

function AddComment({refresh,setRefresh,ticketId}) {
    const [comment, setComment] = useState('')
    const [loader, setLoader] = useState(false)
    const { token } = useSelector(state => state.Student)

    const addComment = () => {
        setLoader(true)
        if(comment.trim().length==0){
            setLoader(false)
            toast.error('Fill the field')
        }else{
            axiosInstance.post('/addComment',{comment,ticketId}, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }).then(res => {
                setLoader(false)
                setRefresh(!refresh)
                toast.success(res?.data?.message)
            }).catch(err => {
                setLoader(false)
                errorFunction(err)
            })
        }
    }

    return (
        <div className='flex justify-center'>
            <div className='w-full p-5'>
                <textarea type="text" onChange={(e) => setComment(e.target.value)} placeholder='Add Comment' className='block border border-slate-600 w-full p-3 rounded mb-4' />
            </div>
            <div className='flex items-center mb-3'>
                <button
                    className="bg-blue-500  min-w-32 text-white active:bg-blue-600 font-bold text-sm px-3 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => addComment()}
                >
                    {loader ? <Loader WA={'w-6 h-6'} /> : 'Add Comment'}

                </button>
            </div>
        </div>
    )
}

export default AddComment