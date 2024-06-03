import React, { useState } from 'react'
import Footer from '../components/Footer'
import Button from '../components/Button'
// import { Question } from '../data/Question'

const Test = () => {
    
  return (
    <>
    <Button/>
    <div className=' bg-custom-white font-poppins py-28 px-36 '>INI HALAMAN TEST
        <div className='bg-custom-blue2 bg-opacity-80 border-2 border-custom-blue p-10 rounded-2xl container mx-auto max-w-5xl'>
            <div className='flex flex-col gap-5 justify-center'>
                <h1 className='font-semibold mb-5'>1. Soal no 1</h1>
                <ul className='flex flex-col gap-3'>
                    <li className='border rounded-xl p-3 bg-custom-white'>Opsi 1</li>
                    <li className='border rounded-xl p-3 bg-custom-white'>Opsi 2</li>
                </ul>

                <div className='flex flex-row justify-end items-end gap-3 text-custom-white font-semibold mt-10'>
                    <div className='bg-custom-pink flex w-fit py-3 px-5 rounded-md'>
                        <img src="../src/Image/predict/Chevron Left.svg" alt="down" width={25} />
                        <button>Kembali</button>
                    </div>
                    <div className='bg-custom-blue flex w-fit py-3 px-5 rounded-md'>
                        <img src="../src/Image/predict/Chevron Right.svg" alt="down" width={25}/>
                        <button>Selanjutnyai</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Test