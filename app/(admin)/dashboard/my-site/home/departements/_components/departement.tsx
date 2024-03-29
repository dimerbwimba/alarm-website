"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, PlusCircle } from "lucide-react";
import Preview from "./preview";
import { useEffect, useState } from "react";
import { SingleDepartementType } from "@/types";
import { useDispatch } from "react-redux";
import { addRole, isExistOnTheDB, updateImage, updateName } from "@/app/redux/slice/departement-slice";
import SingleRole from "./single-role";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import Loader from "@/components/loader";
import { useToast } from "@/components/ui/use-toast";
import {ImageUploader} from "./img-uploader";
interface DepartementProps {
    departement : SingleDepartementType,
    onChangeIndex:(i:number)=> void,
    PIndex:number,
}
const Departement = ({departement, onChangeIndex , PIndex}:DepartementProps) => {
    const {toast} = useToast()
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const addNewRole = () =>{
        dispatch(addRole({_id:departement._id, role:""}))
    }

    const onChangeName = (e:any) => {
        dispatch(updateName({_id:departement._id, name: e.target.value}))
    }

    const onChangeImage=(imageUrl:string)=>{
        dispatch(updateImage({_id:departement._id, image:imageUrl}))
    }
    const onSave = async () => {
        setLoading(true)
        if (!departement.updated) {
            await axios.post("/api/manage-department",{
                updated:true,
                name: departement.name,
                roles: departement.roles,
                image:departement.image
            }).then(({data})=>{
                if (!data.error) {
                    setLoading(false)
                    dispatch(isExistOnTheDB({_id:PIndex, realId:data.departement._id}))
                }
            })
        }else{
            await axios.put(`/api/manage-department`,{
                _id:departement._id,
                roles:departement.roles,
                name:departement.name,
                image:departement.image
            }).then(({data})=>{
                if (!data.error) {
                    toast({
                        variant: "default",
                        type: "background",
                        title: "Modification sauvegarder avec success",
                        description: data.message
                    })
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
         <Preview data={{ image: departement.image , name:departement.name, parentIndex:PIndex, roles:departement.roles}}/>
        <div className="border-2 p-3 border-dashed rounded-lg">
            <div className="py-2 pb-2">
                <label className="pb-2">{ !departement.updated ? "Selectioner une Image ":"Changer l'image en selectionant une nouvelle  "}</label>
                   <ImageUploader onSetFile={onChangeImage} image={departement.image} />
            </div>
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
                <Button disabled={ departement.image && departement.name && departement.roles.length > 2 && !loading  ? false : true} onClick={onSave} variant={"default"} className=" w-full">
                     {!loading  ? <CheckCircle className="h-4 w-4 mx-2"/> : <Loader/> }   { !loading ? !departement.updated ? "Sauvegarder" :"Modifier" : "Chargement..."}
                </Button>
            </div>
        </div>
    </div>
     );
}
 
export default Departement;