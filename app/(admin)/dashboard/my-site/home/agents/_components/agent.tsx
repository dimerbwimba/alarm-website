import { Input } from "@/components/ui/input";
import { AgentListProps, AgentProps } from "@/types";
import { Edit, FolderCheck, LinkIcon, MailCheck } from "lucide-react";
import { useState } from "react";
import AgentImageUploader from "./image-uploader";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

const SingelAgent = ({ agent }: AgentProps) => {
    const [name, setName] = useState(agent.name || "")
    const [image, setImage] = useState(agent.image || "")
    const [email, setEmail] = useState(agent.email || "")
    const [fonction, setFonction] = useState(agent.fonction || "")
    const [type_agent, setTypeAgent] = useState(agent.type_agent || "")
    const [loading, setLoading] = useState(false)
    const [modifier, setModifier] = useState(false)
    const { toast } = useToast()
    const handleAgentSelection = (agentType: string) => {
        setTypeAgent(agentType);
    };
    const imageUploaded = (url: string) => {
        setImage(url)
    }

    const onSave = async () => {

        if (!agent._id) {
            const data = {
                name,
                image,
                email,
                fonction,
                type_agent
            }

            try {
                setLoading(true)
                await axios.post("/api/manage-agent", { ...data }).then(({ data }) => {
                    if (!data.error) {
                        toast({
                            variant: "default",
                            type: "foreground",
                            title: "Agent ajouté avec succès",
                            description: data.message
                        })
                        window.location.reload()
                        setLoading(false)
                    }
                })
            } catch (error: any) {

                toast({
                    variant: "default",
                    type: "foreground",
                    title: "Something Wrong happen on the server",
                    description: error.message
                })
            }
        } else {
            const data = {
                _id: agent._id,
                name,
                image,
                email,
                fonction,
                type_agent
            }

            try {
                setLoading(true)
                await axios.put("/api/manage-agent", { ...data }).then(({ data }) => {
                    if (!data.error) {
                        toast({
                            variant: "default",
                            type: "foreground",
                            title: "L\'Agent a été modifié avec succès ",
                            description: data.message
                        })
                        setLoading(false)
                    }
                })
            } catch (error: any) {
                toast({
                    variant: "default",
                    type: "foreground",
                    title: "Something Wrong happen on the server",
                    description: error.message
                })
            }
        }
    }

    return (
        <div id={agent._id}>
            <div className="relative flex my-5 flex-col justify-center overflow-hidden">
                <div className="w-full mx-auto max-w-screen-lg">
                    <div className="group grid w-full grid-cols-1 sm:grid-cols-2">
                        <div className="group flex flex-col gap-1 m-5 rounded-lg p-5 bg-gray-50 text-gray">
                            <div style={{ width: "320px" }} className="group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                                <div className="z-10 h-full w-full overflow-hidden rounded-t-xl  border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                    <img src={image} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                                </div>
                                <div style={{ backgroundColor: "Gray", width: "70%" }} className="p-3 rounded-r-xl opacity-80 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100">
                                    <h1 className="text-lg font-bold text-white ">{name || "..."}</h1>
                                    <h2 className="text-m font-light text-gray-200 ">{fonction || "..."}</h2>
                                </div>

                            </div>
                            <p className="pl-5 text-center text-gray-700 hover:text-gray-900">
                                <a target="_blank" >
                                    <FolderCheck className="w-4 h-4 mx-2 inline-block" />
                                    <span className=" text-sm">Type D&apos;agent : </span>
                                    &nbsp;<span className=" underline" style={{ fontSize: ".8em", fontStyle: "italic" }}>{type_agent || "..."}</span>
                                </a>
                            </p>
                            <p className="pl-5 text-center text-gray-700 hover:text-gray-900">
                                <a target="_blank" >
                                    <MailCheck className="w-4 h-4 mx-2 inline-block" />
                                    <span className=" text-sm">Email : </span>
                                    &nbsp;<span className=" underline" style={{ fontSize: ".8em", fontStyle: "italic" }}>{email || "..."}</span>
                                </a>
                            </p>
                        </div>
                        <div className="rounded-lg relative border-dashed border-2 space-y-3">
                            <div className="mx-5 p-5">
                                <div>
                                    <AgentImageUploader _id={""} image={image} onUpload={imageUploaded} />
                                </div>
                                <div className=" border-b py-1">
                                    <label className=" text-black my-1">{"Type d\'agent"}</label>
                                    <div className=" my-1 space-x-3">
                                        <span
                                            className={`agent-option text-sm cursor-pointer border p-1 rounded-lg text-black ${type_agent === 'agent-cadre' ? 'border-2 border-yellow-700' : ''}`}
                                            onClick={() => handleAgentSelection('agent-cadre')}
                                        >
                                            Agent Cadre
                                        </span>
                                        <span
                                            className={`agent-option  text-sm cursor-pointer border p-1 rounded-lg text-black ${type_agent === 'agent-auxiliaire' ? 'border-2 border-yellow-700' : ''}`}
                                            onClick={() => handleAgentSelection('agent-auxiliaire')}
                                        >
                                            Agent Auxiliaire
                                        </span>
                                        <span
                                            className={`agent-option  text-sm cursor-pointer border p-1 rounded-lg text-black ${type_agent === 'agent-simple' ? 'border-2 border-yellow-700' : ''}`}
                                            onClick={() => handleAgentSelection('agent-simple')}
                                        >
                                            Agent Simple
                                        </span>
                                    </div>
                                </div>
                                <div className="">
                                    <label className=" text-black my-1">{"Nom complet de  l\'agent"}</label>
                                    <Input value={name} placeholder="Ex: Bwimba Mihandago Dimer" onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="">
                                    <label className=" text-black my-1">{"Address Mail de  l\'agent"}</label>
                                    <Input value={email} placeholder="Ex: dimer191996@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="">
                                    <label className=" text-black my-1">{"Fonction  l\'agent"}</label>
                                    <Input value={fonction} placeholder="Ex: informaticien" onChange={(e) => setFonction(e.target.value)} />
                                </div>



                                <div className="my-4">
                                    <Button onClick={onSave} disabled={image && email && image && fonction && type_agent && !loading ? false : true} className=" w-full">
                                        {!agent._id ? "Sauvegarder l\'agent" : "Modifier l\'agent"}
                                        {loading && <div className="px-2">
                                            <svg className="animate-spin spine -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>

                                        </div>}


                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default SingelAgent;