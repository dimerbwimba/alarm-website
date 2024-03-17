"use client"
import { useDispatch, useSelector } from "react-redux";
import Departement from "./departement";
import { SingleDepartementType } from "@/types";
import { Button } from "@/components/ui/button";
import { addDepartement } from "@/app/redux/slice/departement-slice";
import { useState } from "react";

const DepartementList = () => {
    const departements = useSelector((state:any) => state.departements)
    const [indexNumber, setIndexNumber] = useState(0)
    const dispatch = useDispatch()
    const addNewDepartement = () =>{
        dispatch(addDepartement({_id:`${indexNumber}`,name:"", updated:false,  roles:[], image:"", icon:""}))
    }
    const onChangeIndex = (index:number) =>{
       setIndexNumber(index+1)
    }
    return (
       <div>
        {
           departements.map((departement:SingleDepartementType, index:number)=>
            <Departement key={index} PIndex={index} onChangeIndex={(i) => onChangeIndex(i)} departement={departement} />
           )
        }
          <Button onClick={addNewDepartement} variant={"outline"} className=" w-full border-2 border-dashed">
            Ajouter un nouveau departement {indexNumber+1}
          </Button>
       </div>
    );
}

export default DepartementList;