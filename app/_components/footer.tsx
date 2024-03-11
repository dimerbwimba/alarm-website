import { Separator } from "@/components/ui/separator";
import { LucidePhoneCall, Mail } from "lucide-react";

const FooterAlarm = () => {
    return ( 
        
        <footer>
        <div className="border-y text-white border-default-200 bg-footer-pattern">
            <div className="p-20 py-20 bg-yellow-900 opacity-80">
                <div className="grid xl:grid-cols-4 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-16">
                    <div className="xl:col-span-2 md:col-span-2">
                        <div className=" p-4 ">
                            <a href="#">
                                <img src="/alarm.png" alt="logo" className="h-16"/>
                            </a>
                            <p className=" font-semibold text-lg  mt-6">
                            " Renforcer les leaders africains pour la réconciliation des communautés africaines "
                            </p>
                            <Separator/>
                            <div className=" flex items-center space-x-3 mt-2"> 
                                <Mail/> <a href="mailto:info@alarm-congo.org"><span className="font-bold">info@alarm-congo.org</span></a> 
                            </div> 
                            <div className=" flex items-center space-x-3 mt-2"> 
                                <LucidePhoneCall/> <a href="tel:+243853282801"><span className="font-bold">+243 853282801</span></a>
                            </div> 
                          
                        </div>
                    </div>
                    {/* <!-- col End --> */}

                    <div className="">
                        <ul className="flex flex-col gap-3">
                            <h5 className="xl:text-xl lg:text-lg font-bold  mb-2">Accès Rapide</h5>
                            <li>
                                <a href="/" className="text-base  transition-all">Acceuille</a>
                            </li>
                            <li>
                                <a href="/contactez-nous" className="text-base  transition-all">Contactez Nous</a>
                            </li>
                            <li>
                                <a href="/annual-report" className="text-base  transition-all">Rapport annuel</a>
                            </li>
                            <li>
                                <a href="/agents" className="text-base  transition-all">Nos agents</a>
                            </li>
                            
                        </ul>
                    </div>
                    {/* <!-- col End --> */}

                    <div className="">
                        <ul className="flex flex-col gap-3">
                            <h5 className="xl:text-xl lg:text-lg font-bold  mb-2">Suivez-nous</h5>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-5 group">
                                    <a href="" className="h-10 w-10 inline-flex items-center justify-center border border-default-300  rounded-lg transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="facebook" className="lucide lucide-facebook h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                                    <h5 className="text-base font-medium ">Facebook</h5>
                                </li>
                                <li className="flex items-center gap-5 group">
                                    <a href="" className="h-10 w-10 inline-flex items-center justify-center border border-default-300 rounded-lg transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="linkedin" className="lucide lucide-linkedin h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                                    <h5 className="text-base font-medium ">Linkedin</h5>
                                </li>
                            </ul>
                        </ul>
                    </div>
                    {/* <!-- col End --> */}

                    {/* <div className="">
                        <ul className="flex flex-col gap-3">
                            <h5 className="xl:text-xl lg:text-lg font-bold mb-2">Legal &amp; Press</h5>
                            <li>
                                <a href="" className="text-base  transition-all">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="" className="text-base   transition-all">Terms &amp; Conditions</a>
                            </li>
                            <li>
                                <a href="" className="text-base  transition-all">Presskit</a>
                            </li>
                        </ul>
                    </div> */}
                    {/* <!-- col End --> */}
                </div>
                {/* <!-- grid End --> */}
            </div>
            {/* <!-- Container End --> */}
        </div>

        <div className="py-4">
            <div className="container flex flex-wrap justify-center items-center h-full md:justify-between text-center md:text-start">
                <p className="text-base font-medium text-default-800">
                   2024 © BwCode Inc. <a href="#">Design crafted 🙂 by Dimer.</a>
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