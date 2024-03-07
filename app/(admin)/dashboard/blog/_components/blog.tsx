"use client"
import { AlertModal } from "@/components/modal/alert-modal"
import axios from "axios"
import { XCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const BlogCard = ({blog}:any) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const onClose = () =>{
        setOpen(false)
    }
    const onConfirm = async () =>{

        setLoading(true)
        await axios.delete(`/api/manage-blog?_id=${blog._id}`).then(()=>{
            setLoading(false)
            setOpen(false)
            router.refresh
            
        })
        
    }
    return ( 
        <div>
               <AlertModal
                isOpen={open}
                onClose={onClose}
                onConfirm={onConfirm}
                loading={loading}
                

            />
             <div className="relative rounded-lg overflow-hidden shadow-lg flex items-end justify-start w-full text-left bg-center bg-cover h-80 dark:bg-gray-500" style={{backgroundImage: `url(${blog.image})`}}>
                    <div onClick={()=> setOpen(true)} className=" z-20 absolute bg-red-800 hover:bg-red-700 cursor-pointer rounded-full shadow right-2 top-2 ">
                        <XCircle className=" text-white"/>
                    </div>
                   <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 "></div>
                   <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                       
                   </div>
                   <div className="z-10 py-3 ">
                    <h2 className="z-10 px-5 text-white">
                        <a rel="noopener noreferrer" href={`${"/dashboard/blog/"+blog._id}`} className="font-bold text-xl line-clamp-2 hover:underline dark:text-gray-100">{blog.title}</a>
                    </h2>
                    <p className="z-10 px-5 text-sm line-clamp-3 text-gray-100 ">
                        {blog.description}
                    </p>
                    <div className="flex flex-col px-5 justify-start text-center text-white">
                           <span className="text-xl font-semibold leadi tracki">{blog.createdAt}</span>
                       </div>
                   </div>
               </div>

        </div>
     );
}
 
export default BlogCard;