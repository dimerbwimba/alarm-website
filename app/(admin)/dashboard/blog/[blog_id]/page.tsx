"use client"
import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BlogForm from "../_components/form";
import SkeletonLoader from "@/components/skeleton-loader";

const breadcrumbItems = [
    { title: "Blog", link: "/dashboard/blog" },
    { title: "Modifier le blog", link: "/dashboard/blog/12345" }
];

const ModifieBlog = () => {
    const params = useParams()
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState({});

    const getBlog = async () =>{

        await axios.get(`/api/manage-blog/single?_id=${params.blog_id}`).then(({data})=>{
            if (!data.error) {
                setLoading(false)
                setBlog(data.blog)
            }
        })
    }

    useEffect(()=>{
        getBlog()
    },[])

    if (loading) {
        return (
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <Heading
                    title={`Modifier le blog`}
                    description="Modifier le blog ci dessous"
                    />
                <Separator/>
            
                Chargement...
                <SkeletonLoader r={0} />
            </div>
        )
    }
    return ( 
         <ScrollArea className=" h-full" >
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <Heading
                    title={`Modifier le blog`}
                    description="Modifier le blog ci dessous"
                    />
                <Separator/>
            </div>
            <BlogForm  initialContent={blog} />
        </ScrollArea>
     );
}
 
export default ModifieBlog;