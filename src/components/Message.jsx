import React from 'react'

const Message = (props) => {
  return (
    <>
    <div className='flex flex-col gap-5 font-poppins'>
      <div className=' bg-custom-white flex flex-col rounded-2xl gap-5 p-5 xl:text-[20px] lg:text-2xl md:text-[20px] sm:text-size-15px'>
        <div className='bg-custom-white w-full flex flex-row justify-between text-custom-blue items-center font-semibold'>
          <div div className='flex gap-3 items-center text-[20px] '>
            <img src={props.image} alt="halo" width={50} />
            <h3>Post by {props.user}</h3>
          </div>
          <p>{props.time} </p>
        </div>
        <p className='p-3'>{props.message}</p>
      </div>
    </div>
    </>
  )
}

export default Message