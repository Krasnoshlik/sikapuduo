import { getStartedType } from '@/app/types/type.ds'
import React from 'react'
import Image from 'next/image'

export default function GetStartedSectionCard({e}:{e:getStartedType}) {
  return (
    <div className=' flex flex-col gap-4 max-w-[500px]'>
                <h3 className=' text-[50px] font-semibold text-mainGreen'>{e.number}</h3>

                <h3 className=' font-semibold text-[35px]'>{e.title}</h3>

                <p>{e.disc}</p>

                <Image src={e.img} alt='stratt img' />
        </div>
  )
}
