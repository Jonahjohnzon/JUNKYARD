import React from "react";
import { Parallax } from "react-scroll-parallax";
const Body = () => {
  return (
    <div className="w-full  flex justify-center items-center pt-[30vh] md:pt-[50vh] pb-[40vh] md:pb-[20vh]">
            <Parallax speed={-15} className=" border-black absolute border-2 rounded-full w-[150px] h-[150px] sm:h-[250px] sm:w-[250px] md:w-[400px] md:h-[400px] overflow-hidden  bg-yellow  cursor-pointer hover:animate-wiggle z-40">
              <img src="/Images/Peace.png" className=" w-full" />
            </Parallax>
          </div>
  );
};

export default Body;
