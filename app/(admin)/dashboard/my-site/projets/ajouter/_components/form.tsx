import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddProjectForm = () => {
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [budget, setBudget] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [status, setStatus] = useState("")
    const router = useRouter()

    const handleStatus = (status:string) =>{
        setStatus(status)
    }

    const onSubmit = async () =>{
        const data = {
            title, description, budget, startDate, endDate, status
        }
        setLoading(true)
        await axios.post("/api/manage-projets",{...data}).then(({data})=>{
            router.push("/dashboard/my-site/projets")
            setLoading(false)
        }).catch(()=>{
            router.push("/dashboard/my-site/projets")
            setLoading(false)
        })

    }
    return ( 
        <div className=" grid grid-cols-2">
            <div className="p-5 space-y-4">
                <div>
                    <label>Titre du project</label>
                    <Input onChange={(e) => setTitle(e.target.value)} placeholder="" />
                </div>
                <div className=" flex flex-col">
                    <label>Description du project</label>
                    <textarea onChange={(e)=> setDescription(e.target.value)} className=" rounded-lg" rows={6} placeholder=""/>
                </div>

            </div>
            <div>
                  <div className="p-5 space-y-4">
                        <div className=" grid grid-cols-2 gap-2">
                            <div>
                                <label>Date de début</label>
                                <Input onChange={(e)=> setStartDate(e.target.value)} placeholder="" />

                            </div>
                            <div>
                                <label>Date de fin</label>
                                <Input onChange={(e)=> setEndDate(e.target.value)} placeholder="" />

                            </div>
                        </div>
                        <div>
                            <label>Budget</label>
                            <Input onChange={(e)=> setBudget(e.target.value)} placeholder="" />
                        </div>
                        <div className=" border-b">
                            <label>Status du projet</label>
                            <div className="py-2 space-x-2">
                                <span onClick={()=> handleStatus("En planification")} className={`border ${ status === "En planification" ? ` border-2 border-yellow-900 bg-yellow-700 ` :`border bg-green-700` } cursor-pointer text-sm font-bold rounded-lg text-white  p-1`}>En planification </span>
                                <span onClick={()=> handleStatus("En cours")} className={`border ${ status === "En cours" ? ` border-2 border-yellow-900 bg-yellow-700 ` :`border bg-green-700` } cursor-pointer text-sm font-bold rounded-lg text-white  p-1`}>En cours</span>
                                <span onClick={()=> handleStatus("Terminé")} className={`border ${ status === "Terminé" ? ` border-2 border-yellow-900 bg-yellow-700 ` :`border bg-green-700` } cursor-pointer text-sm font-bold rounded-lg text-white  p-1`}>Terminé </span>
                            </div>
                        </div>
                        <Button onClick={onSubmit} disabled={ title && description && budget && startDate && endDate && status ? false : true} className=" w-full">
                          {loading ? <Loader/> : ""}  Sauvegarder
                        </Button>
                  </div>
            </div>
        </div>
     );
}
 
export default AddProjectForm;