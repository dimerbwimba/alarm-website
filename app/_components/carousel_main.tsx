"use client"
import Image from "next/image";
import Carousel from "./courousel";

const slides = [
    "https://i.ibb.co/1qfg6zJ/DSC-0834-compressed-1.jpg",
    "https://i.ibb.co/cknvsfg/Photo-6-group-work-compressed.jpg",
    "https://i.ibb.co/7V5DN97/DSC-0789-compressed.jpg",
    "https://i.ibb.co/Ld3YN09/DSC6247-compressed.jpg"

   
]

const CarouselMain = () => {
    return ( 
        <div className=" ">
            <Carousel>
                {
                    slides.map((slides)=>(
                      
                            <Image
                            key={slides}
                                src={slides}
                                alt="images"
                                width={300}
                                height={300}
                                 className="h-screen object-cover w-full "
                                />

                        
                    ))
                }
            </Carousel>
        </div>
     );
}
 
export default CarouselMain;