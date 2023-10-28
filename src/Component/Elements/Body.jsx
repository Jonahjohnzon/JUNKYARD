import React from "react";
import { Parallax } from "react-scroll-parallax";
const Body = () => {
  return (
    <div className="w-full absolute h-[100vh] flex justify-center top-0 items-center z-30">
            <Parallax speed={8} className=" border-black absolute border-2 rounded-full w-[200px] h-[200px] sm:h-[250px] sm:w-[250px] md:w-[400px] md:h-[400px] overflow-hidden  bg-yellow  cursor-pointer hover:animate-wiggle z-40">
              <img src="https://imageupload.io/ib/YkblSkbyXBDh3Nc_1698473701.png" className=" w-full" />
            </Parallax>
          </div>
  );
};

export default Body;
