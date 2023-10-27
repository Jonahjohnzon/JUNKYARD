import React from 'react'
import { useState, useContext} from 'react';
import {FaDiscord, FaInstagram, FaLinkedinIn, FaTwitter, FaGithub} from "react-icons/fa6";
import {ImMenu} from 'react-icons/im'
import { motion, AnimatePresence } from 'framer-motion';
import { Context } from './Context/Context';
import { Link } from 'react-router-dom';

const Navbartwo = () => {
  const {color, setmenu} = useContext(Context)
    const [active, setactive] = useState("Home")
    const slide ={
        hide:{
          y :-20,
          opacity : 0
        },
        start : {
          y :0,
          opacity : 1,
          transition:{
            duration :1,
            type: "spring",
            stiffness: 100 
          }
        }
      }
    console.log(color)
  return (
    <AnimatePresence>
    <motion.div variants={slide} initial="hide" animate="start" exit="hide" className=' fixed w-full flex justify-center h-[70px] items-center z-50 backdrop-blur-lg font-Anton tracking-wide'>
    <div className='flex lg:flex-row md:flex-col md:justify-center xl:justify-between justify-between w-[95%] items-center'>

        <section className=' flex xl:flex items-center h-full md:hidden'>
        <div className=' border-black border-2 rounded-full w-10 h-10 overflow-hidden  bg-yellow'><img src='/Images/Peace.png'  className=' w-full'/></div>
        </section>
        <section className='md:flex justify-between hidden xl:w-[27%] lg:w-[50%]'>
            <div onClick={()=>{
                setactive("Home")
            }} className={`font-extrabold  text-sm ${active === "Home" ? "text-black bg-yellow" : `text-${color}`} hover:shadow-sm cursor-pointer py-2 px-5 rounded-3xl whitespace-nowrap`}>Home</div>
          <Link to="/join"><div onClick={()=>{
                setactive("Talk")
            }} className={`font-extrabold  text-sm ${active === "Talk" ? "text-black bg-yellow" : `text-${color}`} hover:shadow-sm cursor-pointer py-2 px-5 rounded-3xl whitespace-nowrap `}>Partner</div></Link>
            <Link to="/about"><div onClick={()=>{
                setactive("History")
            }} className={`font-extrabold  text-sm ${active === "History" ? "text-black bg-yellow" : `text-${color}`} hover:shadow-sm cursor-pointer py-2 px-5 rounded-3xl whitespace-nowrap`}>About Us</div> </Link>
            <div className={`font-extrabold text-sm text-${color} italic opacity-30 py-2 px-5 rounded-3xl whitespace-nowrap`}>Collections</div>
        </section>
        <section className='xl:flex justify-between w-[10%] hidden'>
        <Link to="https://discord.gg/pj3g4hX3"><FaDiscord className={`cursor-pointer ${active === "Talk" ? "text-black bg-yellow" : `text-${color}`}  hover:fill-yellow`} /></Link>
        <Link to="https://www.instagram.com/luze_box/?hl=en"> <FaInstagram  className={`cursor-pointer ${active === "Talk" ? "text-black bg-yellow" : `text-${color}`}  fill-${color} hover:fill-yellow`} /></Link>
        <Link to="https://www.linkedin.com/in/jojome/"> <FaLinkedinIn  className={`cursor-pointer ${active === "Talk" ? "text-black bg-yellow" : `text-${color}`}  fill-${color} hover:fill-yellow`} /></Link>
        <Link to="https://twitter.com/Luzebox">  <FaTwitter  className={`cursor-pointer ${active === "Talk" ? "text-black bg-yellow" : `text-${color}`}  fill-${color} hover:fill-yellow`} /></Link>
        </section>
        <section className=' flex md:hidden'>
            <div className=' w-14 h-14 flex justify-center items-center bg-yellow rounded-full' onClick={()=>{setmenu(true)}}>
           <ImMenu className=' '/> 
            </div>
        </section>
       
    </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Navbartwo