"use client"
import { SinglePartenaireProps } from "@/types"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"

const Partenaire = () => {
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

        <section id="partenaires" className="py-10 lg:py-20">
            <div className="container">
                <div className="max-w-2xl mx-auto text-center">
                    <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-default-400/50 text-default-950">Partenaires</span>
                    <h2 className="md:text-4xl/tight text-4xl font-medium text-default-950 my-5">Nos Partenaires </h2>
                    <p className="text-base font-medium mb-10">
                        {"La Vision D\'ALARM est fière de collaborer avec des partenaires qui partagent notre engagement envers la paix, la réconciliation et le développement communautaire en Afrique. Nous remercions chaleureusement nos partenaires pour leur soutien continu."}
                    </p>
                </div>

                    <div className="space-y-6">
                        <div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-10">
                            {data.map((partenaire:SinglePartenaireProps, index:number) => 
                            <div key={index} className=" p-5 group flex justify-center items-center rounded-xl border  bg-white">
                                <div>
                                    <Image
                                        src={partenaire.image}
                                        alt={partenaire.name}
                                        height={150}
                                        width={150}
                                        // layout="fill" // required
                                        objectFit="fill" // change to suit your needs
                                        className="rounded-md" // just an example
                                    />
                                </div>
                            </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partenaire;