'use client';

import { SingleImageDropzone } from '@/components/ui/SingleImageDropzone';
import { Button } from '@/components/ui/button';
import compressImage from '@/lib/compressor';
import { useEdgeStore } from '@/lib/edgestore';
import axios from 'axios';
import { UploadCloudIcon } from 'lucide-react';
import { useState } from 'react';

export function SingleImageDropzoneUsage({onSetFile, _id, image}:any) {
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
          onChange={ async (file) => {
            const options = {
              maxSizeMB: 0.3, // Compress the image to half its original size
              maxWidthOrHeight: 1920,
              useWebWorker: true,
            };
            const compressedFile = await  compressImage(file, options)
            setFile(compressedFile);
          }}
        />
      </div>
      {open && <div className="h-3 w-full rounded-lg overflow-hidden my-5 bg-neutral-200 dark:bg-neutral-600">
        <div className="h-3 bg-primary" style={{width: `${progress}%`}}></div>
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
              await axios.put("/api/manage-mission-vision",{
                _id:_id,
                image:res.url
              })
              setOpen(false)
            }
          }
        }}
      >
        <UploadCloudIcon className='mx-3'/> Téléchargement
      </Button>
    </div>
  );
}