import axios from "axios";
import { Timer, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    const getBlogs = async () => {
        await axios.get("/api/public/blogs").then(({ data }) => {
            if (!data.error) {
                setBlogs(data.blogs)
                setLoading(false)
            }
        })
    }

    useEffect(() => {
        getBlogs()
    }, [])

    if (loading) {
        return (<div aria-label="Loading..." role="status" className="flex items-center h-screen space-x-2">
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
    return (
        <div className="bg-slate-200">
            <div className="text-center mt-5 text-gray-100">
                <span className="py-1 text-gray-800 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-default-300 text-default-950">
                    Toute l'actualité
                </span>
                <h2 className="text-4xl text-gray-800 font-bold text-default-950 mt-6">
                    Dernières Actualités
                </h2>
                <hr className="my-6 border border-dashed text-default-800" />
            </div>
            <div className=" flex justify-center">
                <div className=" lg:w-2/3">
                    <div className=" grid md:grid-cols-3 grid-cols-1 w-full mx-20 my-5">
                    {blogs.map((blog: any, index: number) => 
                    <div key={index} className="relative rounded-md overflow-hidden shadow-lg flex items-end justify-start w-full text-left bg-center bg-cover h-80 dark:bg-gray-500" style={{ backgroundImage: `url(${blog.image})` }}>
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 "></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">

                        </div>
                        <div className="z-10 py-3 ">
                            <h2 className="z-10 px-5 text-white">
                                <a rel="noopener noreferrer" href={`/blog/${blog._id}`} className="font-bold text-xl line-clamp-2 hover:underline dark:text-gray-100">{blog.title}</a>
                            </h2>
                            <p className="z-10 px-5 text-sm line-clamp-2 text-gray-100 ">
                                {blog.description}
                            </p>
                            <div className="flex space-x-2 text-center px-5 mt-2 text-white">
                                <Timer className=" text-red-600 w-4 h-4" /> <span className="text-sm font-semibold leadi tracki">{blog.createdAt}</span>
                            </div>
                        </div>
                    </div>)}

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Blog;