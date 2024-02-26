"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, Link2 } from "lucide-react";
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
                <HeroWithBG image_url="https://i.ibb.co/y4TR8Fc/DSC-0834-compressed.jpg" span_title="Alarm RDC" title={`Les Agents D'ALARM: Engagés pour la Vision et la Mission de African Leadership And Reconciliation Ministries en RDC`} />
            </div>
            <div className=" flex justify-center">
                <div className=" p-5 border text-black shadow rounded-md my-10 clear-start w-1/2">
                    ALARM jouent un rôle essentiel dans la promotion de la paix et de la réconciliation en République Démocratique du Congo (RDC). Au cœur de cette mission, se trouvent nos agents, dévoués à faire une différence significative. Plongeons ensemble dans le monde de la page des agents {"D\'ALARM"} , explorant leur contribution cruciale.
                </div>
            </div>
           
            <div className="flex  my-10 bg-white min-h-screen flex-col items-center justify-between">
                <div className=" grid grid-cols-2 px-2 gap-x-2 gap-y-5 items-center rounded-md overflow-hidden">
                    {agents.map((agent: AgentDataProps, index) =>
                        <div key={index} className="bg-white rounded-xl my-5 p-4 shadow mt-4">
                            <div className="flex flex-col justify-center items-center">
                                <img src={agent.image} className="w-auto h-52  rounded-lg" />
                                <p className="font-semibold mt-1">{agent.name}</p>
                                <p className=" text-black text-sm  text-center">💼 {agent.fonction}</p>
                                <a target="_blank" href={`/info/${agent._id}`}>
                                    <button className="hover:bg-yellow-800 ease-in-out transition duration-500 hover:text-white mt-4 flex items-center space-x-3 border py-2 px-4 rounded">
                                        <span>Apprendre plus</span>  <Link2 className="w-4 h-4" />
                                    </button>
                                </a>

                            </div>
                        </div>
                    )}
                    {/* <!-- end col --> */}
                </div>
            </div> 
            <div className=" flex justify-center">
                <div className=" p-5 border text-black shadow rounded-md my-2 clear-start w-1/2">
                    Chaque agent ALARM a une histoire unique à raconter. Découvrez le parcours inspirant de ceux qui font face aux défis de la réconciliation avec courage et détermination. Leurs témoignages personnels vous donneront un aperçu du travail extraordinaire accompli sur le terrain.
                </div>
            </div>
        </div>
    );
}

export default AgentsPages;