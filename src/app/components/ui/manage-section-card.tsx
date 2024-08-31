import React from 'react'
import Image from 'next/image'
import { manageCardType } from '@/app/types/type.ds'

export default function ManageSectionCard({e}: {e: manageCardType}) {
  return (
    <div className=' rounded-2xl overflow-hidden text-white'>
        <Image src={e.img} alt='card info'/>
        <div className=' relative'>
            <div className=' absolute bottom-6 left-6 right-6 flex flex-col gap-5 border-b pb-5'>
                <h4 className=' font-medium text-2xl'>{e.title}</h4>
                <p>{e.disc}</p>
            </div>
        </div>
    </div>
  )
}
