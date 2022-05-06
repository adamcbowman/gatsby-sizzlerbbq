import React from 'react'


const ReviewCard = ({ name, text }) => {
  return (
    <div className='text-center'>
        <p className='md:text-lg font-semibold'>{text}</p>
        <p className=' pt-2 italic'>- {name}</p>
    </div>
  )
}

export default ReviewCard