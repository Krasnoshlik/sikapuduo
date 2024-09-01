import React from 'react';
import Image from 'next/image';
import NewsImage1 from '../../assets/news1.png';
import NewsImage2 from '../../assets/news2.png';

const newsArr = [{img: NewsImage1, dis:'Is it smart to invest in cryptocurrency in 2024? What you need to know'},{img:NewsImage2, dis:'Have to save money - 8 simple ways to save money every month.'}]

export default function NewsSection() {
  return (
    <section className=' max-w-7xl m-auto px-3 pt-10 pb-10'>
        <h3 className=' font-semibold text-[30px] md:text-[50px] max-w-[650px]'>Take a look at our news and articles</h3>

        <div className=' flex flex-col md:flex-row gap-5'>
            {
                newsArr.map((e,i) => {
                    return (
                        <div className=' max-w-[650px] bg-white rounded-[20px] overflow-hidden' key={i}>
                            <Image src={e.img} alt='news image' className=' max-h-[340px]'/>

                            <div className=' relative'>
                                <div className=' absolute bg-[#00D47E] px-3 py-2 rounded-md left-6 -top-5'>
                                MANAGEMENT
                                </div>
                            </div>

                            <div className=' px-6 py-8 flex flex-col gap-5 items-start'>
                                <p className=' font-semibold text-xl text-[#024751]'>{e.dis}</p>

                                <button className=' text-black underline'>Learn more</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}
