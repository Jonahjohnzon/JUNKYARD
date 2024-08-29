import React, { useContext, useEffect,useRef } from 'react'
import { Context } from "../../Context/Context";
import { AnimatePresence, useInView } from "framer-motion";
import {motion} from "framer-motion"
import Empty from './HACK/empty';

const Fifth = () => {
    const view = useRef();
    const {setColor} = useContext(Context);
    const {name,com} = useContext(Context)
    const check = useInView(view);
    useEffect(()=>{
        if (check)
        {
        setColor("#1C1616");
        }
 
    },[check])
    useEffect(()=>{
      const originalAlert = window.alert;
      window.alert = function (message) {
        originalAlert("Oooh..Great....[Sigh]... Hacked again \n \n" + " JunkyCode is \"Afro-JunkyCoder321\" \n ....\n" + "Click Partner....Send it to us to join Junkyard  \n"); // Optional: Call the original alert function
      };
  
      return () => {
        // Restore the original alert function when your component unmounts
        window.alert = originalAlert;
      };
    })
  return (
    <div className=' relative h-full pt-9 overflow-hidden'  id='junkyc'>
    <div className=' w-[300px]  sm:w-[600px] top-0 absolute right-0'><img src='/Images/dead.png' className=' w-28'/></div>
        <div className=' absolute w-5 h-5 top-80 left-0' ref={view}></div>
        <div className=' flex flex-col items-center h-full relative'>
        <div className=' h-60  lg:mb-20'>
        <AnimatePresence>
          {check&&<motion.div className=' flex flex-col items-center' initial={{opacity:0, y:100}} animate={{opacity:1, y:0, transition:{ duration:0.6}}} exit={{opacity:0, y:100, transition:{ duration:0.6}}}>
            <div className=' font-Anton text-6xl lg:text-9xl'>LET'S GET</div>
            <div className=' font-Anton text-6xl lg:text-9xl rotate-12 bg-yellow py-1 px-3 hover:rotate-0 transition-all duration-500'>HACKING</div>
          </motion.div>}</AnimatePresence>
          </div>
          <div className=' mb-10 font-Anton'>Let's see what you've got... <span className=' bg-yellow py-1 px-3'>HACK US !!!</span></div>
          <div  className=' flex lg:flex-row flex-col-reverse justify-between w-[90%] 2xl:w-[70%]'>
          <div className=' w-full'>
          <Empty/>
          </div>
          <div className=' w-full h-[400px] bg-white border-2 rounded-lg p-2 border-solid border-black'>
            <div className=' font-Anton text-2xl mb-3'>Comment :</div>
            <div className=' flex items-center'><div className=' mr-2 font-Anton text-purple'>{name}</div> : <div dangerouslySetInnerHTML={{"__html": com}} className=' ml-2 font-Anton text-swarm'/></div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Fifth