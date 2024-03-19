import HeroWithBG from "@/app/_components/hero_bg";

const ValeurFondamentale = () => {
    return (
        <div>
            <div className=" flex justify-center">
                <HeroWithBG image_url="https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/8e066f2f-1765-4e0e-8b49-90850c59c138.JPG" title="Nos Valeurs Fondamentales " span_title="Valeurs" />
            </div>
            <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
                <h2 className="mb-6 text-xl font-bold border-b text-gray-900">Nos Valeurs Fondamentales</h2>
                <div className="w-full">
                    <div className="md:flex flex-row w-full mb-10 sm:flex-row">
                        <div className="md:w-1/2">
                            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                                <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                                    <p className="mb-2 text-xl text-gray-600">
                                        Nous Sommes engagés à oeuvrer pour le pardon, la Réconsiliation et la Transformation des vies. 2Cor 5,18-20 Matthieu 6:9-15
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" md:w-1/2">
                            <div className="relative h-full ml-0 md:mr-10">
                                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                                <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">

                                    <p className="mb-2 text-xl text-gray-600">
                                        Nous focalisons sur l&lsquo;Eglise avec un coeur pour le Leadership Serviteur. l&lsquo;évangelisation et le discipolat au sein de l&lsquo;Eglise locale ; préparer le Peuple de Dieu à servir partout où il sera selon la grande Commission, Matthieu 28:18-20
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex flex-row w-full mb-5 sm:flex-row">
                        <div className="mb-0 md:w-1/2">
                            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                    <p className="mb-2 text-xl text-gray-600">
                                        Nous focalisons sur l&lsquo;Eglise avec un coeur pour le Leadership Serviteur. l&lsquo;évangelisation et le discipolat au sein de l&lsquo;Eglise locale ; préparer le Peuple de Dieu à servir partout où il sera selon la grande Commission, Matthieu 28:18-20

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-0 md:w-1/2">
                            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                                <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">

                                    <p className="mb-2 text-xl text-gray-600">
                                        Nous sommes engagés à renforcer les capacités des l&lsquo;Eglise Africaine, équiper les Pasteur et autres Leaders afin qu&lsquo;ils éduquent les autre en matière de la foi chrétienne pour la transformationde leurs communautés.

                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ValeurFondamentale;