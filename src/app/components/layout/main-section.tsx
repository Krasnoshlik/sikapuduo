"use client"
import Image from 'next/image';
import React from 'react';
import GoogleImage from '../../assets/companies/Google.png';
import MicrosoftImage from '../../assets/companies/Microsoft.png';
import WalmartImage from '../../assets/companies/Walmart.png';
import SamsungImage from '../../assets/companies/Samsung.png';
import HuaweiImage from '../../assets/companies/Huawei.png';

import { motion, useAnimation } from 'framer-motion';

const ImagesArr = [GoogleImage,MicrosoftImage,WalmartImage,SamsungImage,HuaweiImage]

export default function MainSection() {
  const controls = useAnimation();

  const slideVariants = {
    animate: {
      x: ['0%', '-190%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 100,
          ease: 'linear'
        }
      }
    }
  };
  return (
    <section className="mainSection w-full pt-20 md:pt-72 border-[10px] border-mainGreen">
      <div className=' max-w-7xl m-auto px-4'>

      <div className=' max-w-[538px] mb-20 md:mb-52 flex flex-col gap-5'>
        <h2 className=' font-semibold text-3xl md:text-6xl'>The most transparent & secured bank</h2>

        <p>At Sikapuduo Bank, we are dedicated to transparency and security in all aspects of our banking services.</p>

        <div className=' flex gap-3'>
          <button className='bg-mainGreen p-2 rounded-md'>Get started</button>
          <button className=' border-2 p-2 rounded-md underline'>Learn more</button>
        </div>
      </div>

      <div className='overflow-hidden h-10 relative'>
      <motion.div
        className='flex justify-between gap-14 h-6 absolute w-full'
        variants={slideVariants}
        animate='animate'
      >
        {
          ImagesArr.map((src, i) => (
            <Image src={src} key={i} alt='company image'/>
          ))
        }
        {
          ImagesArr.map((src, i) => (
            <Image src={src} key={`dup-${i}`} alt='company image' />
          ))
        }
        {
          ImagesArr.map((src, i) => (
            <Image src={src} key={`dup-${i}`} alt='company image' />
          ))
        }
        {
          ImagesArr.map((src, i) => (
            <Image src={src} key={`dup-${i}`} alt='company image' />
          ))
        }
      </motion.div>
    </div>

      </div>

    </section>
  );
}

