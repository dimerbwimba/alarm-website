import dynamic from "next/dynamic";
import { useMemo } from "react";

interface ProjectEditorProps{
    onAddDescription:(html:string, json:string)=>void,
    initialContent:string
}
const ProjectEditor = ({ onAddDescription, initialContent}:ProjectEditorProps) => {

    const Editor = useMemo(
        () =>
          dynamic(() => import("@/components/editor"), {
            ssr: true,
            loading: () => <div className=" flex">
              Chargement ...
            </div>,
          }),
        []
      );
      const onchange = (html:string, json:string) =>{
        onAddDescription(html, json)
      }
    return ( 
        <div>
            <Editor onChange={onchange} initialContent={initialContent}/>
        </div>
     );
}
 
export default ProjectEditor;