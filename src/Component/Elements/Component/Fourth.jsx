import React,{useRef, useEffect, useContext} from "react";
import Card from "../Element/Card";
import Fifth from "./Fifth";
import { useInView } from "framer-motion";
import { Context } from "../../Context/Context";
import Last from "./Last";
import { Parallax } from "react-scroll-parallax";

const Fourth = () => {
  const {setColor} = useContext(Context);
  const trigger = useRef();
  const check = useInView(trigger);
  useEffect(()=>{
    if(check)
    {
      setColor("white");
    }
  },[check])
  return (
    <div className=" relative  h-full w-full bg-gradient-to-b from-skyone to-silver flex flex-col items-center" id="tribek">
    <div className="absolute h-5 w-5 top-0 left-0"  ></div>
      <div className="h-[700px] sm:h-[800px]  w-full flex justify-center items-center" >
        <div className=" absolute top-60" ref={trigger}></div>
        <Card />
      </div>
      <Parallax speed={15} className=" w-[98%] h-full bg-whitey py-20 rounded-lg">
        <Fifth/>
      </Parallax>
      <div className="h-[100vh] w-full">
      <Last/>
      </div>
    </div>
  );
};

export default Fourth;
