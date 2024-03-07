"use client"
import SkeletonLoader from "@/components/skeleton-loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import axios from "axios";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { ImageDropzone } from "./handle-upload";
import Loader from "@/components/loader";
import { useRouter } from "next/navigation";

const BlogForm = ({ initialContent }:any) => {
    const router = useRouter();
    const [image, setImage] = useState(initialContent?.image || "");
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState(initialContent?.title || "");
    const [description, setDescription] = useState(initialContent?.description || "");
    const [html_content, setHtmlContent] = useState(initialContent?.html_content || "");
    const [json_content, setJsonContent] = useState(initialContent?.json_content || "");
    const Editor = useMemo(
        () =>
            dynamic(() => import("@/components/editor"), {
                ssr: false,
                loading: () => (
                    <div className=" flex justify-center items-center">
                        Chargement ...
                        <SkeletonLoader r={1} />
                    </div>
                ),
            }),
        []
    );
    const onChange = (content:string, html:string) => {
        setJsonContent(content);
        setHtmlContent(html);
    };

    const onSave = async () => {
        const data = {
            image,
            title,
            description,
            html_content,
            json_content,
        };

        setLoading(true);

        if (initialContent) {
            await axios.put("/api/manage-blog", {
                _id: initialContent._id,
                ...data
            }).then(({ data }) => {
                router.push("/dashboard/blog/");
                setLoading(false);
            });
        }else{
            await axios.post("/api/manage-blog", data).then(({ data }) => {
                router.push("/dashboard/blog/");
                setLoading(false);
            });
        }
    };

    const onUpload = (url:string) => {
        setImage(url);
    };

    return (
        <ScrollArea className=" h-full">
            <div className=" flex mb-10 justify-center">
                <div className=" w-2/3 space-y-2">
                    <ImageDropzone onUpload={onUpload} />

                    <div>
                        <label>Titre du blog </label>
                        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ecrivez le titre du blog" />
                    </div>
                    <div className=" flex flex-col">
                        <label>Description du blog</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={5}
                            className="rounded-lg"
                            placeholder="Ecrivez la description du blog"
                        />
                    </div>
                    <div>
                        <label>Contenu du blog</label>
                        <ScrollArea className="py-3 border border-black rounded-lg h-screen">
                            <Editor onChange={onChange} initialContent={json_content} />
                        </ScrollArea>
                    </div>
                    <div className="border-t py-5">
                        <Button onClick={onSave} className="w-full">
                            {loading && <Loader />} Sauvegarder
                        </Button>
                    </div>
                </div>
            </div>
        </ScrollArea>
    );
};

export default BlogForm;
