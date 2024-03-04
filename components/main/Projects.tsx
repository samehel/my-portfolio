"use client"

import React, { useEffect, useRef } from 'react';
import ProjectCard from '../sub/ProjectCard';
import { My_Projects } from '@/constants';

import useEmblaCarousel from 'embla-carousel-react'

const Projects = () => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    draggable: false
  })

  // const [emblaRef2, embla2] = useEmblaCarousel({
  //   loop: true,
  //   draggable: false
  // })

  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    autoplayIntervalRef.current = setInterval(() => {
      if (embla) {
        embla.scrollNext();
      }

      // if(embla2) {
      //   embla2.scrollPrev();
      // }
    }, 2500); // Adjust the autoplay interval (in milliseconds) as needed
  };

  const stopAutoplay = () => {
    if (autoplayIntervalRef.current !== null) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
    };
  }, [embla]);



  return (
    <div id='projects' className='flex flex-col items-center justify-center my-[-100px] z-[101]'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>
      <div className='content-center '>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {My_Projects.map((project, index) => (
              <div key={index} className="embla__slide">
                <ProjectCard
                  src={project.Image}
                  title={project.project_name}
                  description={project.description}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>
        {/* <div className="embla" ref={emblaRef2}>
          <div className="embla__container">
            {My_Projects.map((project, index) => (
              <div key={index} className="embla__slide">
                <ProjectCard
                  src={project.Image}
                  title={project.project_name}
                  description={project.description}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
