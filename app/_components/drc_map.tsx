const DRCMAP = () => {
    return ( 
        <div className=" shadow-inner flex items-center justify-center w-full">
            <div className="w-2/3 flex ">
                <div className="relative w-[60rem]">
                    <img src="/world-map-drc.jpg" className=" h-72" />
                </div>
                <div className=" w-full">
                    <div className=" flex items-center space-x-2 m-5 px-3 py-2 rounded-md bg-yellow-700 text-white ">
                        <img className=" h-16" src="/svg-1.svg"></img>
                        <div>
                            <h2 className=" text-5xl"> + 12,200</h2>
                            <p className=" font-bold">Personnes touchées en RDC</p>
                        </div>
                    </div>
                    <div className=" flex items-center space-x-2 m-5 px-3 py-2 rounded-md bg-yellow-700 text-white ">
                        <img className=" h-16" src="/svg-1.svg"></img>
                        <div>
                            <h2 className=" text-5xl"> + 129,000</h2>
                            <p className=" font-bold">Personnes touchées en Afrique</p>
                        </div>
                    </div>
                    <div className=" w-[15rem]">

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DRCMAP;
