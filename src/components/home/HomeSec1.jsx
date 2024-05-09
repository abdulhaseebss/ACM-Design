import homeSec1 from "../../assets/home-sec1-1.png";
import homeSec2 from "../../assets/home-sec1-2.png";
import homeSec3 from "../../assets/home-sec1-3.png";

const HomeSec1 = () => {
  return (
    <div className="">
      <div className="h-[80vh] flex items-center justify-center">
        <div className="text-center text-black">
          <div className="flex justify-end">
            <img className="flex justify-end h-8 max-[850px]:h-6" src={homeSec1} alt="" />
          </div>

          <p className="max-[520px]:text-sm">FASCINATING LIFE OF </p>
          <p className="text-9xl font-bold max-[850px]:text-8xl max-[650px]:text-7xl max-[520px]:text-5xl">MULTIMEDIA</p>
          <p className="text-base mt-5 max-[850px]:text-sm max-[650px]:text-[12px] max-[650px]:mt-3 max-[520px]:text-[8px] max-[520px]:leading-4 max-[520px]:mt-2">
            Let's dive into the life, one of the most well-known but multimedia
            company. We'll <br /> break it down into three key stops—each one a
            crucial chapter in the journey.
          </p>
          <button className="p-3 px-7 bg-[#00FFB2] text-[#003C3C] rounded-full mt-5 max-[850px]:p-2 max-[850px]:px-4 max-[520px]:px-2 max-[520px]:text-sm max-[520px]:rounded-xl max-[520px]:mt-2">
            Learn more
          </button>
        </div>
      </div> 
      <div className="flex justify-between ">
     <div>
     <img className="h-52 max-[850px]:h-28" src={homeSec2} alt="" />
      <img className=" h-8 ml-40 max-[850px]:ml-20 max-[850px]:h-6" src={homeSec1} alt="" />
     </div>
    
      <img className="h-96 max-[850px]:h-64" src={homeSec3} alt="" />
      </div>
    
    </div>
  );
};

export default HomeSec1;