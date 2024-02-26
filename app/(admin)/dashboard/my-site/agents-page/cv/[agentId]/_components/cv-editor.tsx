"use client"

import SkeletonLoader from "@/components/skeleton-loader";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Save, SaveAll } from "lucide-react";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

interface CVEditorProps{
  id?:string
}

const CVEditor = ({id}:CVEditorProps) => {
  const [json_content, setContent] = useState("")
  const [html_content, setHtmlContent] = useState("")
  const [loading, setLoading] = useState(false)
  const agent = useSelector((state:any)=>state.cv)
    const Editor = useMemo(
        () =>
          dynamic(() => import("@/components/editor"), {
            ssr: false,
            loading: () => <div className=" flex justify-center items-center">
              Chargement ...
              <SkeletonLoader r={1}/>
            </div>,
          }),
        []
      );
    const onSave = ( content:string, html:string,) => {
      setContent(content)
      setHtmlContent(html)
    }

    const onSubmit = async () =>{
      const data = {
        html_body:html_content,
        json_body:json_content
      }
      setLoading(true)
      await axios.put("/api/manage-cv",{
        ...data,
        _id:id
      }).then(({data})=>{
        setLoading(false)
      })

    }
    return ( 
        <div className=" flex justify-center col-span-8 h-full">
           
            <div className=" w-full border-l flex justify-between flex-col py-5 rounded-lg">
                
                <Editor onChange={onSave} initialContent={agent.json_body}/>
                <div className=" border-t mx-5">

                  <Button disabled={loading ? true : false} onClick={onSubmit} variant={"default"} className="w-full my-5">
                    <Save className="w-4 h-4 mx-2" /> <span> { !loading ? "Sauvegarder" : "Chargement... Nous sauvegardons vos modification" } </span>
                  </Button>

                </div>
            </div>

        </div>
     );
}
 
export default CVEditor;