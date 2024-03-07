"use client"
import BreadCrumb from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import BlogList from "./_components/blog-list";
import { Separator } from "@/components/ui/separator";

const breadcrumbItems = [
    { title: "Blog", link: "/dashboard/blog" }
];

const BlogPage = () => {
    const router = useRouter()
    return ( 
        <ScrollArea className=" h-full" >
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
            <BreadCrumb items={breadcrumbItems} />
                <div className="flex items-start justify-between">
                    <Heading
                    title={`List des blogs ou actualites`}
                    description="List des blog"
                    />
                    <Button
                    className="text-xs md:text-sm"
                    onClick={() => router.push(`/dashboard/blog/ajouter`)}
                    >
                    <Plus className="mr-2 h-4 w-4" /> Ajouter un blog
                    </Button>
                </div>
                <Separator/>
                <div>
                    <BlogList/>
                </div>
            </div>
        </ScrollArea>
     );
}
 
export default BlogPage;