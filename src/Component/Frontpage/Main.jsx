import React, { useEffect, useRef, useState } from "react";
import Cloud from "../Elements/Element/Cloud";
import Body from "../Elements/Body";
import Frontpart from "../Elements/Component/Frontpart";
import Loader from "../Loader";
import { AnimatePresence,motion } from "framer-motion";
import { Parallax , ParallaxProvider} from "react-scroll-parallax";
import { animateScroll } from "react-scroll";
import Slidemenu from "../Slidemenu";

const Main = () => {
  const [load,setload] = useState(true)
  const ref = useRef()
  useEffect(()=>{
    setTimeout(()=>{setload(false)},3000)
    animateScroll.scrollToTop();
  },[])
  return (
    <ParallaxProvider> 
   <AnimatePresence> {load &&<motion.div className=" w-full h-[100vh] z-50 bg-swarm fixed" exit={{y:'-100%',transition:{duration:0.7}}}><Loader/></motion.div>}</AnimatePresence>
    <div className=" h-full w-full overflow-x-hidden relative" id="junky">
     
      <div className=" h-[100vh]  sm:h-[2300px] relative  bg-[url('/Images/background.jpg')] bg-no-repeat bg-cover bg-center">
      <Cloud />
     <Body />
     <Slidemenu/>
      <div className="w-full absolute bottom-0 z-30">
        <img src="/Images/Zokus.webp" className=" w-full" />
      </div>
      </div>
      <Parallax >
      <Frontpart />
      </Parallax>
    </div>
    </ParallaxProvider>
  );
};

export default Main;
