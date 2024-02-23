"use client"

import BreadCrumb from "@/components/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import MissionVision from "./_components/mission-vission";
import { useEffect, useState } from "react";
import { MissionVisionProps } from "@/types";
import axios from "axios";
import SkeletonLoader from "@/components/skeleton-loader";

const breadcrumbItems = [
    { title: "Gérer mon site", link: "/dashboard/my-site" },
    { title: "Page D'acceuille", link: "/dashboard/my-site/home" },
    {
        title: "Mission et vision", link: "/dashboard/my-site/home/mission-vision"
    }];

const MissionVisionPage = () => {
    const [sections, setSections] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const getMisionVision = async () => {
        setLoading(true)
       try {
           await axios.get("/api/manage-mission-vision").then(({ data }) => {
               if (!data.error) {
                   setSections(data.sections)
                   setLoading(false)
               }else{
                   setError(data.error)
               }
           })
       } catch (error:any) {
        setError(error.message)
       }
    }
    useEffect(() => {
        getMisionVision()
    }, [])

    
    if (loading) {
        return (
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
            <BreadCrumb items={breadcrumbItems} />
            <Separator/>
            <div className=" py-1">
               <div className=" text-black">{!error ? "Loading..." : 
               <span className=" p-1 bg-red-600 text-white rounded">{error}</span>}</div>

           </div>
           <SkeletonLoader r={1} />
       </div>
        )
    }
    return (
        <ScrollArea className=" h-full">
            <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <Separator />
                {
                    sections.map((section, index)=>
                        <MissionVision key={index} section={section} />
                    )
                }
            </div>
        </ScrollArea>
    );
}

export default MissionVisionPage;