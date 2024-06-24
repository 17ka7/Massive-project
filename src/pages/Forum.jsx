import Footer from '../components/Footer'
import React, { useState } from 'react'
import Message from '../components/Message'
import Navbar from '../components/Navbar'
import NewTopic from '../components/NewTopic'


function Forum(props) {
  const [showMessage, setShowMessage ] = useState(false)
  const [posts, setPosts] = useState([]);
  const [isAddingPost, setIsAddingPost] = useState(false);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <>

    <Navbar/>
    <div className='flex flex-row bg-custom-blue p-3 gap-10 font-poppins md:px-10 sm:px-5 sm:grid lg:flex lg:flex-row md:flex md:flex-row xl:text-2xl lg:text-xl md:text-[20px] sm:text-size-15px'>
      <div className='flex flex-row container mx-auto gap-5'>
        <div className='bg-custom-white flex flex-col p-7 rounded-xl gap-5 md:w-4/5 xl:w-2/5 '>
      <div className='flex bg-custom-blue w-full text-custom-white p-3 px-6 gap-2 font-semibold rounded-lg justify-center xl:text-[20px]'>
        <img src="../src/Image/Forum/Plus Math.svg" alt="haloo" />
        <button onClick={() => setIsAddingPost(true)}>Start New Topic</button>
      </div>
      {isAddingPost && (
        <NewTopic onClose={() => setIsAddingPost(false)}
        addPost={addPost} />
      )}

      <div className='flex flex-col gap-5 my-10 text-custom-blue justify-center '>
        <h4 className=' font-semibold text-[20px]'>Top Members</h4>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <img src="../src/Image/Forum/profile.svg" alt="profile" width={50}/>
            <h3>Sartika Rahulina</h3>
          </div>
          <p>20k</p>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <img src="../src/Image/Forum/profile.svg" alt="profile" width={50} />
            <h3>Nurul Maulidina</h3>
          </div>
          <p>10k</p>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <img src="../src/Image/Forum/profile.svg" alt="profile" width={50}/>
            <h3>Vania Willa</h3>
          </div>
          <p>4k</p>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <img src="../src/Image/Forum/profile.svg" alt="profile" width={50}/>
            <h3>Keisha Darasya</h3>
          </div>
          <p>10k</p>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <img src="../src/Image/Forum/profile.svg" alt="profile" width={50}/>
            <h3>Veila Nazia</h3>
          </div>
          <p>7k</p>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <img src="../src/Image/Forum/profile.svg" alt="profile" width={50}/>
            <h3>Ferel Bhaqi</h3>
          </div>
          <p>9k</p>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <img src="../src/Image/Forum/profile.svg" alt="profile" width={50}/>
            <h3>Ryan Azizi</h3>
          </div>
          <p>10k</p>
        </div>
      </div>

      <div className='flex flex-col gap-2 text-custom-white font-semibold  '>
        <h1 className=' text-custom-blue mb-5 mt-5 text-[20px]'>Popular Tags</h1>
        <div className='grid grid-flow- gap-1 text-[16px]'>
          <p className='bg-custom-blue w-fit p-3 rounded-2xl'>Diabetes</p>
          <p className='bg-custom-blue w-fit p-3 rounded-2xl'>Melitius</p>
          <p className='bg-custom-blue w-fit p-3 rounded-2xl'>Pola Hidup Sehat</p>
          <p className='bg-custom-blue w-fit p-3 rounded-2xl'>Diet & Nutrisi</p>
          <p className='bg-custom-blue w-fit p-3 rounded-2xl'>Diabetes type 2</p>
        </div>
      </div>
    </div>

    <div className=' flex flex-col items-center container mx-auto xl:text-p lg:text-2xl md:text-[20px] sm:text-size-15px'>
    {posts.length === 0 ? (
          <p ></p>
        ) : (
          posts.map((post, index) => (
            <div className='flex flex-col gap-5 font-poppins'>
      <div key={index} className=' bg-custom-white flex flex-col rounded-2xl gap-5 p-5 xl:text-[20px] lg:text-2xl md:text-[20px] sm:text-size-15px w-full'>
        {/* <div className='bg-custom-white w-full flex flex-row justify-between text-custom-blue items-center font-semibold'>
          <div div className='flex gap-3 items-center text-[20px] '>
            <img src={props.image} alt="halo" width={50} />
            <h3>Post by {props.user}</h3>
          </div>
          <p>{props.time} </p>
        </div> */}
        <p className='p-3 px-6'>{post.content}</p>
      </div>
    </div>

          ))
        )}
    <div className='flex flex-col'>
    <Message image="../src/Image/Forum/profile.svg" user="Nunik" time="1hrs ago" message="gejala umum apa sih yang memungkinkan seseorang terkena penyakit diabetes " />
    <br />
    <Message image="../src/Image/Forum/profile.svg" user="Sartika" time="1hrs ago" message="Selamat malam dokter, ayah saya 58 tahun ada luka di kakinya dan telah selesai melaksanakan operasi pengangkatan sel kulit mati, sekarang dalam masa pemulihan. Namun saya melihat aliran darahnya tidak sampai ke ujung kaki, bagaimana solusi dari permasalahan tersebut dan saya mohon rekomendasi susu untuk tulang ayah saya yang penderita diabetes dokter.Terima kasih." />
    <br />
    <Message image="../src/Image/Forum/profile.svg" user="Nazia" time="1hrs ago" message="Jadi selama 5 hari saya demam dan sudah sembuh tapi saya skrng tidak bisa tidur karena air liur saya keluar terus dan ketika saya hendak menelan kembali saya malah mual dan muntah.. Apa yg harus saya lakukan dok.. Kumohon" />
    <br />
    <Message image="../src/Image/Forum/profile.svg" user="Vania" time="1hrs ago" message="dok mama saya di periksa karna curiga diabet dan ternuata gula darah nya 280 sebelum makan bangun tidur ... dan yang sering d alamai mama saya pegal pegal di badan sering berkeringat dan sering buang air kecil .. pas sekarang udah" />
    <br />
    </div>

    <div className=' bg-custom-pink w-fit p-2 px-6 rounded-lg text-custom-white font-semibold'>
      <button>See More</button>
    </div>
    
    </div>
    
    </div>
      

    </div>
    {showMessage && <NewTopic onClose={() => setShowMessage(false)} />}
    <Footer/>
    </>
  )
}

export default Forum
