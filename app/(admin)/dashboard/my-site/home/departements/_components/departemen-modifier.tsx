"use client"

import { useDispatch } from "react-redux";
import DepartementList from "./departement-list";
import axios from "axios";
import { getDepartements } from "@/app/redux/slice/departement-slice";
import { useEffect, useState } from "react";

const DepartemenModifier = () => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const getAllDepartements = async () =>{
        await axios.get("/api/manage-department").then(({data})=>{
            if (!data.error) {
        
                dispatch(getDepartements(data.departements))
                setLoading(false)
            }
        })
    }
    useEffect(()=>{
        getAllDepartements()
    },[])
    if (loading) {
        return (
            <div>
                Chargement...
            </div>
        )
    }
    return ( 
        <div>
            <DepartementList/>
        </div>
     );
}
 
export default DepartemenModifier;