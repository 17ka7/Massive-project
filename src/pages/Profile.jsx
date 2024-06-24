import React from 'react'

const Profile = () => {
  return (
    <>
    <div>profile</div>
    <div>
        <div className='flex flex-col gap-1 bg-custom-blue text-custom-white'>
        <div className='container mx-auto mt-10 text-xl pb-2'>
          <h1 className=' font-bold xl:text-[40px] lg:text-[30px] md:text-[27px] sm:text-size-15px'>Pengaturan Akun</h1>
        <p>Edit your name, Avatar Etc</p>  
        </div>
        
        </div>
      <div className='container mx-auto font-poppins'>
        
        {/* Left */}
        <div className=' bg-custom-white grid grid-flow-col p-14 gap-10 '>
            <div className='flex flex-col justify-center'>
                <form action="" className=' mb-16'>
                    <div className='flex flex-col'>
                    <label htmlFor="" className='uppercase py-2 font-bold'>Username</label>
                    <div className='flex border-2 border-custom-blue p-3 rounded-md'>
                    <input  type='text'
                    name='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    <button onClick={handleSave} className='  text-custom-white bg-custom-blue rounded-lg font-bold py-3 px-10 text-[20px]'>Simpan</button>
                </div>
            </div>
            <div className='flex flex-col'>
            <img src="../src/Image/account/Test Account.svg" alt="" />
            <button className=' bg-custom-blue p-3 rounded-md font-bold text-custom-white'>Unggah Foto</button>
        </div> 
        </div>
    </div>  
    
    </div>
    </>
  )
}

export default Profile