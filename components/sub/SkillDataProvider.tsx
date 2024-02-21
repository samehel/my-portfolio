"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';
import Popup from './SkillDataPopup';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
    skillInfo: string[]
}

const SkillDataProvider = ({ src, width, height, index, skillInfo } : Props)  => {
    const { ref, inView } = useInView({
        triggerOnce: true
    })

    const [showPopup, setShowPopup] = useState(false);

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1},
    }

    const animationDelay = 0.3;

    const handleClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
            <motion.div
            ref={ref}
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{delay: index * animationDelay}}
            >
                <div onClick={handleClick}><Image
                    src={src}
                    width={width}
                    height={height}
                    alt='skill image'
                    className='transform 
                    transition duration-500 
                    hover:scale-150'
                    />
                </div>
                {showPopup && <Popup onClose={handleClosePopup} skillInfo={skillInfo}/>}
            </motion.div>
  )
}

export default SkillDataProvider