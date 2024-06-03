import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Button';
import Footer from '../components/Footer';

export const Home = () => {
  return (
    <>
    <Navbar/>
    <div className=' bg-custom-white font-poppins xl:text-p lg:text-2xl md:text-[20px] sm:text-size-15px '>
        <div className=' bg-custom-blue py-7'>
          <div className='container mx-auto text-custom-white flex justify-around items-center gap-4'>
                {/* left */}
                <div className='flex flex-col '>
                    <h1 className=' font-semibold xl:text-[64px] md:text-h1-log/reg lg:text-[30px] sm:text-size-15px mb-2'>Less sugar means more happiness.</h1>
                    <p className=' text-p mb-4'>Offering solutions for diabetes patients equipped with informations  about health, especially diabetes, and symptom prediction. </p>
                    <Link to='/education'><button className=' bg-custom-pink p-3 rounded-lg font-semibold text-md:text-[20px] lg:text-[20px] sm:text-size-15px items-center'>Learn More</button></Link>

                </div>
                {/* right */}
                <div>
                    <img src="../src/image/cuate.svg" alt="home1" />
                </div>
            </div>  
        </div>
            
        <div className='container mx-auto py-10'>

            <div className='flex flex-col gap-10'>
                <div className='flex flex-row justify-center items-center gap-6'>
                    <img src="../src/image/medical.png" alt="home2" className='lg:w-5/12 md:w-1/3 w-1/2 sm:w-1/4'/>
                    <div className='flex flex-col gap-2 pl-3'>
                        <h2 className=' font-semibold md:text-[30px] lg:text-[30px] sm:text-size-15px'>What we're Building</h2>
                        <p className='flex justify-center items-center text-justify'>kami menyediakan solusi dan informasi yang lengkap untuk penderita penyakit diabetes dalam mengakses informasi yangterbaru dan terpecaya. Dengan fokus padafitur prediksi gejala, edukasi, forum,tips dan saran yang sesuai.</p>
                    </div>
                </div>
                <div className=' bg-custom-blue2 bg-opacity-40 p-10 text-justify rounded-lg'>
                    <p>kami memberikan solusi komprehensif bagi mereka yang memiliki gejala atau sudah menderita penyakit diabetes, menyediakan informasi yang akurat dan terpercaya secara gratis. Dengan beragam fitur yang disediakan, seperti fitur prediksi yang membantu pengguna mengetahui kemungkinan terindikasi diabetes, fitur edukasi yang memberikan informasi terbaru seputar kesehatan dan tips yang bermanfaat, dan fitur forum untuk berinteraksi dengan sesama pengguna dan bertukar informasi. Website ini menjadi sumber informasi yang lengkap dan berguna bagi para penderita diabetes dan mereka yang peduli akan kesehatan. Dengan akses yang mudah dan gratis, website ini dapat menjadi panduan yang sangat berguna bagi pengguna yang ingin memantau kondisi diabetes mereka dengan lebih baik dan memperoleh informasi yang diperlukan untuk menjaga kesehatan secara optimal.</p>
                </div>

                <div className=' grid grid-flow-col bg-custom-blue p-10 rounded-lg font-semibold text-custom-white md:text-[20px] lg:text-[20px] sm:text-size-15px items-center'>
                    <p>Mari kita pelajari tentang diabetes. Semakin banyak pengetahuan yang kita miliki, semakin baik kita dapat menjaga kesehatan kita sendiri </p>
                    <Link to='/login'><button className=' bg-custom-pink p-2 rounded-lg items-center transition duration-2500 ease-in-out'>Get Started</button></Link>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home;