import React from 'react'

const Pagination = ({onPrev, onNext, counter}) => {
  return (
    <div className='flex justify-center items-center gap-4'>
        <button onClick={onPrev} className='gap-2 round-fill border-2 p-2 rounded-xl border-blue-800'>Previous</button>
        <div className='gap-2 round-fill'>{counter}</div>
        <button onClick={onNext} className='gap-2 round-fill border-2 p-2 rounded-xl border-blue-800'>Next</button>
    </div>
  )
}

export default Pagination