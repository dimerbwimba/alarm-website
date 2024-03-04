"use client"

import BreadCrumb from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import AddProjectForm from "./_components/form";

const breadcrumbItems = [
    { title: "Gérer mon site", link: "/dashboard/my-site" },
    { title: "Page de projects", link: "/dashboard/my-site/projets" },
    { title: "Ajouter", link: "/dashboard/my-site/projets/ajouter" }

];
const Projects = () => {
    const router = useRouter()
    return ( 
        <ScrollArea className=" h-full" >
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <div className="flex items-start justify-between">
                    <Heading
                    title={`Ajouter un Projet`}
                    description="Ajouter et suprimer un projet."
                    />
                </div>
                <Separator/>
                <AddProjectForm/>
            </div>
        </ScrollArea>
     );
}
 
export default Projects;