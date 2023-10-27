import React, { useEffect, useState, useRef } from "react";
import { Detail } from "../Component/Element";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { AiOutlineLeft } from "react-icons/ai";

const Maps = ({ detail, first, setFirst }) => {
  const Data = detail.map((data) => {
    const slide = {
      hidden: {
        x: -1200,
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
      show: {
        x: "0",
        opacity: 1,
        transition: {
          duration: 1,
          when: "beforeChildren",
          staggerChildren: 0.1,
        },
      },
    };
    const children = {
      hidden: {
        x: -1200,
      },
      show: {
        x: 0,
      },
    };
    const slide2 = {
      hidden: {
        x: 1200,
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
      show: {
        x: "0",
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
    };

    const Change = () => {
      if (first < 9) {
        setFirst(first + 1);
      } else {
        setFirst(1);
      }
    };

    return (
      <>
        <div className="w-full flex justify-end">
          <AnimatePresence>
            {data.first >= first ? (
              <motion.div
                className=" w-[80%] sm:w-[60%] md:w-[50%] xl:w-[35%] 2xl:w-[30%] h-[70%] md:h-[80%] absolute top-2 sm:left-1/3 lg:top-24 lg:left-20 xl:left-60 2xl:left-80  z-30"
                variants={slide}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
      
                <div
                  className={`lg:h-full h-[65%] sm:h-[70%] w-[75%] lg:w-[85%]  rounded-lg  bg-white flex justify-center items-center shadow-md `}
                  variants={children}
                  key={data.key}
                  style={{ transform: `rotate(${data.rotate}deg)` }}
                  onClick={() => {
                    Change();
                  }}
                >
                  <div
                    style={{ backgroundColor: `${data.colorb}` }}
                    className=" w-[93%] h-[93%] flex flex-col justify-between items-center cursor-pointer"
                  >
                    <div
                      style={{ color: `${data.color}` }}
                      className=" lg:text-xl pt-2 font-extrabold flex items-center font-Anton"
                    >
                         Hack Card
                    </div>
                    <div
                      className=" h-2/3 flex items-center font-Anton font-extrabold text-[5rem] sm:text-[10rem] lg:text-[15rem]"
                      style={{ color: `${data.color}` }}
                    >
                      {data.number}
                    </div>
                    <div
                      style={{ color: `${data.color}` }}
                      className=" lg:text-xl sm:text-base text-xs font-Bert italic flex items-center"
                    >
                      <div>#.</div>
                      <div>{data.title}</div>
                      <div>.#</div>
                    </div>
                    <div
                      style={{ color: `${data.color}` }}
                      className=" font-extrabold text-[7px] mt-3"
                    >
                      With great gift come great responsibilities
                    </div>
                    <div
                      className="sm:h-10 sm:w-10 w-5 h-5 rounded-full border-2 border-solid my-2"
                      style={{ borderColor: `${data.color}` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ) : (
              ""
            )}
          </AnimatePresence>
          <div className=" w-[90%] lg:w-[40%] 2xl:w-[50%] font-Anton">
            <AnimatePresence>
              {data.first == first ? (
                <motion.div
                  variants={slide2}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className=" w-[90%] sm:w-4/6"
                >
                  <section className="flex items-center h-full text-white font-extrabold">
                    <div className=" font text-4xl sm:text-6xl lg:text-8xl mr-2">{data.number}</div>
                    <i className=" sm:text-2xl lg:text-5xl font-extrabold px-4 py-4 h-full text-brown rounded-lg bg-yellow">
                      {data.title}
                    </i>
                  </section>
                  <div className=" text-whitey sm:text-base text-sm  lg:text-lg ">
                    {data.content}
                  </div>
                </motion.div>
              ) : (
                ""
              )}
            </AnimatePresence>
          </div>
        </div>
      </>
    );
  });
  return Data;
};
const Card = () => {
  const [first, setFirst] = useState(1);
  const New = () => {
    console.log(first);
    if (first > 1) {
      setFirst(first - 1);
    }
  };
  const triggerss = useRef();
  const check = useInView(triggerss);
  return (
    <div className=" 3xl:w-[85%]  h-full relative">
      <div className=" w-full h-full flex justify-between items-center">
        <div className=" w-[100%] h-[85%] items-end lg:items-center relative flex justify-between " ref={triggerss}>
          <div className=" w-full">
            {check&&<Maps detail={Detail} first={first} setFirst={setFirst} />}
            <div
            className="absolute -bottom-20 left-[2%] lg:right-80 h-16 w-16 lg:w-16 lg:h-16 rounded-full bg-yellow shadow-sm hover:shadow-none shadow-black flex justify-center items-center cursor-pointer z-40"
            onClick={() => {
              New();
            }}
          >
            <AiOutlineLeft className=" text-3xl " />
          </div>
          </div>
  
        </div>
      </div>
    </div>
  );
};

export default Card;
