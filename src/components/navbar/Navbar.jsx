import React from 'react'
import logo from "../../assets/acm-logo.png"
import { Link, useNavigate } from 'react-router-dom'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = (props) => {
  const navigate = useNavigate()
  return (
    <>
        <div className={`p-3 flex items-center justify-between px-16 inter text-white py-5 max-[750px]:hidden`}>
            <Link to={"/"}><img className="h-[50px] cursor-pointer" src={logo} alt="logo" /></Link>
            <div className="flex items-center gap-20">

                <ul className="flex gap-12">
                    <li className="cursor-pointer"><Link to={"/"}>Home</Link></li>
                    <li className="cursor-pointer"><Link to={"services"}>Services</Link></li>
                    <li className="cursor-pointer"><Link to={"about"}>About</Link></li>
                    <li className="cursor-pointer"><Link to={"contact"}>Contact</Link></li>
                 </ul>

                 <div className="flex gap-5 ">
                 <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
                 <i className="fa-solid fa-bars text-xl cursor-pointer"></i>
                 </div>
            </div>
        </div>



      <div className='hidden max-[750px]:block'>
        <div className='p-3 flex items-center justify-between px-16  font-inter text-white py-5'>
        <Link to={"/"}><img className="h-[50px] cursor-pointer" src={logo} alt="logo" /></Link>
            <div className="flex items-center gap-20">

                

                 <div className="flex gap-5 ">
                 <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>

                 <Sheet>
                  <SheetTrigger><i className="fa-solid fa-bars text-xl cursor-pointer"></i></SheetTrigger>
                  <SheetContent className="bg-gradient-to-r from-cyan-500 to-blue-500">
                    <SheetHeader>
                    <SheetDescription className="flex-col flex w-full border-none">
                <a className="text-2xl mt-5 font-extralight text-center text-white" onClick={()=>{ navigate('/')}}>Home</a>
                <a className="text-2xl mt-5 font-extralight text-center text-white" onClick={()=>{ navigate('services')}}>Services</a>
                <a className="text-2xl mt-5 font-extralight text-center text-white" onClick={()=>{ navigate('about')}}>About</a>
                <a className="text-2xl mt-5 font-extralight text-center text-white" onClick={()=>{ navigate('contact')}}>Contact</a>
                </SheetDescription>
                      
                    </SheetHeader>
                  </SheetContent>
                </Sheet>

                   

               
                 </div>
            </div>
        

        </div>
      </div>

    </>
  )
}

export default Navbar