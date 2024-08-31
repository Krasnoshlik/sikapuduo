import React from 'react'
import Frame1 from '../../assets/next-gen/Frame1.png';
import Frame2 from '../../assets/next-gen/Frame2.png';
import Frame3 from '../../assets/next-gen/Frame3.png';
import Frame4 from '../../assets/next-gen/Frame4.png';
import ArrowLeftImage from '../../assets/arrow-left.png';
import Image from 'next/image';

export default function NexGenSection() {
  return (
    <section className=' max-w-7xl m-auto h-min py-16 px-3 flex flex-col gap-10'>
        <div className=' flex justify-between'>
            <h2 className=' max-w-[620px] font-semibold text-[55px]'>We are the next gen banking experience</h2>
            <p className=' max-w-[530px] font-medium self-end'>At Sikapuduo Bank, we are redefining the way you bank. With cutting-edge technology, innovative solutions, and a customer-centric approach, we are transforming the banking experience for the modern world.</p>
        </div>

        <div className=' flex gap-5 justify-between' >

            <div className=' flex flex-col gap-5'>
            <Image src={Frame1} alt='next gen image' />
            <div className=' flex gap-5'>
            <Image src={Frame3} alt='next gen image' className=' max-w-[366px]'/>
            <Image src={Frame4} alt='next gen image' />
            </div>
            </div>

            <div className=' flex flex-col gap-5'>
            <Image src={Frame2} alt='next gen image' />
            <div className=' bg-mainGreen h-full rounded-[20px] flex p-10'>
                <h4 className=' self-end font-medium text-4xl text-[#024751]'>Create you account today!</h4>
                <button className=' bg-white rounded-full flex p-3 self-end'>
                    <Image src={ArrowLeftImage} alt='ArrowLeftImage'/>
                </button>
            </div>
            </div>
        </div>
    </section>
  )
}
