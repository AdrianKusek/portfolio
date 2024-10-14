'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { urlFor } from '../../lib/client';
import './About.scss';
import { AppWrap, MotionWrap } from '@/app/wrapper';

const AboutClient = ({ abouts }) => {
  return (
    <>
      <h2 className="head-text">I Know that <span>Great Code</span> <br />means  <span>Great User Experiences</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <Image 
              src={urlFor(about.imgUrl)} 
              alt={about.title} 
              width={500} 
              height={500} 
              layout="responsive"
            />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
    MotionWrap( AboutClient, 'app__about'),
    'about',
    'app__whitebg',);