import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import {GiJusticeStar} from 'react-icons/gi'
import { Link } from "react-scroll";

const Frontnav = () => {
  const { color } = useContext(Context);
  return (
    <div className="hidden lg:flex h-full flex-col  justify-between items-start fixed z-50 left-12 top-6 font-Bert text-[9px] transition duration-500 py-20">
    <div></div>
      <div className={` h-[300px] flex justify-center text-${color}`}>
        <div className={`w-[1.5px] h-full`} style={{backgroundColor:color}}></div>
        <section className=" h-full">
          <div className="  h-full flex flex-col justify-between list-none z-50">
          <Link to="junky" smooth={true} duration={800}><li className=" flex items-center  cursor-pointer  group">
              <div>__ </div>
            <div className=" ml-4  font-extrabold   hover:scale-110 transition-all duration-300    group-hover:text-yellow ">
                J<span className=" text-[8px]">U</span>NK<span className=" text-[8px]">Y</span>ARD
              </div>
            </li></Link>
            <Link to="quote" smooth={true} duration={800}><li className=" flex items-center cursor-pointer  group">
              <div>__ </div>
             <div className="ml-4  font-extrabold  hover:scale-110 transition-all  duration-300    group-hover:text-yellow  ">
                QU<span className=" text-[8px]">O</span>TE
              </div>
            </li></Link>
            <Link to="tribe" smooth={true} duration={800}><li className=" flex items-center cursor-pointer  group">
              <div>__ </div>
              <span className=" ml-4   font-extrabold  hover:scale-110 transition-all  duration-300    group-hover:text-yellow ">
              <span className=" text-[8px]">TR</span>I<span className=" text-[8px]">B</span>E
              </span>
            </li></Link>
            <Link to="tribek" smooth={true} duration={800}><li className=" flex items-center cursor-pointer  group">
              <div>__ </div>
              <span className=" ml-4  font-extrabold   hover:scale-110 transition-all  duration-300    group-hover:text-yellow ">
                TR<span className=" text-[8px]">IB</span>E K<span className=" text-[8px]">NO</span>WL<span className=" text-[8px]">ED</span>G<span className=" text-[8px]">E</span>
              </span>
            </li></Link>
            <Link to="junkyc" smooth={true} duration={800}><li className=" flex items-center  cursor-pointer  group">
              <div>__ </div>
              <span className=" ml-4  font-extrabold  hover:scale-110 transition-all duration-300  group-hover:text-yellow ">
                J<span className=" text-[8px]">UN</span>K<span className=" text-[8px]">Y C</span>O<span className=" text-[8px]">D</span>E
              </span>
            </li></Link>
            <Link to="discord" smooth={true} duration={800}><li className="cursor-pointer flex items-center group">
              <div>__ </div>
              <span className=" ml-4  font-extrabold  hover:scale-110 transition-all duration-300    group-hover:text-yellow  ">
                D<span className=" text-[8px]">IS</span>C<span className=" text-[8px]">OR</span>D <span className=" text-[8px]">Y</span>ARD
              </span>
            </li></Link>
          </div>
        </section>
      </div>
      <GiJusticeStar className=" text-3xl text-[#FF00A3]"/>
    </div>
  );
};

export default Frontnav;
