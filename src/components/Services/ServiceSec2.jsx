
import servce1 from "../../assets/service-img-1.png"
const ServiceSec2 = () => {
  return (
  <div className="">
      <div className="flex justify-evenly flex-wrap mx-5">
        <div className="w-[400px] text-white max-[800px]:w-[90%] transition-all mb-5">
            <p className="font-bold text-2xl">What is the ACM ?</p>
            <div className="text-base">
            <p className="mt-10">After a career as an <span className="font-bold text-base">Artistic Director, Anas Mahmood</span> decidedtext-base to create his own company in 2019 with design and audiovisual (video) creation as its core activity.</p>
            <p className="mt-7">This idea of combining design and video gave birth to the name.<span className="font-bold text-base">“ACM”</span>Like a laboratory, we mix two universes to create a new one.</p>
            <p className="mt-7">The opportunities followed one another and since 2020, Le Lab has acquired a new skill: <span className="font-bold">mastery of the air.</span> Following training and obtaining an official certificate <span className="font-bold text-base">issued by the DGAC, ACM</span>  obtained the title of approved remote pilot and can carry out all types of aerial plans in complete legality and safety.</p>
            <p className="mt-7">Today, ACM is a contact,a trusted person who carries out your missions in Bordeaux as elsewhere with <span className="font-bold text-base">professional equipment, know-how, strong skills and of course kindness.</span></p>
            </div>
        </div>
        <div className="w-[450px]">
            <img  src={servce1} alt="" />
        </div>
    </div>
  </div>
  )
}

export default ServiceSec2