import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Button = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null)

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // Tambahkan logika logout di sini
      setIsLoggedIn(false);
      setUser(null)
    } else {
      // Tambahkan logika login di sini
      setIsLoggedIn(true);
      setUser(true)
    }
  };


  return (
    <nav className=" bg-custom-blue p-4 font-normal text-custom-white font-poppins">
      <div className="flex flex-row justify-between items-center container mx-auto text-[16px] sm:text-[1rem] xl:text-[1.4rem] lg:text-[1.3rem] md:text-[1.2rem] ">
        <div className="text-white text-lg font-bold">
        <div>
          <img src="../src/logo.png" alt="DiabeTech" className="xl:w-fit lg:w-40 md:w-32 sm: w-24"/>
        </div>
        </div>
        <ul className="flex flex-row gap-8 items-center">

        <li>
        <NavLink
        to="/" exact 
        className={({ isActive }) =>
            isActive ? 'border-b-4 border-custom-pink font-semibold duration-[2000ms] ' : 'text-pink'
        }
        >Home</NavLink>
        </li>
        <li>
        <NavLink
        to="/education"
        className={({ isActive }) =>
            isActive ? 'border-b-4 border-custom-pink font-semibold duration-[1000ms]' : 'text-pink'
        }
        >Education</NavLink>
        </li>
        <li>
        <NavLink to="/predict" className={({isActive}) => isActive? 'border-b-4 border-custom-pink font-semibold duration-[1000ms] ' : 'text-pink'}>Predict</NavLink>
        </li>
        <li>
        <NavLink to="/healthcontrol" className={({isActive}) => isActive? 'border-b-4 border-custom-pink font-semibold duration-[1000ms] ' : 'text-pink'}>Health Control</NavLink>
        </li>
        <li>
        <NavLink to="/forum" className={({isActive}) => isActive? 'border-b-4 border-custom-pink font-semibold duration-[1000ms]' : 'text-pink'}>Forum</NavLink>
        </li>

        </ul>

        {isLoggedIn ? (
            <>
              
              <button
                onClick={handleAuthClick}
                className="p-2 bg-custom-white rounded-full duration-[1000ms] "
              >
                <NavLink to='/'><img src="../src/Image/account/Person.svg" alt="profile" /></NavLink>
              </button>
            </>
          ) : (
            <>
            <button
              onClick={handleAuthClick}
              className="p-2 bg-custom-pink rounded-[7px] duration-[2000ms] hover:scale-90"
            >
              <NavLink to='/'>Login</NavLink>
            </button>
            </>
            
          )}
      </div>
    </nav>
  );
};

export default Button;
