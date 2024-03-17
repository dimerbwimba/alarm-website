import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import ProjectEditor from "./project-editor-description";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { SingleImageDropzone } from "@/components/ui/SingleImageDropzone";

const AddProjectForm = ({ initialData }: any) => {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description_json, setDescription_json] = useState("")
    const [description_html, setDescription_html] = useState("")

    const [status, setStatus] = useState("");

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title || "Chargement");
            setDescription(initialData.description || "Chargement");
            setBudget(initialData.budget || 0);
            setStartDate(initialData.startDate || "Chargement");
            setEndDate(initialData.endDate || "Chargement");
            setStatus(initialData.status || "Chargement");
            setDescription_json(initialData.description_json ||"");
            setDescription_html(initialData.description_html ||"");
        }
    }, [initialData]);

    const router = useRouter()

    const handleStatus = (status: string) => {
        setStatus(status);
    };
    const onChangeDescription = (json:string, html:string,) =>{
        setDescription_json(json)
        setDescription_html(html)
    }
    const onSubmit = async () => {
        const data = {
            title,
            description,
            budget,
            startDate,
            endDate,
            status,
            description_json,
            description_html
        };
        setLoading(true);
        if (!initialData) {
            await axios.post("/api/manage-projets", { ...data })
                .then(() => {
                    router.push("/dashboard/my-site/projets");
                })
                .catch(() => {
                    console.error("Failed to add project");
                });
        } else {
            await axios.put("/api/manage-projets/single-project", { _id:initialData._id, ...data })
                .then(() => {
                    router.push("/dashboard/my-site/projets/");
                })
                .catch(() => {
                    console.error("Failed to add project");
                });
        }
        setLoading(false);
    };

    return (
        <div className="grid grid-cols-2">
            <div className="p-5 space-y-4">
               
                <div>
                    <label>Titre du projet</label>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="" />
                </div>
                <div className="flex flex-col h-80 border-b">
                    <ScrollArea className=" h-full">
                        <label>Description du projet</label>
                       <div className="my-4"></div>
                        <ProjectEditor initialContent={description_json} onAddDescription={onChangeDescription} />
                    </ScrollArea>
                </div>
            </div>
            <div>
                <div className="p-5 space-y-4">
                <SingleImageDropzone/>
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <label>Date de début</label>
                            <Input value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="" />
                        </div>
                        <div>
                            <label>Date de fin</label>
                            <Input value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="" />
                        </div>
                    </div>
                    <div>
                        <label>Budget</label>
                        <Input value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="" />
                    </div>
                    <div className="border-b">
                        <label>Statut du projet</label>
                        <div className="py-2 space-x-2">
                            <span onClick={() => handleStatus("En planification")} className={`border ${status === "En planification" ? `border-2 border-yellow-900 bg-yellow-700` : `border bg-green-700`} cursor-pointer text-sm font-bold rounded-lg text-white p-1`}>En planification </span>
                            <span onClick={() => handleStatus("En cours")} className={`border ${status === "En cours" ? `border-2 border-yellow-900 bg-yellow-700` : `border bg-green-700`} cursor-pointer text-sm font-bold rounded-lg text-white p-1`}>En cours</span>
                            <span onClick={() => handleStatus("Terminé")} className={`border ${status === "Terminé" ? `border-2 border-yellow-900 bg-yellow-700` : `border bg-green-700`} cursor-pointer text-sm font-bold rounded-lg text-white p-1`}>Terminé </span>
                        </div>
                    </div>
                    <Button onClick={onSubmit} disabled={!title || !description || !budget || !startDate || !endDate || !status} className="w-full">
                        {loading ? <Loader /> : ""} { !initialData ?  "Sauvegarder":"Sauvegarder vos modification"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AddProjectForm;
