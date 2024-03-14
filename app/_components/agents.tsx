"use client"
import { Button } from "@/components/ui/button";
import { AgentDataProps } from "@/types";
import axios from "axios";
import { ArrowLeft, ArrowRight, Image, Link2, LinkIcon, ListChecks } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Agents = () => {

    const [agents, setAgents] = useState([])
    const [loading , setLoading] = useState(true)
    const getAgentCadre = async () =>{
        await axios.get("/api/public/agents-cadre").then(({data})=>{
            if (!data.error) {
                setLoading(false)
                setAgents(data.agents)
            }
        })
    }

    useEffect(()=>{
        getAgentCadre()
    },[])

    if (loading) {
        return (<div aria-label="Loading..." role="status" className="flex items-center h-screen space-x-2">
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
        </div>)
      }
    return (
        <div className="py-5 bg-gradient-to-b w-full to-gray-50">
            <div className="flex items-end justify-between mb-10">
                <div className="max-w-2xl  mx-auto text-center">
                    <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-default-300 text-default-950">Nos Agents</span>
                    <div className="bg-white my-4 relative border rounded-xl shadow text-start p-3">
                        <div className=" ">
                            <span className="rounded-xl border bg-white px-2 py-1 absolute -top-3"> ⭐⭐⭐⭐⭐</span>   
                        </div>
                        <h2 className="capitalize text-default-950 my-4">Grâce aux efforts combinés de nos agents, ALARM a réalisé un impact positif dans de nombreuses régions de la RDC. Des zones autrefois déchirées par le conflit voient maintenant des signes de guérison et de progrès, grâce à la présence et à l&lsquo;engagement constants de nos équipes.</h2>
                    </div>
                </div>
            </div>
            <ul role="list" className="mt-3  grid md:grid-cols-2 lg:grid-cols-3 xl:gap-x-4 md:gap-x-3 ">
                {agents.map((agent:AgentDataProps, index) =>
                    <div key={index} className="md:m-2 space-y-2">
                        <div
                            className="group flex flex-col gap-1 rounded-lg md:p-5 text-gray"

                        >
                            <div style={{ width: "320px" }} className="group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                                <div className="z-10 h-full w-full overflow-hidden rounded-t-xl  border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                    <img src={agent.image} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                                </div>
                                <div style={{ backgroundColor: "Gray", width: "70%" }} className="p-3 rounded-r-xl opacity-80 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100">
                                    <h1 className="text-lg font-bold text-white ">{agent.name}</h1>
                                    <h2 className="text-m font-light text-gray-200 ">{agent.fonction}</h2>
                                </div>

                            </div>
                            <p className="pl-5 text-gray-700 text-center hover:text-gray-900">
                                <a href={`/info/${agent._id}`}>
                                <button className=" mt-4 flex hover:bg-yellow-800 ease-in-out transition duration-500 hover:text-white items-center space-x-3 border py-2 px-4 rounded">
                                    <span>Apprendre plus</span>  <Link2 className="w-4 h-4" />
                                </button>
                                </a>
                            </p>

                            <div
                                className="invisible h-auto max-h-0 p-5 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                            >

                                <p style={{ fontSize: ".9em" }} v-html="This is all about John"></p>
                            </div>
                        </div>
                    </div>
                )}
            </ul>
        </div>
    );
}

export default Agents;