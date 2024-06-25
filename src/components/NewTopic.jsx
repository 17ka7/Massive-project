import React, {useState} from 'react'


const NewTopic = ({onClose, addPost}) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() === '') {
      alert('Please enter some content.'); // Validasi sederhana untuk konten kosong
      return;
    }
    const userName = localStorage.getItem('username');
    const passWord =localStorage.getItem('password')
    const userImage = localStorage.getItem('userImage');

    // Menambahkan post dengan userImage dan userName dari local storage
    addPost({
      content,
      userImage, // Path gambar user dari local storage
      userName, // Nama user dari local storage
    });
    onClose(); // Panggil onClose setelah menambahkan post
    setContent('');
  };


  return (
    <>
    <div className='fixed inset-0 bg-custom-blue bg-opacity-50 backdrop-blur-sm flex justify-center items-center font-poppins py-9'>
      <div className=' bg-custom-white py-9 rounded-xl flex flex-col gap-5 p-5'>
        <div className='flex flex-row items-center gap-5 text-custom-black font-semibold '>
          <img src="../src/Image/Forum/user.svg" alt="profile" />
          <h3 className=' text-[25px]'>Bagas Prasetyo</h3>
        </div>
        <div className='flex flex-col border-2 border-custom-blue bg-custom-white rounded-2xl'>
          
          <form onSubmit={handleSubmit} className='flex flex-col gap-5 p-2'>
            <textarea 
              cols={60}
              rows={7}
              placeholder='Write Interesting Topic you want'
              className='bg-custom-white outline-none text-[20px] p-4'
              value={content}
              onChange={(e) => setContent(e.target.value)}></textarea>
            <div className='flex flex-row gap-2 justify-end items-center'>
            <img src="../src/Image/Forum/Add image.svg" alt="upload image" width={50}/>
            <img src="../src/Image/Forum/Happy.svg" alt="emoji" width={50}/>
            <div className='bg-custom-blue text-custom-white font-semibold p-1 w-fit px-4 rounded-lg hover:font-bold  text-[20px]'>
              <button type='submit' className=' hover:scale-105'>Send</button>
            </div>
            </div>
            
          </form>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default NewTopic