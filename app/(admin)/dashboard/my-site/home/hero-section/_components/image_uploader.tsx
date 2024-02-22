'use client';

import {
  MultiImageDropzone,
  type FileState,
} from '@/components/ui/MultiImageDropzone';
import compressImage from '@/lib/compressor';
import { useEdgeStore } from '@/lib/edgestore';
import axios from 'axios';
import { useState } from 'react';

export function MultiImageDropzoneUsage() {
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const { edgestore } = useEdgeStore();

  function updateFileProgress(key: string, progress: FileState['progress']) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key,
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  return (
    <div>
      <MultiImageDropzone
        value={fileStates}
        dropzoneOptions={{
          maxFiles: 6,
        }}
        onChange={(files) => {
          setFileStates(files);
        }}
        onFilesAdded={async (addedFiles) => {
          setFileStates([...fileStates, ...addedFiles]);
          await Promise.all(
            addedFiles.map(async (addedFileState) => {      
              const options = {
                maxSizeMB: 0.3, // Compress the image to half its original size
                maxWidthOrHeight: 1920,
                useWebWorker: true,
              };
              const compressedFile = await compressImage(addedFileState.file, options);     
              try {
                const res = await edgestore.publicFiles.upload({
                  file: compressedFile,
                  onProgressChange: async (progress) => {
                    updateFileProgress(addedFileState.key, progress);
                    if (progress === 100) {
                      // wait 1 second to set it to complete
                      // so that the user can see the progress bar at 100%
                      await new Promise((resolve) => setTimeout(resolve, 100));
                      updateFileProgress(addedFileState.key, 'COMPLETE');
                    }
                  },
                });
                await axios.post("/api/upload-hero-images",{
                  url:res.url
                })
              } catch (err) {
                updateFileProgress(addedFileState.key, 'ERROR');
              }
            }),
          );
        }}
      />
    </div>
  );
}