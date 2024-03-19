import { SingleRapport } from "@/types";

interface AnnualReportProps {
    loading: boolean
    rapports?: []
}

const AnnualReport = ({ loading, rapports }: AnnualReportProps) => {
    return (
        <div className=" flex h-screen justify-center bg-slate-200">
            <div className=" p-5   my-10 clear-start md:w-2/3">
                <h1 className=" text-black font-bold text-4xl mb-10">Ressources et publications</h1>
                <div>
                    {loading && "Chargement..."}
                </div>
                <div className=" grid md:grid-cols-2">
                    {
                        rapports?.map((rapport: SingleRapport, index: number) => (
                            <div key={index} onClick={() => window.open(rapport.file_path, '_blank')} className=" cursor-pointer bg-gray-100 p-4 rounded-lg">
                                <div className=" grid grid-cols-12">
                                    <div className=" col-span-3">
                                        <div>{rapport.file_type === "application/vnd.ms-excel" && <img src='/excel.svg' className='mr-2' height={40} width={40} />}</div>
                                        <div> {rapport.file_type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" && <img className='mr-2' src='/ms-word.svg' height={40} width={40} />}</div>
                                        <div> {rapport.file_type === "application/pdf" && <img className='mr-2' src='/pdf.svg' height={40} width={40} />}</div>
                                    </div>
                                    <div className=" col-span-9">
                                        <div className=" font-bold text-black">{rapport.file_name}</div>
                                        <div className=" text-sm">{rapport.file_size / 1000}kb</div>
                                        <div className=" border-t line-clamp-2"> {rapport.file_description} </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default AnnualReport;