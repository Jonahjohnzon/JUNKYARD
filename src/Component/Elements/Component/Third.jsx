import React, { useRef, useEffect, useContext, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Context } from "../../Context/Context";
import {GiCancel} from 'react-icons/gi'
import { Hack } from "./Element";
import { Parallax } from "react-scroll-parallax";
const Third = () => {
  const { setColor } = useContext(Context);
  const [Display, setDisplay] = useState(true)
  const [widthone, setwidthone] = useState('100%')
  const [widthtwo, setwidthtwo] = useState('100%')
  const triggerss = useRef();
  const check = useInView(triggerss);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  useEffect(() => {
    if (check) {
      setColor("white");
    }
  },[check]);
  const Showone =()=>{
    if(widthone != '100%')
    {
      return;
    }
     if(widthtwo === '100%')
     {
      setwidthtwo('60%')
      setDisplay(false)}
      else{
        setwidthtwo('100%')
        setDisplay(true)
      }
  } 
  const Showtwo =()=>{
    if(widthtwo != '100%')
    {
      return;
    }
    if(widthone === '100%')
    {
     setwidthone('60%')
     setDisplay(false)}
     else{
       setwidthone('100%')
       setDisplay(true)
     }
 }
  const fight = useRef();
  const { inViewport } = useInViewport(fight);
  return (
    <div className=" h-[500px] md:h-[1000px] w-full overflow-hidden" id="tribe" >
      <div className=" flex  w-full h-full  relative" >
      <AnimatePresence>
        {(inViewport && Display) && (
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 1, delay: 0.1 },
            }}
            exit={{ y: 300, opacity: 0 ,transition: { duration: 0.9  } }}
            className=" absolute text-[4rem] md:text-[6rem] z-40 lg:text-[9rem] xl:text-[13rem] font-Anton font-bold text-white w-full h-full lg:z-0" 
          >
          <Parallax speed={15}  className="flex flex-col justify-center h-full w-full items-center ">
            <p className=" sm:-mb-10 xl:-mb-28">CHOOSE</p>
            <p>YOUR TRIBE</p>
            </Parallax>
          </motion.div>
        )}</AnimatePresence>
        <div className="  h-full bg-swarm transition-all duration-500 " style={{width:widthone}}>
        <AnimatePresence>
          {(inViewport || windowWidth < 1060 )  && (
            <motion.div
              initial={windowWidth > 1060 ? { x: -1000 }: {x:0, opacity:0}}
              animate={windowWidth > 1060 ? { x: 0,opacity:1, transition: { duration: 0.9, delay: 0.1 } }:{ x: 0,opacity:1, transition: { duration: 0.3 } }}
              exit={windowWidth > 1060 ?{ x: -1000,transition: { duration: 0.9, delay: 0.1  } }:{x: 0,opacity:0}}
              className="w-full h-full"
            >  
            <div className="flex   items-center lg:items-end w-full h-full pl-20">{widthtwo != '100%' &&<motion.div initial={{y:-50, opacity:0}} animate={{y:0,opacity:1,transition:{duration:0.3, delay:0.5}}}  className="  w-full flex justify-end h-1/2 ">
                <div className="  lg:w-3/6 2xl:w-1/3 relative z-40 pr-6"><div className=" w-full rounded-md shadow-lg 2xl:shadow-none p-2 2xl:p-0 2xl:h-full flex flex-col bg-swarm 2xl:bg-transparent items-start" >
                <div className=" w-full text-white font-Anton text-6xl whitespace-nowrap">RED TEAM</div>
                <div className=" w-full text-xs text-white font-Bert mb-2">{Hack.attack}</div>
                </div>
                </div>
              </motion.div>}</div>
            <Parallax speed={15} className=" cursor-pointer 2xl:left-80 left-6 lg:left-40 absolute z-40 text-white text-[9px] sm:text-xs md:text-base lg:text-xl top-3/4 font-Bert group" onClick={Showone}><div className=" flex relative w-24 sm:w-32 md:w-48 lg:w-60 justify-end"><div className=" mr-4 transition-all duration-500 absolute left-0 top-[22px]" style={widthtwo === "100%"?{opacity:'100%'}:{opacity:'0%'}}>Learn More</div><div className=" bg-yellow rounded-full">{ widthtwo === "100%"?<img src="/Images/pngwing.com-min (1).png" className="hover:m-2  w-6 sm:w-9 md:w-12 lg:w-16 transition-all duration-500 hover:-rotate-12"/>:<GiCancel className=" text-black  text-2xl sm:text-5xl lg:text-6xl xl:text-7xl  -rotate-12"/>}</div></div></Parallax>
            <img src="Images/7ab6e0.webp"  className="w-[550px] xl:w-[720px] left-0 2xl:left-40 absolute z-30 bottom-0" />
            </motion.div>
          )}</AnimatePresence>
        </div>

        <div className="absolute h-10 w-10 top-80" ref={triggerss}></div>
        <div className="absolute h-full w-10 top-40 "  ref={fight}></div>
        <div className=" h-full bg-swarmpink transition-all duration-500" style={{width:widthtwo}}>
        <AnimatePresence>
          {(inViewport || windowWidth < 1060 ) && (
            <motion.div
              initial={windowWidth > 1060 ? { x: 1000 }: {x:0, opacity:0}}
              animate={windowWidth > 1060 ?{ x: 0,opacity:1, transition: { duration: 0.9, delay: 0.1 } }:{ x: 0,opacity:1, transition: { duration: 0.3 } }}
              exit={windowWidth > 1060 ?{ x: 1000,transition: { duration: 0.9, delay: 0.1  } }:{x: 0}}
              className=" w-full h-full"
            ><div className="flex  items-center lg:items-end w-full h-full pr-20">{widthone != '100%' &&<motion.div initial={{y:-50, opacity:0}} animate={{y:0,opacity:1,transition:{duration:0.3,delay:0.5}}} className="  w-full flex justify-start h-1/2 ">
                <div className=" lg:w-3/6 2xl:w-1/3 relative z-40 pl-6"><div className=" w-full rounded-md shadow-lg 2xl:shadow-none p-2 2xl:p-0 2xl:h-full flex flex-col bg-swarmpink 2xl:bg-transparent items-end" >
                <div className=" w-full text-white font-Anton text-6xl whitespace-nowrap text-end">BLUE TEAM</div>
                <div className=" w-full text-xs text-white font-Bert mb-2 text-end">{Hack.defend}</div>
                </div>
                </div>
              </motion.div>}
              <Parallax speed={15} className=" cursor-pointer right-6 lg:right-40 2xl:right-80 absolute z-40 text-white text-[9px] sm:text-xs md:text-base lg:text-xl top-3/4 font-Bert group" onClick={Showtwo}><div className=" flex relative w-24 sm:w-32 md:w-48 lg:w-60 justify-start"><div className=" bg-yellow rounded-full">{ widthone === "100%"?<img src="/Images/pngwing.com-min (1).png" className="hover:m-2 w-6 sm:w-9 md:w-12 lg:w-16 transition-all duration-500 hover:-rotate-12"/>:<GiCancel className=" text-black text-2xl sm:text-5xl lg:text-6xl xl:text-7xl -rotate-12"/>}</div><div className=" transition-all duration-500 absolute right-0 top-[22px]" style={widthone === "100%"?{opacity:'100%'}:{opacity:'0%'}}>Learn More</div></div></Parallax>
              <img src="/Images/d60970.webp" className=" w-[550px] xl:w-[720px] transition-all right-0  2xl:right-40 absolute z-30 bottom-0" />
              </div></motion.div>
          )}</AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Third;
