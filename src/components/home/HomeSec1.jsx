import homeSec1 from "../../assets/home-sec1-1.png";
import homeSec2 from "../../assets/home-sec1-2.png";
import homeSec3 from "../../assets/home-sec1-3.png";

const HomeSec1 = (props) => {
  return (
    <div className="">
      <div className="h-[67vh] flex items-center justify-center">
        <div className="text-center text-white">
          <div className="flex justify-end">
            <img className={`flex justify-end h-8 max-[850px]:h-6 max-[520px]:h-4 ${props.hidden}`} src={homeSec1} alt="" />
          </div>

          <p className={`max-[520px]:text-sm ${props.hidden}`}>FASCINATING LIFE OF </p>
          <p className="text-9xl font-bold max-[850px]:text-8xl max-[650px]:text-7xl max-[520px]:text-5xl">{props.head}</p>
         <div className="flex justify-center">
         <p className={`text-base mt-5 max-[850px]:text-sm max-[650px]:text-[12px] max-[650px]:mt-3 max-[520px]:text-[8px] max-[520px]:leading-4 max-[520px]:mt-2 ${props.width}`}>
           {props.para}
          </p>
         </div>
          <button className={`p-3 px-7 bg-[#00FFB2] text-[#003C3C] rounded-full mt-5 max-[850px]:p-2 max-[850px]:px-4 max-[520px]:px-2 max-[520px]:text-[8px] max-[520px]:text-sm max-[520px]:rounded-xl max-[520px]:mt-2 ${props.hidden}`}>
            Learn more
          </button>
        </div>
      </div> 
      <div className="flex justify-between max-[520px]:">
     <div>
     <img className={`h-48 -mt-32 max-[850px]:h-28 max-[520px]:h-20 ${props.hidden}`}src={homeSec2} alt="" />
      <img className={`h-8 ml-40  max-[850px]:ml-20 max-[850px]:h-6 max-[520px]:h-4 ${props.hidden}` } src={homeSec1} alt="" />
     </div>
    
      <img className= {`h-80 -mt-32  max-[850px]:h-64 max-[520px]:h-36 ${props.hidden}`} src={homeSec3} alt="" />
      </div>
    
    </div>
  );
};

export default HomeSec1;
