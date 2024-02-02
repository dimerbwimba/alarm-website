"use client"

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Camera, Contact, Locate, MapPin, Menu, PhoneIncomingIcon, XCircle, XCircleIcon } from 'lucide-react';
import Image from 'next/image';

const navigation = [
  { name: "Accueille", href: '/' },
  {
    name: "Mission & Vision", href: "/#mission_vision"
  },
  {
    name: "Valeurs Fondamentales", href: "/#valeur_fondamentales"
  },
  {
    name: "Centre D'interet", href: "/#centre_interet"
  },

]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className=" top-0 sticky z-50 shadow">
      <div className='md:flex top-0 sticky border-b py-2  z-50 px-4 bg-white  items-center md:space-x-4  justify-center'>
        <div className='  md:mb-0 rounded py-1  px-2  md:space-x-4 flex items-center justify-center'>
          <PhoneIncomingIcon className='h-4 w-4' />
          <p className=' text-xs'>+243 997 728 753</p>
        </div>
        <div className=' flex px-2 space-x-2  rounded py-1'>
          <MapPin className='h-4 w-4' />
          <p className=' text-xs font-normal'>
            Quartier Katingo, Avenu Beni N-212, Bloc III, Goma RDC
          </p>
        </div>
      </div>

      <header id="navbar" className="sticky bg-white inset-x-0 top-0 z-60 transition-all duration-500 py-4 flex items-center [&.nav-sticky]:bg-white/90 [&.nav-sticky]:backdrop-blur-3xl [&.nav-sticky]:shadow-md dark:[&.nav-sticky]:bg-default-50/80">
        <div className="container">
          <div className="flex items-center justify-between gap-4">
            <div className="shrink">
              {/* <!-- Navbar Brand Logo --> */}
              <a href="index.html">
                <img src="/alarm.png" alt="logo" className="h-10 flex dark:hidden" />
                {/* <img src="/logo-light-82928a21.png" alt="logo" className="h-10 hidden dark:flex" /> */}
              </a>
            </div>

            {/* <!-- Nevigation Menu --> */}
            <ul className="menu lg:flex items-center justify-center hidden relative mx-auto grow">
              {navigation.map((item) => <li key={item.name} className="menu-item text-default-800 mx-2 transition-all duration-300 hover:text-primary [&.active]:text-primary">
                <a className="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize" href={item.href}>{item.name} </a>
              </li>)}
            </ul>

            <div className="ms-auto shrink inline-flex gap-2">
              <a href="#" className="py-1.5 px-6 inline-flex items-center gap-2 rounded-full text-base text-white bg-primary hover:bg-primary-700 transition-all duration-500">
                <Contact className="h-4 w-4 fill-white/40" />
                <span className="hidden sm:block">Contactez Nous</span>
              </a>
              {/* <!-- Mobile Menu Toggle Button --> */}
             {!mobileMenuOpen ?  <button  onClick={() => setMobileMenuOpen(true)} className="lg:hidden inline-block" data-hs-overlay="#mobile-menu">
                <Menu className="w-7 h-7 text-default-600 hover:text-default-900" />
              </button> :  <button  onClick={() => setMobileMenuOpen(false)} className="lg:hidden inline-block" data-hs-overlay="#mobile-menu">
                <XCircleIcon className="w-7 h-7 text-default-600 hover:text-default-900" />
              </button>}
            </div>
          </div>
        </div>
      
      </header>

      <div id="mobile-menu" className={`${!mobileMenuOpen ? "hidden" :"open"} hs-overlay hs-overlay-open:translate-x-0 -translate-x-full fixed top-0 bottom-0 left-0 transition-all transform h-screen max-w-[270px] w-full z-[61]  border-r border-default-200 bg-white dark:bg-default-50`} tabIndex={1}>
        <div className="flex justify-center items-center border-b border-dashed border-default-200 h-16 transition-all duration-300">
            <a href="index.html">
                {/* <img src="assets/logo-dark-dc129ba6.png" alt="logo" className="h-10 flex dark:hidden"/> */}
                <img src="/alarm.png" alt="logo" className="h-10"/>
            </a>
        </div>
        <div className="h-[calc(100%-4rem)] overflow-y-auto">
            <nav className="hs-accordion-group p-4 w-full h-full flex flex-col flex-wrap">
                <ul className="space-y-1">
                    <li className="text-sm font-medium text-default-900 rounded capitalize transition-all duration-300 hover:bg-default-100 hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary">
                        <a className="block w-full py-2.5 px-4" href="#home">home</a>
                    </li>

                    <li className="text-sm font-medium text-default-900 rounded capitalize transition-all duration-300 hover:bg-default-100 hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary">
                        <a className="block w-full py-2.5 px-4" href="#about">about</a>
                    </li>

                    <li className="text-sm font-medium text-default-900 rounded capitalize transition-all duration-300 hover:bg-default-100 hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary">
                        <a className="block w-full py-2.5 px-4" href="#Services">Services</a>
                    </li>

                    <li className="text-sm font-medium text-default-900 rounded capitalize transition-all duration-300 hover:bg-default-100 hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary">
                        <a className="block w-full py-2.5 px-4" href="#portfolio">portfolio</a>
                    </li>

                    <li className="text-sm font-medium text-default-900 rounded capitalize transition-all duration-300 hover:bg-default-100 hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary">
                        <a className="block w-full py-2.5 px-4" href="#faq">faq</a>
                    </li>

                    <li className="text-sm font-medium text-default-900 rounded capitalize transition-all duration-300 hover:bg-default-100 hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary">
                        <a className="block w-full py-2.5 px-4" href="#blog">blog</a>
                    </li>

                    <li className="text-sm font-medium text-default-900 rounded capitalize transition-all duration-300 hover:bg-default-100 hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary">
                        <a className="block w-full py-2.5 px-4" href="#contact">contact</a>
                    </li>

                </ul>
            </nav>
        </div>
    </div>
    </div>
  )
}