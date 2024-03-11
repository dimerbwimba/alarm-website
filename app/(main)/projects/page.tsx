"use client"

import { useEffect, useState } from "react";
import HeroWithBG from "../../_components/hero_bg";
import axios from "axios";
import Projet from "./_components/projet";


const Projects = () => {
   const [projets, setProjets] = useState<[]>()
   const [loading, setLoading] = useState(true)
   const getReports = async () => {

      await axios.get("/api/public/projets").then(({ data }) => {
         setProjets(data.projects)
         setLoading(false)
      })
   }

   useEffect(() => {
      getReports()
   }, [])
   return (
      <div>
         <div className=" flex justify-center">
            <HeroWithBG image_url="/water_bg_2.jpg" title="Bienvenue sur le projet ALARM RDC, où nous travaillons inlassablement pour réaliser une vision audacieuse : une Afrique sans conflits tribaux et religieux violents. " span_title="ALRM DRC | PROJECTS" />
         </div>
         <div>
            <div className=" flex justify-center">
               <div className=" p-5   my-10 clear-start w-2/3">
            <h1 className=" text-black font-bold text-4xl mb-10">List des PROJECTS</h1>
            <div>
               {loading && "Chargement..."}
            </div>
                  <div className=" grid grid-cols-1 gap-3">
                     {projets?.map((projet, index) => <Projet key={index} projet={projet} />)}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Projects;