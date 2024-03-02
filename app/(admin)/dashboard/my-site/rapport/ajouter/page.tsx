"use client"
import BreadCrumb from "@/components/breadcrumb";

import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RapportForm from "../_components/rapport-form";

const breadcrumbItems = [
    { title: "Gérer mon site", link: "/dashboard/my-site" },
    { title: "Repport", link: "/dashboard/my-site/rapport" },
    { title: "Ajouter", link: "/dashboard/my-site/rapport/ajouter" }

];
const AjouterRapportPage = () => {
    const [file, setFile] = useState<File>()
    const router = useRouter()
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!file) return

        try {
            const formData = new FormData();
            formData.append("file", file);

            const res = await fetch('/api/file/upload', {
                method: 'POST',
                body: formData
            })
            // handle the error
            if (!res.ok) throw new Error(await res.text())
        } catch (e: any) {
            // Handle errors here
            console.error(e)
        }
    }
    return (
        <ScrollArea className="h-full">
            <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <div className="flex items-start justify-between">
                    <Heading
                        title={`Ajouter un fichier`}
                        description="Ajouter un rapport ou document essentiel de l'entreprise."
                    />

                </div>
                <Separator />
                <RapportForm/>

            </div>
        </ScrollArea>
    );
}

export default AjouterRapportPage;