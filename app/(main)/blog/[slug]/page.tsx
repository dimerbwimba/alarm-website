
import HeroWithBG from "@/app/_components/hero_bg";
import { fetcher } from "@/lib/utils";
import { cache } from "react";
import { notFound } from "next/navigation";


interface SingleBlogPageProps {
    params: { slug: string, name:string }
}


const getBlog = cache(async(slug:string) => {
    const response = await fetcher(`/api/public/blogs/blog?slug=${slug}`)
    const { blog } = await response
    if (!blog) {
        notFound()
    }
    return blog
})

export default async function SingleBlogPage({ params }: SingleBlogPageProps) {
    
    const blog = await getBlog(params.slug)

    // const breadcrumbItems = [{}]
    return ( 
        <div>
            <div className="w-full ">
                <HeroWithBG image_url="https://i.ibb.co/y4TR8Fc/DSC-0834-compressed.jpg" span_title="Alarm RDC" title= {blog?.title} />
            </div>
            <div className=" flex justify-center">
                <div className="lg:w-1/2 text-lg ">
                {/* <BreadCrumbFront items={breadcrumbItems}/> */}
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
 