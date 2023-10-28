import React, { useEffect, useRef } from "react";
import Firstmain from "../../Firstmain";
import { useContext } from "react";
import { useInView } from "framer-motion";
import { Context } from "../../Context/Context";
import { words } from "./Element";
import EffectText from "../Element/EffectText";

const Second = () => {
  const { setColor } = useContext(Context);
  const secondview2 = useRef();
  const Inviewtwo2 = useInView(secondview2);
  useEffect(() => {
if (Inviewtwo2) {
      setColor("#1C1616");
    } 
  },[Inviewtwo2]);
  return (
    <div className="flex md:py-5 h-full  bg-pink flex-col md:flex-row sm:w-4/5 items-center justify-between" id="quote">
      <div className=" absolute top-10 right-20 w-24 hidden lg:flex">
        <img src="https://imageupload.io/ib/6vb97yIvVSZDboq_1698473664.png" loading="lazy" />
      </div>
      <div className=" absolute top-40 right-40 w-28 hidden lg:flex" ref={secondview2}>
        <img src="https://imageupload.io/ib/WRO3ZsDaGmfVfBV_1698473639.png" loading="lazy" />
      </div>
      <div className=" absolute bottom-10 left-[45vw] w-28 hidden lg:flex">
        <img src="https://imageupload.io/ib/nNx3pYNnD7dYfap_1698473664.png" loading="lazy" />
      </div>
      <div className=" absolute top-10 right-72 w-24 lg:flex">
        <img src="https://imageupload.io/ib/JVGjBIAgdcpeDzn_1698473664.png" loading="lazy" />
      </div>
      <div className=" absolute top-10 left-20 w-24  lg:flex">
        <img src="https://imageupload.io/ib/0bNq1MrIpOHylPs_1698473684.png" loading="lazy" />
      </div>
      <div className=" absolute bottom-10  w-36" >
        <img src="https://imageupload.io/ib/yTZ2poee4SeyB3c_1698473684.png" loading="lazy" />
      </div>
      <section className=" flex h-[400px] sm:h-[600px] flex-col  w-full mb-10 mt-10 sm:mb-40 sm:mt-32">
      {words.map((e)=>{
        return(<div key={e.id} className="flex mb-2 relative z-20">
            <div className=" text-white font-Neus transition-all duration-75"> <div className=" sm:text-2xl text-sm  md:text-2xl lg:text-3xl xl:text-4xl font-extrabold w-full"><EffectText words={e.words} style={{backgroundColor:"black",paddingTop:'10px',paddingBottom:'10px'}} speed={0.02}/></div></div>
        </div>)
      })}
      </section>
      <Firstmain />
    </div>
  );
};

export default Second;
