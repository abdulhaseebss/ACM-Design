import React from "react";
import Portfolio from "@/components/Portfolio";
import HomeSec3 from "@/components/HomeSec3";
import Footer from "@/components/Footer/Footer";


import HomeSec1 from "../../components/home/HomeSec1"
import HomeSec2 from "../../components/HomeSec2";



const Home = () => {
  const text = <h1>Explore more multimedia life</h1>
  const peragraph = <p>Don't stop—there's a whole ocean full of amazing creatures waiting to be discovered! From the colorful coral reefs to the mysterious depths, each layer has its own set of residents.</p>


  return (
    <>
    <HomeSec1 head="MULTIMEDIA" para="Let's dive into the life, one of the  most well-known but multimedia company. We'll break it down into three key stops—each one a crucial chapter in the journey." width="w-[70%]" />
     <HomeSec2 />
    
     <Portfolio/>
     <HomeSec3  heading={text} pera={peragraph}/>
     <Footer/>

     


    </>
  );
};

export default Home;
