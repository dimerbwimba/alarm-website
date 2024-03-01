"use client"
import { SinglePartenaireProps } from "@/types";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const MarqSection = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const onGetPartenaires = async () => {
        await axios.get("/api/public/partenaires").then(({ data }) => {
            if (!data.error) {
                setLoading(false)
                setData(data.partenaires)
            }
        })
    }

    useEffect(() => {
        onGetPartenaires()
    }, [])

    if (loading) {
        return (
            <div className=" w-full my-10 bg-gray-400">

            </div>
        )
    }
    return (
        <section className=" w-screen">
            <div className="relative gap-28 m-auto flex overflow-hidden border border-default-200 py-2">
                    <Marquee pauseOnHover speed={30}>
                <div className="  gap-2 flex items-center justify-around flex-shrink-0 min-w-full">
                        {data.map((partenaire: SinglePartenaireProps, index: number) => <div key={index} className="py-2">
                            <div className=" mx-10">
                                <Image
                                    src={partenaire.image}
                                    alt={partenaire.name}
                                    height={120}
                                    width={120}
                                    // layout="fill" // required
                                    objectFit="fill" // change to suit your needs
                                    className="rounded-md" // just an example
                                />

                            </div>
                        </div>)}
                </div>
                    </Marquee>

            </div>
            {/* <!-- flex End --> */}
        </section>
        // <!-- End marq Section -->
    );
}

export default MarqSection;