import Loader from '../Loader'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom' 
import {AnimatePresence, motion} from 'framer-motion'
import {FaDiscord, FaInstagram, FaLinkedinIn, FaTwitter, FaGithub} from "react-icons/fa6";
import {TbMusicOff, TbMusic} from 'react-icons/tb'
import { Formik } from 'formik'
import * as yup from 'yup'
import emailjs from "@emailjs/browser";


const Join = () => {
    const [load,setload] = useState(true)
    const [result, setresult] = useState(false);
    const [wording, setwording] = useState("");
    const [sound, setsound] = useState("off")
    const music = useRef()
 
    useEffect(()=>{
    setTimeout(()=>{
            setload(false)
            
    },1000)
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
    const schema = yup.object({
        name:yup.string().max(12).min(2).required(),
        junky: yup.string().max(20).min(2).required(),
    })

  return (
    <div>
        <AnimatePresence>{load&&<motion.div className=' fixed h-full z-50 w-full bg-swarm' exit={{y:-1000, transition:{ duration:0.9}}}><Loader/></motion.div>}</AnimatePresence>
        <div className=' bg-[url("/Images/boxes-background.png")] w-full h-[100vh] relative'>
            <div className=' h-full w-full backdrop-blur-lg absolute top-0 z-10'></div>
            <div className=' relative flex flex-col justify-center items-center z-20 h-full'>
                <div className=' flex p-10 h-1/6 justify-between w-full' >
                <div className=' flex items-center'>
                    <Link to='/'><div><img src='/Images/logo.png' className=' w-[60px] hover:animate-wiggle cursor-pointer mr-4' /></div></Link>
                    <div className=' font-Anton text-white hover:text-yellow text-xl cursor-pointer flex items-center' onClick={Sound}><div className=' mr-1'>{sound === 'off' ? <TbMusicOff/>:<TbMusic/>}</div>sound: {sound}</div></div>
                    <section className='xl:flex justify-between w-[8%] hidden'>
                    <Link to="https://discord.gg/pj3g4hX3"><FaDiscord color='white' className=' cursor-pointer hover:fill-yellow'/></Link>
                    <Link to="https://www.instagram.com/luze_box/?hl=en"><FaInstagram color='white' className=' cursor-pointer hover:fill-yellow'/></Link>
            <Link to="https://www.linkedin.com/in/jojome/" ><FaLinkedinIn color='white' className=' cursor-pointer hover:fill-yellow'/></Link>
            <Link to="https://twitter.com/Luzebox"><FaTwitter color='white' className=' cursor-pointer hover:fill-yellow'/></Link>
        </section>
                </div>
                <audio ref={music}>
                    <source src='/sound.mp3' type='audio/mp3' />
                </audio>
                <div className=' w-[90%] h-5/6 flex justify-center items-center text-center'>
                <div className=' text-white font-Anton text-2xl'>
                        <div className=' sm:w-[500px]'><div>TO JOIN YOU HAVE TO SEND YOUR NAME AND JUNKYCODE</div>
                        <div className='mb-10'>HOPEFULLY YOU HACKED THE COMMENT SECTION</div></div>
                        <div className=' text-base text-black'>
                            <Formik
                            initialValues={{name:"", junky:""}}
                            validationSchema={schema}
                            onSubmit={(forms,{resetForm})=>{
                                setload(true);
                            emailjs
                                .send(
                  "service_uhmsgya",
                  "template_ol2s0e1",
                  forms,
                  "jhqkH0F-BeKZgqEvn",
                )
                .then(
                  (result) => {
                    setload(false);
                    setwording("Mail sent 🎉🎉🎉");
                    setresult(true);
                  },
                  (error) => {
                    setwording("Something went wrong 😿😿😿");
                    setload(false);
                    setresult(true);
                  },
                );
                                resetForm()
                            }}>
                                {(props)=>{
                                    return(
                                        <div>
                                            <div className='mb-2 flex flex-col items-center'>
                                                <input type='text' placeholder='Name' className=' placeholder:font-Neus font-Neus  w-full h-14 p-2 rounded-lg' value={props.values.name} onChange={props.handleChange('name')}/>
                                                <div  className=' mb-1 text-purple text-sm'>{props.touched.name && props.errors.name}</div>
                                            </div>
                                            <div className='mb-2 flex flex-col items-center'>
                                                <input type='text' placeholder='JunkyCode' className=' w-full h-14 p-2 font-Neus rounded-lg placeholder:font-Neus' value={props.values.junky} onChange={props.handleChange('junky')}/>
                                                <div  className=' mb-1 text-purple text-sm'>{props.touched.junky && props.errors.junky}</div>
                                            </div>
                                            <input type='submit' value="Send" className=' mb-5 bg-yellow font-Anton px-8 rounded-lg shadow-sm cursor-pointer hover:shadow-none shadow-black py-2 text-black' onClick={props.handleSubmit}/>
                                            {result &&<div>{wording}</div>}
                                        </div>
                                    )
                                }}
                            </Formik>
                        </div>
                        
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Join