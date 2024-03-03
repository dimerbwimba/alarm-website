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
        <HeroWithBG image_url="https://i.ibb.co/y4TR8Fc/DSC-0834-compressed.jpg" span_title="Alarm RDC" title={`CV | ${cvData?.agent?.name} `} />
      </div>
      <div className=" flex justify-center">
        <div className=" md:w-5/6 px-2">
          <div className=" grid md:grid-cols-12">
            <div className=" col-span-5 flex bg-white rounded-lg p-5 space-x-4 h-48">
              <img src={cvData?.agent?.image} className="shadow-lg rounded-lg" alt="" />
              <div className="">
                <div className="flex  mb-2 flex-col gap-3">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-5 group">
                            <a href="" className="h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                              <PhoneCall/>
                            </a>
                            <h5 className="text-base font-medium text-default-800">Appelle Direct</h5>
                        </li>
                        <li className="flex items-center gap-5 group">
                            <a href="" className="h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="facebook" className="lucide lucide-facebook h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                            <h5 className="text-base font-medium text-default-800">Ecrie moi sur Facebook</h5>
                        </li>
                        <li className="flex items-center gap-5 group">
                            <a href="" className="h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="linkedin" className="lucide lucide-linkedin h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                            <h5 className="text-base font-medium text-default-800">Rejoint moi sure Linkedin</h5>
                        </li>
                        <Separator/>
                        <li className=" gap-5 group flex space-y-2 mt-2">
                            <a href="" className="h-10 w-12 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                              <ScanFace/>
                            </a>
                          <h5 className="text-black">{cvData?.agent?.name}</h5>

                        </li>
                        <li className="gap-5 group flex space-y-2 mt-2">
                          <a href="" className="h-10 w-14 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                              <LucideWorkflow/>
                            </a>
                          <h5 className="text-black">{cvData?.agent?.fonction}</h5>
                        </li>
                    </ul>
                </div>
              </div>
            </div>
            <div className=" bg-gray-50 lg:pl-5 border-l-4 border-yellow-700 py-2 md:col-span-7 ">
              <div className="prose  prose-a:text-blue-600 prose-md prose-td:border prose-td:px-2 prose-td:py-1 prose-td:text-sm prose-th:bg-blue-400 md:p-5 p-2" dangerouslySetInnerHTML={{ __html: `${cvData?.html_body}` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentInfo;
