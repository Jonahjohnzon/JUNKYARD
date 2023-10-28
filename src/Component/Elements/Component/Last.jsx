import React, { useEffect, useRef, useContext ,useState} from "react";
import { useInView } from "framer-motion";
import { Context } from "../../Context/Context";
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";

const Last = () => {
  const { setColor } = useContext(Context);
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
  });
  return (
    <div className="w-full h-full relative overflow-hidden" id="discord">
      <Parallax speed={(windowWidth > 1060)?40:0} className="w-full absolute bottom-0  z-0"><img
        src="https://imageupload.io/ib/VXLy7FeWHG8SHXb_1698473701.png"
        className="  "
      /></Parallax>
      <div className=" w-full  h-full flex justify-center items-center relative">
       <Link to="https://discord.gg/pj3g4hX3"><div className=" py-6 px-20 shadow-md bg-yellow cursor-pointer -rotate-12 text-2xl md:text-8xl font-extrabold whitespace-nowrap">
          DISCORD YARD
        </div></Link> 
      </div>
      <div className=" absolute bottom-20 w-40 h-40" ref={triggerss}></div>
      <div className=" absolute bottom-5 z-10  w-full flex justify-between">
        <div className=" flex">
          <p className=" text-whitey  font-extrabold text-[4px] whitespace-nowrap md:text-[9px] font-Neus opacity-70 mr-4 md:mr-10 md:ml-24">
            WEB BY JONAH OMINYI (LOOZEBOX)
          </p>
          <p className="  text-whitey left-20 font-extrabold text-[4px] whitespace-nowrap md:text-[9px]  font-Neus opacity-70">
            OWNER (JUNKYARD)
          </p>
        </div>
        <div>
          <p className="  text-whitey left-20 font-extrabold text-[4px] whitespace-nowrap md:text-[9px]  font-Neus opacity-70 mr-20">
            ALL RIGHT RESERVED 2023 - 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Last;
