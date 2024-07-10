import React from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { fadeIn,textVariant } from '../utils/motion';
import {services} from '../constants'
import { SectionWrapper } from '../hoc';
import Tilt from 'react-parallax-tilt'
import { linkedIn, mailIcon} from '../assets';

const Contact = () => {
  return (
    <Tilt>
      <div className='green-pink-gradient p-[5px] rounded-xl'>
        <motion.div 
        className = "mt-4  bg-black-100 text-[17px] mx-auto text-center max-w-screen rounded-xl shadow-card">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Contact Me</h2>
          </motion.div>
          <div className="flex justify-center">
            <a href="mailto: hnotshe@stanford.edu"><img className='w-20 h-20 mx-auto hover:flex-grow p-[5px]' src={mailIcon}/></a>
            <a href="https://linkedin.com/in/hlumelo-notshe"><img className='w-20 h-20 mx-auto p-[3px]' src={linkedIn}/></a>
          </div>
        </motion.div>
      </div>
    </Tilt>
 
  )
}

export default SectionWrapper(Contact,"contact")