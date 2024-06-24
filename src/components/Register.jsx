import React, { useState } from 'react'
import { Link, NavLink,} from 'react-router-dom'

const Register = ({onSignup}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { username, email, password };
        // Panggil fungsi onSignup untuk menyimpan data pengguna dan menandai sebagai login
        onSignup(userData);
        // Redirect ke halaman user setelah berhasil signup
        history.push('/user');
      };
  
  return (
    <>
    <div className='bg-custom-white flex flex-row h-screen'>
        <div className='flex flex-col justify-center xl:px-40 lg:px-23 md:px-20 sm:px-10 sm:text-xs md:text-xl lg:text-[1.2rem] px-15'>
           <div className='text-custom-white mb-10 '>
            <div className='flex  flex-row bg-custom-blue p-2 rounded-md w-fit gap-2'>
                <img src="../src/Image/account/translate.png" alt="translate" className='w-5' />
                <h3>English(US)</h3>
                <img src="../src/Image/account/arrow.png" alt="down" className='w-5' />
            </div>
            </div> 

        <h3 className=' text-size-15px font-bold font-poppins'>Daftar Sekarang</h3>
        <h1 className='text-custom-blue text-[60px] xl:text-[60px] lg:text-h1-log/reg pb-2 font-semibold font-poppins'>Daftar secara gratis</h1>
        <div className='flex'>
            <p>Sudah punya akun ?</p>
            <Link to="/login"><button type='submit' className='text-custom-blue pl-2 font-josefin'>Masuk</button></Link>
        </div>
        <form onSubmit={handleSubmit} action="" className='flex flex-col pt-10 font-poppins text-size-15px sm:text-xs md:text-xl lg:font-1xl xl:text-2xl'>
            <div className='flex flex-col'>
                <label htmlFor="" className='uppercase py-2 font-bold'>Username</label>
                <div className='flex border-2 border-custom-blue p-3 rounded-md'>
                  <input type="text"
                    placeholder=""
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required className=' w-full outline-none bg-custom-white'/> 
                  <img src="../src/Image/account/Person.svg" alt="person" /> 
                </div>
                
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='uppercase py-2 font-bold'>Email</label>
                <div className='flex border-2 border-custom-blue p-3 rounded-md'>
                  <input type="email"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} required  className='w-full bg-custom-white outline-none'/> 
                  <img src="../src/Image/account/Envelope.svg" alt="email" />
                </div>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='uppercase py-2 font-bold'>Password</label>
                <div className='flex border-2 border-custom-blue p-3 rounded-md'>
                   <input type="password"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required className='w-full bg-custom-white outline-none'/>
                   <img src="../src/Image/account/Password.svg" alt="" />
                </div>
                
            </div>

            <NavLink to="/education">
                <button type="submit" className='bg-custom-blue text-custom-white p-3 text-size-15px hover:font-extrabold rounded-md my-5 font-semibold uppercase w-full'>Daftar</button>
            </NavLink>
        </form>
        <p className='text-justify font-josefin'>By clicking the Sign in Button, you therefore agree to the private Policy.For more information, read about our privacy here</p>

        </div>

          
        {/* right */}
        <div>
            <div className='bg-custom-blue w-[50vw] h-screen rounded-l-[3rem] '>
                <div className='flex flex-col gap-32'>
                    <div className=''>
                        <img src="../src/logo.png" alt="img1"  width={200} className='ml-10 mt-5 flex'/>
                    </div>
                    <div className='flex justify-center items-center mt-8'>
                        <img src="../src/Image/account/Sign Up.png" alt="img2" className='  xl:w-4/6'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Register