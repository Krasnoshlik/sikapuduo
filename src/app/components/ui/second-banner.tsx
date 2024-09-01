import React from 'react'
import BannerImage from '../../assets/banner.png';
import AppStoreImage from '../../assets/BadgeAppStore.png';
import GooglePlayImage from '../../assets/BadgeGooglePlay.png';
import IPhoneImage from '../../assets/iphone.png';

import Image from 'next/image';

export default function SecondBanner() {
  return (
    <div className=' my-10 max-w-7xl m-auto px-3'>

      <div className=' hidden lg:block'>
        <Image src={BannerImage} alt='banner image'/>

        <div className=' relative mx-5'>
            <div className=' absolute -top-[338px] left-0 right-0 m-auto flex w-full max-w-[1000px] justify-center '>
              <div className=' flex flex-col justify-end gap-4 max-w-[558px] pb-8'>
                <h2 className=' text-[#091E42] font-semibold text-[30px] lg:text-[50px]'>Download the app now!</h2>
                <p className=' text-[#024751] text-2xl'>Are there any fees associated with Sikapuduo Bank accounts?</p>

                <div className=' flex gap-2 max-w-[400px]'>
                  <button>
                  <Image src={AppStoreImage} alt='AppStoreImage'/>
                  </button>
                  <button>
                  <Image src={GooglePlayImage} alt='GooglePlayImage'/>
                  </button>
                </div>
              </div>
              <Image src={IPhoneImage} alt='IPhoneImage' className=' max-w-[250px]'/>
            </div>
        </div>
        </div>

        <div className=' lg:hidden'>
        <div className=' flex rounded-lg gap-4 py-8 bg-mainGreen px-5 items-center flex-wrap'>
                <h2 className=' font-semibold text-[30px] lg:text-[50px]'>Download the app now!</h2>
                <p className='  text-2xl'>Are there any fees associated with Sikapuduo Bank accounts?</p>

                <div className=' flex gap-2 max-w-[400px]'>
                  <button>
                  <Image src={AppStoreImage} alt='AppStoreImage'/>
                  </button>
                  <button>
                  <Image src={GooglePlayImage} alt='GooglePlayImage'/>
                  </button>
                </div>
              </div>
        </div>

    </div>
  )
}