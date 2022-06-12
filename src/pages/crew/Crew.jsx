import React from 'react'
import {data} from '../../components/data/data'



const Crew = () => {
    const crew = data.crew

    const personnel = crew[0]

    
  return (
    <div className='w-full h-screen text-white crew'>
        {/* container */}
        <div className='h-full w-full grid'>
            <p className='absolute top-[85px] left-1/2 -translate-x-1/2 text-xl condensed uppercase tracking-[2px]'><span className='text-gray-400'>02</span> meet your crew</p>
            <div className='flex flex-col justify-end w-full items-center'>
              <div className='h-[223px] w-[327px] mx-auto'>
                <img className='h-full w-auto mx-auto'  src={require('../../assets/crew/image-douglas-hurley.png')} alt="commander picture" />
              </div>
              <div>
                  <hr />
              </div>
            </div>
            <div className='w-full text-center px-[23px]'>
                <div>
                  links
                </div>
                <p className='uppercase text-gray-400'>Commander</p>
                <h1 className='text-3xl uppercase'>Douglas Hurley</h1>
                <p className='condensed text-[#d0d6f9] mt-[25px] max-w-[310px] mx-auto'>Douglas Gerald Hurley is an American engineer, former
                  Marine Corps pilot and forrmer NASA astronaut. He launched
                  into space for the third time as commander of Crew Dragon Demo-2.
                </p>
            </div>
        </div>

    </div>
  )
}

export default Crew