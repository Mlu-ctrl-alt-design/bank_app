import React from 'react'
import { useState } from 'react'
import {close, logo, menu} from '../assets'
import { navLinks } from '../Constants'

const Navbar = () => {
  const [toggle, SetToggle] = useState(false);

  return (
    <nav className='w-full flex  px-2 py-6 justify-between items-center navbar'>
      <img src={logo} alt="Hoobank" className="w-[124px] h-[32px]"/>
      <ul className='list-none sm:flex hidden justify-end flex-1 items-center'>
      {navLinks.map((nav, index) => (
        <li
        key={nav.id}
        className={`font-poppins cursor-pointer
         font-normal text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-10' }`}
        >
          <a href={`#${nav.id}`}>
            {nav.title}
          </a>
        </li>
      ))}
      </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'></div>
        <img src={toggle ? close : menu} 
        alt="menu"
        className='w-[28px] h-[28px] object-contain'
        onClick={() => SetToggle((prev) => !prev)}
         />

         <div className={`${toggle ? 'flex' : 'hidden'}
         p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}>
              <ul className='list-none flex flex-col  justify-end flex-1 items-center'>
              {navLinks.map((nav, index) => (
                <li
                key={nav.id}
                className={`font-poppins cursor-pointer
                 font-normal text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-4' }`}
                >
                 <a href={`#${nav.id}`}>
                {nav.title}
                 </a>
                </li>
              ))}
              </ul>
         </div>
    </nav>
  )
}

export default Navbar