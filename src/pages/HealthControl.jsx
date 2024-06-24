import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React from 'react'
import { NavLink } from 'react-router-dom';


function HealthControl() {
  return (
    <>
    <Navbar />
    <div className='bg-custom-white font-poppins'>
        <div className='container mx-auto py-12 xl:text-p lg:text-2xl md:text-[20px] sm:text-size-15px'>
            <img src="../src/image/health/health1.png" alt=""  className=' w-full pb-5'/>
            <div className='flex flex-col gap-5'>
                <h1 className='font-bold'>Pencegahan Diabetes</h1>
                <p className=' text-justify'>Diabetes tipe 1 tidak dapat dicegah karena pemicunya belum diketahui. Sementara itu, diabetes tipe 2 dan diabetes gestasional dapat dicegah, yaitu dengan pola hidup sehat. Beberapa upaya yang bisa dilakukan untuk mencegah diabetes di antaranya:</p>
                <ul className=' list-decimal mb-5 ml-6'>
                    <li> Mengatur frekuensi dan menu makanan menjadi lebih sehat</li>
                    <li>Rutin berolahraga dan melakukan aktivitas fisik</li>
                    <li>Menjaga berat badan ideal</li>
                    <li>Beristirahat dan tidur yang cukup</li>
                    <li>Berhenti merokok</li>
                    <li>Menghindari konsumsi minuman beralkohol</li>
                    <li>Mengelola stres dengan baik</li>
                    <li>Rutin menjalani pengecekan gula darah, setidaknya sekali dalam 1 tahun</li>
                </ul>
            </div>
            <NavLink to='/' className={({isActive}) => isActive? 'text-custom-blue font-semibold pl-5 text-wrap' : 'text-pink'}>
                <button type="button" className=' hover:font-semibold hover:text-custom-blue text-custom-blue'>Baca Selengkapnya</button>
            </NavLink>
            <div className='grid grid-rows-2 grid-flow-col gap-x-6 gap-y-6 mt-3'>
                <div className=' bg-custom-blue2 bg-opacity-40 rounded-xl row-span-2 cursor-pointer hover:scale-105'>
                    <img src="../src/image/health/health2.png" alt="health2" className=' xl:w-full rounded-t-lg' />
                    <div className='flex flex-col gap-10 p-5 '>
                    <h3 className=' font-bold'>10 Cara Mengontrol Kadar Gula Darah bagi Orang Diabetes</h3>
                    <p className=' text-justify'>Diabetes belum bisa disembuhkan sepenuhnya, tapi penyandang diabetes tetap bisa beraktivitas normal dengan mengontrol kadar gula darah dalam batas normal. Simak beberapa tips menjaga kadar gula darah tetap normal berikut ini.</p> 
                    </div>
                    
                </div>
                <a href='/health1' className='bg-custom-blue2 bg-opacity-40 rounded-xl cursor-pointer hover:scale-105 '>
                    <img src="../src/image/health/health3.png" alt="health3" className='xl:w-full rounded-t-lg' />
                    <div className=' font-bold p-1'>
                       <h3 className='text-justify'>Mengulik Manfaat Daun Insulin untuk Diabetes</h3> 
                    </div>
                    
                </a>
                <div className='bg-custom-blue2 bg-opacity-40 w-fit rounded-xl cursor-pointer hover:scale-105'>
                    <img src="../src/image/health/health4.png" alt="health4" className='xl:w-full rounded-t-lg'/>
                    <div className=' font-bold p-1 '>
                       <h3 className=' text-justify mx-2'>10 Perawatan Kulit Diabetes, Cegah Komplikasi Lebih Lanjut</h3> 
                    </div>
                    
                </div>                
            </div> 
        </div>


        <div className=' bg-custom-blue2 bg-opacity-40 flex flex-col justify-center content-center items-center mb-24 text-custom-white py-9'>
                    <h1 className=' font-bold text-custom-black'>Dokter kami :</h1>
                    <div className='grid grid-cols-2 gap-10 justify-center xl:w-fit lg:w-1/2 md:w-1/2 sm:w-1/2 w-1/2'>
                        
                        <div className=' bg-custom-blue2 rounded-t-[999px] xl:w-fit md:w-fit lg:w-fit sm:w-fit hover:scale-105'>
                            <img src="../src/image/health/Dokter1.png" alt="Laki-laki" className=''/> 
                            <div className='bg-custom-blue text-custom-white mt-4 '>
                            <div className='flex flex-col justify-center items-center gap-2 py-3'>
                               <h2 className='font-semibold text-size-15px xl:text-[36px]'>Hanafi Nilifda</h2>
                            <div className=' flex items-center gap-3 w-1/2 '>
                                <a href="">
                                    <img src="../src/Image/ig.svg" alt="ig" />
                                </a>
                                <a href="">
                                    <img src="../src/Image/fb.svg" alt="fb" />
                                </a>
                                <a href="">
                                    <img src="../src/Image/tt.svg" alt="tt" />
                                </a>
                            </div> 
                            </div>
                            </div>
                        </div>
                        <div className=' bg-custom-blue2 rounded-t-[999px] hover:scale-105'>
                            <img src="../src/image/health/Dokter2.png" alt="perempuan" className='' /> 
                            <div className='bg-custom-blue text-custom-white mt-4 '>
                            <div className='flex flex-col justify-center items-center gap-2 py-2'>
                               <h2 className='font-semibold text-size-15px xl:text-[36px]'>Hanafi Nilifda</h2>
                            <div className=' flex items-center  gap-3 w-1/2 pb-2'>
                                <a href="">
                                    <img src="../src/Image/ig.svg" alt="ig" />
                                </a>
                                <a href="">
                                    <img src="../src/Image/fb.svg" alt="fb" />
                                </a>
                                <a href="">
                                    <img src="../src/Image/tt.svg" alt="tt" />
                                </a>
                            </div> 
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>                
    </div>
    <Footer />
    </>
  )
}

export default HealthControl;
