import { Button } from "@/components/ui/button";
import { ArrowLeftCircle, ArrowRight, Component, HandHeart, Image, Layers, LayoutGrid, TrendingUp, WholeWord } from "lucide-react";

const Agents = () => {
    return (
        <div className="py-5">
            <div className="flex items-end justify-between mb-10">
                <div className="max-w-2xl mx-auto text-center">
                    <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-default-300 text-default-950">Nos Agents</span>
                    <h2 className="text-4xl font-bold capitalize text-default-950 my-4"> Nos agents Cardre</h2>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-2 items-center rounded-md overflow-hidden">
                <div className="group ">
                    <div className="w-64 h-64 border rounded-t-lg overflow-hidden">
                        <img src="https://i.ibb.co/CKZWwDQ/agent-1-compressed.jpg" className=" object-cover " />
                    </div>
                    <div className="w-64 bg-yellow-700 text-white shadow border px-2  rounded-b-lg ">

                        <div className=" font-bold text-lg">
                           NZABONIMPA SEZIBERA Apollinaire
                        </div>
                        <div className=" py-2">
                            Directeur National
                        </div>
                        <div className=" py-4">
                            <Button variant={"ghost"} className=" font-bold text-gray-100 space-x-2" >
                                <span>Apprendre Plus</span>
                                <ArrowRight className="w-4 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
                {/* <!-- end col --> */}
                <div className="group">
                    <div className=" w-64 h-64 border rounded-t-lg overflow-hidden">
                        <img src="https://i.ibb.co/J7zFNXf/agent-2-compressed.jpg" className=" object-cover " />
                    </div>

                    <div className="w-64 bg-yellow-700 text-white shadow border px-2  rounded-b-lg ">

                    <div className=" font-bold text-lg">
                        BANGAMWABO NYANDWI JULES
                    </div>
                    <div className="">
                        Assistant Administratif et Comptable
                    </div>
                    <div className=" py-4">
                        <Button variant={"ghost"} className=" font-bold text-gray-100 space-x-2" >
                            <span>Apprendre Plus</span>
                            <ArrowRight className="w-4 h-5" />
                        </Button>
                    </div>
                    </div>
                </div>
                {/* <!-- end col --> */}

                <div className="group">
                    <div className=" w-64 h-64 items-center flex justify-center border rounded-lg overflow-hidden">
                        <Image className="h-10 w-10" />
                    </div>
                    <div className="w-64 bg-yellow-700 text-white shadow border px-2  rounded-b-lg ">

                        <div className=" font-bold text-lg">
                       Me. Daniel KILANGALANGA Opondjo
                        </div>
                        <div className=" py-2">
                            Coordinateur de Peace Building
                        </div>
                        <div className=" py-4">
                            <Button variant={"ghost"} className=" font-bold text-gray-100 space-x-2" >
                                <span>Apprendre Plus</span>
                                <ArrowRight className="w-4 h-5" />
                            </Button>
                        </div>
                        </div>
                    </div>
                {/* <!-- end col --> */}
            </div>
            <div className="">
                <a>
                    Voir la list de tout nos agents
                </a>
            </div>
        </div>
    );
}

export default Agents;