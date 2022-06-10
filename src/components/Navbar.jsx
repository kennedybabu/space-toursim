import React, {useState} from 'react'
import Logo from '../assets/logo.svg'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => setNav(!nav)

  return (
    <div className='absolute px-[24px] w-full top-0 left-0  md:pl-[24px] md:pr-0 flex justify-between items-center md:mt-[40px] h-[96px] condensed'>
       <div>
           <img src={Logo} alt="logo svg" style={{width: '48px'}}/>
       </div>

        {/* menu */}
       <ul className='hidden md:flex text-white h-[96px] backdrop-blur-sm bg-white/30 items-center lg:px-[140px]'>
           <li className='cursor-pointer'><span className='font-bold'>00 </span>HOME</li>
           <li className='cursor-pointer'><span className='font-bold'>01 </span>DESTINATION</li>
           <li className='cursor-pointer'><span className='font-bold'>02 </span>CREW</li>
           <li className='cursor-pointer'><span className='font-bold'>03 </span>TECHNOLOGY</li>
       </ul>

       {/* hamburger menu */}
        <div className='md:hidden z-10 text-[#d0d6f9] text-xl' onClick={handleNav}>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}

       <ul className={!nav ? 'hidden' : 'absolute top-0 right-0 w-[264px] h-screen backdrop-blur-sm bg-white/30 flex flex-col items-start text-white pt-[112px] pl-[20px] duration-300'}>
           <li className='py-4 cursor-pointer'><span className='font-bold'>00 </span>HOME</li>
           <li className='py-4 cursor-pointer'><span className='font-bold'>01 </span>DESTINATION</li>
           <li className='py-4 cursor-pointer'><span className='font-bold'>02 </span>CREW</li>
           <li className='py-4 cursor-pointer'><span className='font-bold'>03 </span>TECHNOLOGY</li>
       </ul>

    </div>
  )
}

export default Navbar