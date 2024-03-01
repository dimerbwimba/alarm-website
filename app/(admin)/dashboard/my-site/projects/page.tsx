"use client"

import BreadCrumb from "@/components/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const breadcrumbItems = [
    { title: "Gérer mon site", link: "/dashboard/my-site" },
    { title: "Page de projects", link: "/dashboard/my-site/home" }

];
const Projects = () => {
    return ( 
        <ScrollArea className=" h-full" >
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <Separator />
                
            </div>
        </ScrollArea>
     );
}
 
export default Projects;