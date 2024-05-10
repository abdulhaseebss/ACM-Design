import React from 'react'
import hand from "../assets/hand.png"
import outline1 from "../assets/outline1.png"
import outline2 from "../assets/outline2.png"
import boy from "../assets/boy.png"
import triangle from "../assets/triangle.png"
import circle from "../assets/circle.png"
import camera from "../assets/camera.png"
import icon from "../assets/Icon.png"
import zigzag from "../assets/zigzag.png"
import mobileWithMic from "../assets/mobile-with-mic.png"
import model from "../assets/3dmodel.png"
import drone from "../assets/drone.png"
import rocket from "../assets/rocket.png"
import graphicDesign from "../assets/graphic-design.png"

const HomeSec2 = () => {
  return (
    <>
        <h2 className="text-white mt-10 text-center text-5xl font-bold mx-5 max-[750px]:text-3xl">Audiovisual Creation Studio</h2>

        
        {/* Social Media Marketing */}

        <div className='flex justify-center gap-5 items-center flex-wrap mt-16 mx-5'>
          <div className='flex flex-col'>

          <img className='w-[400px] max-[600px]:w-[250px]' src={hand} alt="" />
          <img className='w-12 max-[600px]:w-7' src={triangle} alt="" />
          <img  className='w-[250px] ml-[20vw] mt-20 max-[890px]:mt-0 transition-all max-[900px]:hidden' src={outline1} alt="" />
          </div>

          <div className='w-[350px] max-[750px]:w-[90%] transition-all'>
            <h2 className='text-6xl text-[#f2fffc71] font-bold'>01</h2>
            <h3 className='text-4xl font-bold text-[#FFFFFF] align-text-bottom mt-5'>Social Media Marketing</h3>
            <p className='mt-5 text-[#f2fffcbd]'>When it's time to lay eggs, female sea turtles take a long trip back to where they were born. It's a big circle-of-life moment. They lay their eggs on the beach, cover them up, and then head back to their feeding grounds.</p>
            <button className='text-[#003C3C] mt-5 bg-[#00FFB2] p-2 px-6 rounded-full font-medium transition-all hover:bg-[#25b68a]'>Learn More</button>
          </div>
        </div>


        {/* Videography */}


        <div className='flex justify-center gap-5 items-center flex-wrap flex-row-reverse mt-[-15vh] max-[900px]:mt-[5vh] mx-5'>
          <div className='flex flex-col items-end'>

          <img className='w-[400px] max-[600px]:w-[250px]' src={boy} alt="" />
          <img className='w-10 max-[600px]:w-5' src={circle} alt="" />
          <img  className='h-[250px] mr-[27vw] mt-20 max-[890px]:mt-0 transition-all max-[900px]:hidden' src={outline2} alt="" />
          </div>

          <div className='w-[350px] max-[750px]:w-[90%] transition-all'>
            <h2 className='text-6xl text-[#f2fffc71] font-bold'>02</h2>
            <h3 className='text-4xl font-bold text-[#FFFFFF] align-text-bottom mt-5'>Videography</h3>
            <p className='mt-5 text-[#f2fffcbd]'>Videography is the process of capturing moving images on electronic media and even streaming media. The term includes methods of video production and post-production.</p>
            <button className='text-[#003C3C] mt-5 bg-[#00FFB2] p-2 px-6 rounded-full font-medium transition-all hover:bg-[#25b68a]'>Learn More</button>
          </div>
        </div>


      {/* Photography*/}

      <div className='flex justify-center gap-5 items-center mt-[-28vh] max-[900px]:mt-[5vh] flex-wrap mx-5'>
          <div className='flex flex-col'>

          <img className='w-[400px] max-[600px]:w-[250px]' src={camera} alt="" />
          <img className='w-12 max-[600px]:w-7' src={triangle} alt="" />
          <img  className='w-[250px] ml-[20vw] mt-20 max-[890px]:mt-0 transition-all max-[900px]:hidden' src={outline1} alt="" />
          </div>

          <div className='w-[350px] max-[750px]:w-[90%] transition-all'>
            <h2 className='text-6xl text-[#f2fffc71] font-bold'>03</h2>
            <div className='flex justify-between items-end'>
               <h3 className='text-4xl font-bold text-[#FFFFFF] align-text-bottom mt-5'>Photography</h3>
              <p className='max-[600px]:w-3'> <img src={icon} alt="" /></p>
            </div>
            <p className='mt-5 text-[#f2fffcbd]'>Photography is the art, application, and practice of creating images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.</p>
            <button className='text-[#003C3C] mt-5 bg-[#00FFB2] p-2 px-6 rounded-full font-medium transition-all hover:bg-[#25b68a]'>Learn More</button>
          </div>
        </div>



        
        {/* Motion Graphic */}


        <div className='flex justify-center gap-5 items-center flex-wrap flex-row-reverse mt-[-15vh] max-[900px]:mt-[10vh] mx-5'>
          <div className='flex flex-col items-end'>

          <img className='w-[400px] max-[600px]:w-[250px]' src={model} alt="" />
          <img className='w-10 max-[600px]:w-5' src={circle} alt="" />
          <img  className='h-[250px] mr-[27vw] mt-20 max-[890px]:mt-0 transition-all max-[900px]:hidden' src={outline2} alt="" />
          </div>

          <div className='w-[350px] max-[750px]:w-[90%] transition-all'>
            <h2 className='text-6xl text-[#f2fffc71] font-bold'>04</h2>
            <h3 className='text-4xl font-bold text-[#FFFFFF] align-text-bottom mt-5'>Motion Graphic</h3>
            <p className='mt-5 text-[#f2fffcbd]'>When it's time to lay eggs, female sea turtles take a long trip back to where they were born. It's a big circle-of-life moment. They lay their eggs on the beach, cover them up, and then head back to their feeding grounds.</p>
            <button className='text-[#003C3C] mt-5 bg-[#00FFB2] p-2 px-6 rounded-full font-medium transition-all hover:bg-[#25b68a]'>Learn More</button>
          </div>
        </div>


         {/* Voice-over*/}

      <div className='flex justify-center gap-5 items-center mt-[-18vh] max-[900px]:mt-[10vh] flex-wrap mx-5'>
          <div className='flex flex-col'>

          <img className='w-[400px] max-[600px]:w-[250px]' src={mobileWithMic} alt="" />
          <img className='w-4 ' src={icon} alt="" />
          <img  className='w-[250px] ml-[20vw] mt-20 max-[890px]:mt-0 transition-all max-[900px]:hidden' src={outline1} alt="" />
          </div>

          <div className='w-[350px] max-[750px]:w-[90%] transition-all'>
            <h2 className='text-6xl text-[#f2fffc71] font-bold'>05</h2>
            <div className='flex justify-between items-end'>
               <h3 className='text-4xl font-bold text-[#FFFFFF] align-text-bottom mt-5'>Voice-over</h3>
              <p className='h-[40px] '> <img className='h-4 max-[600px]:h-2' src={zigzag} alt="" /></p>
            </div>
            <p className='mt-5 text-[#f2fffcbd]'>Photography is the art, application, and practice of creating images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.</p>
            <button className='text-[#003C3C] mt-5 bg-[#00FFB2] p-2 px-6 rounded-full font-medium transition-all hover:bg-[#25b68a]'>Learn More</button>
          </div>
        </div>


        {/* Fpv & Drone */}


        <div className='flex justify-center gap-5 items-center flex-wrap flex-row-reverse mt-[-15vh] max-[830px]:mt-[10vh] mx-5'>
          <div className='flex flex-col items-end'>

          <img className='w-[400px] max-[600px]:w-[250px]' src={drone} alt="" />
          <img className='w-4' src={icon} alt="" />
          <img  className='h-[250px] mr-[27vw] mt-20 max-[890px]:mt-0 transition-all max-[900px]:hidden' src={outline2} alt="" />
          </div>

          <div className='w-[350px] max-[750px]:w-[90%] transition-all'>
            <h2 className='text-6xl text-[#f2fffc71] font-bold'>06</h2>
            <h3 className='text-4xl font-bold text-[#FFFFFF] align-text-bottom mt-5'>Fpv & Drone</h3>
            <p className='mt-5 text-[#f2fffcbd]'>Certified remote pilot, ACM offers you the most beautiful cinematic and immersive aerial images. Give your videos a new dimension and discover our services.</p>
            <button className='text-[#003C3C] mt-5 bg-[#00FFB2] p-2 px-6 rounded-full font-medium transition-all hover:bg-[#25b68a]'>Learn More</button>
          </div>
        </div>


          {/* Search Engine Optimization*/}

      <div className='flex justify-center gap-5 items-center mt-[-18vh] max-[900px]:mt-[10vh] flex-wrap mx-5'>
          <div className='flex flex-col'>

          <img className='w-8' src={circle} alt="" />
          <img className='w-[400px] max-[600px]:w-[250px]' src={rocket} alt="" />
          <img className='w-12 ' src={zigzag} alt="" />
          <img  className='w-[250px] ml-[20vw] mt-20 max-[890px]:mt-0 transition-all max-[900px]:hidden' src={outline1} alt="" />
          </div>

          <div className='w-[350px] max-[750px]:w-[90%] transition-all' >
            <h2 className='text-6xl text-[#f2fffc71] font-bold'>07</h2>
            <div className='flex justify-between items-end'>
               <h3 className='text-4xl font-bold text-[#FFFFFF] align-text-bottom mt-5'>Search Engine Optimization</h3>

            </div>

            <div className='flex justify-between items-end'>
              <p className='mt-5 text-[#f2fffcbd]'>Photography is the art, application, and practice of creating images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.</p>
              <img className='h-12' src={triangle} alt="" />
            </div>
            <button className='text-[#003C3C] mt-5 bg-[#00FFB2] p-2 px-6 rounded-full font-medium transition-all hover:bg-[#25b68a]'>Learn More</button>
          </div>
        </div>



          {/* Fpv & Drone */}


          <div className='flex justify-center gap-5 items-center flex-wrap flex-row-reverse mt-[-10vh] max-[900px]:mt-[10vh] mx-5'>
          <div className='flex flex-col items-end'>

          <img className='w-[400px] max-[600px]:w-[250px]' src={graphicDesign} alt="" />
          <img className='w-4' src={icon} alt="" />
          {/* <img  className='h-[250px] mr-[27vw] mt-20 max-[890px]:mt-0 transition-all max-[900px]:hidden' src={outline2} alt="" /> */}
          </div>

          <div className='w-[350px] max-[750px]:w-[90%] transition-all'>
            <h2 className='text-6xl text-[#f2fffc71] font-bold'>06</h2>
            <h3 className='text-4xl font-bold text-[#FFFFFF] align-text-bottom mt-5'>Graphic Designing</h3>
            <p className='mt-5 text-[#f2fffcbd]'>When it's time to lay eggs, female sea turtles take a long trip back to where they were born. It's a big circle-of-life moment. They lay their eggs on the beach, cover them up, and then head back to their feeding grounds.</p>
            <button className='text-[#003C3C] mt-5 bg-[#00FFB2] p-2 px-6 rounded-full font-medium transition-all hover:bg-[#25b68a]'>Learn More</button>
          </div>
        </div>


    </>
  )
}

export default HomeSec2