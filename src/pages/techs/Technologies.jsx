import React from 'react'
import { data } from '../../components/data/data'
import { Link } from 'react-router-dom'

const Technologies = () => {
  const techs = data.technology
  const tech = techs[0]

  return (
    <div className='w-full h-screen text-white technologies'>
      {/* container */}
      <div className='h-full w-full grid  text-center'>
        <p className='condensed text-xl uppercase absolute left-1/2 -translate-x-1/2 top-[90px] md:top-[130px] md:left-[110px]'><span className='text-gray-400 mr-4'>03</span>Space launch 101</p>
        <div className='w-full h-[170px] mt-[160px] cover md:h-[310px] md:mt-[200px]'>
            {/* <img src={require('../../assets/technology/image-launch-vehicle-landscape.jpg')} alt="" /> */}
        </div>
        <div className='flex items-center justify-center my-4 md:h-[20px]'>
          <li className='cursor-pointer h-[40px] w-[40px] md:h-[44px] md:w-[44px]  rounded-full bg-white text-black flex items-center m-2 justify-center'><Link to='/technologies'>1</Link></li>
          <li className='cursor-pointer h-[40px] w-[40px] md:h-[44px] md:w-[44px] rounded-full border-2 border-gray-600 text-white hover:bg-white hover:text-[#0b0d17] flex items-center m-2 justify-center'>2</li>
          <li className='cursor-pointer h-[40px] w-[40px] md:h-[44px] md:w-[44px] rounded-full border-2 border-gray-600 text-white hover:bg-white hover:text-[#0b0d17] flex items-center m-2 justify-center'>3</li>
        </div>
        <div className='text-center px-[24px] pb-[81px]'>
          <p className='condensed uppercase text-[#d0d6f9]'>The terminology...</p>
          <h1 className='text-3xl uppercase'>{tech.name}</h1>
          <p className='condensed uppercase text-[#d0d6f9]'>{tech.description}</p>
        </div>
      </div>

    </div>
  )
}

export default Technologies