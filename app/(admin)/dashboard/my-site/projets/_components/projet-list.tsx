import axios from "axios";
import Projet from "./projet";
import { useEffect, useState } from "react";

const ProjetList = () => {
    const [projets, setProjets] = useState([])
    const getProjects = async () =>{

        await axios.get("/api/manage-projets").then(({data})=>{
            setProjets(data.projects)
        })
    }
    useEffect(()=>{
        getProjects()
    },[])
    return ( 
        <div className=" grid grid-cols-2">
           { projets.map((projet, index) => <Projet key={index} projet={projet}/>)}
        </div>
     );
}
 
export default ProjetList;