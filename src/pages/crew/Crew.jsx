import React from 'react'
import {data} from '../../components/data/data'



const Crew = () => {
    const crew = data.crew

    const personnel = crew[0]

    
  return (
    <div className='w-full h-screen text-white crew'>
        {/* container */}
        <div className='h-full w-full grid lg:grid-cols-2'>
            <p className='absolute top-[85px] md:top-[140px] left-1/2 -translate-x-1/2 text-xl condensed uppercase tracking-[2px] md:left-[120px] lg:left-[230px]'><span className='text-gray-400'>02</span> meet your crew</p>
            <div className='flex flex-col justify-end w-full items-center md:order-2 lg:order-2'>
              <div className='h-[223px] w-[327px] md:h-[572px] md:w-[456px] mx-auto lg:h-[598px] lg:w-[468px]'>
                <img className='h-full w-auto  md:w-full mx-auto lg:w-auto lg:mt-[20px]'  src={require('../../assets/crew/image-douglas-hurley.png')} alt="commander picture" />
              </div>
              <div>
                  <hr />
              </div>
            </div>
            <div className='w-full text-center lg:text-start px-[23px] lg:pl-[143px] md:order-1 md:flex md:items-center md:justify-end md:flex-col md:mt-[180px] lg:justify-center lg:items-start'>
                <div className='md:hidden'>
                  links
                </div>
                <p className='uppercase text-gray-400 md:text-2xl'>Commander</p>
                <h1 className='text-3xl md:text-4xl uppercase lg:py-5 lg:text-5xl'>Douglas Hurley</h1>
                <p className='condensed md:text-xl text-[#d0d6f9] mt-[25px] md:mt-[10px] max-w-[310px] mx-auto lg:ml-0'>Douglas Gerald Hurley is an American engineer, former
                  Marine Corps pilot and forrmer NASA astronaut. He launched
                  into space for the third time as commander of Crew Dragon Demo-2.
                </p>
            </div>
        </div>

    </div>
  )
}

export default Crew