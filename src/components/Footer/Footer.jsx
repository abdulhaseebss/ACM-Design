import React from 'react'
import logo from '../../assets/acm-logo.png'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
    return (
<>
<div className="flex mx-40 m-24 max-[1280px]:mx-24 max-[768px]:flex-wrap">
                {/* section1 */}
                <div className="flex flex-col w-[28rem] max-[768px]:w-[100%] max-[768px]:text-center max-[768px]:pb-16">
                    <div className="img py-4 flex max-[768px]:justify-center ">
                        <img className='h-[5vh] ' src={logo} alt="" />
                        <p className='text-white text-xl font-medium mt-2'>Astral Canvas Multimedia</p>
                    </div>
                    <p className=' text-white text-base font-light'>Unraveling the mysteries of marine life, where we break down the incredible journeys of creatures </p>
                </div>
                {/* section2 */}
                <div className="flex flex-wrap gap-36 px-64 max-[1280px]:px-0 max-[1000px]:px-4 max-[1000px]:gap-11 max-[1600px]:px-0">
                    <div className='flex-col'>
                        <h3 className=' text-white text-xl font-semibold'>Company</h3>
                        <ul className=' text-[#FFFFFFD9] text-sm font-extralight py-4 max-[768px]:flex max-[768px]:gap-4'>
                            <li className='py-2'>Services</li>
                            <li className='py-2'>About us</li>
                            <li className='py-2'>Contact</li>
                        </ul>
                    </div>

                    <div className='flex-col'>
                        <div className="flex gap-6">
                            <FaFacebook className='icon text-white text-2xl' />
                            <FaInstagram className='icon text-white text-2xl' />
                            <FaLinkedin className='icon text-white text-2xl' />
                            <FaWhatsapp className='icon text-white text-2xl' />
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="bg-[#E5F0FF05] flex justify-center rounded-md">
            <p className='text-white text-base font-medium p-10'> # Website created by HASHTAG</p>
            </div>

</>
        //     <div className='outfit max-[1200px]:mt-[15vh] max-[1200px]:mb-[8vh] max-[1450px]:h-[200px]'>

        //             <div className=' flex justify-between max-[600px]:justify-center max-[800px]:justify-center text-white relative items-start h-full z-50 px-28 gap-12'>

        //                 <div className='mt-[12vh] max-[1340px]:mt-[18vh] max-[600px]:w-full'>
        //                     <div className='flex max-[1200px]:p-3 max-[1200px]:mb-3 transition-all'>
        //                         <img className='h-[5vh] ' src={logo} alt="" />
        //                         <p className='font-medium'>Astral Canvas Multimedia</p>
        //                     </div>
        //                     <p className='w-[25vw] font-medium max-[1000px]:hidden'>Unraveling the mysteries of marine life, where we break down the incredible journeys of creatures.</p>
        //                 </div>

        //                 <div className='mt-[12vh] max-[1340px]:mt-[18vh] max-[1200px]:hidden'>
        //                     <h2>Quick links</h2>
        //                     <div className='flex list-none font-normal mt-4 gap-8 ' >
        //                         <div className='flex-col gap-8 w-[35%] leading-[6vh]'>
        //                             <li className='cursor-pointer'>Home</li>
        //                             <li className='cursor-pointer'>About us</li>
        //                             <li className='cursor-pointer'>Our Team</li>
        //                             <li className='cursor-pointer'>Privacy-Policy</li>
        //                         </div>
        //                         <div className='flex-col gap-8 leading-[6vh]'>
        //                             <li className='cursor-pointer'>Awards</li>
        //                             <li className='cursor-pointer'>Career</li>
        //                             <li className='cursor-pointer'>Contact us</li>
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <div className='mt-[12vh] w-[45vh] max-[1340px]:mt-[18vh]' >
        //                     <div>
        //                         <h2>Address</h2>
        //                         <p className='font-normal'>2774 Oak Drive, Plattsburgh, New York</p>
        //                     </div>
        //                     <div>
        //                         <h2 className='mt-5'>Contact</h2>
        //                         <p className='font-normal'>518-564-3200 <br />
        //                         contact@helby.com</p>
        //                     </div>
        //                 </div>
        //             </div>

        // <div className=" h-[10vh] w-3/4 flex justify-center rounded-md">
        // <p className='font-light text-white p-11'># Website created by HASHTAG</p>
        // </div>

        //         </div>





    )
}

export default Footer