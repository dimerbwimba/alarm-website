"use client"

import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import AddProjectForm from "../../ajouter/_components/form";
import { ScrollArea } from "@/components/ui/scroll-area";

const breadcrumbItems = [
    { title: "Gérer mon site", link: "/dashboard/my-site" },
    { title: "Page de projects", link: "/dashboard/my-site/projets" },
    { title: "Modifier", link: "/dashboard/my-site/projets/ajouter" }

];
const UpdateProject = () => {
    const [project, setProject] = useState({})
    const params = useParams()
    const getProject = async()=>{
        await axios.get(`/api/manage-projets/single-project?_id=${params.id}`)
        .then(({data})=>{
            setProject(data.project)
        })
    }
    useEffect(()=>{
        getProject()
    },[])

    return ( 
        <ScrollArea className=" h-full">
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <div className="flex items-start justify-between">
                    <Heading
                    title={`Modifier un Projet`}
                    description="Modifier un projet."
                    />
                </div>
                <Separator/>
                </div>
                <AddProjectForm initialData={project} />
        </ScrollArea>
     );
}
 
export default UpdateProject;