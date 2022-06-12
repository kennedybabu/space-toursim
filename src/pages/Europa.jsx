import React from 'react'
import {data} from '../components/data/data'
import { Link, NavLink } from 'react-router-dom'


const Europa = () => {
    const destinations = data.destinations

    const destination = destinations[2]

  return (  

    <div className='destinations w-full h-screen text-white'>
        {/* container */}
        <div className='grid lg:grid-cols-2 h-full px-[24px] md:px-[96px]'>
            <div className='h-full flex justify-center  lg:justify-center items-center flex-col w-full mt-[60px] lg:mt-0 '>
                <p className='lg:mt-[80px] condensed uppercase font-bold lg:text-[24px]'><span className='text-gray-400 mr-2'>01</span>Pick your destination</p>
                <div className='h-[170px] w-[170px] mt-[32px]  md:h-[300px] md:w-[300px] lg:h-[445px] lg:w-[445px] lg:mt-[40px]'>
                    <img className='h-full w-full' src={require ('../assets/destination/image-europa.png')} alt="" />
                </div>
            </div>
            <div className='h-full flex justify-end  lg:pb-[118px] items-center lg:items-start flex-col md:pb-[62px] lg:h-[445px] lg:absolute lg:right-[162px] lg:bottom-0 lg:justify-between'>
                <div className='flex text-[#d0d6f9] uppercase'>                   
                    <li className='hover:underline underline-offset-[10px] decoration-[3px] pl-0'><Link to='/destinations'>Moon</Link></li>
                    <li className='hover:underline underline-offset-[10px] decoration-[3px]'><Link to='/mars'>Mars</Link></li>
                    <li className='hover:underline underline-offset-[10px] decoration-[3px]'><Link to='/europa'>Europa</Link></li>
                    <li className='hover:underline underline-offset-[10px] decoration-[3px]'><Link to='/titan'>Titan</Link></li>
                </div>
                <h1 className='text-[50px] uppercase'>{destination.name}</h1>
                <p className='text-center lg:text-left text-[#d0d6f9] lg:max-w-[472px]'>{destination.description}</p>
                <div className='w-full h-[40px] mt-4 lg:hidden md:mt-[49px]'>
                    <hr />
                </div>
                <div className='flex flex-col md:flex-row w-full justify-between md:px-[100px] lg:px-0 lg:justify-start lg:mt-8'>
                    <div className='flex flex-col items-center lg:mr-8 lg:items-start'>
                        <p className='uppercase condensed text-[#d0d6f9]'>Avg Distance</p>
                        <p className='text-3xl uppercase'>{destination.distance}</p>
                    </div>
                    <div className='flex flex-col items-center mt-[32px] md:mt-0'>
                        <p className='uppercase condensed text-[#d0d6f9]'>Est Travel Time</p>
                        <p className='text-3xl uppercase'>{destination.travel}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Europa