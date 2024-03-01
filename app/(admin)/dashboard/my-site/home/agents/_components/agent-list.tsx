"use client"
import { useDispatch, useSelector } from "react-redux";
import AddAgent from "./add-agent";
import SingelAgent from "./agent";
import { AgentListProps } from "@/types";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { addAgents, getAgents } from "@/app/redux/slice/agent-slice";
import { useEffect, useState } from "react";
import SkeletonLoader from "@/components/skeleton-loader";

const AgentList = () => {
    const { toast } = useToast()
    const dispatch = useDispatch()
    const [error, setError] = useState()
    const [loading , setLoading] = useState(true)
    const agents = useSelector((state: AgentListProps) => state.agents) || []
    const getAllAgents = async () => {
        try {
            await axios.get("/api/manage-agent").then(({ data }) => {
                if (!data.error) {
                    dispatch(getAgents(data.agents))
                    setLoading(false)
                }
            })
        } catch (error: any) {
            setError(error.message)
            toast({
                variant: "default",
                type: "foreground",
                title: "Something Wrong happen on the server",
                description: error.message
            })
        }
    }
    useEffect(() => {
        getAllAgents()
    }, [])
    if (loading) {
        return (
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">

                <div className=" py-1">
                    <div className=" text-black">{!error ? "Loading..." :
                        <span className=" p-1 bg-red-600 text-white rounded">{error}</span>}</div>

                </div>
                <SkeletonLoader r={1} />
            </div>
        )
    }
    return (
        <div>
            <AddAgent />
            {agents.map((agent, index) => (<SingelAgent key={index} agent={agent} />))}
        </div>
    );
}

export default AgentList;