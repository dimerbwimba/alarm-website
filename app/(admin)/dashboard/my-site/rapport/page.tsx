"use client"

import BreadCrumb from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import RapportList from "./_components/rapport-list";


const breadcrumbItems = [
    { title: "Gérer mon site", link: "/dashboard/my-site" },
    { title: "Repport", link: "/dashboard/my-site/home" }

];
const RepportPage = () => {
    const router = useRouter()
    return ( 
        <ScrollArea className=" h-full" >
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <div className="flex items-start justify-between">
                    <Heading
                    title={`List des Ressources et publications`}
                    description="Ajouter et suprimer des fichier."
                    />
                    <Button
                    className="text-xs md:text-sm"
                    onClick={() => router.push(`/dashboard/my-site/rapport/ajouter`)}
                    >
                    <Plus className="mr-2 h-4 w-4" /> Ajouter un fichier
                    </Button>
                </div>
                <Separator />
                <RapportList/>
            </div>
        </ScrollArea>
     );
}
 
export default RepportPage;