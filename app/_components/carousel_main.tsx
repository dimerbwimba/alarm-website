"use client"
import Image from "next/image";
import Carousel from "./courousel";

const slides = [
    "https://i.ibb.co/LNDK2G8/chidren-happy.jpg",
    "https://i.ibb.co/17Ds3cs/Car-Rental-Coverage.jpg",
    "https://i.ibb.co/HqL172k/pexels-rdne-stock-project-8231095.jpg",
    "https://i.ibb.co/4m6bPzp/pexels-pau-delgado-18044310-compressed.jpg",
]

const CarouselMain = () => {
    return ( 
        <div className=" ">
            <Carousel>
                {
                    slides.map((slides)=>(
                      
                            <Image
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