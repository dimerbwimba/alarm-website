import Carousel from "./carousel";


const valeurs = [
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
        <div className="w-full bg-cover bg-center" style={{ height: "100%", backgroundImage: "url(/bg-2.png)" }}>

            <section id="valeur_fondamentales" className="lg:py-20 py-10 hidden lg:flex flex-col justify-center items-center border-b">
                <div className="container">
                    <div className="flex items-end justify-between">
                        <div className="max-w-2xl mx-auto text-center">
                            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-default-300 text-default-950">Valeurs</span>
                            <h2 className="text-4xl text-default-800 font-bold mt-5">
                                Nos Valeurs Fondamentales
                            </h2>
                        </div>
                    </div>
                    <hr className="my-6 border border-dashed text-default-800 hidden xl:block" />
                    {/* <!-- flex End--> */}


                    {/* <!-- grid End--> */}
                </div>
                <div className=" grid grid-cols-12">
                    <div className=" col-span-2"></div>
                    <div className=" col-span-8">
                        <Carousel items={valeurs} />

                    </div>
                    <div className=" col-span-2"></div>
                </div>
                {/* <!-- container End--> */}
            </section>

            <section className=" lg:hidden flex">
            <div className=" items-center flex flex-col justify-center text-center p-5 space-y-3 transition-transform duration-500 " >
                    <div className="flex items-end justify-between">
                        <div className="max-w-2xl mx-auto text-center">
                            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-default-300 text-default-950">Valeurs</span>
                            <h2 className="text-4xl text-default-800 font-bold mt-5">
                                Nos Valeurs Fondamentales
                            </h2>
                        </div>
                    </div>
                
                {valeurs.map((item:any, index:number) => (
                    <div key={index} className={` text-white rounded-lg py-5 bg-yellow-700  text-center px-10 flex-shrink-0 `}>
                        {item.description}
                    </div>
                ))}
      </div>
            </section>
        </div>


    );
}

export default ValeurFodamental;