"use client"

import { getAgents } from "@/app/redux/slice/agent-slice";
import { AgentListProps } from "@/types";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const AgentsList = () => {
    const dispatch = useDispatch()
    const agents = useSelector((state: AgentListProps) => state.agents)
    const getAllAgents = async () => {
        await axios.get("/api/manage-agent").then(({ data }) => {
            if (!data.error) {
                dispatch(getAgents(data.agents))
            }
        })
    }
    useEffect(() => {
        getAllAgents()
    }, [])
    return (
        <div className=" grid grid-cols-2 space-y-4 justify-center">
            {
                agents.map((agent, index) => (
                    <div className=" border-b py-2 lg:flex">
                        <div className="h-48 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${agent.image})` }} title="Woman holding a mug">
                        </div>
                        <div className=" border-gray-400  lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <p className="text-sm text-gray-600 flex items-center">
                                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
                                   {agent.type_agent}
                                </p>
                                <div className="text-gray-900 font-bold text-xl mb-2">{agent.fonction}</div>
                                <p className="text-gray-700 text-base">{agent.name}</p>
                                <div className=" flex flex-col space-y-2 text-center">
                                    <Link className=" border rounded-lg p-1 text-white bg-yellow-700" href={`/dashboard/my-site/home/agents#${agent._id}`}>Modifier agent</Link>
                                    <Link className="border rounded-lg p-1 text-white bg-green-700" href={`/dashboard/my-site/agents-page/cv/${agent._id}`}>Rediger un CV</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default AgentsList;