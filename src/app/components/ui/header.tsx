"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [bgColor, setBgColor] = useState('bg-transparent');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor('bg-[#024751] border-b-2 border-mainGreen py-[6px]');
      } else {
        setBgColor('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full px-8 py-4 items-center z-50 font-medium ${bgColor}`}>
      <div className='flex justify-between max-w-7xl m-auto'>
        <Link href={'/'}>
          <h1 className='font-semibold text-[28px]'>Sikapuduo</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-8 items-center'>
          <Link href={'/'} className='font-medium'>Home</Link>
          <Link href={'/about'} className='font-medium'>About</Link>
          <Link href={'/shop'} className='font-medium'>Shop</Link>
          <Link href={'/blog'} className='font-medium'>Blog</Link>
        </nav>

        <div className='hidden md:flex gap-6'>
          <button>Login</button>
          <button className='bg-mainGreen p-2 rounded-lg'>Get started</button>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Overlay and Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-30"
              onClick={closeMobileMenu}
            />

            {/* Mobile Navigation */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className='fixed top-0 right-0 h-full w-[250px] bg-[#024751] text-white py-4 z-40 shadow-lg px-5'
            >
              <div className='flex flex-col gap-4 justify-start pt-20'>
                <div className=' relative'>
                <button onClick={closeMobileMenu} className=' absolute top-0 right-0'>X</button>
                </div>
                <Link href={'/'} className='font-medium' onClick={closeMobileMenu}>Home</Link>
                <Link href={'/'} className='font-medium' onClick={closeMobileMenu}>About</Link>
                <Link href={'/'} className='font-medium' onClick={closeMobileMenu}>Shop</Link>
                <Link href={'/'} className='font-medium' onClick={closeMobileMenu}>Blog</Link>
                <button onClick={closeMobileMenu}>Login</button>
                <button className='bg-mainGreen p-2 rounded-lg' onClick={closeMobileMenu}>Get started</button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
