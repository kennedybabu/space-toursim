import React, { useEffect, useState } from 'react'
// import data from '../components/data/data'
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
        <div className='grid lg:grid-cols-2 h-full'>
            <div className='h-full flex justify-center items-center flex-col w-full'>
                <p className='condensed uppercase font-bold'><span>01</span>Pick your destination</p>
                <div className='h-[100px] w-[100px]'>
                    <img className='h-full w-full' src={destination.images.png} alt="" />
                </div>
            </div>
            <div className='h-full flex justify-center items-center flex-col'>
                <div>
                    links
                </div>
                <h1 className='text-[66px]'>{destination.name}</h1>
                <p>{destination.description}</p>
                <hr />
            </div>
        </div>
    </div>
  )
}

export default Destinations