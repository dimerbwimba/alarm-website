"use client"

import { useEffect, useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { ArrowDown, Camera, ChevronDown, ChevronRight, ChevronUp, Contact, Hammer, HandHeart, HandHelpingIcon, Home, ListChecks, Locate, MapPin, Menu, MenuIcon, PhoneIncomingIcon, XCircle, XCircleIcon } from 'lucide-react';
import Image from 'next/image';
import { MobileSidebar } from './mobile-nav';

const navigations = [
  { name: "Accueille", href: '/', icon:<Home className='h-4 w-4'/> },
  { name: "Projects", href: '/projects', icon:<Hammer className='h-4 w-4'/> },
  { name: "Agents", href: '/agents', icon:<HandHeart className='h-4 w-4'/> },

  {
    name: "Mission & Vision", href: "/#mission_vision"  
  },
  {
    name: "Valeurs Fondamentales", href: "/#valeur_fondamentales"
  },
  {
    name: "Nos Patenaires", href: "/#partenaires"
  },
  {
    name: "Nos Departements", href: "/#departements"
  },
  {
    name: "Centre D'interet", href: "/#centre_interet"
  },

  {
    name: "Rapport annuel", href: "/annual-report"
  },

  {
    name: "Gerer mon site", href: "/login"
  },

]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [ menu, setMenu] = useState(false)
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutSideClick = (event:any) => {
      if (!ref.current?.contains(event.target)) {
       setMenu(false)
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);
  return (
    <div className=" top-0 sticky z-50 shadow">
      <div className='flex md:hidden -b  z-50 px-4 bg-yellow-700 text-white  items-center md:space-x-4  justify-center'>
        <div className='hidden lg:inline-flex'>
          <div className='  md:mb-0 rounded py-1 my-2  px-2  md:space-x-4 flex items-center justify-center'>
            <PhoneIncomingIcon className='h-4 w-4' />
            <p className=' text-xs'>+243 853282801</p>
          </div>
          <div className=' flex justify-center my-2 px-2 space-x-2  rounded py-1'>
            <MapPin className='h-4 w-4' />
            <p className=' text-xs font-normal'>
              Quartier Katingo, Avenu Beni N-212, Bloc III, Goma RDC
            </p>
          </div>

        </div>
      </div>
      <hr className="border border-dashed text-default-800 hidden xl:block" />
      <header id="navbar" className="sticky bg-white inset-x-0 top-0 z-60 transition-all duration-500 py-4 flex items-center [&.nav-sticky]:bg-white/90 [&.nav-sticky]:backdrop-blur-3xl [&.nav-sticky]:shadow-md dark:[&.nav-sticky]:bg-default-50/80">
        <div className="w-full flex justify-center">
          <div className="flex items-center relative justify-between gap-4">
            <div className=" relative">
              {/* <!-- Navbar Brand Logo --> */}
              <a href="/" className=''>
                <img src="/alarm.png" alt="logo" className=" h-12 sm:h-20" />
                {/* <img src="/logo-light-82928a21.png" alt="logo" className="h-10 hidden dark:flex" /> */}
              </a>
            </div>
            {/* <!-- Nevigation Menu --> */}
            <div>
              <ul className="menu lg:flex items-center justify-center hidden relative mx-auto grow">
                {navigations.slice(0, 3).map((item) => 
                  <li key={item.name} className="menu-item flex items-baseline text-sm text-default-800 mx-2 transition-all duration-300 hover:text-primary [&.active]:text-primary">
                    {item.icon}<a className="inline-flex items-center text-sm lg:text-base font-bold py-0.5 px-2 rounded-full capitalize" href={item.href}>{item.name} </a>
                  </li>
                )}
                <div  ref={ref} className="menu-item cursor-pointer text-sm text-default-800 mx-2 transition-all duration-300 hover:text-primary [&.active]:text-primary">
                  <a onClick={() => setMenu( !menu)} className="inline-flex items-center text-sm lg:text-base font-bold py-0.5 px-2 rounded-full capitalize">
                  { !menu ? <ChevronRight className='h-4 w-4' /> : <ChevronDown className='h-4 w-4'/>}  <span className='px-2'>Menu</span>
                  </a>
                  { menu && <div className="absolute rounded-lg bg-white shadow-md mt-2 py-2 w-64">

                    {navigations.slice(1).map((item, index) =>

                      <a href={item.href} key={index} className="block font-bold px-4 py-2 text-gray-800 hover:bg-yellow-800 hover:text-white">
                        {item.name}
                      </a>

                    )}
                  </div>}
                </div>
              </ul>
            </div>

            <div className="ms-auto shrink inline-flex gap-2">
              <a href="/contactez-nous" className="py-1.5 px-6 inline-flex items-center gap-2 rounded-lg text-base text-white bg-yellow-700 hover:bg-primary-700 transition-all duration-500">
                <Contact className="h-4 w-4 fill-white/40" />
                <span className="">Contactez Nous</span>
              </a>
              
            </div>
            <div className=" lg:hidden flex">
             <MobileSidebar navigations={navigations} />
            </div>
          </div>
        </div>
      </header>

      {/* <div id="mobile-menu" className={`${!mobileMenuOpen ? "hidden" : "open"} hs-overlay hs-overlay-open:translate-x-0 -translate-x-full fixed top-0 bottom-0 left-0 transition-all transform h-screen max-w-[270px] w-full z-[61]  border-r border-default-200 bg-white dark:bg-default-50`} tabIndex={1}>
        <div className="flex justify-center items-center border-b border-dashed border-default-200 h-16 transition-all duration-300">
          <a href="index.html">
            <img src="/alarm.png" alt="logo" className="h-10" />
          </a>
        </div>
        <div className="h-[calc(100%-4rem)] overflow-y-auto">
          <nav className="hs-accordion-group p-4 w-full h-full flex flex-col flex-wrap">
            <ul className="space-y-1">
             {navigation.map((item, index)=> <li key={index} className="text-sm font-medium text-default-900 rounded capitalize transition-all duration-300 hover:bg-default-100 hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary">
                <a className="block w-full py-2.5 px-4" href={item.href}>{ item.name}</a>
              </li>)}
            </ul>
          </nav>
        </div>
      </div> */}
    </div>
  )
}