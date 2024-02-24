"use client"
import { SingleImageDropzone } from "@/components/ui/SingleImageDropzone";
import { Button } from "@/components/ui/button";
import compressImage from "@/lib/compressor";
import { useState } from "react";
import { useEdgeStore } from '@/lib/edgestore';
import axios from "axios";
import { Upload } from "lucide-react";

interface AgentImageUploaderProps {
    onUpload: (url: string) => void
    image: string,
    _id: string
}

const AgentImageUploader = ({ onUpload, image, _id }: AgentImageUploaderProps) => {
    const [file, setFile] = useState<File>();
    const [open, setOpen] = useState(false)
    const [progress, setProgress] = useState(0);
    const { edgestore } = useEdgeStore();

    return (
        <div className="border-t border-b py-1">
          
            <div className=" flex space-x-6 ">
                <SingleImageDropzone
                    width={200}
                    height={150}
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
                <Button
                    disabled={open}
                    variant={"default"}
                    className={' w-full h-100 my-1'}
                    onClick={async () => {
                        setOpen(true)
                        if (file) {
                            const res = await edgestore.publicFiles.upload({
                                file,
                                options: {
                                    replaceTargetUrl: image,
                                },
                                onProgressChange: (progress) => {
                                    // you can use this to show a progress bar
                                    setProgress(progress)
                                },
                            });
                            // you can run some server action or api here
                            // to add the necessary data to your database
                            if (res) {
                                onUpload(res.url)
                            }
                        }
                    }}
                >
                    <Upload className='mx-3' /> Téléchargement
                </Button>
            </div>  
           {open && <div className="h-3 relative w-full rounded-lg overflow-hidden my-5 bg-neutral-200 dark:bg-neutral-600">
                <div className="h-3 bg-primary flex items-center text-center" style={{ width: `${progress}%` }}>
                </div>
                    <div className="text-sm -top-1 left-52 absolute">{progress}%</div>
            </div>}
        </div>
    );
}

export default AgentImageUploader;