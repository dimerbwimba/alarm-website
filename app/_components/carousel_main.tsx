"use client"
import Image from "next/image";
import Carousel from "./courousel";

const slides = [
    "https://i.ibb.co/LNDK2G8/chidren-happy.jpg",
    "https://i.ibb.co/LNDK2G8/chidren-happy.jpg",
    "https://i.ibb.co/LNDK2G8/chidren-happy.jpg",

   
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