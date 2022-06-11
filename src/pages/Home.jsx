import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen home' name='home'>
        {/* container */}
        <div className='grid lg:grid-cols-2 h-full px-[24px]'>
            <div className='flex flex-col justify-center items-center lg:items-start lg:px-[159px] md:text-left pt-[48px]'>
                <p className='text-[24px] md:mt-[106px] md:text-[32px] uppercase text-[#d0d6f9] condensed'>so, you want to travel to</p>
                <h1 className='uppercase text-white text-[52px]  md:text-[140px]'>Space</h1>
                <p className='text-white max-w-[327px] text-center lg:text-start condensed text-[18px] tracking-wide md:max-w-[450px]'>Let's face it, if you want to go to space, you might as well
                    genuinely go outer space and not hover kind of on the edge
                    of it. Well sit back, and relax because we'll give you a 
                    truly out of this world experience!.
                </p>
            </div>
            <div className='flex justify-center lg:items-end lg:pb-[140px] cursor-pointer'>
                <div className='pulse flex justify-center items-center text-black uppercase w-[150px] h-[150px] mx-auto bg-white rounded-full md:h-[242px] md:w-[242px] md:text-4xl'>
                    <a href="#">explore</a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home