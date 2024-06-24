import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export const Home = () => {
  return (
    <>
    <Navbar/>
    <div className=' bg-custom-white font-poppins xl:text-p lg:text-2xl md:text-[20px] sm:text-size-15px '>
        <div className=' bg-custom-blue py-7'>
          <div className='container mx-auto text-custom-white grid grid-flow-col items-center gap-4 my-6'>
                {/* left */}
                <div className='flex flex-col '>
                    <h1 className=' font-semibold xl:text-[64px] md:text-h1-log/reg lg:text-[40px] text-[28px] mb-2'>Kurangi Gula Lebih Banyak Kebahagiaan </h1>
                    <p className=' text-p mb-4 md:text-[24px] lg:text-[25px] sm:text-[18px] xl:text-[30px]'>Menawarkan solusi untuk pasien diabetes yang dilengkapi dengan informasi tentang kesehatan, khususnya diabetes, dan prediksi gejala.</p>
                    <Link to='/education'><button className=' bg-custom-pink p-3 rounded-lg font-semibold md:text-[20px] lg:text-[24px] sm:text-size-15px items-center'>Pelajari Lebih Lanjut</button></Link>

                </div>
                {/* right */}
                <div>
                    <img src="../src/image/cuate.svg" alt="home1" />
                </div>
            </div>  
        </div>
            
        <div className='container mx-auto py-10'>

            <div className='flex flex-col gap-10'>
                <div className='grid grid-flow-col justify-center items-center gap-6 px-5'>
                    <img src="../src/image/medical.png" alt="home2" className=''/>
                    <div className='flex flex-col gap-2 pl-3'>
                        <h2 className=' font-semibold md:text-[28px] lg:text-[28px] sm:text-size-15px'>Tentang website kami</h2>
                        <p className='flex justify-center items-center '>kami menyediakan solusi dan informasi yang lengkap untuk penderita penyakit diabetes dalam mengakses informasi yangterbaru dan terpecaya. Dengan fokus padafitur prediksi gejala, edukasi, forum,tips dan saran yang sesuai.</p>
                    </div>
                </div>
                <div className=' bg-custom-blue2 bg-opacity-40 p-10 text-justify rounded-lg'>
                    <p>kami memberikan solusi komprehensif bagi mereka yang memiliki gejala atau sudah menderita penyakit diabetes, menyediakan informasi yang akurat dan terpercaya secara gratis. Dengan beragam fitur yang disediakan, seperti fitur prediksi yang membantu pengguna mengetahui kemungkinan terindikasi diabetes, fitur edukasi yang memberikan informasi terbaru seputar kesehatan dan tips yang bermanfaat, dan fitur forum untuk berinteraksi dengan sesama pengguna dan bertukar informasi. Website ini menjadi sumber informasi yang lengkap dan berguna bagi para penderita diabetes dan mereka yang peduli akan kesehatan. Dengan akses yang mudah dan gratis, website ini dapat menjadi panduan yang sangat berguna bagi pengguna yang ingin memantau kondisi diabetes mereka dengan lebih baik dan memperoleh informasi yang diperlukan untuk menjaga kesehatan secara optimal.</p>
                </div>

                <div className=' grid grid-flow-col bg-custom-blue p-10 rounded-lg font-semibold text-custom-white xl:text-p md:text-[20px] lg:text-[20px] sm:text-size-15px'>
                    <p>Mari kita pelajari tentang diabetes. Semakin banyak pengetahuan yang kita miliki, semakin baik kita dapat menjaga kesehatan kita sendiri </p>
                    <Link to='/login'><button className=' bg-custom-pink p-2 rounded-lg items-center transition duration-2500 ease-in-out font-semibold'>Mulai</button></Link>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home;