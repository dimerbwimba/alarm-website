const Departements = () => {
    const departements = [
        {
            name:"Leadership Serviteur",
            items:[
                {
                    title:"Former les leaders"
                },
                {
                    title:"Renforcer les capacités des Eglises"
                },
                {
                    title:"PLTI et WLTI"
                },
                {
                    title:"Ambassadeurs de la paix"
                },
                {
                    title:"Equiper les leaders...etc"
                },

            ],

        },

        {
            name:"Reconcilier les relations",
            items:[
                {
                    title:"Guérison des traumatismes"
                },
                {
                    title:"Médiation"
                },
                {
                    title:"Gestion et résolution des conflicts"
                },
                {
                    title:"Construction dela paix et la justice"
                },
                {
                    title:"Synergie des juristes Chrétiens...etc"
                }
            ],
        },
        {
            name:"Transformation des communautés",
            items:[
                {
                    title:"Renforcer les capacités économiques"
                },
                {
                    title:"Education à l'économie domestique"
                },
                {
                    title:"Formation en coupe et couture"
                },
                {
                    title:"Adduction en eau potable"
                },
                {
                    title:"Scolarisation des enfants orphelins"
                },
                {
                    title:"Alphabétisation conscientisante...etc "
                }
            ]
        }
    ]
    return ( 
        <div>
            <section id="departements" className="lg:py-20 py-10">
        <div className="container">
            <div className="grid xl:grid-cols-5 gap-6">

                <div className="xl:col-span-5 mt-8 lg:mt-0">
                    <div className="lg:ms-8">
                <div className=" text-center">
                    <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-default-300 text-default-950">Departement</span>
                    <h2 className="text-4xl font-bold text-default-950 mt-6">ALARM RDC. Departements.</h2>
                    <hr className="my-6 border border-dashed text-default-800"/>
                 
                </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6">
                            { departements.map((item, index)=>( 
                            <div key={index} className="group relative shadow rounded-md z-2 bg-default-100 dark:bg-default-50">
                                <div className="  flex py-2 justify-center">
                                    <div className="h-12  w-12 rounded-md flex items-center justify-center transition-all duration-500 text-xl border border-default-200 text-default-950 hover:text-primary bg-white/5 hover:bg-white">0{index+1}</div>
                                </div>
                                <div className="p-6 py-8">

                                    <div className="flex mb-2 text-default-950">
                                       
                                        <span className="price text-3xl font-semibold mb-0">{item.name}</span>
                                        
                                    </div>
                                        <hr className="my-6 border border-dashed text-default-800 hidden xl:block"/>

                                    {/* <p>14 days free</p> */}

                                    <ul role="list" className="mt-4 mb-5 -ms-3 text-sm text-default-white">
                                       { item.items.map((subItem, index)=>( <li  key={index} className="flex items-center gap-2 py-1">
                                            {/* <!-- svg icon --> */}
                                            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="dot" className="lucide lucide-dot inline-block h-8 w-8 stroke-primary"><circle cx="12.1" cy="12.1" r="1"></circle></svg>
                                            <span className="text-base text-default-950">{subItem.title}</span>
                                        </li>))}
                                        
                                    </ul>
                                    {/* <a href="#" className="border inline-block  border-primary/50 text-primary py-2 px-6 rounded-md bg-primary/10 hover:text-white hover:bg-primary transition-all duration-500">Sing up</a> */}
                                </div>
                            </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
        
     );
}
 
export default Departements;