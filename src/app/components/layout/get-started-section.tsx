import React from 'react'
import GetStartedSectionCard from '../ui/get-started-section-card'
import Farmer1 from '../../assets/get-started/Frame1.png';
import Farmer2 from '../../assets/get-started/Frame2.png';
import Farmer3 from '../../assets/get-started/Frame3.png';

import { getStartedType } from '@/app/types/type.ds';

const getStartedArr: getStartedType[] = [
    {
        img: Farmer1,
        number: '01',
        title: 'Download our free app',
        disc: 'Begin by downloading the Sikapuduo Bank app from the App Store or Google Play Store. Our user-friendly mobile app puts banking at your fingertips, allowing you to access your accounts anytime, anywhere.',
    },
    {
        img: Farmer2,
        number: '02',
        title: 'Create an account',
        disc: 'Once you have downloaded the app, follow the prompts to create your Sikapuduo Bank account. It is quick, easy, and secure. Provide your information, set up your login credentials, and you will be ready to start banking with us in no time.',
    },
    {
        img: Farmer3,
        number: '03',
        title: 'Start controlling your finance',
        disc: 'With your Sikapuduo Bank account set up, you can now take control of your finances. Use the app to check your account balances, transfer funds, pay bills, and more. Our intuitive interface makes managing your money a breeze.',
    },
]

export default function GetStartedSection() {
  return (
    <section className=' max-w-7xl m-auto pt-28 px-4'>
        <div className=' flex flex-col items-center md:flex-row justify-between'>
            <div className=' flex flex-col gap-3 max-w-[630px]'>
                <h3 className=' font-semibold text-[55px]'>How to get started with Sikapuduo</h3>
                <span className=' w-full block border-b border-gray-500'></span>
                <p>Ready to embark on your banking journey with Sikapuduo Bank? Follow these simple steps to get started:</p>
            </div>

            <GetStartedSectionCard e={getStartedArr[0]}/>
        </div>

        <div>
        <GetStartedSectionCard e={getStartedArr[1]}/>
        </div>

        <div className=' w-full flex justify-end'>
        <GetStartedSectionCard e={getStartedArr[2]}/>
        </div>

    </section>
  )
}
