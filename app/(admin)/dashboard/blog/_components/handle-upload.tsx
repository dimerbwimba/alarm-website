'use client';

import { SingleImageDropzone } from '@/components/ui/SingleImageDropzone';
import { Button } from '@/components/ui/button';
import compressImage from '@/lib/compressor';
import { useEdgeStore } from '@/lib/edgestore';
import { AlertCircle, Check, MousePointerSquare } from 'lucide-react';
import { useState } from 'react';

interface ImageDropzoneProps {
    onUpload: (url: string) => void
}

export function ImageDropzone({ onUpload }: ImageDropzoneProps) {
    const [file, setFile] = useState<File>();
    const [progress, setProgress] = useState(0)
    const { edgestore } = useEdgeStore();
    const [open, setOpen] = useState(false)
    const [error, setError] = useState("")

    return (
        <div>
            <SingleImageDropzone
                height={200}
                value={file}
                onChange={ async (file) => {
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
                    <span className=" flex items-center text-center text-green-600 font-bold text-sm ">Telechargement terminer. <span> <Check className="mx-2 w-4 h-4" /></span> </span>
                    <span className="mx-2 border-l border-r px-3 "><MousePointerSquare /></span>
                    <span className=" text-sm">Cliquer sur l&apos;image pour telecharger un logo different</span>
                </div>}
           
            <Button
                className=' w-full bg-green-600 my-2'
                onClick={async () => {
                    setOpen(true)
                    if (file) {
                        try {
                            const res = await edgestore.publicFiles.upload({
                                file,
                                // options: {
                                //     replaceTargetUrl: image,
                                // },
                                onProgressChange: (progress) => {
                                    // you can use this to show a progress bar
                                    setProgress(progress)
                                },
                            });
                            // you can run some server action or api here
                            // to add the necessary data to your database
                            if (res) {
                                onUpload(res.url)
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
                Telecharger
            </Button>
        </div>
    );
}