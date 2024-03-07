"use client"

import HeroWithBG from "@/app/_components/hero_bg";
import BreadCrumb from "@/components/breadcrumb";
import BreadCrumbFront from "@/components/breadcrumb-front";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Blog = () => {
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<any>({})
    const params = useParams()
    const getBlog = async () => {
        await axios.get(`/api/public/blogs/blog?_id=${params.blog_id}`).then(({data})=>{
            if (!data.error) {
                
                setBlog(data.blog)
                setLoading(false)
            }
        })
    }
    
    useEffect(()=>{
        getBlog()
    },[])

    if (loading) {
        return (<div aria-label="Loading..." role="status" className="flex justify-center items-center h-screen space-x-2">
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
    const breadcrumbItems = [
        { title: blog.title, link: `/blog/${blog._id}` }
    ];
    
    return ( 
        <div>
            <div className="w-full ">
                <HeroWithBG image_url="https://i.ibb.co/y4TR8Fc/DSC-0834-compressed.jpg" span_title="Alarm RDC" title= {blog?.title} />
            </div>
            <div className=" flex justify-center">
                <div className="lg:w-1/2 text-lg ">
                <BreadCrumbFront items={breadcrumbItems}/>
                    <div className=" mx-10">
                        <p className=" py-10"> {blog?.description}</p>
                    <img src={blog.image} className=" border p-2 h-96 rounded object-cover my-5 " />
                        <div className=" bg-gray-50 lg:pl-5 border-l-4 border-yellow-700 py-2 md:col-span-7 ">
                            <div className="prose  prose-a:text-blue-600 prose-md prose-td:border prose-td:px-2 prose-td:py-1 prose-td:text-sm prose-th:bg-blue-400 md:p-5 p-2" dangerouslySetInnerHTML={{ __html: `${blog?.html_content}` }}></div>
                            </div>
                       
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Blog;