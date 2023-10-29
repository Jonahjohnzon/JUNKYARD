import React, { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { motion } from "framer-motion";
const EffectText = ({ words, speed = 0.05,delay = 0.1,...probs}) => {
  const refs = useRef();
  const [s, sets] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { inViewport } = useInViewport(refs);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  useEffect(()=>{
    if(inViewport)
    {
    sets(true)
    }
  },[inViewport])
  var list = [];
  for (let i of words) {
    list.push(i);
  }
  const prints = {
    hidden: { opacity: 0 },
    anim: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        type: "tween",
        duration: 0.3,
        delay,
        stiffness: 400,
        staggerChildren: speed,
      },
    },
  };
  const children = {
    hidden: { opacity: 0 },
    anim: { opacity: 1 },
  };
  return (
    <div ref={refs}>
      {(s || windowWidth < 1060 ) &&  (
        <motion.div
          variants={prints}
          initial="hidden"
          animate="anim"
          className="flex flex-wrap"
        >
          {list.map((e, index) => {
            if (e == " ") {
              e = "\u00A0";
            }
            return <motion.p variants={children} {...probs} key={index}> {e}</motion.p>;
          })}
        </motion.div>
      )}
    </div>
  );
};

export default EffectText;
