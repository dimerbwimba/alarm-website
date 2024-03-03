import { AlertModal } from "@/components/modal/alert-modal";
import { SingleRapport } from "@/types";
import { XCircle } from "lucide-react";
import { useState } from "react";

const Rapport = ({rapport}:{rapport:SingleRapport}) => {

    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const onClose = () =>{
        setOpen(false)
    }
    const onConfirm = async () =>{
        setLoading(true)
    }
    return ( 
        <div className="relative">
            <AlertModal
                isOpen={open}
                onClose={onClose}
                onConfirm={onConfirm}
                loading={loading}
                

            />

            
            <div onClick={()=> setOpen(true)} className=" absolute bg-red-800 hover:bg-red-700 cursor-pointer rounded-full shadow right-0 -top-2">
                <XCircle className=" text-white"/>
            </div>
            <div onClick={() => window.open(rapport.file_path, '_blank') } className=" cursor-pointer bg-gray-100 p-4 rounded-lg">
                <div className=" grid grid-cols-12">
                    <div className=" col-span-3">
                    <div>{rapport.file_type === "application/vnd.ms-excel" && <img src='/excel.svg' className='mr-2' height={40} width={40} />}</div>
                        <div> {rapport.file_type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" && <img className='mr-2' src='/ms-word.svg' height={40} width={40} />}</div>
                        <div> {rapport.file_type === "application/pdf" && <img className='mr-2' src='/pdf.svg' height={40} width={40} />}</div>
                    </div>
                    <div className=" col-span-9">
                        <div className=" font-bold text-black">{rapport.file_name}</div> 
                        <div className=" text-sm">{rapport.file_size/1000}kb</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Rapport;