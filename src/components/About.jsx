import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index,title,icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
        variants={fadeIn("right","sprint",0.5 * index,0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div options={{
            max: 45,
            scale: 1, 
            speed: 450
          }}
          className= "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <img src={icon} alt={title} className="w-16 h-16 object contain"/>
              <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p 
      variants={fadeIn("","",0.1,1)}
      className = "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm studying Computer Science/Math at Stanford University.
        I am passionate about the power of Math and CS as tool to model and optimize parts of our world and am thus very interested in AI and finance.
        My deep learning research includes working on computer vision and NLP technologies.
        In my free time, I love gaming, developing in Unity and Blender, working on open-source projects, and analyzing startups. 
        I'm also a big football (soccer) fan—Go Chelsea!
      </motion.p>
    {/*
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => ( 
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>/*/}
    </>
  )
}

export default SectionWrapper(About,"about")