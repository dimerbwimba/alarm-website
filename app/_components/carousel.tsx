import { ChevronLeftCircleIcon, LucideChevronsLeft, LucideChevronsRight } from 'lucide-react';
import React, { useState } from 'react';

interface ItemProps {
  description:string
}

const Carousel = ({ items }:any) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 2));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1,  0));
  };

  return (
    <div className="relative py-10 overflow-hidden">
      <div className="flex items-center transition-transform duration-500 " style={{ transform: `translateX(-${startIndex * 33.33}%)` }}>
        {items.map((item:ItemProps, index:number) => (
          <div key={index} className={`w-1/3 text-center px-10 flex-shrink-0 ${index === startIndex + 1 ? 'border ease-in-out -translate-y-3  h-80 font-bold flex items-center text-center duration-500 rounded-md shadow-lg bg-yellow-700 text-white text-md ' : ''}`}>
            {item.description}
          </div>
        ))}
      </div>
      <button className="absolute top-1/2 transform -translate-y-1/2 left-0" onClick={handlePrev}>
        <div className=" border p-2  h-10 w-10 bg-yellow-700 text-white rounded-full">
            <LucideChevronsLeft/>    
        </div>
      </button>
      <button className="absolute top-1/2 transform -translate-y-1/2 right-0" onClick={handleNext}>
      <div className=" border p-2  h-10 w-10 bg-yellow-700 text-white rounded-full">
            <LucideChevronsRight/>    
        </div>
      </button>
    </div>
  );
};

export default Carousel;
