'use client';

import { SingleImageDropzone } from '@/components/ui/SingleImageDropzone';
import { Button } from '@/components/ui/button';
import compressImage from '@/lib/compressor';
import { useEdgeStore } from '@/lib/edgestore';
import axios from 'axios';
import { Check, MousePointerSquare, UploadCloudIcon } from 'lucide-react';
import { useState } from 'react';

export function SingleImageDropzoneUsage({ onSetFile, _id, image }: any) {
  const [file, setFile] = useState<File>();
  const [open, setOpen] = useState(false)
  const [progress, setProgess] = useState(0);
  const { edgestore } = useEdgeStore();

  return (
    <div>
      <div className='flex justify-center'>
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
      </div>
      {open ? <div className=" ease-in-out transition duration-500">
        <div className="w-full text-center rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-600">
          <span>{progress}%</span> <div className="h-3 bg-primary" style={{ width: `${progress}%` }}></div>
        </div>
        <span>Telechargement encour ...</span>
      </div> : ""}
      {
        progress === 100 &&
        <div className=" flex items-center border-t my-1 border-b w-full">
          <span className=" flex items-center text-center text-green-600 font-bold text-sm ">Telechargement terminer. <span> <Check className="mx-2 w-4 h-4" /></span> </span>
          <span className="mx-2 border-l border-r px-3 "><MousePointerSquare /></span>
          <span className=" text-sm">Cliquer sur l&lsquo;image pour telecharger une image differente</span>
        </div>}
      <Button
        disabled={open}
        variant={"default"}
        className=' w-full'
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
                setProgess(progress)
              },
            });
            // you can run some server action or api here
            // to add the necessary data to your database
            if (res) {
              onSetFile(res.url, progress)
              await axios.put("/api/manage-mission-vision", {
                _id: _id,
                image: res.url
              })
              setOpen(false)
            }
          }
        }}
      >
        <UploadCloudIcon className='mx-3' /> Téléchargement
      </Button>
    </div>
  );
}