"use client"
import { ScrollArea } from "@/components/ui/scroll-area";
import { checkObjectIsEmpty, formatDate } from "@/lib/utils";
import { Archive, MenuIcon, Trash } from "lucide-react";
import { useSelector } from "react-redux";

const MessagePreview = () => {
    const mail = useSelector((state: any) => state.mailView)
    return (
        <div>
            {
                checkObjectIsEmpty(mail) ?
                    <div className="h-full">
                        <div className="flex justify-center items-center h-[70vh] ">
                            <img height={200} width={200} src="/empty-inbox.svg" />
                        </div>
                    </div>
                    :
                    <div>
                        <div className=" w-full  border-b font-bold text-black">
                            <div className="px-3 py-2 border-b  flex justify-between">
                                <div>
                                    <div className=" flex">
                                        <ul className=" flex space-x-3 text-sm">
                                            <li className="px-1 flex items-center space-x-1 font-normal bg-red-700 text-white rounded border">
                                                <Trash className="w-3 h-3" />    <span>supprimer</span>
                                            </li>
                                            <li className="px-1 flex items-center space-x-1 font-normal rounded border bg-green-700 text-white">
                                                <Archive className=" w-3 h-3" /> <span>archive</span>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <MenuIcon />
                                </div>

                            </div>
                        </div>
                        <div className="py-5 px-6 border-b">
                            <div className=" flex justify-between ">
                                <div>
                                    <div>
                                        <h1 className=" text-md font-bold text-black">{mail.from}</h1>
                                        <h2 className=" text-xs">{mail.subject}</h2>
                                        <span className=" text-xs">Reply-To: {mail.mail}</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className=" text-sm">{formatDate(mail.createdAt)}</h3>
                                </div>
                            </div>

                        </div>
                        <div className=" h-screen">
                            <ScrollArea className="h-[66%]">
                               <div className="p-5">
                                    {mail.body}

                               </div>
                               
                            </ScrollArea>
                        </div>
                    </div>

            }

        </div>
    );
}

export default MessagePreview;