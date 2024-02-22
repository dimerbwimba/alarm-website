import { useEdgeStore } from "@/lib/edgestore";
import axios from "axios";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const Images = () => {
    const [images, setImages] = useState([])
    const { edgestore } = useEdgeStore();
    const getImages = async () => {
        await axios.get("/api/upload-hero-images").then(({data})=>{
            if (!data.error) {      
                setImages(data.images)
            }
        })
    }
    const deleteImage =async (_id:string, url:string)=>{
        const updatedData = images.filter((item:{_id:string}) => item._id !== _id);
        setImages(updatedData);
        await axios.delete(`/api/upload-hero-images?Id=${_id}`)
        await edgestore.publicFiles.delete({
            url: url,
        });


        // alert("image delete")
    }
    useEffect(()=>{
        getImages()
    },[])
    return (
        <div className="grid py-2 grid-cols-[repeat(1,1fr)] gap-2 sm:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(4,1fr)]">
            {images.map((image:{url:string, _id:string}, index) => <div key={index}
                className={' relative  aspect-square h-full'}
            >   
                <img
                    className="h-full w-full border-dashed border-2  rounded-md object-cover"
                    src={image.url}
                    alt={"Alarm images"}
                />
                 <div
                  className="group absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 transform"
                  onClick={async (e)  =>  {
                    e.stopPropagation();
                    deleteImage(image._id, image.url)  ;
                  }}
                >
                  <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border border-solid border-gray-500 bg-white transition-all duration-300 hover:h-6 hover:w-6 dark:border-gray-400 dark:bg-black">
                    <X
                      className="text-gray-500 dark:text-gray-400"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
                {/* <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-md bg-black bg-opacity-70">
                    hello
                </div> */}
            </div>)}
        </div>
    );
}

export default Images;