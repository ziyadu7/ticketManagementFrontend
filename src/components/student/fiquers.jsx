import React from 'react'

function Fiquers({Icon,heading, bg,count}) {
  return (
    <div className='flex justify-between bg-white rounded-sm min-h-24 p-2 md:p-2 lg:p-5'>
        <div className={`rounded-full w-14 h-14 flex justify-center place-items-center text-white ${bg}`}><Icon/></div>
        <div>
            <p className='font-semibold text-lg'>{count}</p>
            <p className='font-normal text-slate-500 text-xs'>{heading}</p>
        </div>
    </div>
  )
}

export default Fiquers