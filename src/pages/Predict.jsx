import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Predict() {
  return (
    <>
    <Navbar/>
    <div className=' bg-custom-blue font-poppins'>
    <div className='flex flex-row py-12 container mx-auto justify-between'>
            <div className=' text-custom-white flex flex-col justify-center gap-5 md:mx-8'>
                <h1 className=' xl:text-[50px] md:text-[40px] font-semibold mb-4 sm:text-[28px] text-[28px] '>Apakah kadar gula anda lebih tinggi dari biasanya ?</h1>
                <NavLink to="/test" >
                    <button className='bg-custom-pink p-3 rounded-lg font-semibold xl:text-p md:text-[20px] lg:text-[20px] sm:text-size-15px items-center'>Check sekarang</button>
                </NavLink>
            </div>
            <div>
                <img src="../src/Image/predict/Predict.png" alt="boldtest" />
            </div>
        </div>

    <div className='bg-custom-white p-24'>
    <div className='flex flex-col justify-center py-10 container mx-auto gap-36 xl:text-p lg:text-2xl md:text-[20px] sm:text-size-15px'> 
        <div className='flex flex-col justify-center'>
            <div className='flex items-center space-x-2'>
               <div className="w-4 h-4 border border-custom-blue rounded-full"></div>
                <h3>Kami akan mendeteksi potensi gula darah tinggi.</h3> 
            </div>
            <div className='flex items-center space-x-2'>
                <div className="w-4 h-4 border border-custom-blue rounded-full"></div>
                <h3>Kami akan mendeteksi potensi gula darah tinggi.</h3>
            </div>
            <div className='flex items-center space-x-2'>
                <div className="w-4 h-4 border border-custom-blue rounded-full"></div>
               <h3>Kami akan bertanya tentang pola hidup anda dan kesehatan.</h3> 
            </div>
            <div className='flex items-center space-x-2'>
               <div className="w-4 h-4 border border-custom-blue rounded-full"></div>
                <h3>Kerahasiaan data medis anda dilindungi.</h3> 
            </div>
            <div className='flex items-center space-x-2'>
                <div className="w-4 h-4 border border-custom-blue rounded-full"></div>
                <h3>Poses ujian hanya berlangsung selama beberapa menit.</h3>
            </div>
            
        </div>
        <div className='flex flex-col justify-center '>
            <div className='flex items-center w-6 gap-2'>
                <img src="../src/Image/predict/High Importance.png" alt="bold" />
                <h2>
                Disclaimer
            </h2>
            </div>
            
            <h3 className='pl-8 text-justify'>
            Alat Cek Risiko ini tidak dapat berfungsi sebagai pengganti konsultasi 
            medis langsung. Anda harus selalu berkonsultasi dengan dokter 
            Anda sebelum memutuskan untuk mengambil tindakan medis
            terkait penyakit Anda.DiabeTech tidak menyediakan diagnosis, 
            perawatan, atau rekomendasi medis.
            </h3>
        </div>
    </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Predict
