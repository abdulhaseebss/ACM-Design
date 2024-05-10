import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import portfolio1 from '../assets/portfolio1.png'
import portfolio2 from '../assets/portfolio2.png'
import portfolio3 from '../assets/portfolio3.png'
import line1 from "../assets/Line 1.png"
import line2 from "../assets/Line 2.png"

const Portfolio = () => {
  return (
    <div>
     <div className="flex justify-center">
     <img className='w-[64rem]' src={line1} alt="" />
     </div>
      <h2 className="text-white mt-10 text-center text-6xl font-bold mx-5 max-[768px]:text-3xl">Our Awesome Portfolio</h2>

      <div className="slider py-28 px-56 max-[768px]:px-36 max-[1280px]:px-8 max-[600px]:p-4">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 "><img className='p-4 rounded-xl bg-[#00000040]' src={portfolio1} alt="" /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <img className='p-4 rounded-xl bg-[#00000040]' src={portfolio2} alt="" /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <img className='p-4 rounded-xl bg-[#DBE4F0]' src={portfolio3} alt="" /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <img className='p-4 rounded-xl bg-[#DBE4F0]' src={portfolio1} alt="" /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <img className='p-4 rounded-xl bg-[#DBE4F0]' src={portfolio2} alt="" /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img className='p-4 rounded-xl bg-[#DBE4F0]' src={portfolio3} alt="" /></CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="slider py-4 px-56 max-[768px]:px-36 max-[1280px]:px-8 max-[600px]:p-4">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 "><img className='p-4 rounded-xl bg-[#DBE4F0]' src={portfolio1} alt="" /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <img className='p-4 rounded-xl bg-[#DBE4F0]' src={portfolio2} alt="" /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <img className='p-4 rounded-xl bg-[#DBE4F0]' src={portfolio3} alt="" /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <img className='p-4 rounded-xl bg-[#DBE4F0]' src={portfolio1} alt="" /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <img className='p-4 rounded-xl bg-[#DBE4F0]' src={portfolio2} alt="" /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img className='p-4 rounded-xl bg-[#DBE4F0]' src={portfolio3} alt="" /></CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex justify-center">
     <img className='w-[64rem] p-8' src={line2} alt="" />
     </div>
    </div>
  )
}

export default Portfolio