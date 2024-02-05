const Partenaire = () => {

    const partenaires = [
        {
            type:" Partenaire Internationaux",
            items:[
                {
                    title:" IBC (Irving Bible Church) "
                },
                {
                    title:"  Water is Basic (WIB) "
                },
                {
                    title:"  Women Initiative Rise Up "
                },
                {
                    title:" Cornerston Trust "
                },
                {
                    title:"   River Stone "
                }
            ]
        },
        {
            type:"  Partenaire Locaux  ",
            items:[
                {
                    title:" Division des affaires sociales"
                },
                {
                    title:"  ECC/Nord-Kivu "
                },
                {
                    title:" Ministère Provincial de Genre "
                },
            ]
        }
    ]
    return (

        <section id="benefits" className="py-10 lg:py-20">
        <div className="container">
            <div className="max-w-2xl mx-auto text-center">
                <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-default-400/50 text-default-950">Partenaires</span>
                <h2 className="md:text-4xl/tight text-4xl font-medium text-default-950 my-5">Nos Partenaires </h2>
                <p className="text-base font-medium mb-10">
                {"La Vision D\'ALARM est fière de collaborer avec des partenaires qui partagent notre engagement envers la paix, la réconciliation et le développement communautaire en Afrique. Nous remercions chaleureusement nos partenaires pour leur soutien continu."}
                </p>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-10">
                <div className="space-y-6">
                    <div>
                        <div className="p-6 group rounded-xl drop-shadow-md bg-white dark:bg-default-50">
                           
                            <h2 className="text-2xl font-medium text-default-950 mt-5">{partenaires[0].type}</h2>
                            <ul role="list" className="mt-4 mb-5 -ms-3 text-sm text-default-white">
                                { partenaires[0].items.map((partenaire, index)=>( <li  key={index} className="flex items-center gap-2 py-1">
                                    {/* <!-- svg icon --> */}
                                    <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="dot" className="lucide lucide-dot inline-block h-8 w-8 stroke-primary"><circle cx="12.1" cy="12.1" r="1"></circle></svg>
                                    <span className="text-base text-default-950">{partenaire.title}</span>
                                </li>))}
                                
                            </ul>
                        </div>
                    </div>
                   
                </div>

                <div className="drop-shadow-md bg-white rounded-xl">
                    <img src="https://i.ibb.co/1qfg6zJ/DSC-0834-compressed-1.jpg" className="h-full w-full object-cover rounded-xl" alt=""/>
                </div>

                <div className="space-y-6">
                    <div>
                        <div className="p-6 group rounded-xl drop-shadow-md bg-white dark:bg-default-50">
                           
                            <h2 className="text-2xl font-medium text-default-950 mt-5">{partenaires[1].type}</h2>
                            <ul role="list" className="mt-4 mb-5 -ms-3 text-sm text-default-white">
                                { partenaires[1].items.map((partenaire, index)=>( <li  key={index} className="flex items-center gap-2 py-1">
                                    {/* <!-- svg icon --> */}
                                    <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="dot" className="lucide lucide-dot inline-block h-8 w-8 stroke-primary"><circle cx="12.1" cy="12.1" r="1"></circle></svg>
                                    <span className="text-base text-default-950">{partenaire.title}</span>
                                </li>))}
                                
                            </ul>
                        </div>
                    </div>
                   
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <a href="#" className="inline-flex items-center justify-center gap-2 text-base py-3 px-8 rounded-md text-yellow-800 hover:text-white  hover:bg-yellow-700 transition-all duration-700">Apprendre Plus
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="move-right" className="lucide lucide-move-right h-6 w-6"><path d="M18 8L22 12L18 16"></path><path d="M2 12H22"></path></svg>
                </a>
            </div>
        </div>
    </section>
    );
}

export default Partenaire;