import React from 'react'
import hand from "../assets/hand.png"
import outline1 from "../assets/outline1.png"
import outline2 from "../assets/outline2.png"
import boy from "../assets/boy.png"
import triangle from "../assets/triangle.png"
import circle from "../assets/circle.png"

const HomeSec2 = () => {
  return (
    <>
        <h2 className="text-white mt-10 text-center text-5xl font-bold mx-5 max-[750px]:text-3xl">Audiovisual Creation Studio</h2>

        <div className='flex justify-center gap-5 items-center flex-wrap mt-16'>
          <div className='flex flex-col'>

          <img className='w-[400px] mr-28' src={hand} alt="" />
          <img className='w-12' src={triangle} alt="" />
          <img  className='w-[250px] ml-[20vw] mt-20 max-[890px]:mt-0 transition-all' src={outline1} alt="" />
          </div>

          <div className='w-[350px]'>
            <h2 className='text-6xl text-[#f2fffc71] font-bold'>01</h2>
            <h3 className='text-4xl font-bold text-[#FFFFFF] align-text-bottom mt-5'>Social Media Marketing</h3>
            <p className='mt-5 text-[#f2fffcbd]'>When it's time to lay eggs, female sea turtles take a long trip back to where they were born. It's a big circle-of-life moment. They lay their eggs on the beach, cover them up, and then head back to their feeding grounds.</p>
            <button className='text-[#003C3C] mt-5 bg-[#00FFB2] p-2 px-6 rounded-full font-medium'>Learn More</button>
          </div>
        </div>

        <div className='flex justify-center gap-5 items-center flex-wrap flex-row-reverse mt-[-25vh]'>
          <div className='flex flex-col items-end'>

          <img className='w-[400px] ml-28' src={boy} alt="" />
          <img className='w-10 ' src={circle} alt="" />
          <img  className='h-[250px] mr-[27vw] mt-20 max-[890px]:mt-0 transition-all' src={outline2} alt="" />
          </div>

          <div className='w-[350px]'>
            <h2 className='text-6xl text-[#f2fffc71] font-bold'>02</h2>
            <h3 className='text-4xl font-bold text-[#FFFFFF] align-text-bottom mt-5'>Videography</h3>
            <p className='mt-5 text-[#f2fffcbd]'>Videography is the process of capturing moving images on electronic media and even streaming media. The term includes methods of video production and post-production.</p>
            <button className='text-[#003C3C] mt-5 bg-[#00FFB2] p-2 px-6 rounded-full font-medium'>Learn More</button>
          </div>
        </div>


        <div>
       





          
        </div>
    </>
  )
}

export default HomeSec2