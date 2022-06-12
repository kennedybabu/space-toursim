import React from 'react'
import { data } from '../../components/data/data'
import { Link } from 'react-router-dom'

const Pilot = () => {
    const crew = data.crew
    const personnel = crew[2]
  return (
    <div className='w-full h-screen text-white crew overflow-y-hidden'>
    {/* container */}
    <div className='h-full w-full grid lg:grid-cols-2'>
        <p className='absolute top-[78px] md:top-[140px] left-1/2 -translate-x-1/2 text-xl condensed uppercase tracking-[2px] md:left-[120px] lg:left-[230px]'><span className='text-gray-400'>02</span> meet your crew</p>
        <div className='flex flex-col justify-end w-full items-center md:order-2 lg:order-2'>
          <div className='h-[223px] w-[327px] md:h-[572px] md:w-[456px] mx-auto lg:h-[598px] lg:w-[468px]'>
            <img className='h-full w-auto  md:w-full mx-auto lg:w-auto lg:mt-[20px]'  src={require('../../assets/crew/image-victor-glover.png')} alt="commander picture" />
          </div>
          <div>
              <hr />
          </div>
        </div>
        <div className='w-full text-center lg:text-start px-[23px] lg:pl-[143px] md:order-1 md:flex md:items-center md:justify-end md:flex-col md:mt-[180px] lg:justify-center lg:items-start'>
            <div className='flex text-[#d0d6f9] uppercase md:mb-8'>                   
                <div className='hidden md:flex'>
                    <li className='hover:underline underline-offset-[10px] decoration-[3px] pl-0'><Link to='/crew'>Commander</Link></li>
                    <li className='hover:underline underline-offset-[10px] decoration-[3px]'><Link to='/specialist'>Mission Specialist</Link></li>
                    <li className='hover:underline underline-offset-[10px] decoration-[3px]'><Link to='/pilot'>Pilot</Link></li>
                    <li className='hover:underline underline-offset-[10px] decoration-[3px]'><Link to='/titan'>Flight Engineer</Link></li>
                </div>
                <div className='flex items-center justify-center w-full md:hidden condensed'>
                    <li><Link to='/crew'>01</Link></li>
                    <li><Link to='/specialist'>02</Link></li>
                    <li><Link to='/pilot'>03</Link></li>
                    <li><Link to='/crew'>04</Link></li>
                </div>
            </div>
            <p className='uppercase text-gray-400 md:text-2xl'>{personnel.role}</p>
            <h1 className='text-3xl md:text-4xl uppercase lg:py-5 lg:text-5xl'>{personnel.name}</h1>
            <p className='condensed md:text-xl text-[#d0d6f9] mt-[25px] md:mt-[10px] max-w-[310px] mx-auto lg:ml-0 lg:max-w-[444px]'>
              {personnel.bio}
            </p>
        </div>
    </div>
</div>
  )
}

export default Pilot