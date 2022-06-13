import React from 'react'

const Technologies = () => {
  return (
    <div className='w-full h-screen text-white technologies'>
      {/* container */}
      <div className='h-full w-full grid items-center text-center'>
        {/* <p className='condensed text-xl uppercase'><span className='text-gray-400 mr-4'>03</span>Space launch 101</p> */}
        <div className='w-full h-[170px]'>
            <img src={require('../../assets/technology/image-launch-vehicle-landscape.jpg')} alt="" />
        </div>
        <div>

        </div>
      </div>

    </div>
  )
}

export default Technologies