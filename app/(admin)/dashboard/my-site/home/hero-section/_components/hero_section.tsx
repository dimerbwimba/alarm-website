"use client"
import { addHeroSection, getSections } from "@/app/redux/slice/hero-section-slice";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import Section from "./section";
import axios from "axios";
import { useEffect } from "react";
import { MultiImageDropzoneUsage } from "./image_uploader";
import Images from "./images";
import { Separator } from "@/components/ui/separator";

const HeroSection = () => {
  const dispatch = useDispatch()
  const heroSection = useSelector((state: any) => state.heroSection)
  const onSubmit = async () => {
    dispatch(addHeroSection({

    }))
  }

  const getHeroSections = async()=>{
    await axios.get("/api/manage-hero-section").then(({data})=>{
      if (!data.error) {
        dispatch(getSections(data.sections))
      }
    })
  }

  useEffect(()=>{
    getHeroSections()
  },[])
  return (
    <div className=" p-5">
      <MultiImageDropzoneUsage/>
      <Separator className="my-5"/>
       <Images/>
      {heroSection.map((section:any, index:any) =>(
        <Section key={index} section={section} />

      ))}
      <Button onClick={onSubmit} className="w-full border-dashed border-2  space-x-2 " variant={"ghost"}>
        <><PlusCircle className=" w-4 h-4" /> <span>Cree une nouvel section slider</span></>
      </Button>

    </div>
  );
}

export default HeroSection;