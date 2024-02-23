import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Image, LinkIcon, ListChecks } from "lucide-react";
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
        <div className="py-5 bg-gradient-to-b w-full">
            <div className="flex items-end justify-between mb-10">
                <div className="max-w-2xl mx-auto text-center">
                    <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-default-300 text-default-950">Nos Agents</span>
                    <h2 className="text-4xl font-bold capitalize text-default-950 my-4"> Nos agents Cardre</h2>
                </div>
            </div>
            <ul role="list" className="mt-3 md:flex gap-x-3">
                {agents.map((agent, index) =>
                    <div key={index} className="m-2 space-y-2">
                        <div
                            className="group flex flex-col gap-1 rounded-lg p-5 text-gray"

                        >
                            <div style={{ width: "320px" }} className="group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                                <div className="z-10 h-full w-full overflow-hidden rounded-t-xl  border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                    <img src={agent.photo} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                                </div>
                                <div style={{ backgroundColor: "Gray", width: "70%" }} className="p-3 rounded-r-xl opacity-80 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100">
                                    <h1 className="text-lg font-bold text-white ">{agent.nom}</h1>
                                    <h2 className="text-m font-light text-gray-200 ">{agent.post}</h2>
                                </div>

                            </div>
                            <p className="pl-5 text-gray-700 hover:text-gray-900">
                                <a target="_blank" href={`/info/${agent.slug}`}>
                                    <span className="sr-only">LinkedIn</span>
                                    <LinkIcon className="w-4 h-4 inline-block" />
                                    &nbsp;<span className=" underline" style={{ fontSize: ".8em", fontStyle: "italic" }}>Apprendre plus</span>
                                </a>
                            </p>

                            <div
                                className="invisible h-auto max-h-0 p-5 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                            >

                                <p style={{ fontSize: ".9em" }} v-html="This is all about John"></p>
                            </div>
                        </div>
                    </div>
                )}
            </ul>
            {/* <Link href={"/agents"} className=" py-16 flex justify-center items-center">
                <Button>
                    <ListChecks className="mx-2" />
                    <span className=" text-xl">
                        Voir la list de tout nos agents
                    </span>
                    <ArrowRight className="h-4 w-6" />

                </Button>
            </Link> */}
        </div>
    );
}

export default Agents;