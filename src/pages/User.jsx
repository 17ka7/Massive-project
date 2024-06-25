import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer'


const User = () => {
  
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');
  const password = localStorage.getItem('password');

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk menyimpan status login

  useEffect(() => {
    // Cek local storage atau kondisi lain untuk menentukan apakah pengguna sudah login
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    if (userLoggedIn === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleSave = () => {
    // Logic untuk menyimpan perubahan user
    console.log('Saved:', { username, email, password, selectedFile });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview('');
    }
  };

  useEffect(() => {
    // Check local storage atau kondisi lain untuk menentukan apakah pengguna sudah login
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    if (userLoggedIn === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleAuthClick = () => {
    // Logika untuk mengatur state isLoggedIn, disesuaikan dengan kebutuhan aplikasi
    setIsLoggedIn(!isLoggedIn);
    localStorage.setItem('isLoggedIn', !isLoggedIn); // Simpan status login ke local storage
  };
  
  return (
    <>
    <div>
        <div className='flex flex-col gap-1 bg-custom-blue text-custom-white'>
        <div className='container mx-auto mt-10 text-xl pb-2'>
          <h1 className=' font-bold xl:text-[40px] lg:text-[30px] md:text-[27px] sm:text-size-15px'>Pengaturan Akun</h1>
        <p>Edit your name, Avatar Etc</p>  
        </div>
        
        </div>
      <div className='container mx-auto font-poppins'>
        
        {/* Left */}
        <div className=' bg-custom-white grid grid-flow-col p-14 gap-10 m-8 rounded-md '>
            <div className='flex flex-col justify-center'>
                <form action="" className=' mb-16 '>
                    <div className='flex flex-col'>
                    <label htmlFor="" className='uppercase py-2 font-bold'>Username</label>
                    <div className='flex border-2 border-custom-blue p-3 rounded-md'>
                    <input  type='text'
                    name='username'
                    value={username}
                    required className=' w-full outline-none bg-custom-white'/> 
                    <img src="../src/Image/account/Person.svg" alt="person" /> 
                    </div>
                    </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='uppercase py-2 font-bold'>Email</label>
                    <div className='flex border-2 border-custom-blue p-3 rounded-md'>
                    <input type='email'
                    name='email'
                    value={email}
                    required className='w-full bg-custom-white outline-none'/> 
                    <img src="../src/Image/account/Envelope.svg" alt="email" />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='uppercase py-2 font-bold'>Password</label>
                    <div className='flex border-2 border-custom-blue p-3 rounded-md'>
                    <input type='password'
                    name='password'
                    required className='w-full bg-custom-white outline-none'/>
                    <img src="../src/Image/account/Password.svg" alt="" />
                    </div>
                </div>
                </form>
                <div className='mb-5'>
                    <button className=' text-custom-blue text-xl font-bold mb-2 font-poppins'>Hapus Akun</button>
                    <p className=' font-bold text-[12px]'>You will recelve an email to confirm your decision Pleace note, that all boards you habe create well be permanently erased</p>
                </div>
                <div className='flex flex-row gap-5 w-full'>
                <button className=' bg-custom-white text-custom-blue border-2 border-custom-blue rounded-lg font-bold py-3 px-10 text-[20px]'>Batal</button>
                <button onClick={handleSave} className=' text-custom-white bg-custom-blue rounded-lg font-bold py-3 px-10 text-[20px]'>Simpan</button>
              </div>
            </div>
            <div className='flex flex-col'>
              {preview ? (
                <img src={preview} alt="Preview" className="mb-4 rounded-full justify-center w-fit" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
              ) : (
                <img src="../src/Image/account/Test Account.svg" alt="Default" className="mb-4" />
              )}
              <label className=' bg-custom-blue p-3 rounded-md font-bold text-custom-white text-center cursor-pointer'>
                Unggah Foto
                <input type="file" onChange={handleFileChange} className="hidden" />
              </label>
            </div>
        </div>
    </div>  
    
    </div>
    
    <Footer/>
    </>
  )
}

export default User