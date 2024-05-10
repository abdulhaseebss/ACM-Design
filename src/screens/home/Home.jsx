import React from "react";
import Portfolio from "@/components/Portfolio";
import HomeSec3 from "@/components/HomeSec3";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  const text = <h1>Explore more multimedia life</h1>
  const peragraph = <p>Don't stop—there's a whole ocean full of amazing creatures waiting to be discovered! From the colorful coral reefs to the mysterious depths, each layer has its own set of residents.</p>

  return (
    <>
    
     <Portfolio/>
     <HomeSec3  heading={text} pera={peragraph}/>
     <Footer/>
    </>
  );
};

export default Home;
