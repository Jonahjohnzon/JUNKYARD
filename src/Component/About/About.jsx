import React,{useState, useEffect, useRef} from 'react'
import {FaDiscord, FaInstagram, FaLinkedinIn, FaTwitter, FaGithub} from "react-icons/fa6";
import { Link } from 'react-router-dom' 
import {TbMusicOff, TbMusic} from 'react-icons/tb'
import { Parallax } from 'react-scroll-parallax';
import Email from '../Elements/Element/Email';
import {FaAnglesDown} from 'react-icons/fa6'
import EffectText from '../Elements/Element/EffectText';
import { animateScroll } from "react-scroll";
import Loader from '../Loader';
import { AnimatePresence, motion } from 'framer-motion';
const About = () => {
    const [load,setload] = useState(true)
    const [sound, setsound] = useState("off")
    const music = useRef()
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
    setTimeout(()=>{
            setload(false)
            
    },3000)
    animateScroll.scrollToTop();
    },[])
    useEffect(()=>{
     
    },[])
    const Sound = ()=>{
        if (sound == 'off')
        {
        setsound("on")
        music.loop = true
        music.current.play()}
        else{
            setsound('off')
            music.loop = false
            music.current.pause()}
    }
  return (
    <div className=' w-full h-full  relative'>
            <AnimatePresence>{load&&<motion.div className=' fixed h-full z-50 w-full bg-swarm' exit={{y:-1000, transition:{ duration:0.9}}}><Loader/></motion.div>}</AnimatePresence>
                    <audio ref={music}>
                    <source src='/sound.mp3' type='audio/mp3' />
                </audio>
        <Parallax speed={-10}  className=' w-full h-[100vh] bg-silver flex justify-center items-center absolute top-0'>
            <img src='/Images/bg.png'/>
        </Parallax>
        <div className=' relative z-40'>
        <div className=' flex p-10 h-[15vh] w-full justify-between ' >
                <div className=' flex items-center'>
                    <Link to='/'><div><img src='/Images/logo.png' className=' w-[60px] hover:animate-wiggle cursor-pointer mr-4' /></div></Link>
                    <div className=' font-Anton text-xl cursor-pointer hover:text-swarm flex items-center text-black'  onClick={Sound}><div className=' mr-1'>{sound === 'off' ? <TbMusicOff/>:<TbMusic/>}</div>sound: {sound}</div></div>
                    
                    <section className='xl:flex justify-between w-[8%] hidden'>
                    <Link to="https://discord.gg/pj3g4hX3"><FaDiscord color='black' className=' cursor-pointer hover:fill-yellow hover:text-swarm'/></Link>
                    <Link to="https://www.instagram.com/luze_box/?hl=en"><FaInstagram color='black' className=' cursor-pointer hover:fill-yellow hover:text-swarm'/></Link>
                    <Link to="https://www.linkedin.com/in/jojome/" ><FaLinkedinIn color='black' className=' cursor-pointer hover:fill-yellow hover:text-swarm'/></Link>
                    <Link to="https://twitter.com/Luzebox"><FaTwitter color='black' className=' cursor-pointer hover:fill-yellow hover:text-swarm'/></Link>
        </section>
                </div>
                <div className=' h-[85vh] w-full flex justify-start items-end px-16 py-10'>
                    <div className=' text-brown animate-pulse text-4xl'><FaAnglesDown/></div>
                </div>
                <div className=' 2xl:h-[100vh] w-full bg-silver flex justify-center items-start'>
                <div className=' w-[97%] md:w-[80%] h-[1100px] md:h-[1000px] 2xl:h-[750px]  bg-white rounded-lg shadow-lg shadow-blacks relative overflow-hidden'>
                    <img src='https://imageupload.io/ib/DW71jgEKZ1uMBp9_1698473639.webp' className=' w-[400px] absolute right-0 top-0' />
                    <img src='https://imageupload.io/ib/eyU6sXcXm4W2yO6_1698473614.webp' className=" w-[600px] absolute -left-32 bottom-0"/>
                    <div className=' w-full h-full flex flex-col   relative justify-center items-center my-12 sm:py-3'>
                   
                        <div className=' font-Anton text-5xl md:text-7xl bg-yellow top-2 sm:top-5  py-7 px-10 text-center mb-10 absolute'>ABOUT US</div>
                        <div className='w-5/6 2xl:w-3/6 md:h-[5/6] bg-white p-3 flex flex-col items-center rounded-lg' >
                            <div className=' font-Anton text-3xl mb-5'><EffectText words="Who We Are"/></div>
                            <div className=' sm:text-xl  font-bold mb-2'><EffectText words="We are a passionate group of cybersecurity professionals who share a common vision to make Africa a hub of cybersecurity excellence. Our team brings together a wealth of experience in the cybersecurity field and we are committed to driving positive change in the industry. " speed={0.01}/></div>
                            <div className=' sm:text-xl font-bold'><EffectText words="         Join us in this exciting journey! You can become a part of our thriving community by participating in discussions, sharing your expertise, attending events, or even volunteering. Together, we can make a real impact on the African cybersecurity landscape." speed={0.01} delay={3}/></div>
                     
                    </div>
                    </div>
                </div></div>
        </div>
        <div><Email/></div>
       
        

    </div>
  )
}

export default About