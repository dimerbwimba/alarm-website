import { ProjetProps } from "@/types";

const Projet = ({projet}:{ projet:ProjetProps}) => {
    return ( 
        <div className=" border-l-4 px-2">
            <h2 className=" text-xl uppercase font-bold">{projet.title}</h2>
            <p>{projet.description}</p>
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