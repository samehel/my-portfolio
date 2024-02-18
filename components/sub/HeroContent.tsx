"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

const HeroContent = () => {
  return (
        <motion.div
        initial="hidden"
        animate="visible"
        className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
        >
            <div 
            className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'
            >
                
                <motion.div
                variants={slideInFromTop}
                className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
                >
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
                    <h1 className='Welcome-text text-[13px]'>
                        Backend Software Engineer
                    </h1>
                </motion.div>

                <motion.div 
                variants={slideInFromLeft(0.5)}
                className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
                >
                    <Typewriter
                    options={{
                        autoStart: true,
                        loop: true
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString(`<span>I <span style="background-color: red; background-image: linear-gradient(45deg, purple, cyan); background-size: 100%; background-repeat: repeat; -webkit-background-clip: text; -webkit-text-fill-color: transparent; -moz-background-clip: text; -moz-text-fill-color: transparent;">excel</span> in Software development.</span>`)
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString(`<span>Code. Elevate. <span style="background-color: red; background-image: linear-gradient(45deg, purple, cyan); background-size: 100%; background-repeat: repeat; -webkit-background-clip: text; -webkit-text-fill-color: transparent; -moz-background-clip: text; -moz-text-fill-color: transparent;">Excel.</span></span>`)
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString(`<span>Crafting <span style="background-color: red; background-image: linear-gradient(45deg, purple, cyan); background-size: 100%; background-repeat: repeat; -webkit-background-clip: text; -webkit-text-fill-color: transparent; -moz-background-clip: text; -moz-text-fill-color: transparent;">Exceptional </span>Code Experiences.</span>`)
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString(`<span>Sculpting <span style="background-color: red; background-image: linear-gradient(45deg, purple, cyan); background-size: 100%; background-repeat: repeat; -webkit-background-clip: text; -webkit-text-fill-color: transparent; -moz-background-clip: text; -moz-text-fill-color: transparent;">Superior </span>Software Experiences.</span>`)
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString(`<span>Refining Software, <span style="background-color: red; background-image: linear-gradient(45deg, purple, cyan); background-size: 100%; background-repeat: repeat; -webkit-background-clip: text; -webkit-text-fill-color: transparent; -moz-background-clip: text; -moz-text-fill-color: transparent;">Elevating </span>Experiences.</span>`)
                        .pauseFor(2500)
                        .deleteAll()
                        .start()             
                    }}>

                    </Typewriter>
                    </motion.div>

                    <motion.p 
                    variants={slideInFromLeft(0.8)}
                    className='text-lg text-gray-400 my-5 max-w-[600px]'>
                        I&apos;m a Software engineer with experience in developing robust web and software applications. Armed with a strong backend foundation and a modest grasp of frontend abilities, 
                        I deliver efficient and innovative solutions. 
                        Explore my portfolio for successful projects.
                    </motion.p>

                    <motion.a 
                    variants={slideInFromLeft(1)}
                    className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'>
                        Learn More!
                    </motion.a>
            </div>
                <motion.div 
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center'>
                    <Image
                        src="/mainIconsdark.svg"
                        className='fade-img'
                        alt="work icons"
                        height={650}
                        width={650}
                    />

                </motion.div>
        </motion.div>
    )
}

export default HeroContent