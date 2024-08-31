import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className=' fixed top-0 w-full px-8  py-5 items-center font-medium bg-transparent'>
      <div className=' flex justify-between max-w-7xl m-auto'>
        <Link href={'/'}>
        <h1 className=' font-semibold text-[28px]'>Sikapuduo</h1>
        </Link>

        <nav className=' flex gap-8 items-center'>
          <Link href={'/'} className=' font-medium'>Home</Link>
          <Link href={'/'} className=' font-medium'>About</Link>
          <Link href={'/'} className=' font-medium'>Shop</Link>
          <Link href={'/'} className=' font-medium'>Home</Link>
        </nav>

        <div className=' flex gap-6'>
          <button>Login</button>
          <button className=' bg-mainGreen p-2 rounded-lg'>Get started</button>
        </div>

        </div>
    </header>
  )
}
