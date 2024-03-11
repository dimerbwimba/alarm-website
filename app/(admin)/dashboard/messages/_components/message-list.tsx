"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMails as getMailsAction } from "@/app/redux/slice/mail-slice";
import { Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Message from "./message";
import Loader from "@/components/loader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MessageList = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const mails = useSelector((state:any) => state.mails);
    const filteredMails = filterMails(mails, searchQuery);

    useEffect(() => {
        fetchMails();
    }, []);

    const fetchMails = async () => {
        try {
            const { data } = await axios.get("/api/manage-mail");
            dispatch(getMailsAction(data));
        } catch (error) {
            console.error("Error fetching mails:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearchInputChange = (e:any) => {
        setSearchQuery(e.target.value);
    };

    return (
        <Tabs defaultValue="tout_le_courrier" className="w-full border-b font-bold text-black">
            <div className="px-3 py-1 border-b flex items-center justify-between">
                <div>Boîte de réception</div>
                <TabsList className="px-2 h-8 border">
                    <TabsTrigger className=" text-xs px-2 py-1" value="tout_le_courrier">Tout le courrier</TabsTrigger>
                    <TabsTrigger className=" text-xs px-2 py-1" value="non_lu">Non lu</TabsTrigger>
                </TabsList>
            </div>
            <div className="py-4 px-3 relative shadow">
                <input
                    placeholder="Recherche"
                    className="focus:border-none font-normal focus:ring-1 focus:ring-gray-400 pl-8 w-full rounded-md h-8"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
                <div className="absolute top-[38%] left-[20px]">
                    <Search className="w-4 h-4 text-gray-400" />
                </div>
            </div>
           
                <TabsContent value="tout_le_courrier">
                <div className="h-screen">
                    <ScrollArea className="h-[68%]">
                    {
                                filteredMails.length === 0 ? 
                                <div className="flex justify-center">
                                    <div className=" flex flex-col justify-center items-center">
                                        <h2 className=" font-normal text-sm text-center">Aucun message trouver</h2>
                                        <img src="/empty-box.svg" width={100} height={100 } />
                                    </div>
                                   
                                </div>:""
                            }
                        <div className="space-y-3 py-2">
                            {filteredMails.map((mail:any, index:number) => (
                                <Message key={index} mail={mail} />
                            ))}
                        </div>
                    </ScrollArea>
                </div>
                </TabsContent>
                <TabsContent value="non_lu">
                    <div className="h-screen">
                        <ScrollArea className="h-[68%]">
                            {
                                filteredMails.filter((mail:any) => !mail.read).length === 0 ? 
                                <div className="flex justify-center">
                                    <div className=" flex flex-col justify-center items-center">
                                        <h2 className=" font-normal text-sm text-center">Aucun message non lu</h2>
                                        <img src="/empty-box.svg" width={100} height={100 } />
                                    </div>
                                   
                                </div>:""
                            }
                            <div className="space-y-3 py-2">
                                {filteredMails
                                    .filter((mail:any) => !mail.read)
                                    .map((mail:any, index:number) => (
                                        <Message key={index} mail={mail} />
                                    ))}
                            </div>
                        </ScrollArea>
                    </div>
                </TabsContent>
           
        </Tabs>
    );
};

const filterMails = (mails:any, searchQuery:string) => {
    return mails.filter((mail:any) =>
        mail.from.toLowerCase().includes(searchQuery.toLowerCase())
    );
};

export default MessageList;
