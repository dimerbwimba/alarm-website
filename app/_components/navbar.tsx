"use client"

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Camera, Locate, MapPin, Menu, PhoneIncomingIcon, XCircle } from 'lucide-react';
import Image from 'next/image';

const navigation = [
  { name: "Accueille", href: '#' },
  {
    name:"Mission & Vision", href:"#mission_vision"
  },
  {
    name:"Valeurs Fondamentales", href:"#valeur_fondamentales"
  },
  {
    name:"Centre D'interet", href:"#centre_interet"
  },
  { name: "A Propos de nous", href: '#' },

]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="">
      <header className="absolute shadow inset-x-0 top-0 z-50">
      <div className='md:flex py-3  items-center md:space-x-4 mx-2 justify-center'>
            <div className='bg-yellow-900 mb-2 md:mb-0 rounded text-white py-1  px-2  md:space-x-4 flex items-center justify-center'>
                <PhoneIncomingIcon className='h-6 w-6'/>
                <p>+243 997 728 753</p>
            </div>
            <div className=' bg-yellow-900 text-white flex px-2 space-x-2  rounded py-1'>
                <MapPin className='h-6 w-6'/>
                <p>
                    Quartier Katingo, Avenu Beni N-212, Bloc III, Goma RDC 
                </p>
            </div>
        </div>
        <nav className="flex items-center justify-between bg-white py-3 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">ALARM</span>
              <Image
                className="h-16 w-auto"
                src="/alarm.png"
                width={100}
                height={100}
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className='h-6 w-6'/>
              {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Contactez Nous <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XCircle className="h-6 w-6"  />
                {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                   Contactez Nous
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}