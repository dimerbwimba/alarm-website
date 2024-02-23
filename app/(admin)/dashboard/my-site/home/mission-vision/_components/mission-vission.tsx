import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { MissionVisionProps } from "@/types";
import axios from "axios";
import { useState } from "react";

const MissionVision = ({section}:any) => {
    
    const [title, setTitle] = useState(section.title || "");
    const [title_description, setDescriptionTitle] = useState(section.title_description || "");
    const [mission_title, setMissionTitle] = useState(section.mission_title || "");
    const [mission_description, setMissionDescription] = useState(section.mission_description || "");
    const [vision_title, setVisionTitle] = useState(section.vision_title || "");
    const [vision_description, setVisionDescription] = useState(section.vision_description || "");
    const { toast } = useToast()
    const onSubmit = async () => {
        if (!section._id) {
            await axios
              .post("/api/manage-mission-vision", {
                title,
                title_description,
                mission_title,
                mission_description,
                vision_title,
                vision_description
              })
              .then(({ data }) => {
                toast({
                  variant: "default",
                  title: "vous avez modifié la section avec success",
                  description: data.message,
              });
              })
              .catch((error) => {
              toast({
                  variant: "destructive",
                  title: "Seomething went wrong on the server",
                  description: error.message,
              });
            })
        }
    }
    return (
        <div>
            <div id="mission_vision" className=" w-full ">
                <div className="relative flex min-h-screen flex-col justify-center overflow-hidden">
                    <div className="w-full mx-auto max-w-screen-lg">
                        <div className="group grid w-full grid-cols-1 sm:grid-cols-2">

                            <div className="p-12 bg-gray-50" >
                                <h2 className="text-3xl sm:text-5xl text-black font-medium mb-6">{title}</h2>
                                <p className="mb-6 text-gray-800">
                                    {title_description}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 justify-between mb-3">
                                    <a href="" className="items-center gap-3 hover:text-blue-300">
                                        <span className="h-10 w-10 rounded-full bg-blue-300 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                        </span>
                                        <span className="font-semibold text-black text-xl">{mission_title}</span>
                                        <p className="mb-6 text-gray-800">
                                            {mission_description}
                                        </p>
                                    </a>
                                    <a href="" className=" items-center gap-3 hover:text-blue-300">
                                        <span className="h-10 w-10 rounded-full bg-blue-300 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                        </span>
                                        <span className="font-semibold text-black text-xl">{vision_title}</span>
                                        <p className="mb-6 text-gray-800">
                                           {vision_description}
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="">
                                    <div className="border-dashed border-2 p-6 mx-6 rounded-md h-full space-y-2">
                                        <div>
                                            <label className="text-black">{"L'en-tête "}</label>
                                            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                                        </div>
                                        <div>
                                            <label className="text-black">{"La description"}</label>
                                            <Input value={title_description} onChange={(e) => setDescriptionTitle(e.target.value)} />
                                        </div>
                                        <div>
                                            <label className="text-black">{"L'en-tête de la mission  "}</label>
                                            <Input value={mission_title} onChange={(e) => setMissionTitle(e.target.value)} />
                                        </div>
                                        <div>
                                            <label className="text-black">{"Description de la Mission d\'ALARM"}</label>
                                            <Input value={mission_description} onChange={(e) => setMissionDescription(e.target.value)} />
                                        </div>
                                        <div>
                                            <label className="text-black">{"L'en-tête de la mission  "}</label>
                                            <Input value={vision_title} onChange={(e) => setVisionTitle(e.target.value)} />
                                        </div>
                                        <div>
                                            <label className="text-black">{"Description de la Vision d\'ALARM"}</label>
                                            <Input value={vision_description} onChange={(e) => setVisionDescription(e.target.value)} />
                                        </div>
                                        <Button onClick={onSubmit} className="w-full" variant={"default"}>
                                            {!section._id ? "Sauvegarder" : "Modifier"}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MissionVision;