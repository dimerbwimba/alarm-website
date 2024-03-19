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

        <section  className="w-full py-10 lg:py-20 bg-cover bg-center" style={{ height: "100%", backgroundImage: "url(/bg-2.png)" }} id="partenaires">
            <div className="container">
                <div className="max-w-2xl mx-auto text-center">
                    <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-default-400/50 text-default-950">Partenaires</span>
                    <h2 className="md:text-4xl/tight text-4xl font-medium text-default-950 my-5">Nos Partenaires </h2>
                </div>

                    <div className="space-y-6">
                        <div>
                <div className="grid lg:grid-cols-2 grid-cols-1 mt-10">
                            {data.map((partenaire:SinglePartenaireProps, index:number) => 
                            <div key={index} className=" group flex justify-center items-center p-10 hover:bg-gray-100 ease-in-out transition duration-500 border  bg-white">
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