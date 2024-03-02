import { Check, Component, HandHelping, Layers, LayoutGrid, TrendingUp } from "lucide-react";

const CentreDinterer = () => {
    return (

        // <!-- Start Services -->
        <section id="centre_interet" className="">
            <div className="p-5 md:p-20 relative bg-yellow-700  py-20">
                {/* <!-- flex End--> */}
                <div className="max-w-2xl  mx-auto text-center">
                    <div className=" my-4 relative border rounded-xl bg-white shadow text-start p-3">
                        <div className=" ">
                            <span className="rounded-xl border bg-white px-2 py-1 absolute -top-3"> ⭐⭐⭐⭐⭐</span>
                        </div>
                        <h2 className="capitalize text-default-950 my-4">
                            ALARM est une organisation passionnée qui croit en la puissance de la réconciliation pour bâtir des communautés fortes et durables en République Démocratique du Congo (RDC). Notre engagement envers le développement local et la paix communautaire guide chacune de nos actions.
                        </h2>
                    </div>
                </div>
                <div className="flex items-end justify-between mb-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <span className="py-1 px-3 rounded-md bg-white text-xs font-medium uppercase tracking-wider border border-default-300 text-default-950">Strategie</span>
                        <h2 className="text-4xl font-bold capitalize text-gray-50 my-4"> Centre D&apos;interet Strategique</h2>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 shadow-xl items-center rounded-md overflow-hidden bg-default-100 dark:bg-default-50 divide-y lg:divide-y-0 lg:divide-x divide-default-200">
                    <div className="group">
                        <div className="sm:p-10 p-8">  
                            <div className=" flex justify-center">
                                <img className=" h-20" src="/svg-1.svg"></img>
                            </div>
                            <h2 className="text-2xl text-default-950 font-medium mb-4 mt-8">Réconcilier les relations</h2>
                        </div>
                    </div>
                    {/* <!-- end col --> */}

                    <div className="group">

                        <div className="sm:p-10 p-8">
                            <div className=" flex justify-center">
                                <img className=" h-20" src="/svg-5.svg"></img>
                            </div>
                            <h2 className="text-2xl text-default-950 font-medium mb-4 mt-8">Developper les Leaders Serviteurs</h2>

                        </div>
                    </div>
                    {/* <!-- end col --> */}

                    <div className="group">
                        <div className="sm:p-10 p-8">
                            <div className=" flex justify-center">
                                <img className=" h-20" src="/svg-4.svg"></img>
                            </div>
                            <h2 className="text-2xl text-default-950 font-medium mb-4 mt-8">Tranformer les communautés</h2>

                        </div>
                    </div>
                    {/* <!-- end col --> */}
                </div>
                {/* <!-- grid End--> */}
            </div>
            {/* <!-- container End--> */}
        </section>
    );
}

export default CentreDinterer;