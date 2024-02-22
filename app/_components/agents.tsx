import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Image, ListChecks } from "lucide-react";
import Link from "next/link";

const Agents = () => {

    const agents = [
        {
            photo: "https://i.ibb.co/CKZWwDQ/agent-1-compressed.jpg",
            nom: "NZABONIMPA SEZIBERA Apollinaire",
            post: "Directeur National",
            slug: "NZABONIMPA-SEZIBERA-Apollinaire"
        },
        {
            photo: "https://i.ibb.co/J7zFNXf/agent-2-compressed.jpg",
            nom: "  BANGAMWABO NYANDWI JULES",
            post: "Assistant Administratif et Comptable",
            slug: "BANGAMWABO-NYANDWI-JULES"
        },
        {
            photo: "",
            nom: "Me. Daniel KILANGALANGA Opondjo",
            post: "Coordinateur de Peace Building",
            slug: "Me-Daniel-KILANGALANGA-Opondjo"
        },
    ]
    return (
        <div className="py-5">
            <div className="flex items-end justify-between mb-10">
                <div className="max-w-2xl mx-auto text-center">
                    <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-default-300 text-default-950">Nos Agents</span>
                    <h2 className="text-4xl font-bold capitalize text-default-950 my-4"> Nos agents Cardre</h2>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-2 gap-x-2 gap-y-5 items-center rounded-md overflow-hidden">
                    {agents.map((agent, index) => <div key={index} className="group">
                        <div className="md:w-64 h-64 rounded-t-lg overflow-hidden">
                            <img src={agent.photo} alt={agent.nom} className=" object-cover " />
                        </div>
                        <div className="md:w-64 h-48 shadow border p-3  rounded-b-lg ">

                            <div className="  leading-5 text-gray-800 font-bold">
                                {agent.nom}
                            </div>
                            <div className=" text-gray-600 font-bold text-sm py-2">
                                {agent.post}
                            </div>
                            <Link href={`/info/${agent.slug}`} className=" py-4">
                                <Button variant={"link"} className=" my-2 font-boldspace-x-2" >
                                    <span>Apprendre Plus</span>
                                    <ArrowRight className="w-4 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>)}
                    {/* <!-- end col --> */}
                </div>
            <Link href={"/agents"} className=" py-16 flex justify-center items-center">
                <Button>
                    <ListChecks className="mx-2" />
                    <span className=" text-xl">
                        Voir la list de tout nos agents
                    </span>
                    <ArrowRight className="h-4 w-6" />

                </Button>
            </Link>
        </div>
    );
}

export default Agents;