"use client"
import { addAgents } from "@/app/redux/slice/agent-slice";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { useDispatch } from "react-redux";

const AddAgent = () => {
    const dispatch = useDispatch()

    const addNewAgent = () =>{
        dispatch(addAgents({
            name:"",
            image:"",
            email:"",
            function:"",
            type_agent:""
        }))
    }
    return ( 
        <div id="ajouter">
           <Button onClick={addNewAgent} variant={"ghost"} className="w-full border-2 border-dashed">
               <PlusCircleIcon className="w-4 h-4"/> <span className="px-3">Ajouter un nouvel agent</span> 
           </Button>
        </div>
     );
}
 
export default AddAgent;