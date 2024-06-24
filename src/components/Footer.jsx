import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='bg-custom-blue text-custom-white  font-poppins p-8'>

        <div className=' container mx-auto xl:text-p md:text-[20px] lg:text-[20px] sm:text-size-15px items-center '>
        <img src="../src/logo.png" alt="logo " className=' w-40'/>
            <div className=''>
            <div className='grid grid-cols-6 gap-5 my-5 font-normal'>
              <div className='text-white col-span-2 '>
                <p className='pb-20'>DiabeTech ingin menjadi sumber informasi 
                anda dalam membuat keputusan kesehata
                dan agar anda bisa selalu hidup sehat dan bahagia </p>
                  <div className='flex gap-1 items-center'>
                    <p>ikuti kami:</p>
                    <div className='flex gap-2 w-24'>
                      <a href="https://www.instagram.com/a_ekaaaaaa/?hl=en" target='blank'><img src="../src/image/ig.svg" alt="ig" /></a>
                      <a href="https://www.facebook.com/eka.amanda.37/" target='blank'><img src="../src/image/fb.svg" alt="fb" /></a>
                      <a href="https://www.tiktok.com/@mdw764" target='blank'><img src="../src/image/tt.svg" alt="tt" /></a>
                    </div>
                  </div>
              </div>
          
              <div className='flex flex-col '>
                <h3>Kategori</h3>
                <h3>Cek Kesehatan</h3>
                <h3>Konsultasi</h3>
                <h3>Komunitas</h3>
              </div>

              <div className='flex flex-col col-span-2'>
                <h3>Informasi</h3>
                <h3>Ketentuan Pengguna</h3>
                <h3>kebijakan Privasi</h3>
                <h3>Kebijakan Iklan dan Sponsor</h3>
                <h3>Panduan Komuikasi</h3>
                <h3>Kebikan Editor dan Koreksi</h3>
              </div>

              <div className='flex flex-col'>
                <a href="">Diabetech</a>
                <a href="">Edukasi</a>
                <a href="">Predict</a>
                <a href="">Healt</a>
                <a href="">Forum</a>
              </div>
            </div>
            <hr />
            <p className='flex justify-center items-center pt-6'>2024 Dharmikasadaya | All Right reserved
            </p>

          </div>
  
        </div>
        
      </footer>

      
    </>
  )
}

export default Footer
