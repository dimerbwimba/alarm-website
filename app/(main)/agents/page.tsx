"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook, Link2, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import HeroWithBG from "@/app/_components/hero_bg";
import axios from "axios";
import { useEffect, useState } from "react";
import { AgentDataProps } from "@/types";


const AgentsPages = () => {
    const [agents, setAgents] = useState([])
    const [loading, setLoading] = useState(true)
    const getAllAgents = async () => {
        await axios.get("/api/public/all-agents").then(({ data }) => {
            if (!data.error) {
                setLoading(false)
                setAgents(data.agents)
            }
        })
    }

    useEffect(() => {
        getAllAgents()
    }, [])

    if (loading) {
        return (
            <div className=" flex justify-center">
                <div aria-label="Loading..." role="status" className="flex items-center h-screen space-x-2">
                    <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                        <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="24"></line>
                        <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                        </line>
                        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="24"></line>
                        <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                        </line>
                        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="24"></line>
                        <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                        </line>
                    </svg>
                    <span className="text-4xl font-medium text-gray-500">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="w-full ">
                <HeroWithBG image_url="https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/8e066f2f-1765-4e0e-8b49-90850c59c138.JPG" span_title="Alarm RDC" title={`Les Agents D'ALARM: Engagés pour la Vision et la Mission de African Leadership And Reconciliation Ministries en RDC`} />
            </div>
           
            <div className="flex  my-10 bg-white min-h-screen flex-col items-center justify-between">
                <div className=" grid grid-cols-2 px-2 gap-x-2 gap-y-5 items-center rounded-md overflow-hidden">
                    {agents.map((agent: AgentDataProps, index) =>
                       <div key={index} className="relative flex flex-col justify-center overflow-hidden  py-6 sm:py-12">
                       <div
                           className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8  ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                               <div className=" z-20 absolute">
                                   <div className=" h-36 w-36 rounded-full border-2 border-yellow-700       overflow-hidden">
                                       <img src={agent.image} className="" />
                                   </div>
                               </div>
                           <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-700 transition-all duration-300 group-hover:scale-[10]"></span>
                           <div className="relative z-10 mx-auto max-w-md">
                              <div className=" h-36 w-36">

                              </div>
                               <div
                                   className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                   <p>
                                       {agent.name}
                                   </p>
                               </div>
                               <div className="pt-5 text-base font-semibold leading-7">
                                   <p>
                                       <a href={`/info/${agent._id}`} className="text-sky-500 transition-all duration-300 group-hover:text-white">
                                           {agent.fonction}
                                           &rarr;
                                       </a>
                                   </p>
                               </div>
                               <div className=" pt-2 flex space-x-3">
                                    <a className=" transition-all duration-300 group-hover:text-white/90 text-gray-50 p-2 rounded-full bg-red-800" href={"mailto:"+agent.email}>
                                            <Mail className=" w-6 h-6"/>
                                    </a>
                                    <a className="group-hover:text-white/90 text-gray-50 p-2 rounded-full bg-slate-400">
                                       <Youtube className=" w-6 h-6"/> 
                                    </a>
                                    <a className="group-hover:text-white/90 text-gray-50 p-2 rounded-full bg-slate-400">
                                       <Facebook className=" w-6 h-6"/> 
                                    </a>
                               </div>
                           </div>
                       </div>
                   </div>
                    )}
                    {/* <!-- end col --> */}
                </div>
            </div> 
        </div>
    );
}

export default AgentsPages;