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
                <HeroWithBG image_url="https://i.ibb.co/y4TR8Fc/DSC-0834-compressed.jpg" span_title="Alarm RDC" title={`Les dernières ressources et publications de ALARM RDC`} />
            </div>
           <AnnualReport loading={loading} rapports={rapports} />
        </div>
    );
}

export default AnnualReportPage;