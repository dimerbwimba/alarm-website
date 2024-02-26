"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, PlusCircle } from "lucide-react";
import Preview from "./preview";
import { useEffect, useState } from "react";
import { DepartementsTypes, SingleDepartementType } from "@/types";
import { useDispatch } from "react-redux";
import { addRole, isExistOnTheDB, updateName } from "@/app/redux/slice/departement-slice";
import SingleRole from "./single-role";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
interface DepartementProps {
    departement : SingleDepartementType,
    onChangeIndex:(i:number)=> void,
    PIndex:number
}
const Departement = ({departement, onChangeIndex , PIndex}:DepartementProps) => {

    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    const addNewRole = () =>{
        dispatch(addRole({_id:departement._id, role:""}))
    }

    const onChangeName = (e:any) => {
        dispatch(updateName({_id:departement._id, name: e.target.value}))
    }
    const onSave = async () => {
        if (!departement.updated) {
            await axios.post("/api/manage-department",{
                updated:true,
                name: departement.name,
                roles: departement.roles
            }).then(({data})=>{
                if (!data.error) {
                    setLoading(false)
                    dispatch(isExistOnTheDB({_id:PIndex, realId:data.departement._id}))
                }
            })
        }else{
            setLoading(true)
            await axios.put(`/api/manage-department`,{
                _id:departement._id,
                roles:departement.roles,
                name:departement.name
            }).then(({data})=>{
                if (!data.error) {
                    setLoading(false)
                }
            })
        }
    }
   useEffect(()=>{
    onChangeIndex(PIndex)
   },[])
    return ( 
        <div className=" my-5 grid grid-cols-2 gap-x-2">
         <Preview data={{name:departement.name, parentIndex:PIndex, roles:departement.roles}}/>
        <div className="border-2 p-3 border-dashed rounded-lg">
            <div className="py-2 pb-2">
                <label className="pb-2">Le Nom du departement </label>
                <Input onChange={(e)=> onChangeName(e)} value={departement.name} />
            </div>
            <Separator/>
            {departement.roles.map((role, index)=>(
                <SingleRole key={index} _id={departement._id} currentIndex={PIndex} role={role} roleIndex={index}/>
            ))}
            <div className="mb-5">
                <Button onClick={addNewRole} variant={"outline"} className=" border-2 border-dashed w-full">
                    <PlusCircle className="h-4 w-4 mx-2"/>    Ajouter un role
                </Button>
            </div>
            <Separator/>
            <div className="my-5">
                <Button disabled={ departement.name && departement.roles.length > 2  ? false : true} onClick={onSave} variant={"default"} className=" w-full">
                    <CheckCircle className="h-4 w-4 mx-2"/>    { !departement.updated ? "Sauvegarder" :"Modifier"}
                </Button>
            </div>
        </div>
    </div>
     );
}
 
export default Departement;