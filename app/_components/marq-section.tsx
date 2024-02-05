const MarqSection = () => {
    return ( 
        <section className="lg:pb-10 w-screen">
        <div className="relative gap-28 m-auto flex overflow-hidden border border-default-200 py-2">
            <div className="marquee__group gap-2 flex items-center justify-around flex-shrink-0 min-w-full">
                <div className="py-2">
                    <h2 className="text-xl border text-white bg-yellow-700 px-2 rounded-md  font-bold uppercase text-default-950">Nos Partenaire Internationaux</h2>
                </div>
               
                <div className="py-2">
                    <h2 className="text-xl border px-2 rounded-md  font-bold uppercase text-default-950">IBC (Irving Bible Church)</h2>
                </div>
                <div className="py-2">
                    <h2 className="text-xl border px-2 rounded-md  font-bold uppercase text-default-950">Water is Basic (WIB)</h2>
                </div>
                <div className="py-2">
                    <h2 className="text-xl border px-2 rounded-md  font-bold uppercase text-default-950">Women Initiative Rise Up</h2>
                </div>
                <div className="py-2">
                    <h2 className="text-xl border px-2 rounded-md  font-bold uppercase text-default-950">Cornerston Trust</h2>
                </div>
                <div className="py-2">
                    <h2 className="text-xl border px-2 rounded-md  font-bold uppercase text-default-950">River Stone</h2>
                </div>
            </div>
            {/* <!-- marquee__group End--> */}

            <div aria-hidden="true" className="marquee__group gap-28 flex items-center justify-around flex-shrink-0 min-w-full">
                <div className="py-2">
                    <h2 className="text-xl border bg-yellow-700 px-2 rounded-md text-white  font-bold uppercase text-default-950">Nos Partenaire Internationaux</h2>
                </div>
                
                <div className="py-2">
                    <h2 className="text-xl border px-2 rounded-md  font-bold uppercase text-default-950">Division des affaires sociales</h2>
                </div>
                <div className="py-2">
                    <h2 className="text-xl border px-2 rounded-md  font-bold uppercase text-default-950">ECC/Nord-Kivu</h2>
                </div>
                <div className="py-2">
                    <h2 className="text-xl border px-2 rounded-md  font-bold uppercase text-default-950">Ministère Provincial de Genre</h2>
                </div>
            </div>
            {/* <!-- marquee__group End--> */}
        </div>
        {/* <!-- flex End --> */}
    </section>
    // <!-- End marq Section -->
     );
}
 
export default MarqSection;