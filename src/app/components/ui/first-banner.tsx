import React from 'react'
import BannerImage from '../../assets/banner.png';
import Image from 'next/image';

export default function FirstBanner() {
  return (
    <div className=' my-10 max-w-7xl m-auto px-3'>
        <Image src={BannerImage} alt='banner image'/>

        <div className=' relative'>
            <div className=' absolute -top-[130px] md:-top-72 left-0 right-0 m-auto max-w-[752px] flex flex-col text-center items-center gap-5'>
                <h2 className=' text-[#091E42] text-[18px] md:text-[50px] md:font-semibold'>It has never been easier to manage your finances </h2>

                <div className=' flex gap-5'>
                    <button className=' bg-[#024751] rounded-lg py-3 px-4'>Get started</button>
                    <button className=' text-[#024751] border rounded-lg px-4 border-[#024751]'>Learn more</button>
                </div>
            </div>
        </div>
    </div>
  )
}
