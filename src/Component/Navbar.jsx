import React from 'react'
import { useState, useContext, useEffect} from 'react';
import {FaDiscord, FaInstagram, FaLinkedinIn, FaTwitter, FaGithub} from "react-icons/fa6";
import {ImMenu} from 'react-icons/im'
import { motion,  AnimatePresence } from 'framer-motion';
import { Context } from './Context/Context';
import { Link } from 'react-router-dom';


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
const Navbar = () => {
  const {setColor} = useContext(Context);

useEffect(()=>{

    setColor("white");
  
},[])
    const [uri, seturl] = useState(" ")
    const [active, setactive] = useState("Home")
  return (
    <AnimatePresence>
    <motion.div variants={slide} initial="hide" animate="start" exit="hide" className='bg-transparent fixed w-full flex justify-center h-[12%] items-center z-50' >
    <div className='flex xl:flex-row lg:flex-col text-lg justify-between md:justify-center xl:justify-between w-[95%] items-center'>

        <section className=' md:hidden xl:flex flex items-center h-full'>
        <div className=' border-black border-2 rounded-full w-16 h-16 overflow-hidden  bg-yellow'><img src='/Images/Peace.png'  className=' w-full'/></div>
        </section>
        <section className='md:flex justify-between hidden xl:w-[27%] lg:w-[50%]'>
            <div onClick={()=>{
                setactive("Home")
            }} className={`font-extrabold italic ${active === "Home" ? "text-black bg-yellow" : " text-white"} hover:text-black cursor-pointer py-2 px-5 rounded-3xl whitespace-nowrap`}>Home</div>
           <Link to="/join"><div onClick={()=>{
                setactive("Talk")
            }} className={`font-extrabold italic ${active === "Talk" ? "text-black bg-yellow" : " text-white"} hover:text-black cursor-pointer py-2 px-5 rounded-3xl whitespace-nowrap `}>Partner</div></Link> 
                        <Link to="/about"><div onClick={()=>{
                setactive("History")
            }} className={`font-extrabold italic ${active === "History" ? "text-black bg-yellow" : " text-white"} hover:text-black cursor-pointer py-2 px-5 rounded-3xl whitespace-nowrap`}>About Us</div></Link>
            <div className=' font-extrabold text-white italic opacity-30 py-2 px-5 rounded-3xl whitespace-nowrap'>Collections</div>
        </section>
        <section className='xl:flex justify-between w-[10%] hidden'>
            <Link to="https://discord.gg/pj3g4hX3"><FaDiscord color='white' className=' cursor-pointer hover:fill-yellow'/></Link>
            <Link to="https://www.instagram.com/luze_box/?hl=en"><FaInstagram color='white' className=' cursor-pointer hover:fill-yellow'/></Link>
            <Link to="https://www.linkedin.com/in/jojome/"><FaLinkedinIn color='white' className=' cursor-pointer hover:fill-yellow'/></Link>
            <Link to="https://twitter.com/Luzebox"><FaTwitter color='white' className=' cursor-pointer hover:fill-yellow'/></Link>
        </section>
        <section className=' flex md:hidden' >
            <div className=' w-20 h-20 flex justify-center items-center bg-yellow rounded-full'>
           <ImMenu className=' '/> 
            </div>
        </section>
       
    </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Navbar