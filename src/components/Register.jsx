import React, { useState } from 'react'
import { Link, NavLink, json } from 'react-router-dom'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleRegis = async (e) => {
        e.preventDeafault();
        try {
            const response = await fetch('https://api.dna-service.com/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({username, email, password})
            })
            const data = await response.json();
            if(response.ok){
                setMessage('Registration Sucessful!')
            }else{
                setMessage(data.error)
            }

        } catch (error) {
            setMessage('An error occurred. Please try again.')
        }
    }

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

        <h3 className='uppercase text-size-15px font-extrabold font-poppins'>Register Now</h3>
        <h1 className='text-custom-blue text-h1-log/reg pb-2 font-semibold font-poppins'>Sign Up For Free</h1>
        <div className='flex'>
            <p>Already have an account ?</p>
            <Link to="/login"><button type='submit' className='text-custom-blue pl-2 font-josefin'>Sign In</button></Link>
        </div>
        <form onSubmit={handleRegis} action="" className='flex flex-col pt-8 font-poppins text-size-15px sm:text-xs md:text-xl lg:font-1xl xl:text-2xl'>
            <div className='flex flex-col'>
                <label htmlFor="" className='uppercase py-2 font-bold'>Username</label>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required className='border-2 border-custom-blue p-3 rounded-md'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='uppercase py-2 font-bold'>Email</label>
                <input type="email" name="username" value={email} onChange={(e) => setEmail(e.target.value)} required  className='border-2 border-custom-blue p-3 rounded-md'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='uppercase py-2 font-bold'>Password</label>
                <input type="password" name="username" value={password} onChange={(e) => setPassword(e.target.value)} required className='border-2 border-custom-blue p-3 rounded-md'/>
            </div>

            <NavLink to="/education">
                <button type="submit" className='bg-custom-blue text-custom-white p-3 text-size-15px hover:font-extrabold rounded-md my-5 font-semibold uppercase w-full'>Sign Up</button>
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
                    <div className='flex justify-center items-center mt-10'>
                        <img src="../src/Image/account/Sign Up.png" alt="img2" width={500}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Register