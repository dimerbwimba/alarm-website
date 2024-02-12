const FooterAlarm = () => {
    return ( 
        
        <footer>
        <div className="border-y border-default-200">
            <div className="container py-20">
                <div className="grid xl:grid-cols-5 md:grid-cols-3 gap-10 lg:gap-16">
                    <div className="xl:col-span-2 md:col-span-3">
                        <div>
                            <a href="#">
                                <img src="/alarm.png" alt="logo" className="h-20"/>
                            </a>
                            <p className="text-base font-medium  text-default-800 mt-6">
                            L&quot;Afrique sans conflits tribaux et religieux violents
                            </p>
                            {/* <form className="space-y-2 mt-6">
                                <div className="relative">
                                    <input type="email" id="subcribe" className="py-4 ps-4 pe-16 w-full h-12 placeholder:text-default-600 text-default-950 rounded-lg bg-default-100 border-default-200 focus:ring-0 focus:border-default-200" placeholder="Type Your Email" name="email"/>
                                    <button type="submit" className="inline-flex items-center justify-center gap-2 px-6 absolute top-[6px] end-[6px] h-9 bg-primary/20 text-primary rounded-md transition-all duration-500 hover:bg-primary hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="move-right" className="lucide lucide-move-right h-6 w-6"><path d="M18 8L22 12L18 16"></path><path d="M2 12H22"></path></svg>
                                    </button>
                                </div>
                            </form> */}
                            {/* <!-- form End --> */}
                        </div>
                    </div>
                    {/* <!-- col End --> */}

                    <div className="">
                        <ul className="flex flex-col gap-3">
                            <h5 className="xl:text-xl lg:text-lg font-medium text-default-800 mb-2">Entreprise</h5>
                            <li>
                                <a href="" className="text-base text-default-700 hover:text-default-950 transition-all">Acceuille</a>
                            </li>
                            <li>
                                <a href="" className="text-base text-default-700 hover:text-default-950 transition-all">Contactez Nous</a>
                            </li>
                            <li>
                                <a href="" className="text-base text-default-700 hover:text-default-950 transition-all">Departements</a>
                            </li>
                            
                        </ul>
                    </div>
                    {/* <!-- col End --> */}

                    <div className="">
                        <ul className="flex flex-col gap-3">
                            <h5 className="xl:text-xl lg:text-lg font-medium text-default-800 mb-2">Social Media</h5>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-5 group">
                                    <a href="" className="h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="facebook" className="lucide lucide-facebook h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                                    <h5 className="text-base font-medium text-default-800">Facebook</h5>
                                </li>
                                <li className="flex items-center gap-5 group">
                                    <a href="" className="h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="linkedin" className="lucide lucide-linkedin h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                                    <h5 className="text-base font-medium text-default-800">Linkedin</h5>
                                </li>
                            </ul>
                        </ul>
                    </div>
                    {/* <!-- col End --> */}

                    <div className="">
                        <ul className="flex flex-col gap-3">
                            <h5 className="xl:text-xl lg:text-lg font-medium text-default-800 mb-2">Legal &amp; Press</h5>
                            <li>
                                <a href="" className="text-base text-default-700 hover:text-default-950 transition-all">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="" className="text-base text-default-700 hover:text-default-950 transition-all">Terms &amp; Conditions</a>
                            </li>
                            <li>
                                <a href="" className="text-base text-default-700 hover:text-default-950 transition-all">Presskit</a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- col End --> */}
                </div>
                {/* <!-- grid End --> */}
            </div>
            {/* <!-- Container End --> */}
        </div>

        <div className="py-4">
            <div className="container flex flex-wrap justify-center items-center h-full md:justify-between text-center md:text-start">
                <p className="text-base font-medium text-default-800">
                   2024
                    © BwCode Inc. - <a href="#">Design crafted 🙂 by Dimer.</a>
                </p>
                <p className="text-base font-medium text-default-800">
                    <a href="#">Terms Conditions &amp; Policy</a>
                </p>
            </div>
            {/* <!-- Flex End --> */}
        </div>
        
    </footer>

     );
}
 
export default FooterAlarm;