import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HeroWithBG from "@/app/_components/hero_bg";


const AgentsPages = () => {
    const agents = [
        {
            photo: "https://i.ibb.co/CKZWwDQ/agent-1-compressed.jpg",
            nom: "NZABONIMPA SEZIBERA Apollinaire",
            post: "Directeur National",
            slug: "/info/NZABONIMPA-SEZIBERA-Apollinaire"
        },
        {
            photo: "https://i.ibb.co/J7zFNXf/agent-2-compressed.jpg",
            nom: "  BANGAMWABO NYANDWI JULES",
            post: "Assistant Administratif et Comptable",
            slug: "/info/BANGAMWABO-NYANDWI-JULES"
        },
        {
            photo: "",
            nom: "Me. Daniel KILANGALANGA Opondjo",
            post: "Coordinateur de Peace Building",
            slug: "/info/Me-Daniel-KILANGALANGA-Opondjo"
        },
        {
            photo: "https://i.ibb.co/1dP30j9/jpeg-optimizer-IMG-9291.jpg",
            nom: "NAKURE NEEMA Zebuliya",
            post: "Encadreur au centre Brenda",
            slug: "#"
        },

        {
            photo: "https://i.ibb.co/dW9zSsq/jpeg-optimizer-IMG-9292.jpg",
            nom: "KYAKIMWA KALEYIRWE Aziza",
            post: "Encadreur au centre Brenda",
            slug: "#"
        },
         {
            photo: "https://i.ibb.co/kH3Z87t/jpeg-optimizer-IMG-9302.jpg",
            nom: "SIBOMANA BAKIJIJE Luc",
            post: "Gardien",
            slug: "#"
        },
    ]
    return (
        <div>
            <div className="w-full ">
                <HeroWithBG image_url="https://i.ibb.co/y4TR8Fc/DSC-0834-compressed.jpg" span_title="Alarm RDC" title={``} />
            </div>
            <div className="flex py-10 bg-white min-h-screen flex-col items-center justify-between">
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
                            <Link href={`${agent.slug}`} className=" py-4">
                                <Button variant={"link"} className=" my-2 font-boldspace-x-2" >
                                    <span>Apprendre Plus</span>
                                    <ArrowRight className="w-4 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>)}
                    {/* <!-- end col --> */}
                </div>
            </div>
        </div>
    );
}

export default AgentsPages;