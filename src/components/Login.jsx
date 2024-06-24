import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Login = ({onLogin}) => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password }; // For simplicity, we are not verifying credentials
    onLogin(userData);
  };

  return (
    <>
    <div className=' bg-custom-white flex flex-row'>
        {/* kiri */}
        <div>
            <div className='bg-custom-blue w-[50vw] h-screen rounded-r-[3rem] '>
                <div className='flex flex-col gap-32'>
                    <img src="../src/logo.png" alt="yuhuu" width={250} className='ml-10 mt-5 flex'/>
                </div>
                <div className='flex justify-center items-center mt-8'>
                    <img src="../src/Image/account/Sign In.png" alt="yuhuu" className='xl:w-4/6 sm:w-3/44 sm:mt-48 md:w-3/4 xl:mt-10' />
                </div>
            </div>
        </div>


        {/* kanan*/}
        <div className='flex flex-col justify-center xl:px-40 lg:px-23 md:px-20 sm:px-10 sm:text-xs md:text-xl lg:text-[1.2rem] px-15 '>
            <div className='text-custom-white mb-10 '>
                <a href="" className='flex  flex-row bg-custom-blue p-2 rounded-md w-fit gap-2'>
                    <img src="../src/Image/account/translate.png" alt="translate" className='w-5' />
                    <h3>English(US)</h3>
                    <img src="../src/Image/account/arrow.png" alt="down" className='w-5'/>
                </a>
            </div>

            <h3 className=' text-[20px] font-bold font-poppins'>Mulai Menjelajah</h3>
            <h1 className='text-custom-blue text-h1-log/reg pb-2 font-semibold font-poppins'>Masuk ke Diabetech</h1>

            <div className='flex'>
                <p className=' font-josefin'>Tidak punya akun ?</p>
                <Link to="/register">
                    <a href=""  className='text-custom-blue pl-2 font-josefin'>Daftar</a>
                </Link>      
            </div>

            <form onSubmit={handleSubmit}  action="" className='flex flex-col pt-8 font-poppins text-[17px] sm:text-xs md:text-xl lg:font-1xl xl:text-2xl '>
                <div className='flex flex-col'>
                    <label htmlFor="username" className='uppercase py-2 
                    font-bold'>Username</label>
                    <div className='flex border-2 border-custom-blue p-3 rounded-md'>
                      <input type="text"
                        placeholder=""
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required className='w-full bg-custom-white outline-none text-xl'/>
                      <img src="../src/Image/account/Person.svg" alt="" />  
                    </div>
                    
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password" className='uppercase py-2 font-bold'>Password</label>
                    <div className='flex border-2 border-custom-blue p-3 rounded-md'>
                     <input type="password"
                        placeholder=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required className='w-full bg-custom-white outline-none' />
                     <img src="../src/Image/account/Password.svg" alt="" />   
                    </div>
                    
                </div>
                <button type='submit' className='bg-custom-blue text-custom-white p-3 text-size-15px hover:font-extrabold rounded-md my-5 font-semibold uppercase w-full'>Masuk</button>
            </form>
            
            <div className='flex justify-center flex-row'>
                <img src="" alt="" />
                <p>atau masuk dengan</p>
                <img src="" alt="" />
            </div>
            
            <div className='flex justify-center my-3 gap-2'>
                <a href="/">
                    <img src="../src/Image/account/facebook.png" alt="facebook" />
                </a>
                <a href="/">
                    <img src="../src/Image/account/google.png" alt="google" />
                </a>
            </div>

            <p className='text-justify font-josefin'>By clicking the Sign in Button, you therefore agree to the private Policy.For more information, read about our privacy here</p>
        </div>

    </div>
    </>
  )
}

export default Login