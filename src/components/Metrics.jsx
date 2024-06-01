import React from 'react'

const Metrics = ({ text}) => {
  return (
    <div className='flex gap-3'>
      <div className='w-[20px] h-[20px] bg-purple-400' ></div>
    <h4 className='text-gray-500'>{text}</h4>
    </div>
  )
}

export default Metrics
