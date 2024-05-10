import React from 'react'

const HomeSec3 = (props) => {
  return (
    <div className="multimedia">
      <>
        <div className='flex justify-start flex-wrap px-56 max-[800px]:px-0'>
          <div className="text-wrap">
            <div className="p-4 max-[800px]:flex max-[800px]:flex-col max-[800px]:items-center max-[800px]:justify-center">
            <h1 className="text-white mt-10 w-[20vw] max-[1200px]:w-[40vw] max-[800px]:text-center max-[800px]:w-[100%] leading-[60px] text-5xl font-bold max-[768px]:text-3xl">{props.heading}</h1>
              <p className="text-[#FFFFFFD9] leading-[25px] text-base mt-5 max-[600px]:text-sm w-[25vw] max-[1200px]:w-[50vw] max-[800px]:w-[60%] max-[800px]:text-center">{props.pera}</p>
              <button className={`bg-[#00FFB2] mt-8 text-black p-2 px-9 rounded-full font-medium ${props.hidden}`}>Learn More</button>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default HomeSec3

