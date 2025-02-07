import React from 'react'
import BannerImg from "../../assets/Banner.png"

const Banner = () => {
  return (
<div className='flex flex-col md:flex-row-reverse px-20 py-16 justify-between items-center gap-12'>

    <div className='md:w-1/2 w-full flex items-center md:justify-end '>
        <img src={BannerImg} alt="" />
    </div>

      <div className='md:w-1/2 w-full'>
        <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Releases This Week</h1>
        <p className='mb-10'>It's time to update your reading list some of the latest and gratest releases in
             the literary world.From heart pumping throllers tp capticating memories,this week's 
             new releases offer someting for everyone.
        </p>
        <button className='btn-primary'>Subscribe</button>
      </div>

</div>
  )
}

export default Banner
