
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false)
  const handleBtn = () => {
    if(isloggedIn){
      console.log('LOGOUT')
      isloggedIn(false)
    }else{
      console.log('LOGIN')
      isloggedIn(true)
    }
  }
  return (
    <>
    <div className="bg-custom-blue p-4 font-normal text-custom-white">
      <div className="flex flex-row justify-between items-center container mx-auto text-[16px] sm:text-[1rem] xl:text-[1.4rem] lg:text-[1.3rem] md:text-[1.2rem] ">
        <div>
          <img src="../src/logo.png" alt="DiabeTech" className="xl:w-fit lg:w-40 md:w-32 sm: w-24"/>
        </div>
        <nav className="flex justify-center">
        <ul className="flex flex-row gap-8 items-center">

          <li>
          <NavLink
            to="/home" exact 
            className={({ isActive }) =>
              isActive ? 'border-b-4 border-custom-pink font-semibold duration-[5000ms] ' : 'text-pink'
            }
          >Home</NavLink>
          </li>
          <li>
          <NavLink
            to="/education"
            className={({ isActive }) =>
              isActive ? 'border-b-4 border-custom-pink font-semibold duration-[5000ms]' : 'text-pink'
            }
          >Education</NavLink>
          </li>
          <li>
            <NavLink to="/predict" className={({isActive}) => isActive? 'border-b-4 border-custom-pink font-semibold duration-[5000ms] ' : 'text-pink'}>Predict</NavLink>
          </li>
          <li>
            <NavLink to="/healthcontrol" className={({isActive}) => isActive? 'border-b-4 border-custom-pink font-semibold duration-[5000ms] ' : 'text-pink'}>Health Control</NavLink>
          </li>
          <li>
            <NavLink to="/forum" className={({isActive}) => isActive? 'border-b-4 border-custom-pink font-semibold duration-[5000ms]' : 'text-pink'}>Forum</NavLink>
          </li>
        
        </ul>
      </nav>
      <div className="p-2 bg-custom-pink rounded-[7px] duration-[2000ms] hover:scale-125">
          <button><NavLink className={({isActive}) => isActive? 'font-semibold' : 'text-pink'} to="/login">Login</NavLink></button>
      </div>
      </div>
    </div>
    </>
  )
}
export default Navbar;
