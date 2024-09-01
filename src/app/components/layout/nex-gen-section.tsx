import React from 'react';
import Frame1 from '../../assets/next-gen/Frame1.png';
import Frame2 from '../../assets/next-gen/Frame2.png';
import Frame3 from '../../assets/next-gen/Frame3.png';
import Frame4 from '../../assets/next-gen/Frame4.png';
import ArrowLeftImage from '../../assets/arrow-left.png';
import Image from 'next/image';

export default function NexGenSection() {
  return (
    <section className='max-w-7xl m-auto py-16 px-3 flex flex-col items-center lg:items-stretch gap-10'>
      <div className='flex flex-col lg:flex-row '>
        <h2 className='text-3xl md:text-5xl lg:text-[55px] font-semibold max-w-full lg:max-w-[620px]'>
          We are the next gen banking experience
        </h2>
        <p className='text-base md:text-lg lg:text-xl font-medium max-w-full lg:max-w-[530px] mt-4 lg:mt-0'>
          At Sikapuduo Bank, we are redefining the way you bank. With cutting-edge technology, innovative solutions, and a customer-centric approach, we are transforming the banking experience for the modern world.
        </p>
      </div>

      <div className='flex flex-col lg:flex-row gap-5 justify-between'>
        <div className='flex flex-col gap-5 w-full lg:w-1/2'>
          <Image src={Frame1} alt='next gen image' layout='responsive' width={366} height={244} className=' max-w-[618px]'/>
          <div className='flex gap-5'>
            <Image src={Frame3} alt='next gen image' layout='responsive' width={366} height={244} className='max-h-[300px] md:max-h-[500px] max-w-[300px]' />
            <Image src={Frame4} alt='next gen image' layout='responsive' width={366} height={244} className='max-h-[300px] md:max-h-[500px] max-w-[300px]'/>
          </div>
        </div>

        <div className='flex flex-col gap-5 w-full lg:w-1/2'>
          <Image src={Frame2} alt='next gen image' layout='responsive' width={366} height={244} className=' max-w-[530px] max-h-[600px]'/>
          <div className='bg-mainGreen h-full rounded-[20px] flex gap-2 items-center p-10 max-w-[530px]'>
            <h4 className='self-end font-medium text-2xl md:text-3xl lg:text-4xl text-[#024751]'>
              Create your account today!
            </h4>
            <button className='bg-white rounded-full flex p-3 self-end'>
              <Image src={ArrowLeftImage} alt='ArrowLeftImage' width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

