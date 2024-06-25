
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = ({isLoggedIn}) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  
  return (
    <>
    <div className="bg-custom-blue p-4 font-normal text-custom-white">
      <div className="flex flex-row justify-between  container mx-auto xl:text-p md:text-[20px] lg:text-[20px] sm:text-size-15px items-center ">
        <div>
          <img src="../src/logo.png" alt="DiabeTech" className="xl:w-fit lg:w-40 md:w-32 sm: w-24"/>
        </div>

        {/* Tombol Toggle untuk Menu Mobile */}
        <button
            className="block xl:hidden md:hidden lg:hidden sm:block text-pink"
            onClick={toggleMenu}
          >
            {isOpen ? "X" : "Menu"}
          </button>
        
        <nav className={`${isOpen ? "block" : "hidden"} xl:flex md:flex lg:flex flex-col xl:flex-row md:flex-row lg:flex-row items-center mt-4 xl:mt-0 md:mt-0 lg:mt-0`}>
        <ul className="flex flex-row gap-8 items-center">

          <li>
          <NavLink
            to="/" exact 
            className={({ isActive }) =>
              isActive ? 'border-b-4 border-custom-pink font-semibold duration-[1000ms] ' : 'text-pink'
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
      </nav>
      <div className="p-2 bg-custom-pink rounded-[7px] duration-[2000ms] hover:scale-125">
      {isLoggedIn ? (
              <Link to="/education">
                <button className="font-semibold">Profile</button>
              </Link>
            ) : (
              <Link to="/login">
                <button>Login</button>
              </Link>
              )}
      </div>
      </div>
    </div>
    </>
  )
}
export default Navbar;
