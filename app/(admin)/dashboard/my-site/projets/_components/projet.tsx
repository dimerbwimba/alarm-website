import { ProjetProps } from "@/types";
import Markdown from 'react-markdown'
const Projet = ({projet}:{ projet:ProjetProps}) => {
    return ( 
        <div className=" border-l-4 px-2">
            <h2 className=" text-xl uppercase font-bold">{projet.title}</h2>
            <div className="  line-clamp-3 ">
                <Markdown>{projet.description}</Markdown>
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
     );
}
 
export default Projet;