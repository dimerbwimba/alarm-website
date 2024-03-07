"use client"

import { useEffect, useState } from "react";
import BlogCard from "./blog";
import axios from "axios";

const BlogList = () => {
    const [blogs, setBlogs] = useState([])

    const getBlogs = async () =>{

        await axios.get("/api/manage-blog").then(({data})=>{
            if (!data.error) {
                setBlogs(data.blogs)
            }
        })
    }

    useEffect(()=>{
        getBlogs()
    },[])
    return (
        <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 sm:grid-cols-2">
              {blogs.map((blog, index) => <BlogCard key={index} blog={blog} />)}
            </div>
        </div>
    );
}

export default BlogList;