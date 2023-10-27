import React, { useRef, useEffect } from "react";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import { useContext } from "react";
import { useInView } from "framer-motion";
import { Context } from "../../Context/Context";
import { Parallax } from "react-scroll-parallax";
const Frontpart = () => {
  const { setlarge } = useContext(Context);
  const second = useRef();
  const Inview = useInView(second);

  useEffect(() => {
    setlarge(!Inview);

  });
  return (
    <div className=" w-full h-full  bg-pink" ref={second}>
      <div className=" bg-pink h-full  relative z-30 w-full">
          <Parallax speed={10}  className="flex  bg-pink justify-center w-full h-full">
            <Second />
          </Parallax>
      </div>
      <Third />
      <Fourth />
    </div>
  );
};

export default Frontpart;
