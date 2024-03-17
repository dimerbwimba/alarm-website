import { ProjetProps } from "@/types";
import { Edit, XCircle } from "lucide-react";
import Link from "next/link";
import Markdown from 'react-markdown'
const Projet = ({projet}:{ projet:ProjetProps}) => {
    function createMarkup() {
        return {__html: projet.description_html};
      }
    return ( 
        <div className=" ">
            <div className=" flex justify-end mb-2 space-x-2">
                {/* <div className=" rounded-md px-2 border flex items-center space-x-2 text-red-700">
                    <span>Suprimer</span> <XCircle className=" h-4 w-4"/>
                </div> */}
                <a href={"/dashboard/my-site/projets/modifier/"+projet._id} className="rounded-md px-2 border flex items-center space-x-2 text-green-700">
                    <span>Modifier</span><Edit className=" h-4 w-4"/>
                </a>
            </div>
            <div className="border-l-4 p-2 px-2 bg-gray-100">
                <h2 className=" text-xl uppercase font-bold">{projet.title}</h2>
                <div className="  ">
                    <div className=" prose prose-lg" dangerouslySetInnerHTML={createMarkup()}>

                    </div>
                </div>
                <div>
                    <span>
                        {projet.startDate} a {projet.endDate}
                    </span>
                </div>
                <div className=" py-2">
                    <span className=" bg-green-600 text-white px-1 py-1 rounded-md text-sm">
                        Status : {projet.status}
                    </span>
                </div>
                <div>
                <span className=" bg-green-600 text-white px-1 py-1 rounded-md text-sm">
                        Budget : {projet.budget}
                    </span>
                </div>

            </div>
        </div>
     );
}
 
export default Projet;