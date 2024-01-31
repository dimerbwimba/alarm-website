

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
        <div className="py-5 bg-blue-100">
            <div className="mx-auto p-3 max-w-3xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-green-600">ALARM RDC</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Nos Valeurs Fondamentales
                </p>
            </div>
            <div className=" md:px-32">
                <div className=" py-4 grid grid-cols-1 md:grid-cols-2 gap-6 px-2 mx-auto">
                    {valeur.map((item, index) => (
                        <div key={index} className="shadow p-5 rounded-lg border-t-4 border-yellow-800 bg-white">

                            <div className="mt-8">
                                <ul className="grid grid-cols-1 gap-4">
                                    <li className="inline-flex items-center text-gray-600">
                                        {item.description}
                                    </li>

                                </ul>
                            </div>
                        </div>

                    ))
                    }
                </div>

            </div>
        </div>
    );
}

export default ValeurFodamental;