import React from 'react'

const Info = ({closeInfo}) => {
  return (
    <>
    <div className='fixed inset-0 bg-custom-blue bg-opacity-60 rounded-lg font-poppins xl:text-p lg:text-xl md:text-[17px] sm:text-size-15px lg:px-20 xl:px-20 py-6'>
        <div className='container mx-auto bg-custom-white rounded-lg lg:p-10 xl:p-10 md:p-10 sm:p-10 flex-col flex justify-center items-center relative xl:w-1/3 lg:w-3/5 md:w-2/3 mt-44'>
          <div className='flex flex-col gap-10 font-semibold justify-center items-center'>
            <p>Hai! Selamat datang di DiabeTech. Kami di sini untuk membantu Anda mendapatkan informasi akurat dan solusi terbaik untuk mengelola diabetes Anda dengan mudah dengan bantuan dokter - dokter terpercaya.</p>
            <button onClick={closeInfo} className=' bg-custom-pink px-7 rounded-lg py-2 text-custom-white w-fit  '>Oke</button>
        </div>  
        </div>
        
    </div>
    </>
  )
}

export default Info