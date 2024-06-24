import React, {NavLink} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Health1 = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col bg-custom-white font-poppins xl:text-p lg:text-2xl md:text-[20px] sm:text-size-15px'>
        <div className='my-16 container mx-auto'>
           <div className=''>
            <h1 className=' font-bold text-[35px] ml-3'>Mengulik Manfaat Daun Insulin untuk Diabetes</h1>
            <ul className='flex text-custom-blue gap-3 text-[18px] ml-3'>
                <li><a href="">Manfaaat untuk diabetes</a></li>
                <img src="../src/Image/health/Vector 6.svg" alt="" />
                <li><a href="">Manfaat lain</a></li>
                <img src="../src/Image/health/Vector 6.svg" alt="" />
                <li><a href="">Cara turunkan gula darah</a></li>
            </ul>
            <img src="../src/Image/health/daun.svg" alt="" className=' my-7' />
            <p>Tidak sedikit orang dengan diabetes melitus (diabetesi) yang mencari alternatif pengobatan alami. Salah satunya adalah dengan mengonsumsi daun insulin. <br /><br />Tanaman ini diyakini memiliki fungsi yang sama dengan suntik insulin, yaitu mengendalikan kadar gula dalam darah. Namun, apakah benar tanaman insulin ini memberikan manfaat bagi pasien diabetes?</p>
        </div>
        <div>
            <h3>Potensi daun insulin mengendalikan gula darah</h3>
            <p>Mengonsumsi daun insulin (Costus igneus) diyakini dapat menurunkan kadar gula darah.  <br /><br />Pernyataan ini diperkuat oleh penelitian yang diterbitkan dalam Journal of India System Medicine. <br /><br />Tim peneliti tersebut membandingkan efektivitas daun insulin dengan kunyit sebagai obat herbal diabetes. <br /><br />Pada penelitian ini, mereka membagi kelinci ke dalam 2 kelompok, yakni kelompok yang mengonsumsi tanaman insulin dan kunyit. <br /><br />Kelinci tersebut diberikan deksametason dengan dosis sebanyak 10 mg/kg terlebih dahulu agar kadar gulanya naik menyerupai kondisi diabetes. <br /><br />Hasil penelitian menunjukkan bahwa terjadi penurunan kadar glukosa yang signifikan pada kelinci yang mengonsumsi tanaman insulin dan kunyit. <br />Memang belum jelas seperti apa atau bagaimana mekanisme tanaman insulin ini bisa menurunkan gula darah yang tinggi. <br /><br />Akan tetapi, penelitian ini memberikan hasil yang menjanjikan dalam pengobatan diabetes.</p>
        </div> 
        <div className=' text-custom-blue mt-4 hover:font-semibold'>
          <a href="">Baca Selengkapnya</a>
        </div>
        
        </div>
        
        
    </div>
    <Footer/>
    </>
  )
}

export default Health1