import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import Dropzone from "./uploader";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Loader from "@/components/loader";

const RapportForm = () => {
    const [loading, setLoading]= useState<Boolean>(false)
    const [file, setFile] = useState<File>()
    const [file_name, setFileName] = useState("")
    const [file_type, setFileType] = useState("")
    const [file_size, setFileSize] = useState("")
    const [full_file_title, setFullFileTitle] = useState("")
    const [file_description, setFileDescription] = useState("")
    const router = useRouter()
    const onSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!file) return
            setLoading(true)
            const formData = new FormData();
            formData.append("file", file);
            
            const fileData: Record<string, string> = {
                file_name,
                full_file_title,
                file_description,
                file_type,
                file_size,
            };
            for (let key in fileData) {
                formData.append(key, String(fileData[key]));
            }
              await axios.post('/api/file/upload',formData,{ headers: {
                'Content-Type': 'multipart/form-data'
              }}).then(({data})=>{
                  setLoading(false)
                  router.push('/dashboard/my-site/rapport')
              }).catch(({response})=>{
                setLoading(false)
                console.log(response.data.error);
              })
            // handle the error
        
    }
    const handelFileChange = (file:File, type:string, size:any) =>{
        setFile(file)
        setFileSize(size)
        setFileType(type)
    }
    return (
        <div className="flex  flex-col justify-center items-center ">
            <div className=" grid grid-cols-2 gap-2">
                <div>
                    <div className="w-full py-2">
                        <label>Nom du fichier</label>
                        <Input onChange={(e) => setFileName(e.target.value)} placeholder="" />
                    </div>
                    <div className="w-full py-2">
                        <label>Titre complet du fichier</label>
                        <Input onChange={(e) => setFullFileTitle(e.target.value)}  placeholder="" />
                    </div>
                    <div className="w-full py-2">
                        <label>Description du fichier</label>
                        <div>
                            <textarea onChange={(e) => setFileDescription(e.target.value)} rows={8} placeholder="Ajouter la description du fichier" className=" w-full rounded-lg" />
                        </div>
                    </div>

                </div>
                <div>
                    <div>

                        <Dropzone onFileUploaded={handelFileChange} />
                    </div>
                </div>

            </div>
            <div className="w-full mx-10 border-t py-4">
                <Button disabled={!loading ? false: true} onClick={onSubmit} className=" w-full space-x-2">
                 {loading ? <Loader/> :<><Upload className="w-4 h-4" /> <span>Sauvegarder</span></> }
                </Button>
            </div>
                
        </div>
    );
}

export default RapportForm;