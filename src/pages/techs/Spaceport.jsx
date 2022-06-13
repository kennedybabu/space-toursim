import React from 'react'
import { data } from '../../components/data/data'
import { Link } from 'react-router-dom'

const Spaceport = () => {
    const techs = data.technology
    const tech = techs[1]
  
  return (
    <div className='w-full h-screen text-white technologies overflow-y-hidden'>
      {/* container */}
      <div className='h-full w-full grid  text-center lg:grid-cols-2'>
        <p className='condensed text-xl uppercase absolute left-1/2 -translate-x-1/2 top-[90px] md:top-[130px] md:left-[110px] lg:left-[10%]'><span className='text-gray-400 mr-4'>03</span>Space launch 101</p>
        <div className='relative w-full h-[170px] mt-[160px] spaceport md:h-[310px] md:mt-[200px] lg:order-2 lg:h-[527px] lg:w-[515px] lg:absolute lg:right-0 lg:bottom-[20px]'>

          <div className='flex items-center justify-center my-4 absolute bottom-[-100px] lg:bottom-[-12px] left-1/2 -translate-x-1/2 lg:hidden'>
            <Link to='/technologies'><li className='cursor-pointer h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-full border-2 border-gray-600 text-white hover:bg-white hover:text-[#0b0d17] hover:border-white flex items-center m-2 justify-center'>1</li></Link>
            <Link to='/spaceport'><li className='cursor-pointer h-[40px] w-[40px] md:h-[50px] md:w-[50px]  rounded-full bg-white text-black flex items-center m-2 justify-center'>2</li></Link>
            <Link to='/capsule'><li className='cursor-pointer h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-full border-2 border-gray-600 text-white hover:bg-white hover:text-[#0b0d17] hover:border-white flex items-center m-2 justify-center'>3</li></Link>
          </div>
        </div>
      
        <div className='text-center px-[24px] pb-[81px] pt-[100px] md:pt-0 md:mt-6 lg:order-1 lg:h-full lg:flex lg:flex-col lg:justify-end lg:pb-[200px] lg:text-left lg:ml-[200px]'>
          <p className='condensed uppercase text-[#d0d6f9] md:mt-4 md:text-xl tracking-widest'>The terminology...</p>
          <h1 className='text-3xl uppercase md:my-2 md:text-4xl tracking-widest lg:py-4'>{tech.name}</h1>
          <p className='condensed tracking-wide text-[#d0d6f9] md:max-w-[470px] mx-auto md:text-xl lg:ml-0'>{tech.description}</p>
        </div>


        <div className='hidden lg:flex items-center justify-center my-4 absolute  left-[4%] top-[36%] flex-col'>
            <Link to='/technologies'><li className='cursor-pointer h-[80px] w-[80px] rounded-full border-2 border-gray-600 text-white hover:bg-white hover:text-[#0b0d17] hover:border-white flex items-center m-2 justify-center'>1</li></Link>
            <Link to='/spaceport'><li className='cursor-pointer h-[80px] w-[80px] rounded-full bg-white text-black flex items-center m-2 justify-center'>2</li></Link>
            <Link to='/capsule'> <li className='cursor-pointer h-[80px] w-[80px] rounded-full border-2 border-gray-600 text-white hover:bg-white hover:text-[#0b0d17] hover:border-white flex items-center m-2 justify-center'>3</li></Link>
        </div>
      </div>

    </div>
  )
}

export default Spaceport