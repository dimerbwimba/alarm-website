"use client"
import { FC, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import HeroWithBG from "@/app/_components/hero_bg";
import { ArrowBigLeft, ArrowBigRight, CheckCheck, LucideWorkflow, PhoneCall, ScanFace, Workflow } from "lucide-react";
import axios from "axios";
import { AgentDataProps } from "@/types";
import { Separator } from "@/components/ui/separator";

interface CvDataProps{
  agent:AgentDataProps,
  html_body:string
}

const AgentInfo: FC = () => {
  const params = useParams();
  const { name } = params;
  const [cvData, setCvData] = useState<CvDataProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      await axios.get(`/api/public/single-agent?id=${name}`).then(({data})=>{
        if (!data.error) {
          setCvData(data.cv);
          setLoading(false);
          
        }else{
          setError(data.message);
          setLoading(false);
        }
      })
     
    
    } catch (error: any) {
    }
  };

  useEffect(() => {
      fetchData();
  }, []);
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
    <div className="">
      <div className="w-full ">
        <HeroWithBG image_url="https://i.ibb.co/y4TR8Fc/DSC-0834-compressed.jpg" span_title="Alarm RDC" title={`CV`} />
      </div>
      <div className=" flex justify-center">
        <div className=" md:w-1/2 px-2">
          <div className="">
            <div className=" bg-gray-50 lg:pl-5 border-l-4 border-yellow-700 py-2 ">
              <div className="prose  prose-a:text-blue-600 prose-md prose-td:border prose-td:px-2 prose-td:py-1 prose-td:text-sm prose-th:bg-blue-400 md:p-5 p-2" dangerouslySetInnerHTML={{ __html: `${cvData?.html_body}` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentInfo;
