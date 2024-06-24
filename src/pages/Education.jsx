import Footer from '../components/Footer';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Info from '../components/Info';



function Education() {
 const [showInfo, setShowInfo] = useState(true)

  return(
    <>
    {/* <Button/> */}
    <Navbar/>
    {showInfo && <Info closeInfo={() => setShowInfo(false)} />}
    
    <div className=' text-custom-black bg-custom-white font-poppins xl:text-p lg:text-2xl md:text-[20px] sm:text-size-15px' >
      <div className="bg-[url('../src/image/edukasi/bg-image.png')] bg-cover bg-opacity-65 p-10 ">
        <h1 className=' font-bold  md:text-[48px] justify-center items-center flex text-[25px] p-10'>Apa itu Diabetes ?</h1>
      </div>
      
      <div className='container mx-auto p-10 lg:px-20 xl:px-20 '>
        <div className='my-10'>
          <div>
            <p>Diabetes adalah penyakit kronis yang ditandai dengan tingginya kadar gula darah. Glukosa merupakan sumber energi utama bagi sel tubuh manusia. Akan tetapi, pada penderita diabetes, glukosa tersebut tidak dapat digunakan oleh tubuh.</p>
            <div className='flex flex-row gap-8 mt-8'>
              <div className='bg-custom-blue2 bg-opacity-40 p-8 rounded-lg flex flex-col  items-center gap-5'>
                <h3 className='font-semibold'>Diabetes Tipe 1</h3>
                <p className='text-justify'>Diabetes tipe 1 adalah kondisi medis dimana kadar gula dalam darah yang melebihi batas normal dan diakibatkan oleh tubuh tidak mampu menghasilkan hormon insulin secara optimal.</p>
              </div>
              <div className='bg-custom-blue2 bg-opacity-40 p-8 rounded-lg flex flex-col  items-center gap-5'>
                <h3 className='font-semibold'>Diabetes Tipe 2</h3>
                <p className='text-justify'>Diabetes melitus tipe 2 adalah penyakit kronis yang ditandai dengan peningkatan kadar gula darah dalam tubuh akibat resistensi insulin atau produksi insulin yang tidak akurat.</p>
              </div>
            </div>
          </div>
        </div>

        <div className=''>
          <div className='flex flex-col font-poppins gap-10'>
            <h1 className='text-3xl font-semibold'>Beberapa aspek yang bisa mendeteksi seseorang terkena diabetes :</h1>


            <div className='border-[3px] p-6 border-custom-blue flex items-center gap-5 rounded-lg'>
              {/* left */}
              <div className='flex flex-col gap-3'>
                <h2 className=' font-semibold'>1. Kadar glukosa</h2>
                <p>Glukosa merupakan sumber energi utama bagi sel tubuh manusia. Pada penderita diabetes, glukosa tidak dapat digunakan oleh tubuh karena kurangnya insulin. Kadar gula darah dikendalikan oleh hormon insulin yang diproduksi oleh pankreas.</p>
              </div>
              {/* right */}
              <div>
                <img src="../src/image/edukasi/img1.png" alt="img1" />
              </div>
            </div>

            <div className='border-[3px] p-6 border-custom-blue flex items-center gap-5 rounded-lg'>
              {/* left */}
              <div>
                <img src="../src/image/edukasi/img2.png" alt="img2" />
              </div>
              {/* right */}
              <div className='flex flex-col gap-3'>
                <h2 className='font-semibold'>2. Tekanan Darah</h2>
                <p>Pasien dengan diabetes harus menjaga tekanan darah mereka stabil. Tekanan darah normal untuk pasien diabetes adalah 130/80.</p>
              </div>
            </div>

            <div className='border-[3px] p-6 border-custom-blue flex items-center gap-5 rounded-lg'>
              <div className='flex flex-col gap-3'>
                <h2 className='font-semibold'>3. Ketebalan kulit</h2>
                <ul className='ml-5 list-disc'>
                  <li>Akantosis nigrikans: Kondisi ini ditandai dengan munculnya area berwarna gelap pada lipatan-lipatan tubuh.</li>
                  <li>Dermopati diabetik: Masalah kulit yang menyerang kaki penderita diabetes.</li>
                  <li>Lenting diabetes: Terkadang penderita diabetes memiliki lentingan pada tangan, lengan, jari, atau kakinya.</li>
                  <li>Reaksi alergi: Penderita diabetes bisa mengalami alergi terhadap obat-obatan atau insulin.</li>
                </ul>
              </div>
              <div>
                <img src="../src/image/edukasi/img3.png" alt="img3" />
              </div>
            </div>

            <div className='border-[3px] p-6 border-custom-blue flex items-center gap-5 rounded-lg'>
              <div>
                <img src="../src/image/edukasi/img4.png" alt="img4" />
              </div>
              <div className='flex flex-col gap-3'>
                <h2 className='font-semibold'>4. Insulin</h2>
                <p>Pankreatitis menghasilkan hormon insulin untuk membantu mengendalikan gula darah. Hormon ini mengatur kadar gula darah dan memastikan glukosa dapat masuk ke dalam tubuh untuk diubah menjadi energi.</p>
              </div>
            </div>

            <div className='border-[3px] p-6 border-custom-blue flex items-center gap-5 rounded-lg'>
              <div className='flex flex-col gap-3'>
              <h2 className='font-semibold'>5. Indeks Massa Tubuh (IMT)</h2>
              <p>metrik kesehatan yang digunakan untuk mengukur lemak tubuh dan dampaknya pada kesehatan populasi dan individu. IMT dihitung berdasarkan tinggi dan berat badan seseorang. Kategori IMT meliputi:</p>
              <ul className='ml-5 list-decimal'>
                <li>Kurus - Kurang dari 18,5</li>
                <li>Berat Normal - 18,5-24,9</li>
                <li>Kelebihan Berat Badan - 25-29,9</li>
                <li>Obesitas - 30 atau lebih</li>
              </ul>
              </div>
              <div>
                <img src="../src/image/edukasi/img5.png" alt="img5" />
              </div>
            </div>

            <div className='border-[3px] p-6 border-custom-blue flex items-center gap-5 rounded-lg'>
              <div>
                <img src="../src/image/edukasi/img6.png" alt="img6" />
              </div>
              <div className='flex flex-col gap-3'>
                <h2 className='font-semibold'>6. Keturunan yang mengidap diabetes</h2>
                <ul className='list-disc ml-5'>
                <li>Faktor Genetik: Diabetes sering disebut sebagai penyakit keturunan. Risiko seseorang mengalami diabetes tipe 2 meningkat jika ada riwayat keluarga yang mengidap penyakit ini.</li>
                <li>Faktor Usia: Seiring bertambahnya usia, risiko terkena diabetes tipe 2 juga meningkat.</li>
                <li>Pencegahan: Meskipun memiliki faktor keturunan, Anda dapat mengontrol risiko dengan menjalani gaya hidup sehat dan memantau gula darah secara rutin.</li>
              </ul>
              </div>
              
            </div>

            <div className='border-[3px] p-6 border-custom-blue flex items-center gap-5 rounded-lg'>
              <div className='flex flex-col gap-3'>
                <h2 className='font-semibold'>7. Usia</h2>
                <p>meskipun banyak yang menganalisis dengan usia lanjut, penyakit ini juga dapat terjadi di usia muda</p>
              </div>
              <div>
                <img src="../src/image/edukasi/img7.png" alt="img7" />
              </div>
            </div>

            <div className='border-[3px] p-6 border-custom-blue flex gap-5 rounded-lg'>
              <p className=' text-justify'>Dari ketujuh aspek data yang dapat digunakan untuk menentukan apakah kita menderita diabetes, pengecekan terlebih dahulu dapat dilakukan secara mandiri menggunakan alat kesehatan yang sesuai atau langsung ke dokter untuk mengukur atau mengetahui semua data seperti glukosa, tekanan darah, ketebalan kulit, insulin, tinggi badan, dan berat badan.</p>
            </div>

            <div className='grid grid-flow-col bg-custom-blue2 bg-opacity-[40%] p-10 rounded-lg items-center'>
              <p className='text-justify'>Setelah mengetahui semuanya, Anda akan dapat melakukan pengecekan secara online melalui platform DiabeTech untuk mengetahui apakah Anda memiliki diabetes.</p>

              <NavLink to="/predict" className={({ isActive }) => isActive? 'font-bold': 'text-white' }>
                <button className='bg-custom-pink ml-5 text-custom-white font-semibold p-3 rounded-lg xl:text-p md:text-[20px] lg:text-[20px] sm:text-size-15px items-center'>Check Now</button>
              </NavLink>
            </div>
            
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  )

}

export default Education; // Add the default export
