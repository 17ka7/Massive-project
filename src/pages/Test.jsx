import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Quizdata } from '../data/Quizdata'


const Test = () => {
  let [index, setIndex] = useState(0)
  let [question, setQuestion] = useState(Quizdata[index])
  let [lock, setLock] = useState(false)
  let[score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false); 
  

  //check jawaban
 const checkAns = () => {
  if(lock === false){
    if(question.answer===answer){
      e.target.classList.add('Correct')
      setLock(true)
      setScore(prev=>prev+1)
    }else{
      e.target.classList.add('Wrong')
      setLock(true)
    //   array_option[question.answer-1].current.classList.add("correct")
    }
  }
 }

 // Fungsi untuk menampilkan popup hasil
 const showResultPopup = () => {
    setShowResult(true);
  }

  // Fungsi untuk menutup popup hasil
  const closeResultPopup = () => {
    setShowResult(false);
  }

 //Tombol Next
 const next = () => {
    if(index < Quizdata.length - 1){
        //jika ada lanjut ke pertanyaan berikutnya
        setIndex(prevIndex => prevIndex+1)
        setQuestion(Quizdata[index+1])
    }else{
        showResultPopup();
    }  
 }

 const prev = ()=>{
    if(index > 0){
        setIndex(prevIndex => prevIndex-1)
        setQuestion(Quizdata[index-1])
    }else{
        console.log('kembali ke pertanyaan')
    }
 }
    
  return (
    <>
    <Navbar/>
    <div className=' bg-custom-white font-poppins py-28 px-36 '>
        <div className='bg-custom-blue2 bg-opacity-40 p-10 rounded-2xl container mx-auto max-w-5xl'>
            <div className='flex flex-col gap-5 justify-center mx-5'>
                <h1 className='font-semibold mb-5 xl:text-[24px] md:text-[20px]'>{index+1}. {question.question} </h1>

                <ul className='flex flex-col gap-3 xl:text-[20px] md:text-[18px]'>
                {Quizdata[index].option.map((option, i)=>(
                    <li key={option.i} className='rounded-xl  p-5 bg-custom-white hover:border-custom-blue hover:border'>{option}</li>
                )
                )}
                
                </ul>

                <div className='flex flex-row justify-end items-end gap-3 text-custom-white font-semibold mt-10 xl:text-[24px] md:text-[18px]'>
                    {index >= 0 && (
                      <div className='bg-custom-pink flex w-fit py-3 px-5 rounded-xl'>
                        <img src="../src/Image/predict/Chevron Left.svg" alt="down" width={25} />
                        <button onClick={prev}>Kembali</button>
                    </div>  
                    )}                    
                    <div className='bg-custom-blue flex w-fit py-3 px-5 rounded-xl'>
                        {index > Quizdata.length -2 ? (
                            
                          <button onClick={next}>Kirim</button>
                        ):(
                           <>
                            <div className='flex'> 
                               <button onClick={next}>Selanjutnya</button> 
                          <img src="../src/Image/predict/Chevron Right.svg" alt="down" width={25}/>  
                            </div>
                            </> 
                        )}
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>

    {/* popup hasil */}
    {showResult && (
        <>
        <div className='fixed top-0 left-0 w-full h-full bg-opacity-80 flex justify-center items-center z-50 bg-custom-blue font-poppins font-semibold xl:text-[24px] md:text-[20px] '>
            <div className='grid grid-rows-2 gap-16 md:w-2/4 lg:w-2/4 justify-center ite'>
               
            <div className='bg-custom-white p-10 rounded-lg flex flex-col justify-center items-center gap-6'>
                <h1 className=' xl:text-[30px] md:text-[25px]'>POSITIVE DIABETES</h1>
                <p>Dari jawaban yang anda berikan presentasi kalau anda menderita diabetes sangat besar </p>
            </div> 

            <div className=' bg-custom-white p-10 rounded-lg flex flex-col justify-center items-center gap-6'>
                <p>jika anda ingin mengetahaui kesehatan anda agar mengurangi dampak dari diabetes, anda bisa cek di </p>
                <a href="/healthcontrol">
                   <button onClick={closeResultPopup} className=' bg-custom-pink p-2 w-fit rounded-lg text-custom-white'>Kontrol Kesehatan</button> 
                </a>
                
            </div>
            </div>
            
            
        </div>
        </>
    )}
    </>
  )
}

export default Test
