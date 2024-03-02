import { DownloadCloud } from 'lucide-react';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface Props {
    // Add any props you want to pass to the component
    onFileUploaded: (file: File, file_type:string, file_size:number) => void;
}

const Dropzone: React.FC<Props> = ({onFileUploaded}) => {

    const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true,
        accept: {
            'text/csv': ['.csv'],
            'application/msword': ['.doc'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
            'application/pdf': ['.pdf'],
            'application/vnd.ms-excel': ['.xls'],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':['.xlsx']
        }
    });

    const handleFileUpload = useCallback((file: File) => {
        if (onFileUploaded) {
            onFileUploaded(file, file.type, file.size); // Pass the file to the parent component
        }
    }, [onFileUploaded]);

    const files = acceptedFiles.slice(0, 1).map((file: File) => {
        handleFileUpload(file)
        return (
            <div className="py-1 border-b my-1  px-2 w-96" key={file.size}>
                <li className=' flex  '>
                    <div>{file.type === "application/vnd.ms-excel" && <img src='/excel.svg' className='mr-2' height={20} width={20} />}</div>
                    <div> {file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" && <img className='mr-2' src='/ms-word.svg' height={20} width={20} />}</div>
                    <div> {file.type === "application/pdf" && <img className='mr-2' src='/pdf.svg' height={20} width={20} />}</div>

                    <div className=' line-clamp-1 text-sm font-bold'>{file.name} - {file.size / 1000} Kb</div>
                </li>
            </div>
        );
    });


    return (
        <div  className="flex border border-dashed rounded-lg items-center justify-center">
            <div className='m-5'>
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p className='text-center font-bold'>Cliquer ou faites glisser et déposez le fichier ici</p>
                    <div className='my-5 w-96 p-5 rounded-lg shadow flex justify-center text-center border border-dashed'>
                        <button type="button" onClick={open}>
                            <img src='/document.svg' width={100} height={100} />
                        </button>
                    </div>
                </div>
                <aside>
                    <h4 className='text-center border-b text-xl'> {!files.length ? "Vide" : "Fichier"}</h4>
                    <ul>{files}</ul>
                    {!files.length && <div className='flex my-2 justify-center items-center'>
                        <img src='/empty-box.svg' width={100} height={100} />
                    </div>}
                </aside>
            </div>
        </div>
    );
}

export default Dropzone;
