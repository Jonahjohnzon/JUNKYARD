import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiDotsNineFill } from "react-icons/pi";
import { RiSendPlane2Fill } from "react-icons/ri";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Context } from "./Context/Context";

const Slidemenu = () => {
  {
    /** Slide menu */
  }
 const {menu,setmenu} = useContext(Context)

  const slide = {
    hidden: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
    exit: { opacity: 0 },
  };
  const child = {
    hidden: { x: 1200, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { x: 1200, opacity: 0 },
  };
  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          variants={slide}
          initial="hidden"
          animate="animate"
          exit="exit"
          className=" w-[100vw] h-[100vh] fixed top-0  bg-swarm z-50  text-white"
        >
          <div
            className="bg-dak bg-opacity-60  w-full h-full"
           
          ></div>
          <motion.div
            variants={child}
            className=" fixed w-full bg-dak h-full right-0 top-0 z-50 flex flex-col items-center justify-between"
          >
            <div className=" w-[80%]">
              <div className=" flex flex-col  w-full">
                {/*logo*/}
                <div className=" flex items-center w-full justify-between my-[1.8vh]">
                  <div className=" w-full flex items-center">
                    <img
                      src="/Images/logo.png"
                      className=" w-[60px] mr-3"
                    />
                  </div>
                  <div className="flex justify-end w-full items-center">
                    <div
                      className=" transition-all duration-500 cursor-pointer fill-black bg-yellow rounded-full "
                     onClick={()=>{setmenu(false)}}
                    >
                      <svg
                        className="w-[20px] h-[20px] m-[20px]"
                        viewBox="0 0 307.164 307.164"
                        enable-background="new 0 0 307.164 307.164"
                      >
                        <g>
                          <path d="m193.307,126.847c40.828-33.225 75.857-73.173 103.504-118.246 0.598-0.975 0.419-2.236-0.426-3.006-0.845-0.77-2.118-0.83-3.032-0.144-9.58,7.185-24.574,17.651-39.701,25.109-19.557,9.641-40.571,13.577-51.19,15.055-4.476,0.623-8.461,3.156-10.929,6.941-5.225,8.016-15.351,23.039-28.405,39.984 6.044,7.515 12.568,15.213 19.406,22.654 3.755,4.085 7.343,7.965 10.773,11.653z" />
                          <path d="m115.393,147.168c-17.296,18.396-29.524,30.808-36.563,37.816l-3.183-3.183c-3.906-3.904-10.236-3.904-14.143,0-3.905,3.905-3.905,10.237 0,14.143l1.405,1.405c-3.597-0.354-7.317,0.844-10.071,3.598-3.232,3.232-4.311,7.791-3.263,11.921-4.131-1.048-8.69,0.031-11.922,3.262-3.232,3.232-4.311,7.792-3.263,11.922-4.13-1.047-8.69,0.031-11.921,3.262-2.991,2.991-4.14,7.119-3.466,10.992l-1.932-1.932c-3.906-3.904-10.236-3.904-14.143,0-3.905,3.905-3.905,10.237 0,14.143l42.193,42.192c1.608,1.607 3.716,2.619 5.977,2.868l23.146,2.55c0.372,0.041 0.741,0.061 1.107,0.061 5.031,0 9.363-3.789 9.927-8.906 0.605-5.489-3.354-10.43-8.845-11.034l-19.653-2.165-14.243-14.243c0.712,0.124 1.432,0.195 2.153,0.195 3.199,0 6.398-1.221 8.839-3.661 3.232-3.232 4.311-7.791 3.263-11.921 1.011,0.257 2.046,0.399 3.083,0.399 3.199,0 6.398-1.221 8.839-3.661 3.232-3.232 4.311-7.791 3.263-11.922 1.011,0.256 2.045,0.398 3.082,0.398 3.199,0 6.398-1.221 8.839-3.661 2.755-2.755 3.953-6.475 3.599-10.071l2.814,2.814 2.166,19.653c0.563,5.118 4.895,8.906 9.927,8.906 0.366,0 0.735-0.02 1.107-0.061 5.49-0.605 9.45-5.545 8.845-11.034l-2.55-23.145c-0.249-2.261-1.261-4.368-2.868-5.977l-5.84-5.84 41.007-41.007c-9.115-6.05-18.025-12.416-26.712-19.076z" />
                          <path d="m304.235,240.375c-3.906-3.904-10.236-3.904-14.143,0l-1.932,1.932c0.674-3.873-0.475-8.001-3.466-10.992-3.232-3.232-7.79-4.31-11.921-3.262 1.048-4.131-0.03-8.691-3.262-11.922-3.232-3.232-7.79-4.31-11.92-3.263 1.047-4.13-0.031-8.689-3.263-11.921-1.167-1.167-2.512-2.048-3.943-2.657-1.946-0.828-4.057-1.146-6.13-0.941l1.406-1.406c3.905-3.905 3.905-10.237 0-14.143-3.906-3.904-10.236-3.904-14.143,0l-3.183,3.183c-9.534-9.492-28.572-28.879-56.844-59.64-25.939-28.223-47.365-59.759-55.859-72.788-2.468-3.786-6.453-6.319-10.929-6.942-10.619-1.478-31.633-5.414-51.19-15.055-15.128-7.456-30.122-17.923-39.702-25.107-0.425-0.319-0.927-0.476-1.428-0.476-0.577,0-1.152,0.209-1.604,0.621-0.845,0.77-1.024,2.031-0.426,3.006 36.374,59.301 85.515,109.744 143.847,147.654l2.486,1.615 49.381,49.381-5.84,5.84c-1.607,1.608-2.619,3.716-2.868,5.977l-.068,.62-2.481,22.526c-0.606,5.489 3.354,10.43 8.845,11.034 0.372,0.041 0.741,0.061 1.107,0.061 5.031,0 9.363-3.788 9.927-8.906l1.29-11.707 4.632-4.632c0.609,1.431 1.489,2.775 2.656,3.942 2.44,2.44 5.64,3.661 8.839,3.661 1.037,0 2.072-0.142 3.083-0.399-1.048,4.131 0.03,8.69 3.262,11.922 2.441,2.441 5.64,3.661 8.839,3.661 1.037,0 2.071-0.142 3.082-0.398-1.048,4.13 0.031,8.689 3.263,11.921 2.44,2.44 5.64,3.661 8.839,3.661 0.721,0 1.441-0.071 2.154-0.195l-14.243,14.243-19.653,2.165c-5.49,0.604-9.45,5.545-8.845,11.034 0.563,5.118 4.895,8.906 9.927,8.906 0.366,0 0.735-0.021 1.107-0.061l23.146-2.55c2.261-0.249 4.368-1.261 5.977-2.868l42.192-42.192c3.904-3.906 3.904-10.238-0.001-14.143z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" h-[0.1px] opacity-25 w-full bg-gray"></div>
              </div>

              <ul className=" text-gray  mt-[4vh]">
                  <div className=" h-[0.1px] opacity-25 w-full bg-gray mb-[1vh]"></div>
                  <Link to="/" onClick={()=>{setmenu(false)}}>
                    <li className=" mb-2 flex items-center  font-bold ">
                      <PiDotsNineFill className=" mr-4" />
                      HOME
                    </li>
                  </Link>
                  <div className=" h-[0.1px] opacity-25 w-full bg-gray mb-[3vh]"></div>
                  <Link to="/about"  onClick={()=>{setmenu(false)}}>
                    <li className=" mb-2 flex items-center  font-bold ">
                      <PiDotsNineFill className=" mr-4" />
                      ABOUT US
                    </li>
                  </Link>
                  <div className=" h-[0.1px] opacity-25 w-full bg-gray mb-[3vh]"></div>
                  <Link
                    to="/join"
                    onClick={()=>{setmenu(false)}}
                  >
                    <li className=" mb-2 flex items-center  font-bold ">
                      <PiDotsNineFill className=" mr-4" />
                      PARTNER
                    </li>
                  </Link>
                  <div className=" h-[0.1px] opacity-25 w-full bg-gray mb-[1vh]"></div>
                  <div className=" h-[0.1px] opacity-25 w-full bg-gray mb-[1vh]"></div>
                </ul>

              <div className=" h-[0.1px] opacity-25 w-full bg-gray mb-[1vh]"></div>
              <div className="flex w-[40%] justify-between">
                <Link to="https://twitter.com/Luzeboxlinl">
                  <div className=" hover:text-green cursor-pointer transition-all duration-500">
                    <AiOutlineTwitter size={20} />
                  </div>
                </Link>
                <Link to="https://web.facebook.com/jonah.johnzon.5/">
                  <div className=" hover:text-green cursor-pointer transition-all duration-500">
                    <CgFacebook size={20} />
                  </div>
                </Link>
                <Link to="https://www.linkedin.com/in/jojome/">
                  <div className=" hover:text-green cursor-pointer transition-all duration-500">
                    <TiSocialLinkedin size={20} />
                  </div>
                </Link>
                <Link to="https://www.instagram.com/luze_box/?hl=en">
                  <div className=" hover:text-green cursor-pointer transition-all duration-500">
                    <AiFillInstagram size={20} />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Slidemenu;
