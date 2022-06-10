import React, {useState} from 'react'
import Logo from '../assets/logo.svg'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => setNav(!nav)

  return (
    <div className='w-full top-0 left-0  px-[24px] flex justify-between items-center md:mt-[40px] h-[96px] overflow-hidden'>
       <div>
           <img src={Logo} alt="logo svg" />
       </div>

        {/* menu */}
       <ul className='hidden md:flex text-white '>
           <li><span className='font-bold'>00 </span>HOME</li>
           <li><span className='font-bold'>01 </span>DESTINATION</li>
           <li><span className='font-bold'>02 </span>CREW</li>
           <li><span className='font-bold'>03 </span>TECHNOLOGY</li>
       </ul>

       {/* hamburger menu */}
        <div className='md:hidden z-10 text-[#d0d6f9] text-xl' onClick={handleNav}>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}

       <ul className={!nav ? 'hidden' : 'absolute top-0 right-0 w-[264px] h-screen bg-red-100 flex flex-col items-start text-white pt-[112px] pl-[20px]'}>
           <li className='py-4'><span className='font-bold'>00 </span>HOME</li>
           <li className='py-4'><span className='font-bold'>01 </span>DESTINATION</li>
           <li className='py-4'><span className='font-bold'>02 </span>CREW</li>
           <li className='py-4'><span className='font-bold'>03 </span>TECHNOLOGY</li>
       </ul>

    </div>
  )
}

export default Navbar