"use client"

import BreadCrumb from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import ProjetList from "./_components/projet-list";

const breadcrumbItems = [
    { title: "Gérer mon site", link: "/dashboard/my-site" },
    { title: "Page de projects", link: "/dashboard/my-site/home" }

];
const Projects = () => {
    const router = useRouter()
    return ( 
        <ScrollArea className=" h-full" >
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <div className="flex items-start justify-between">
                    <Heading
                    title={`List des Projects`}
                    description="Ajouter un projet."
                    />
                    <Button
                    className="text-xs md:text-sm"
                    onClick={() => router.push(`/dashboard/my-site/projets/ajouter`)}
                    >
                    <Plus className="mr-2 h-4 w-4" /> Ajouter un project
                    </Button>
                </div>
                <Separator/>
                <ProjetList/>
            </div>
        </ScrollArea>
     );
}
 
export default Projects;