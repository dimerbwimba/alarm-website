import axios from "axios";
import { useEffect, useState } from "react";
import Rapport from "./rapport";
import SkeletonLoader from "@/components/skeleton-loader";

const RapportList = () => {
    const [rapports, setRapports] = useState<[]>()
    const [loading, setLoading] = useState(true)
    const getReports = async() =>{

        await axios.get("/api/file/get-file").then(({data})=>{
            setRapports(data.rapports)
            setLoading(false)
        })

    }

    useEffect(()=>{
        getReports()
    },[])

    if (loading) {
        return <div>
           <div className="py-2">Chargement ...</div>
           <SkeletonLoader r={1}/>
        </div>
    }

    return ( 
        <div className=" w-3/5">
            <div className="grid grid-cols-2 gap-3">
                {
                    rapports?.map((rapport, index)=> <Rapport rapport={rapport} key={index} />)
                }

            </div>
        </div>
     );
}
 
export default RapportList;