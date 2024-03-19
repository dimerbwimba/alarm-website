"use client"
import HeroWithBG from "@/app/_components/hero_bg";
import { SingleRapport } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import AnnualReport from "./_component/annual-repport";

const AnnualReportPage = () => {
    const [rapports, setRapports] = useState<[]>()
    const [loading, setLoading] = useState(true)
    const getReports = async () => {

        await axios.get("/api/public/rapports").then(({ data }) => {
            setRapports(data.rapports)
            setLoading(false)
        })
    }

    useEffect(() => {
        getReports()
    }, [])

    return (
        <div className="">
            <div className="w-full ">
                <HeroWithBG image_url="https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/8e066f2f-1765-4e0e-8b49-90850c59c138.JPG" span_title="Alarm RDC" title={`Les dernières ressources et publications de ALARM RDC`} />
            </div>
           <AnnualReport loading={loading} rapports={rapports} />
        </div>
    );
}

export default AnnualReportPage;