"use client"

import HeroWithBG from "@/app/_components/hero_bg"

const SideView = () => {
    return ( 
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-yellow-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
             <a href="/" className=''>
                <img src="/alarm.png" alt="logo" className=" h-48 sm:h-20" />
                {/* <img src="/logo-light-82928a21.png" alt="logo" className="h-10 hidden dark:flex" /> */}
              </a>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;.&rdquo;
            </p>
            <footer className="text-sm font-body border-t">Build By Dimer Bwimba</footer>
          </blockquote>
        </div>
      </div>
     );
}
 
export default SideView