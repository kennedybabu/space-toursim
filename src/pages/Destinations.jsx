import React, { useEffect, useState } from 'react'
import {data} from '../components/data/data'

const Destinations = () => {
    // store data from json file
    const destinations = data.destinations
    console.log(data.destinations)

    // get random destination
    const destination = destinations[Math.floor(Math.random() * destinations.length)]
    
    console.log(destination.images.png)
    
 
  return (
    <div className='destinations w-full h-screen text-white'>
        {/* container */}
        <div className='grid lg:grid-cols-2 h-full px-[24px] md:px-[96px]'>
            <div className='h-full flex justify-end lg:justify-center items-center flex-col w-full'>
                <p className='condensed uppercase font-bold'><span>01</span>Pick your destination</p>
                <div className='h-[170px] w-[170px] mt-8'>
                    <img className='h-full w-full' src={destination.images.png} alt="" />
                </div>
            </div>
            <div className='h-full flex justify-end lg:justify-center items-center flex-col pb-[62px]'>
                <div>
                   links
                </div>
                <h1 className='text-[50px] uppercase'>{destination.name}</h1>
                <p className='text-center text-[#d0d6f9]'>{destination.description}</p>
                <div className='w-full h-[40px] mt-4 lg:hidden md:mt-[49px]'>
                    <hr />
                </div>
                <div className='flex flex-col md:flex-row w-full justify-between md:px-[100px]'>
                    <div className='flex flex-col items-center'>
                        <p className='uppercase condensed text-[#d0d6f9]'>Avg Distance</p>
                        <p className='text-3xl'>384,400 KM</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='uppercase condensed text-[#d0d6f9]'>Est Travel Time</p>
                        <p className='text-3xl uppercase'>3 Days</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Destinations