import { Input } from "@/components/ui/input";
import Preview from "./preview";
import { useEffect, useState } from "react";
import { SinglePartenaireProps } from "@/types";
import { useDispatch } from "react-redux";
import { updateId, updateImageUrl, updateName, updateTypePartenaire } from "@/app/redux/slice/partenaire-slice";
import UploadLogo from "./upload-logo";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Loader from "@/components/loader";
interface PartenaireProps{
    Pindex:number;
    partenaire:SinglePartenaireProps
    onPindexChange : (i:number) => void;
}
const Partenaire = ({Pindex,partenaire, onPindexChange}:PartenaireProps) => {
    const dispatch = useDispatch()
    const [type_partenaire, setTypePartenaire] = useState(partenaire.type_partenaire || "")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [progress, setProgress] = useState(0)
    const handleTypePartenaireSelection = (agentType: string) => {
        setTypePartenaire(agentType);
        dispatch(updateTypePartenaire({_id:`${partenaire._id}`, type_partenaire:agentType}))
    };

    const onUpdateName = (e:any) =>{
       dispatch(updateName({_id:`${partenaire._id}`, name:e.target.value}))
    }
    const onUploadImage = (url:string,progress:number) => {
        dispatch(updateImageUrl({_id:`${partenaire._id}`, image:url }))
        setProgress(progress)
    }
    const onSavePartenaire = async () =>{
        setLoading(true)
        if (!partenaire.isUpdated) {
            
            await axios.post("/api/manage-partenaire",{
                ...partenaire
            }).then(({data})=>{
                if (!data.error) {

                    dispatch(updateId({_id:`${Pindex}`, realId:data.partenaire._id}))
                    setLoading(false)
                }
            })
        }else{
            await axios.put("/api/manage-partenaire",{
                ...partenaire
            }).then(({data})=>{
                if (!data.error) {
                    setLoading(false)
                }else{
                    setError(data.message)
                }
            })
        }
    }
    useEffect(()=>{
        onPindexChange(Pindex)
    },[])
    return (
        <div className=" grid grid-cols-2 gap-y-3 border-b ">
            <Preview partenaire={partenaire} />
            <div className="border-2 p-4 rounded-lg  mx-2 my-2  border-dashed">
                <div>
                    <label className="text-black">Nom du partenaire {Pindex+1}</label>
                    <Input value={partenaire.name} onChange={onUpdateName} />
                </div>
                <div className="py-1">
                   
                </div>
                <div className=" border-b py-1">
                    <label className=" text-black my-1">{"Type de partenaire"}</label>
                    <div className=" my-1 space-x-3">
                        <span
                            className={`agent-option text-sm cursor-pointer border p-1 rounded-lg text-black ${type_partenaire === 'local' ? 'border-2 border-yellow-700' : ''}`}
                            onClick={() => handleTypePartenaireSelection('local')}
                        >
                            Local
                        </span>
                        <span
                            className={`agent-option  text-sm cursor-pointer border p-1 rounded-lg text-black ${type_partenaire === 'international' ? 'border-2 border-yellow-700' : ''}`}
                            onClick={() => handleTypePartenaireSelection('international')}
                        >
                            International
                        </span>

                    </div>
                </div>
                <div className=" mb-1">
                <UploadLogo image={partenaire.image} onSetFile={onUploadImage}/>

                </div>
               {error && <div className=" bg-red-600 py-1 text-white rounded-md">
                    {error}
                </div>}
                <div className=" border-t py-2">
                    <Button onClick={onSavePartenaire} disabled={partenaire.image && partenaire.name && partenaire.type_partenaire  ? false : true} className=" w-full">
                     {loading ? <Loader/> : ""}  <div>{!partenaire.isUpdated ?  "Sauvegarder" : "Modifier"}</div>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Partenaire;