

const valeur = [
    {
        description: "Nous sommes convaincus que sans le leadership pastoral fort , l\'Eglise Africaine restera superficielle, syncrétique et sans vraie transformation, sans croissance spirituelle et sans maturité."
    },
    {
        description: "Nous sommes engagés à renforcer les capacités des l\'Eglise Africaine, équiper les Pasteur et autres Leaders afin qu\'ils éduquent les autre en matière de la foi chrétienne pour la transformationde leurs communautés."
    },
    {
        description: "Nous focalisons sur l\'Eglise avec un coeur pour le Leadership Serviteur. l\'évangelisation et le discipolat au sein de l\'Eglise locale ; préparer le Peuple de Dieu à servir partout où il sera selon la grande Commission, Matthieu 28:18-20"
    },
    {
        description: "Nous Sommes engagés à oeuvrer pour le pardon, la Réconsiliation et la Transformation des vies. 2Cor 5,18-20 Matthieu 6:9-15"
    }
]


const ValeurFodamental = () => {
    return (

        // <!-- Start Services -->
        <section id="valeur_fondamentales" className="lg:py-20 py-10">
            <div className="container">
                <div className="flex items-end justify-between">
                    <div className="max-w-2xl mx-auto text-center">
                        <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-default-300 text-default-950">Valeurs</span>
                        <h2 className="text-4xl text-default-800 font-bold mt-5">
                            Nos Valeurs Fondamentales
                        </h2>
                        
                    </div>
                </div>
                    <hr className="my-6 border border-dashed text-default-800 hidden xl:block"/>
                {/* <!-- flex End--> */}
    
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
                    <div className="relative z-0">
                        <img src="https://i.ibb.co/1qfg6zJ/DSC-0834-compressed-1.jpg" className="rounded-md h-full w-full" alt=""/>
                        <div className="absolute inset-0 rounded-md bg-black/40"></div>
                    </div>
                    {/* <!-- col End--> */}
    
                    <div className="lg:-ms-20 z-20">
                        <div className="divide-y divide-default-200 bg-default-50 rounded-md shadow">
                           { valeur.map((item, index)=> 
                           <div key={index} className="p-6 flex flex-wrap sm:flex-nowrap items-center gap-6">
                                <div>
                                    <div className="h-12 w-12 rounded-md flex items-center justify-center transition-all duration-500 text-xl border border-yellow-700 bg-yellow-700 text-default-950 hover:text-primary text-white ">0{index+1}</div>
                                </div>
                                <div>
                                    <p className="text-base font-medium text-default-800 mt-3"> {item.description}</p>
                                </div>
                            </div>)}
                         
                        </div>
                    </div>
                    {/* <!-- col End--> */}
                </div>
                {/* <!-- grid End--> */}
            </div>
            {/* <!-- container End--> */}
        </section>


        // <div className="py-5" id="valeur_fondamentales">
        //     <div className="mx-auto p-3 max-w-3xl lg:text-center">
        //         <h2 className="text-base font-semibold leading-7 text-green-600">ALARM RDC</h2>
        //         <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        //             Nos Valeurs Fondamentales
        //         </p>
        //     </div>
        //     <div className=" md:px-64 ">
        //         <div className=" py-4 grid grid-cols-1 md:grid-cols-2 gap-6 px-2 mx-auto">
        //             {valeur.map((item, index) => (
        //                 <div key={index} className="shadow p-5 rounded-lg border-t-4 border-yellow-800 bg-white">

        //                     <div className="mt-8">
        //                         <ul className="grid grid-cols-1 gap-4">
        //                             <li className="inline-flex items-center text-gray-600">
        //                                 {item.description}
        //                             </li>

        //                         </ul>
        //                     </div>
        //                 </div>

        //             ))
        //             }
        //         </div>

        //     </div>
        // </div>
    );
}

export default ValeurFodamental;