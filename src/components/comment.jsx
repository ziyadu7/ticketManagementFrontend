import React from 'react'
import { CgProfile } from "react-icons/cg";

function Comment({ comment }) {
    return (
        <div>
            <div className='flex gap-2'>
                <CgProfile className='mt-1 font-medium' />
                <div className='flex justify-between w-full'>
                    <p className='font-medium text-black'>{comment?.commentedByStudent?.name} </p>
                    <p className=' text-slate-600'>Commented on : {comment?.date?.slice(0, 10)} </p>
                </div>
            </div>
            <p className='text-slate-600 ms-8' style={{ overflowWrap: 'break-word' }}>{comment?.comment}</p>
        </div>
    )
}

export default Comment