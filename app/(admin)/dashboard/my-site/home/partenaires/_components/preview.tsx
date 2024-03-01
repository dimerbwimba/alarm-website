import { SinglePartenaireProps } from "@/types";

interface PreviewProps {
    partenaire:SinglePartenaireProps
}

const Preview = ({partenaire}:PreviewProps) => {
    return (    
        <div className=" flex justify-center items-center rounded-lg p-5 my-2">
           <div className="bg-gray-100 w-full p-5 rounded text-center">
                <span className="p-1 bg-red-900 text-white px-2 rounded-md uppercase">
                    {partenaire.type_partenaire}
                </span>
                <div className=" uppercase py-2">
                    {partenaire.name}
                </div>
               {partenaire.image ? <div className="flex justify-center">
                    <img height={150} width={150} className="rounded-md overflow-hidden" src={partenaire.image} />
                </div> : <div>LOGO</div> }
           </div>
        </div>
     );
}
 
export default Preview;