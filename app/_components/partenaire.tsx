const Partenaire = () => {
    return (

        <div className="px-4 mx-auto py-10 text-center">
            <section className="text-gray-700">
                <div className="container px-5 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                            Les Partenaire de Alarm RDC
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Alarm RDC à travaille aussi avec des partenariats tant dynamiques, locaux et mondiaux.
                        </p>
                    </div>
                    <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
                        <div className="w-full lg:w-1/2 px-4 text-start py-2">
                           
                                <div className="font-semibold mb-4  bg-yellow-200 rounded-md py-2 px-4">
                                    Partenaire Internationaux
                                </div>
                            
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    IBC (Irving Bible Church)
                                </summary>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                                   Water is Basic (WIB)
                                </summary>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    Women Initiative Rise Up
                                </summary>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    Cornerston Trust
                                </summary>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                   River Stone
                                </summary>
                            </details>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 py-2 text-start">
                            
                                <div className="font-semibold mb-4  bg-green-600 text-white rounded-md py-2 px-4">
                                    Partenaire Locaux
                                </div>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                   Division des affaires sociales
                                </summary>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    ECC/Nord-Kivu
                                </summary>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    Ministère Provincial de Genre
                                </summary>

                                <span className="px-4 py-2">
                                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                    minim velit nostrud pariatur culpa magna in aute.
                                </span>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Partenaire;