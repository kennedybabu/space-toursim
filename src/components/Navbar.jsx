import React, {useState} from 'react'
import Logo from '../assets/logo.svg'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => setNav(!nav)

  return (
    <div className='absolute px-[24px] w-full top-0 left-0  md:pl-[24px] lg:pl-[55px] md:pr-0 flex justify-between items-center lg:mt-[40px] h-[96px] condensed'>
       <div>
           <img src={Logo} alt="logo svg" style={{width: '48px'}}/>
       </div>

        {/* menu */}
       <ul className='hidden md:flex text-white h-[96px] backdrop-blur-sm bg-white/30 items-center lg:px-[140px]'>
           <li className='cursor-pointer hover:underline underline-offset-[37px] decoration-[3px]'><Link to='/'><span className='font-bold'>00 </span>HOME</Link></li>
           <li className='cursor-pointer hover:underline underline-offset-[37px] decoration-[3px]'><Link to='/destinations'><span className='font-bold'>01 </span>DESTINATION</Link></li>
           <li className='cursor-pointer hover:underline underline-offset-[37px] decoration-[3px]'><Link to='/crew'><span className='font-bold'>02 </span>CREW</Link></li>
           <li className='cursor-pointer hover:underline underline-offset-[37px] decoration-[3px]'><Link to='/technologies'><span className='font-bold'>03 </span>TECHNOLOGY</Link></li>
       </ul>

       {/* hamburger menu */}
        <div className='md:hidden z-10 text-[#d0d6f9] text-xl' onClick={handleNav}>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}

       <ul className={!nav ? 'hidden' : 'absolute top-0 right-0 w-[264px] h-screen backdrop-blur-lg bg-white/30 flex flex-col items-start text-white pt-[112px] pl-[20px] z-[2]'}>
           <li className='py-4 cursor-pointer'><Link to='/'><span className='font-bold'>00 </span>HOME</Link></li>
           <li className='py-4 cursor-pointer'><Link to='/destinations'><span className='font-bold'>01 </span>DESTINATION</Link></li>
           <li className='py-4 cursor-pointer'><Link to='/crew'><span className='font-bold'>02 </span>CREW</Link></li>
           <li className='py-4 cursor-pointer'><Link to='/technologies'><span className='font-bold'>03 </span>TECHNOLOGY</Link></li>
       </ul>

    </div>
  )
}

export default Navbar