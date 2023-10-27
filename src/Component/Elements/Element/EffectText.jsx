import React, { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { motion } from "framer-motion";
const EffectText = ({ words, speed = 0.05,delay = 0.1,...probs}) => {
  const refs = useRef();
  const [s, sets] = useState(false)
  const { inViewport } = useInViewport(refs);
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
      {s && (
        <motion.div
          variants={prints}
          initial="hidden"
          animate="anim"
          className="flex flex-wrap"
        >
          {list.map((e) => {
            if (e == " ") {
              e = "\u00A0";
            }
            return <motion.p variants={children} {...probs} > {e}</motion.p>;
          })}
        </motion.div>
      )}
    </div>
  );
};

export default EffectText;
