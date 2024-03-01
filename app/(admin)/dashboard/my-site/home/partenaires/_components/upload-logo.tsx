import { SingleImageDropzone } from "@/components/ui/SingleImageDropzone";
import compressImage from "@/lib/compressor";
import { useState } from "react";
import { useEdgeStore } from '@/lib/edgestore';
import { Button } from "@/components/ui/button";
import { AlertCircle, Check, MousePointerSquare, UploadCloud } from "lucide-react";
interface UploadLogoProps {
    onSetFile: (imageUrl: string, progressNumber: number) => void;
    image: string
}
const UploadLogo = ({ onSetFile, image }: UploadLogoProps) => {
    const [file, setFile] = useState<File>();
    const [progress, setProgess] = useState(0);
    const { edgestore } = useEdgeStore();
    const [open, setOpen] = useState(false)
    const [error, setError] = useState("")


    return (
        <div className="mt-2 flex flex-col justify-center items-center">
            <SingleImageDropzone
                width={200}
                height={200}
                value={file}
                onChange={async (file) => {
                    const options = {
                        maxSizeMB: 0.3, // Compress the image to half its original size
                        maxWidthOrHeight: 1920,
                        useWebWorker: true,
                    };
                    const compressedFile = await compressImage(file, options)
                    setFile(compressedFile);
                }}
            />
            {open ?
                <div className=" ease-in-out transition duration-500">
                    <div className="w-full text-center rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-600">
                        <span>{progress}%</span> <div className="h-3 bg-primary" style={{ width: `${progress}%` }}></div>
                    </div>
                    <span>Telechargement en cour ...</span>
                </div> : ""

            }

            {
                progress === 100 && 
                <div className=" flex items-center border-t my-1 border-b w-full"> 
                <span className=" flex items-center text-center text-green-600 font-bold text-sm ">Telechargement terminer. <span> <Check className="mx-2 w-4 h-4"/></span> </span> 
                <span className="mx-2 border-l border-r px-3 "><MousePointerSquare /></span> 
                <span className=" text-sm">Cliquer sur l'image pour telecharger un logo different</span>
                </div>}
                {
                    error && <div className="grid grid-cols-12 bg-red-600 text-white px-2 items-center border-t my-1 border-b w-full"> 
                    <span className=" text-sm col-span-6">Cliquer sur l'image pour telecharger un logo different</span>
                    <span className=" border-l border-r flex justify-center col-span-2">
                        <AlertCircle/>
                    </span>
                    <span className="col-span-2 text-sm my-1  w-full text-center">{error}</span>
                    </div>
                }
            <Button
                disabled={file ? false : true}
                variant={"default"}
                className=''
                onClick={async () => {
                    setOpen(true)
                    if (file) {
                        try {
                            const res = await edgestore.publicFiles.upload({
                                file,
                                options: {
                                    replaceTargetUrl: image,
                                },
                                onProgressChange: (progress) => {
                                    // you can use this to show a progress bar
                                    setProgess(progress)
                                },
                            });
                            // you can run some server action or api here
                            // to add the necessary data to your database
                            if (res) {
                                onSetFile(res.url, progress)
                                //   await axios.put("/api/manage-mission-vision",{
                                //     _id:_id,
                                //     image:res.url
                                //   })
                                setOpen(false)
                            }

                        } catch (error) {
                            setError(" Il y a eu un erreur ,cliquez sur l'image pour essayer encore")
                        }
                    }
                }}
            >
                <UploadCloud className='mx-3' /> Télécharger Logo
            </Button>


        </div>
    );
}

export default UploadLogo;