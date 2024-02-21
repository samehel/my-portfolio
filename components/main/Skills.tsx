import { Frameworks_And_Libraries, Database_skill, Frontend_skill, Languages } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section 
    id='skills'
    className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 z-[100]'
    style={{transform: "scale(0.9)"}}
    >
        <SkillText />
        <div className='relative'>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[1]'>
            {Frontend_skill.map((image, index) => (
                <SkillDataProvider 
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                    skillInfo={[image.skill_name, image.description]}
                />
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[1]'>
            {Languages.map((image, index) => (
                <SkillDataProvider 
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                />
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[1]'>
            {Frameworks_And_Libraries.map((image, index) => (
                <SkillDataProvider 
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                />
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[1]'>
            {Database_skill.map((image, index) => (
                <SkillDataProvider 
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                />
            ))}
        </div>
        </div>

        <div className='w-full h-full z-[-10] absolute'>
            <div className='w-full h-full opacity-30 absolute flex items-center justify-center bg-cover'>
                <video 
                className='w-full h-auto'
                preload='false'
                playsInline
                loop
                muted
                autoPlay
                src='/cards-video.webm'
                />
            </div>
        </div>
    </section>
  )
}

export default Skills