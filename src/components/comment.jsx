import React from 'react'
import { CgProfile } from "react-icons/cg";

function Comment({comment}) {
    return (
        <div>
            <div className='flex gap-2'>
                <CgProfile className='mt-1 font-medium' />
                <p className='font-medium text-black'>{comment?.name} </p>
            </div>
            <p className='text-slate-600 ms-8' style={{ overflowWrap: 'break-word' }}>{comment?.comment}</p>
        </div>
    )
}

export default Comment