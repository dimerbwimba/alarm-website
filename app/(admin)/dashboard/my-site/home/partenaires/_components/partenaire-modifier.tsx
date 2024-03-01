"use client"
import axios from "axios";
import PartenaireList from "./partenaire-list";
import { useDispatch } from "react-redux";
import { getPartenaires } from "@/app/redux/slice/partenaire-slice";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";
import { Skeleton } from "@/components/ui/skeleton";
import SkeletonLoader from "@/components/skeleton-loader";

const PartenaireModifier = () => {
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()
    const onGetPartenaires = async() =>{
        await axios.get("/api/manage-partenaire").then(({data})=>{
            if (!data.error) {
                setLoading(false)
                dispatch(getPartenaires(data.partenaires))

            }
        })
    }

    useEffect(()=>{
        onGetPartenaires()
    },[])

    if (loading) {
        return <div>
           <div>Chargement ...</div>
           <SkeletonLoader r={1}/>
        </div>
    }
    return ( 
        <div>
            <PartenaireList/>
        </div>
     );
}
 
export default PartenaireModifier;