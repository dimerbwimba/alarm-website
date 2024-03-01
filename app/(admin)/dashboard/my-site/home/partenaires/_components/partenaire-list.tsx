"use client"
import { Button } from "@/components/ui/button";
import Partenaire from "./partenaire";
import { PlusCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addPartenaire } from "@/app/redux/slice/partenaire-slice";
import { useState } from "react";
import { SinglePartenaireProps } from "@/types";

const PartenaireList = () => {
    const dispatch = useDispatch()
    const [Pindex, setPindex] = useState(0)
    const partenaires = useSelector((state:any) => state.partenaires)
    const addNewPartenaire = () =>{
        dispatch(addPartenaire({
            _id:`${Pindex}`,
            image:"",
            isUpdated:false,
            type_partenaire:"",
            name:"",
        }))
    }

    const updatePindex= (i:any) =>{
        setPindex(i+1)
    }

    return ( 
        <div>
            <Button onClick={addNewPartenaire} variant={"outline"} className=" border-2 mt-2 mb-10 border-dashed w-full">
               <PlusCircle className="w-4 h-4 mx-1"/> Ajouter un partenaire
            </Button>
           {partenaires.map((partenaire:SinglePartenaireProps, index:number) => <Partenaire partenaire={partenaire} Pindex={index} onPindexChange={updatePindex} key={index}/> )}
        </div>

     );
}
 
export default PartenaireList;