"use client"
import { addHeroSection, getSections } from "@/app/redux/slice/hero-section-slice";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import Section from "./section";
import axios from "axios";
import { useEffect, useState } from "react";
import { MultiImageDropzoneUsage } from "./image_uploader";
import Images from "./images";
import { Separator } from "@/components/ui/separator";
import SkeletonLoader from "@/components/skeleton-loader";
import BreadCrumb from "@/components/breadcrumb";

const breadcrumbItems = [
  { title: "Gérer mon site", link: "/dashboard/my-site" },
  { title: "Page D'acceuille", link: "/dashboard/my-site/home" },
  {
    title: "Hero Section", link: "/dashboard/my-site/home/hero-section"
  }];

const HeroSection = () => {
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const heroSection = useSelector((state: any) => state.heroSection)
  const onSubmit = async () => {
    dispatch(addHeroSection({

    }))
  }

  const getHeroSections = async () => {
    try {
      await axios.get("/api/manage-hero-section").then(({ data }) => {
        if (!data.error) {
          dispatch(getSections(data.sections))
        }
      })
    } catch (error: any) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getHeroSections()
  }, [])

  if (!heroSection.length) {
    return (
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
       
        <div className=" py-1">
          <div className=" text-black">{!error ? "Loading..." :
            <span className=" p-1 bg-red-600 text-white rounded">{error}</span>}</div>

        </div>
        <SkeletonLoader r={1} />
      </div>
    )
  }
  return (
    <div className=" p-5">
      <MultiImageDropzoneUsage />
      <Separator className="my-5" />
      <Images />
      {heroSection.map((section: any, index: any) => (
        <Section key={index} section={section} />

      ))}
      <Button onClick={onSubmit} className="w-full border-dashed border-2  space-x-2 " variant={"ghost"}>
        <><PlusCircle className=" w-4 h-4" /> <span>Cree une nouvel section slider</span></>
      </Button>

    </div>
  );
}

export default HeroSection;