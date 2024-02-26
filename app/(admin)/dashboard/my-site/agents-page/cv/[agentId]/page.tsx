"use client"

import BreadCrumb from "@/components/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";
import CVEditor from "./_components/cv-editor";
import axios from "axios";
import { useEffect, useState } from "react";
import CvHeader from "./_components/cv-hearder";
import { AgentProps } from "@/types";
import { useDispatch } from "react-redux";
import { getCv } from "@/app/redux/slice/single-cv-slice";

const breadcrumbItems = [
    { title: "Gérer mon site", link: "/dashboard/my-site" },
    { title: "Page des agents", link: "/dashboard/my-site/agents-page" },
    { title: "cv ", link: "/dashboard/my-site/agents-page/cv" }

];

const AgentCv = () => {
    const [agent, setAgent] = useState()
    const [cvId, setCvId] = useState()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const params = useParams()
    const { agentId} = params

    const getAgentCv = async () =>{
        try {
            await axios.get(`/api/manage-cv?id=${agentId}`).then(({data})=>{
                if (!data.error) {
                    dispatch(getCv(data.cv))
                    setLoading(false)
                    setCvId(data.cv._id)
                    setAgent(data.cv.agent)
                }
            })
            
        } catch (error:any) {
            setError(error.message)
        }
    }

    useEffect(()=>{
        getAgentCv()
    },[]) 
    return ( 
        <ScrollArea className=" h-full">
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <Separator/>
                <div className="text-center text-red-200 rounded-lg bg-red-600">
                    {error}
                </div>
                <div className=" grid grid-cols-12">
                    <CvHeader agent={agent} loading={loading} />
                 
                    
                    <CVEditor id={cvId}/>
                </div>
            </div>
        </ScrollArea>
     );
}
 
export default AgentCv;